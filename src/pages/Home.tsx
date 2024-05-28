import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Features from '../components/Home/Features';
import Tokenomics from '../components/Home/Tokenomics';

const Home: React.FC = () => {
  return (
    <div className=''>
      <HeroSection />
      <Features />
      <Tokenomics />
    </div>
  );
};

export default Home;
