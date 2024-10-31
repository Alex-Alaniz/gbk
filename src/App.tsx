import React from 'react';
import { Hero } from './components/Hero';
import { NFTCarousel } from './components/NFTCarousel';
import { Features } from './components/Features';
import { ZombieCarousel } from './components/ZombieCarousel';

function App() {
  return (
    <div className="bg-royal-blue-900 min-h-screen">
      <Hero />
      <NFTCarousel />
      <Features />
      <ZombieCarousel />
    </div>
  );
}

export default App;