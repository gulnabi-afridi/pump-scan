import React from 'react';
import ComponentWrapper from '../common/ComponentWrapper';

const HeroSection: React.FC = () => {
  return (
    <div className='w-full min-h-[calc(100vh-100px)] border-b-[1px] border-[#172B45] py-8 xl:py-0 flex justify-center items-center'>
      <ComponentWrapper>
        <div className='w-full grid grid-cols-1 clg:gap-0 gap-8 clg:grid-cols-2'>
          {/* left por */}
          <div className='w-full flex items-start justify-center flex-col'>
            <div className='flex justify-center bg-[#19F490] rounded-[10px] px-2 py-[4px] border-[1px] border-[#10CD77] items-center gap-2'>
              <img src='/assets/dot.svg' className='w-[8px] h-[8px]' alt='' />
              <p className='uppercase text-[12px] sm:text-[14px] text-white-1 font-gesistMedium'>
                Crafted by Traders, for Traders
              </p>
            </div>
            <h1 className='text-[40px] sm:text-[50px] md:text-[60px] leading-[50px] sm:leading-[60px] md:leading-[72px] font-gesistRegular mt-4 text-white-1'>
              Premier <span className='text-green-1'> Monitoring </span> Service
              for Upcoming <span className='text-green-1'>PumpFun</span>{' '}
              Launches.
            </h1>
            <p className='text-black-2 max-w-[500px] mt-4 sm:mt-6 w-full text-[16px] sm:text-[20px] font-normal'>
              Your premier monitoring service for upcoming releases. Stay
              informed and ahead of the curve with exclusive updates, sneak
              peeks, and insider info on the latest PumpFun launches.
            </p>
          </div>
          {/* right por */}
          <div className='w-full flex justify-center items-center'>
            <img
              src='/assets/hero.png'
              className='w-full max-w-[550px] h-[390px] sm:h-[530px] object-fill'
              alt='hero-image'
            />
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default HeroSection;
