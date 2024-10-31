import { motion } from 'framer-motion';
import { useState } from 'react';
import type { NFTImage } from '../data/nftImages';
import React from 'react';

interface NFTCardProps {
  nft: NFTImage;
}

export const NFTCard = ({ nft }: NFTCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-64 h-64 mx-4 rounded-xl overflow-hidden relative group bg-royal-blue-800"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-royal-blue-800">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {imageError ? (
        <div className="w-full h-full flex items-center justify-center bg-royal-blue-800 text-white p-4 text-center">
          <p>Unable to load {nft.name}</p>
        </div>
      ) : (
        <img 
          src={nft.image}
          alt={nft.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      )}
      
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-lg font-bold">{nft.name}</h3>
      </div>
    </motion.div>
  );
};