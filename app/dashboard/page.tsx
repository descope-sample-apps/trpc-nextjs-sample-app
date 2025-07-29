'use client';

import { useDescope, useSession, useUser } from '@descope/nextjs-sdk/client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { trpc_api } from 'app/utils/trpc';
import FloatingShapes from 'app/components/FloatingShapes';
import GradientText from 'app/components/GradientText';
import FlairCard from 'app/components/FlairCard';

export default trpc_api.withTRPC(function Home() {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user } = useUser();
  const sdk = useDescope();
  const router = useRouter();
  const [apiStatus, setApiStatus] = useState<string | null>(null);
  const [apiFormResult, setApiFormResult] = useState<string | null>(null)
  const { isError, data, error, refetch, isFetching } = trpc_api.hello.useQuery()


  const handleSubmit = async () => {
    () => refetch();
    const resultMessage = `${data?.secret}`;
    setApiFormResult(resultMessage);
  };

  useEffect(() => {
    if (!isAuthenticated && !isSessionLoading) {
      router.push('/login');
    }
  }, [isAuthenticated, isSessionLoading, router]);

  if (isSessionLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-t-2 border-[#5cf34f] rounded-full"
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <FloatingShapes />
      <div className="relative w-full h py-12 overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto px-8 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6"
          >
            Welcome, <GradientText>{user?.name || 'User'}</GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            You are successfully authenticated with Descope
          </motion.p>

          <div className="flex flex-col gap-4 items-center mt-8">


            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSubmit()}
              className="px-3 py-2 bg-[#5cf34f] hover:bg-[#5cf34f]/80 rounded-lg text-black text-md font-medium"
            >
              Submit TRPC Query
            </motion.button>

            {apiFormResult && <div>{apiFormResult}</div>}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => sdk.logout()}
              className="px-6 py-3 bg-[#5cf34f] hover:bg-[#5cf34f]/80 rounded-lg text-black font-medium"
            >
              Logout
            </motion.button>
          </div>

          <FlairCard />
        </motion.div>
      </div>
    </div>
  );
})