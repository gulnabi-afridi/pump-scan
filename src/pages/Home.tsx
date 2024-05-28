import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Features from '../components/Home/Features';
import Tokenomics from '../components/Home/Tokenomics';
import Roadmap from '../components/Home/Roadmap';

const Home: React.FC = () => {
  return (
    <div className=''>
      <HeroSection />
      <Features />
      <Tokenomics />
      <Roadmap />
    </div>
  );
};

export default Home;
