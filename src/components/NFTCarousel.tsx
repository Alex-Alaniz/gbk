import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const NFTCard = ({ index }: { index: number }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-64 h-64 mx-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl overflow-hidden"
  >
    <div className="w-full h-full bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <span className="text-white text-xl font-bold">GBK #{index}</span>
    </div>
  </motion.div>
);

export const NFTCarousel = () => {
  return (
    <div className="py-20 bg-royal-blue-800">
      <div className="mb-12">
        <Marquee gradient={false} speed={40}>
          {[...Array(10)].map((_, i) => (
            <NFTCard key={i} index={i + 1} />
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee gradient={false} speed={40} direction="right">
          {[...Array(10)].map((_, i) => (
            <NFTCard key={i} index={i + 11} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};