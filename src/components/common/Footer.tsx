import React from 'react';
import ComponentWrapper from './ComponentWrapper';
import { layoutData } from '../../data/layout';

const Footer: React.FC = () => {
  return (
    <div className='w-full bg-[#060B12] border-t-[1px] border-[#112036]'>
      <ComponentWrapper>
        <div className='w-full flex flex-col gap-12 pt-10 justify-center items-center'>
          <img src='/assets/logo.png' className='w-[35px] h-[35px]' alt='' />
          {/* links  */}
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-10'>
            {layoutData.footerData.map((navi, index) => {
              return (
                <a
                  href={navi.path}
                  key={index}
                  className={`text-[16px] text-black-2 font-medium hover:text-green-1 font-gesistMedium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-green-1 hover:after:w-full after:duration-200`}
                >
                  {navi.name}
                </a>
              );
            })}
          </div>
          {/* copy right ----> */}
          <div className='w-full py-6 sm:py-12 border-t-[1px] border-green-1 sm:flex-row flex-col sm:gap-0 gap-3 flex justify-between items-center'>
            <p className='text-black-2 sm:text-left text-center text-[16px] font-gesistRegular'>
              © 2024 PumpScan. All rights reserved.
            </p>
            <div className='flex justify-center flex-wrap items-center gap-4 md:gap-5'>
              {layoutData.termsData.map((navi, index) => {
                return (
                  <a
                    href={navi.path}
                    key={index}
                    className={`text-[16px] capitalize text-black-2 font-medium hover:text-green-1 font-gesistMedium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-green-1 hover:after:w-full after:duration-200`}
                  >
                    {navi.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Footer;
