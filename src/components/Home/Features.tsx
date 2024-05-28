import React from 'react';
import ComponentWrapper from '../common/ComponentWrapper';

const Features: React.FC = () => {
  return (
    <div
      id='#features'
      className="w-full bg-cover  bg-no-repeat bg-[url('/assets/featureBg.png')] relative py-20"
    >
      <ComponentWrapper>
        <div className='flex gap-4 flex-col'>
          <p className='text-[14px] font-gesistMedium text-green-1'>
            */ FEATURES
          </p>
          <h2 className='text-white-1 max-w-[1050px] leading-[38px] sm:leading-[44px] w-full text-[28px] sm:text-[36px] font-gesistMedium'>
            From simple new token scrapers to sophisticated algorithmic
            monitors, Pump Scan offers comprehensive coverage.
          </h2>
          <div className='w-full grid flex-col grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* 1st col */}
            <div className='w-full flex flex-col gap-8 mt-6 sm:mt-10'>
              {featuresData.map((fea, index) => {
                return (
                  <div
                    key={index}
                    className='grid grid-cols-[8px,1fr] sm:grid-cols-[13px,1fr] justify-center items-center gap-3'
                  >
                    {index === 0 ? (
                      <div className='w-[4px] h-full bg-green-1'></div>
                    ) : (
                      <div></div>
                    )}
                    <div className='flex h-full flex-col gap-4'>
                      {fea.type}
                      <p className={`${fea.colr} font-gesistRegular`}>
                        {fea.des}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* 2nd col  */}
            <div className='w-full flex justify-start items-center'>
              <img
                src='/assets/features.png'
                className='w-full lg:hidden block h-[300px] sm:h-[400px] md:h-[500px] max-w-[350px] sm:max-w-[500px] md:max-w-[600px]'
                alt=''
              />
            </div>
          </div>
        </div>
      </ComponentWrapper>
      {/*  */}
      <img
        src='/assets/features.png'
        className='w-full absolute lg:block hidden top-[30%] right-0 max-w-[500px] clg:max-w-[600px] xl:max-w-[700px] h-[580px]'
        alt=''
      />
    </div>
  );
};

const featuresData = [
  {
    type: (
      <h2 className='text-[20px] font-gesistMedium text-green-1 leading-[30px]'>
        Pump Alert
      </h2>
    ),
    des: "Our New Token Scraper quickly identifies the latest PumpFun projects, ensuring you're prepared for the most anticipated token launches.",
    colr: 'text-white-1',
  },
  {
    type: (
      <h2 className='text-[20px] font-gesistMedium text-green-1 leading-[30px]'>
        Peak Tracker
      </h2>
    ),
    des: 'Our King of the Hill (KOTH) Scraper tracks tokens approaching the end of their bonding curve, allowing you to engage before they enter the Raydium pool.',
    colr: 'text-black-2',
  },
  {
    type: (
      <h2 className='text-[20px] font-gesistMedium text-green-1 leading-[30px]'>
        Cabal Tracker
      </h2>
    ),
    des: 'Tired of missing out on cabal launches and insider moves? Our Cabal Monitor reliably tracks token transfers through influencer and cabal wallets, proven to keep you in the loop.',
    colr: 'text-black-2',
  },
  {
    type: (
      <h2 className='text-[20px] font-gesistMedium text-green-1 leading-[30px]'>
        <span className='text-white-1'> Pump Checker</span> / Coming Soon
      </h2>
    ),
    des: 'Tired of missing out on cabal launches and insider moves? Our Cabal Monitor reliably tracks token transfers through influencer and cabal wallets, proven to keep you in the loop.',
    colr: 'text-black-2',
  },
];

export default Features;
