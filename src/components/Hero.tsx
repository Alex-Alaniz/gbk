import { motion } from 'framer-motion';
import React from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-royal-blue-900 to-royal-blue-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
            animate={{
              scale: [1, 2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight"
        >
          Garbage Bin Kids
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-200 mb-12 max-w-2xl mx-auto"
        >
          Join the most exclusive NFT collection on ApeChain. Where trash becomes treasure.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 justify-center"
        >
          <a href="https://on.mintpad.co/GBK" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Mint Now
            </button>
          </a>
          <div className="flex gap-4">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all flex items-center justify-center">
              <span className="text-white text-2xl">𝕏</span>
            </a>
            <a href="https://discord.gg/gwwJj9H5T4" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all">
              <FaDiscord className="w-6 h-6 text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};