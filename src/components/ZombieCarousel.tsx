import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { zombieImages } from '../data/zombieImages';
import { NFTCard } from './NFTCard';

export const ZombieCarousel = () => {
  return (
    <div className="py-20 bg-royal-blue-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Very Soon: Garbage Bin Zombies
        </h2>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto px-4">
          BURN 🔥 2 🧪GBKs🧪 to mint 1 exclusive "Grabage Bin Zombies" as soon as we mint out our new Bin Kid NFTs
        </p>
      </motion.div>
      
      <Marquee gradient={false} speed={40}>
        {zombieImages.map((zombie) => (
          <NFTCard key={zombie.id} nft={zombie} />
        ))}
      </Marquee>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
        Zombies Brewing
        </button>
      </motion.div>
    </div>
  );
};