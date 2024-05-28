import React from 'react';
import ComponentWrapper from '../common/ComponentWrapper';

const HeroSection: React.FC = () => {
  return (
    <div
      id='#home'
      className="w-full bg-[url('/assets/heroBg.png')] bg-no-repeat bg-cover min-h-screen border-b-[1px] border-[#172B45] py-12 xl:py-12 flex justify-center items-center"
    >
      <ComponentWrapper>
        <div className='w-full grid grid-cols-1 clg:gap-0 gap-8 clg:grid-cols-2'>
          {/* left por */}
          <div className='w-full flex items-start justify-center flex-col'>
            <div className='bg-[#19F490] heroShadow rounded-[10px] pl-[6px] pr-3 py-[4px] border-[1px] border-[#10CD77]'>
              <div className='bg-[#1018280D] border-[1px] border-[#19B770] px-[5px] p-[4px] rounded-[6px] flex justify-center items-center gap-2'>
                <img
                  src='/assets/dot.svg'
                  className='min-w-[8px] min-h-[8px]'
                  alt=''
                />
                <p className='uppercase font-gesistMono text-[12px] sm:text-[14px] text-white-1'>
                  Crafted by Traders, for Traders
                </p>
              </div>
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
              src='/assets/hero.svg'
              className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-[350px] sm:h-[400px] lg:h-[530px] object-fill'
              alt='hero-image'
            />
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default HeroSection;
