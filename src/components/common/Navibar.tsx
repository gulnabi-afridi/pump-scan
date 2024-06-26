import React, { useState } from 'react';
import ComponentWrapper from './ComponentWrapper';
import { RxCross2 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { layoutData } from '../../data/layout';
import { Link } from 'react-scroll';

const Navibar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div id='home' className='w-full fixed z-40 bg-[#060B12]'>
      <ComponentWrapper>
        <div className='w-full flex justify-between items-center h-[70px] cmd:h-[100px]'>
          {/* left portion  */}
          <div className='flex justify-center items-center gap-6 lg:gap-10'>
            <img src='/assets/logo.png' className='w-[35px] h-[35px]' alt='' />
            <div className=' justify-center items-center cmd:flex hidden gap-6 lg:gap-10'>
              {layoutData.navData.map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    key={index}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={800}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className={` ${
                      item.path === window.location.hash
                        ? 'text-green-1'
                        : 'text-black-2'
                    } text-[16px] cursor-pointer font-medium hover:text-green-1 font-gesistMedium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-green-1 hover:after:w-full after:duration-200`}
                  >
                    {item.path === window.location.hash && '*/ '}

                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* right portion  */}
          <div className='cmd:flex hidden justify-center items-center gap-3'>
            <button className='text-black-2 w-[112px] h-[32px] font-gesistMedium rounded-[8px] border-[1px] border-[#2A4157] font-medium text-[16px]'>
              */ Twitter
            </button>
            <button className='text-green-1 bg-green-1/10 w-[112px] h-[32px] font-gesistMedium rounded-[8px] border-[1px] border-green-1 font-medium text-[16px]'>
              */ Telegram
            </button>
          </div>
          {/* NAVIBAR FOR SMALL SCREEN --------> */}
          <div className='cmd:hidden block'>
            <RxHamburgerMenu
              onClick={toggleDrawer}
              className='text-[30px] text-green-1'
            />
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              className='drawer'
            >
              <div className='flex flex-col p-6 justify-center items-center '>
                {/* =========>top bar */}
                <div className='w-full flex justify-end items-center'>
                  <RxCross2
                    onClick={toggleDrawer}
                    className='text-[35px] text-green-1 '
                  />
                </div>
                {/* ========> sections links */}
                <div className='flex flex-col justify-center items-center gap-6 mt-12'>
                  {layoutData.navData.map((navi, index) => {
                    return (
                      <Link
                        to={navi.path}
                        key={index}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={0}
                        duration={800}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                        spyThrottle={500}
                        className={` ${
                          navi.path === window.location.hash
                            ? 'text-green-1'
                            : 'text-black-2'
                        } text-[16px] cursor-pointer font-medium hover:text-green-1 font-gesistMedium relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-green-1 hover:after:w-full after:duration-200`}
                      >
                        {navi.path === window.location.hash && '*/ '}

                        {navi.name}
                      </Link>
                    );
                  })}
                </div>
                <div className='cmd:hidden flex justify-center mt-10 items-center gap-3'>
                  <button className='text-black-2 w-[112px] h-[32px] font-gesistMedium rounded-[8px] border-[1px] border-[#2A4157] font-medium text-[16px]'>
                    */ Twitter
                  </button>
                  <button className='text-green-1 bg-green-1/10 w-[112px] h-[32px] font-gesistMedium rounded-[8px] border-[1px] border-green-1 font-medium text-[16px]'>
                    */ Telegram
                  </button>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Navibar;
