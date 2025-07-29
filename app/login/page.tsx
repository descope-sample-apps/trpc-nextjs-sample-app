'use client';

import { Descope } from '@descope/nextjs-sdk';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FloatingShapes from 'app/components/FloatingShapes';
import GradientText from 'app/components/GradientText';
import FlairCard from 'app/components/FlairCard';

interface DescopeSuccessEvent {
  detail: {
    user: {
      userId: string;
      name?: string;
      email?: string;
    };
  };
}

interface DescopeErrorEvent {
  detail: {
    error: string;
    message: string;
  };
}

export default function SignInPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-black via-black to-blue-950/20 opacity-70" />
      
      {/* Floating shapes */}
      <FloatingShapes />
      
      {/* Hero Section */}
      <div className="relative pt-12 pb-6 md:pt-20 md:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
              <GradientText className="font-extrabold">
                Authenticate with Descope
              </GradientText>
            </h1>
          </motion.div>

          {/* Gradient Border Button */}
          {/* Descope Sample App Bar */}
          <FlairCard /> 
        </motion.div>
      </div>

      {/* Auth Container */}
      <div className="relative max-w-sm mx-auto mt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-xl bg-white/10 rounded-xl shadow-2xl border border-white/20 overflow-hidden"
        >
          <Descope
            flowId={process.env.NEXT_PUBLIC_DESCOPE_FLOW_ID || 'sign-up-or-in'}
            theme="dark"
            onSuccess={(e: DescopeSuccessEvent) => {
              console.log('Success:', e.detail.user);
              router.push('/dashboard');
            }}
            onError={(e: DescopeErrorEvent) => {
              console.error('Error:', e.detail.message);
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}