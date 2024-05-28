import React from 'react';

import { MdCheckCircleOutline } from 'react-icons/md';

interface Props {
  index: number;
  title: string;
  list: any;
}

const RoadMapCard: React.FC<Props> = ({ index, title, list }: Props) => {
  return (
    <div
      className={`w-full flex flex-col  border-[1px] border-green-1/20 bg-[#060B12] rounded-[16px]`}
    >
      <div className='w-full p-3 sm:p-5 gap-2 h-[60px] sm:h-[80px] flex border-b-[1px] border-black-2 justify-between items-center'>
        <h3 className='text-white-1 text-[18px] font-gesistMedium'>{title}</h3>
        <p className='text-[14px] w-[39px] flex justify-center items-center h-[28px] font-gesistMedium text-green-1 border-[1px] border-[#19F490] bg-green-1/10 rounded-full '>
          P {index}
        </p>
      </div>
      <div className='flex flex-col p-3 sm:p-5 gap-5'>
        {list.map((ls: string, index: number) => {
          return (
            <div key={index} className='flex justify-center items-start gap-3'>
              <MdCheckCircleOutline className='text-green-1 min-w-[25px] min-h-[25px]' />
              <p className='text-[16px] font-gesistRegular text-black-2'>
                {ls}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadMapCard;
