"use client";

import React, { useEffect, useState } from "react";
import { trpc_api } from "./utils/trpc";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FloatingShapes from "./components/FloatingShapes";
import FlairCard from "./components/FlairCard";

export default trpc_api.withTRPC(function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-black via-black to-blue-950/20 opacity-70" />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-3xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5cf34f] via-[#02dfed] to-[#00a4c5]">
            Authenticate with Descope
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Welcome to the Descope Next.js TRPC Sample App
        </p>

        <div className="flex gap-4 items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/login")}
            className="rounded-xl bg-gradient-to-r from-[#00A6B4] via-[#3DEFE9] to-[#5cf34f] px-8 py-3 text-base font-medium text-black shadow-lg border-1 border-[#00A6B4] backdrop-blur-sm w-48 cursor-pointer"
          >
            Sign In
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              window.open(
                "https://github.com/descope-sample-apps/trpc-nextjs-sample-app",
                "_blank"
              )
            }
            className="rounded-xl bg-black border-1 border-[#5cf34f]/50 px-8 py-3 text-base font-medium text-white shadow-lg backdrop-blur-sm w-48 cursor-pointer"
          >
            View on GitHub
          </motion.button>
        </div>

        {/* <div className="mt-8">
          <TestApiComponent variant="home" />
        </div> */}
        <FlairCard />
      </motion.div>
    </div>
  );
});
