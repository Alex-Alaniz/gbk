import Marquee from 'react-fast-marquee';
import { NFTCard } from './NFTCard';
import { nftImages } from '../data/nftImages';
import React from 'react';

export const NFTCarousel = () => {
  const firstRow = nftImages.slice(0, 10);
  const secondRow = nftImages.slice(10);

  return (
    <div className="py-20 bg-royal-blue-800">
      <div className="mb-12">
        <Marquee gradient={false} speed={40}>
          {firstRow.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee gradient={false} speed={40} direction="right">
          {secondRow.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};