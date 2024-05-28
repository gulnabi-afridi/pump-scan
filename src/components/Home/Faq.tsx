import React from 'react';
import ComponentWrapper from '../common/ComponentWrapper';

const Faq: React.FC = () => {
  return (
    <div className='w-full relative py-28 bg-[#060B12]'>
      <ComponentWrapper>
        <div className='flex flex-col gap-4'>
          <p className='text-[14px] font-gesistMedium text-green-1'>*/ FAQs</p>
          <h2 className='text-white-1 max-w-[1050px] leading-[38px] sm:leading-[44px] w-full text-[28px] sm:text-[36px] font-gesistMedium'>
            Answers at Your Fingertips, Frequently Asked Questions
          </h2>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 sm:mt-12'>
            {faqData.map((faq, index) => {
              return (
                <div key={index} className='flex flex-col gap-4'>
                  {faq.title}
                  <p className='text-[14px] font-gesistRegular text-black-2'>
                    {faq.des}
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

const faqData = [
  {
    title: (
      <h2 className='text-[20px] font-gesistMedium text-white-1'>
        What is <span className='text-green-1'> Pump Scan?</span>
      </h2>
    ),
    des: 'Pump Scan $SCAN is the premier monitoring service designed for upcoming PumpFun launches, developed by traders for traders. It  offers comprehensive coverage, from simple token scrapers to sophisticated algorithmic monitors, to keep you ahead in the fast-paced world of cryptocurrency.',
  },
  {
    title: (
      <h2 className='text-[20px] font-gesistMedium text-white-1'>
        How Does Pump Scan Alert Users About{' '}
        <span className='text-green-1'> New Token Launches?</span>
      </h2>
    ),
    des: 'Pump Scan provides timely alerts through its New Token Scraper feature, ensuring users are promptly notified about the latest PumpFun projects. This allows traders to stay prepared for the most anticipated token launches and make informed decisions.',
  },
  {
    title: (
      <h2 className='text-[20px] font-gesistMedium text-white-1'>
        What is the
        <span className='text-green-1'>Peak Tracker</span> and How Does it{' '}
        <span className='text-green-1'>Benefit Users?</span>
      </h2>
    ),
    des: 'Our King of the Hill (KOTH) Scraper, known as the Peak Tracker, monitors tokens approaching the end of their bonding curve. This valuable tool enables users to engage with tokens before they enter the Raydium pool, providing strategic advantages in trading.',
  },
  {
    title: (
      <h2 className='text-[20px] font-gesistMedium text-white-1'>
        How Does the
        <span className='text-green-1'>Cabal Tracker</span> Work and Why is it
        <span className='text-green-1'>Beneficial for Users?</span>
      </h2>
    ),
    des: 'The Cabal Tracker is designed to prevent users from missing out on cabal launches and insider moves. By reliably tracking token transfers through influencer and cabal wallets, this feature keeps users informed and involved in the latest developments within the PumpFun ecosystem.',
  },
  {
    title: (
      <h2 className='text-[20px] font-gesistMedium text-white-1'>
        What is
        <span className='text-green-1'>Pump Checker, </span> and When Can Users
        <span className='text-green-1'>Expect its Release?</span>
      </h2>
    ),
    des: 'Pump Checker is an upcoming feature that allows manual scanning of PumpFun token launches. Addressing existing gaps left by tools like RickBot, Pump Checker promises to revolutionize the way traders approach PumpFun launches. Stay tuned for its release.',
  },
  {
    title: (
      <h2 className='text-[20px] font-gesistMedium text-white-1'>
        How Are the
        <span className='text-green-1'>Tokenomics </span> of Pump Scan
        <span className='text-green-1'>Distributed?</span>
      </h2>
    ),
    des: '10% is allocated to the team wallet for token burn, 5% for marketing efforts, and another 5% for development purposes. The remaining 80% is dedicated to the community, fostering a participatory ecosystem and ensuring widespread adoption and growth.',
  },
];

export default Faq;
