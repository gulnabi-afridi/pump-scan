import React from 'react';
import ComponentWrapper from '../common/ComponentWrapper';
import RoadMapCard from './Cards/RoadMapCard';

const Roadmap: React.FC = () => {
  return (
    <div id='#roadmap' className='w-full relative py-24 bg-[#060B12]'>
      <ComponentWrapper>
        <div className='w-full flex flex-col justify-center items-center'>
          <p className='text-[14px] font-gesistMedium text-green-1'>
            */ Project Roadmap
          </p>
          <h2 className='text-white-1 mt-5 text-center max-w-[800px] leading-[38px] sm:leading-[44px] w-full text-[28px] sm:text-[36px] font-gesistMedium'>
            From Vision to Reality - Charting the Course with Our Project
            Roadmap
          </h2>
          <div className='w-full lg:grid hidden gap-6 grid-cols-2 lg:grid-cols-3 mt-16'>
            {roadMapData.slice(0, 3).map((item, index) => {
              return (
                <RoadMapCard
                  index={index}
                  key={index}
                  list={item.list}
                  title={item.title}
                />
              );
            })}
          </div>
          <div className='w-full lg:hidden grid gap-4 csm:gap-6 grid-cols-1 csm:grid-cols-2 lg:grid-cols-3 mt-16'>
            {roadMapData.map((item, index) => {
              return (
                <RoadMapCard
                  index={index}
                  key={index}
                  list={item.list}
                  title={item.title}
                />
              );
            })}
          </div>
          <div className='w-full lg:grid hidden gap-6 grid-cols-2 mt-6'>
            {roadMapData.slice(3, 5).map((item, index) => {
              return (
                <RoadMapCard
                  index={index + 3}
                  key={index}
                  list={item.list}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
      </ComponentWrapper>
      <div className="w-full max-w-[800px] absolute left-[0%] lg:left-[28%] translate-x-[0%] lg:translate-x-[-25%] bg-cover bg-no-repeat top-0 bg-[url('/assets/roadMapShad.png')] h-[100px] lg:h-[130px]"></div>
    </div>
  );
};

const roadMapData = [
  {
    title: 'Enhance Existing Features',
    list: [
      'Focus on refining and optimizing current monitoring tools like Summit Seeker and Insider Tracker.',
      'Incorporate user feedback to improve the interface and functionality.',
    ],
  },
  {
    title: 'Launch of Pump Checker',
    list: [
      'Pump Checker bridges crucial gaps in the market, providing thorough analysis and comprehensive insights tailored for PumpFun traders, surpassing tools like RickBot.',
    ],
  },
  {
    title: 'Strategic Partnerships',
    list: [
      'Develop partnerships with key players in the web3 space to enhance visibility and integration.',
      'Engage with influential communities to expand the network and user base.',
    ],
  },
  {
    title: 'Expand Community Engagement',
    list: [
      'Implement community-driven initiatives and incentives to increase user engagement.',
      'Organize webinars and workshops to educate and integrate new users into the PumpFun ecosystem.',
    ],
  },
  {
    title: 'New Features Based on Market Trends',
    list: [
      "Continuously adapt and introduce new features based on user feedback and emerging market trends to maintain the service's competitive edge. We ensure our offerings remain cutting-edge and aligned with evolving customer needs.",
    ],
  },
];

export default Roadmap;
