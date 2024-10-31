import { motion } from 'framer-motion';
import type { NFTImage } from '../data/nftImages';
import React from 'react';

interface NFTCardProps {
  nft: NFTImage;
}

export const NFTCard = ({ nft }: NFTCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-64 h-64 mx-4 rounded-xl overflow-hidden relative group"
  >
    <img 
      src={nft.image}
      alt={nft.name}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-white text-lg font-bold">{nft.name}</h3>
    </div>
  </motion.div>
);