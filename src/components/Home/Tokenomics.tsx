import React from 'react';
import ComponentWrapper from '../common/ComponentWrapper';

const Tokenomics: React.FC = () => {
  return (
    <div id='#tokenomics' className='w-full bg-[#060B12] py-28'>
      <ComponentWrapper>
        <div className='w-full flex flex-col'>
          <div className="w-full grid bg-no-repeat bg-cover bg-[url('/assets/tokenomicsBg.png')] grid-cols-1 lg:grid-cols-2 gap-8">
            <div className='w-full flex order-2 lg:order-1 justify-center items-center'>
              <img
                src='/assets/tokenomics.svg'
                className='w-full max-w-[600px] h-[400px] sm:h-[500px] md:h-[560px] object-fill'
                alt=''
              />
            </div>
            <div className='w-full flex justify-center order-1 lg:order-2 items-center'>
              <div className='w-full max-w-[700px] flex flex-col'>
                <p className='text-[14px] font-gesistMedium text-green-1'>
                  */ TOKENOMICS
                </p>
                <h2 className='text-white-1 mt-2 leading-[47px] sm:leading-[60px] text-[30px] sm:text-[40px] md:text-[48px] font-gesistMedium'>
                  Understanding the Core of Our Ecosystem.
                </h2>
                <div className='w-full grid gap-8 sm:gap-14 grid-cols-2 mt-6 sm:mt-10'>
                  {tokenomicsData1.map((tok, index) => {
                    return (
                      <div
                        key={index}
                        className='w-full flex flex-col items-start'
                      >
                        <h2 className='text-green-1 font-gesistSemibold text-[40px] sm:text-[60px]'>
                          {tok.value}
                        </h2>
                        <p className='text-black-2 text-[16px3] sm:text-[18px] font-gesistRegular'>
                          {tok.type}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='w-full order-3 gap-5 sm:gap-8 md:gap-12 mt-0 sm:mt-4 md:mt-14 grid grid-cols-1 md:grid-cols-2'>
            {tokenomicsData2.map((tok, index) => {
              return (
                <div
                  key={index}
                  className='w-full flex sm:gap-0 gap-1 flex-col'
                >
                  <h3 className='text-[18px] sm:text-[20px] font-gesistMedium text-white-1'>
                    {tok.type}
                  </h3>
                  <p className='text-black-2 text-[14px] sm:text-[16px] font-normal'>
                    {tok.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

const tokenomicsData1 = [
  {
    type: '> for Marketing',
    value: '| 5%',
  },
  {
    type: '> for Development',
    value: '| 5%',
  },
  {
    type: '> for the Community',
    value: '| 90%',
  },
];

const tokenomicsData2 = [
  {
    type: (
      <h3 className='text-[20px] font-gesistMedium text-white-1'>
        Team Wallet (for Development) -{' '}
        <span className='text-green-1'>10%</span>
      </h3>
    ),
    value:
      'Supports ongoing development to keep the project technologically updated and responsive to market needs.',
  },
  {
    type: (
      <h3 className='text-[20px] font-gesistMedium text-white-1'>
        Team Wallet (for Marketing) -<span className='text-green-1'>10%</span>
      </h3>
    ),
    value:
      'Incorporated strategically into marketing initiatives, driving sustained growth and platform adoption.',
  },
  {
    type: (
      <h3 className='text-[20px] font-gesistMedium text-white-1'>
        Community - <span className='text-green-1'>80%</span>
      </h3>
    ),
    value:
      'The largest share, intended for the community, encompasses public sales and incentives, fostering a participatory ecosystem.',
  },
];

export default Tokenomics;
