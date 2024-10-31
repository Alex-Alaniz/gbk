import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: index * 0.2 }}
      className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl"
    >
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </motion.div>
  );
};

export const Features = () => {
  const features = [
    {
      title: "Exclusive Access",
      description: "Join an elite community of collectors on ApeChain"
    },
    {
      title: "Unique Artwork",
      description: "Each piece is hand-crafted with meticulous attention to detail"
    },
    {
      title: "Community Perks",
      description: "Get access to exclusive events and future drops (ZOMBIES CLAIM )"
    },
    {
      title: "Rarity System",
      description: "Discover rare traits and special editions"
    }
  ];

  return (
    <div className="py-20 bg-royal-blue-900 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Why Garbage Bin Kids?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};