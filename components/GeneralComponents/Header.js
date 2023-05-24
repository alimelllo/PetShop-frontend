import React, { Fragment } from "react";
import Image from 'next/image';
import Basket from '../../public/images/basket.png';
import logo from '../../public/images/logo.PNG';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = (props) => {

  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    SetIsLoggedIn(props.isLoggedIn);
  }, [props.isLoggedIn])

  return (

    <div className={`flex flex-row w-full ${clientWindowHeight > 30 ? ' bg-white shadow-2xl ' : 'bg-transparent'} transition-all duration-300 fixed justify-between text-white z-50 font-[Bhoma] md:pt-2 md:pb-4 md:bg-[white] md:shadow-2xl`}>

      <div className="w-6/12 flex flex-row justify-between text-[#505050]  text-center text-[1.25rem] md:text-[1rem]">
        <div className="w-[22%] ml-5 md:hidden  ">
          <Image src={logo} />
        </div>

        <div className="flex flex-row w-8/12 justify-between pt-3 md:pt-3">
          <p className='h-[3rem] md:h-[2rem] md:py-0 px-5 pt-2 md:px-3 md:font-[700] ml-[10rem] md:ml-0 mx-5 hover:shadow-xl rounded-[20px] md:mx-0  cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[600] hover:tracking-[1px]'>تماس </p>
          <p className='h-[3rem] md:h-[2rem] md:py-0 px-5 pt-2 md:px-3 md:font-[700] mx-5 hover:shadow-xl rounded-[20px] md:mx-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[600] hover:tracking-[1px]'>محصولات</p>
          <p className='h-[3rem] md:h-[2rem] md:py-0 px-5 pt-2 md:px-3 md:font-[700] mx-5 hover:shadow-xl rounded-[20px] md:mx-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[600] hover:tracking-[1px]'> دسته </p>
        </div>

      </div>

      <div className="w-3/12 flex flex-row justify-end pr-5  md:pr-2 text-center text-[#bfbfbf] md:w-5/12">

        {!isLoggedIn &&<div className=' h-[3rem] text-[#545454]  md:h-[2.5rem] md:pt-2 md:py-1 mr-[1rem]  md:mr-0 md:text-[1rem] mt-3 md:mt-1 text-[1.25rem]   bg-white shadow-xl rounded-[25px]  flex flex-row justify-between items-center'> <Link href='/CreateAcount'><span className="px-4  cursor-pointer transition-all duration-200 hover:bg-[#e2e2e2] rounded-l-[10px] ">ثبت نام  </span></Link> | <Link href='/Login'><span className="px-6  cursor-pointer transition-all duration-200 hover:bg-[#e2e2e2] rounded-r-[10px] "> ورود </span></Link></div>}


        {isLoggedIn &&
        <Menu as="div" className="relative text-center">
          <div>
            <Menu.Button className={`font-[monospace] h-[3rem] mt-3 md:mt-1 cursor-pointer transition-all duration-200 ${clientWindowHeight > 30 ? ' text-[#7587ff] font-[600] hover:text-[#2236b8]' : 'text-[white] hover:font-[600] md:text-[#7587ff] md:font-[600] hover:text-[#363636]'}  text-[1.5rem] pr-3`}>
              {localStorage.getItem("userName")}
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute font-[Bhoma] text-[1.25rem] right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block w-full px-4 py-2 text-right '
                        )}
                      >
                        پروفایل
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button onClick={() => {
                        localStorage.removeItem("token"); 
                        localStorage.removeItem("userName");
                        props.logOut();
                      }}
                        type="submit"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block w-full px-4 py-2 text-right '
                        )}>
                        خروج
                      </button>
                    )}
                  </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>}



        {isLoggedIn && <div className="w-[4rem]  h-[4rem] md:w-[3rem] md:h-[3rem] relative innerShadow  p-2  rounded-[20px] mr-2 bg-white mt-2 md:mt-1 md:mr-3 text-[1rem]">
          <p className="bg-[#ba3131] w-[1.5rem]  h-[1.5rem] rounded-[50%] absolute left-[75%]  bottom-[70%] md:bottom-[67%] text-white shadow-2xl font-[monospace]">0</p>
          <Image src={Basket} />
        </div>}
      </div>

     




    </div>
  )
}

export default Header;