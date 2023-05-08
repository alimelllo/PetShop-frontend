import React from "react";
import Image from 'next/image';
import Basket from '../../public/images/basket.png';
import logo from '../../public/images/logo.PNG';
import Link from 'next/link';

const Header  = ()  => {
    return (
     <div className='flex flex-row w-full fixed justify-between text-white z-50'>

     <div className="w-6/12 flex flex-row  text-[#505050]  text-center pt-3 text-[1.5rem] md:text-[0.8rem]">
      <div className="w-3/12 ml-5 md:hidden">
        <Image src={logo}/>
      </div>
        <p className='py-2 md:py-0 px-5 md:px-4 ml-[10rem] md:ml-0 mx-5 hover:shadow-2xl rounded-[20px] md:mx-0  cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[700] hover:tracking-[1px]'>تماس </p>
        <p className='py-2 md:py-0 px-5 md:px-4 mx-5 hover:shadow-2xl rounded-[20px] md:mx-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[700] hover:tracking-[1px]'>محصولات</p>
        <p className='py-2 md:py-0 px-5 md:px-4 mx-5 hover:shadow-2xl rounded-[20px] md:mx-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[700] hover:tracking-[1px]'> دسته </p>
     </div>  




     <div className="w-3/12 flex flex-row justify-end pr-5  md:pr-2 text-center text-[#bfbfbf] md:w-5/12">
     
       <Link href='/CreateAcount'><p className='text-center text-[#545454] py-2 md:py-1 px-[2rem] md:px-[1.5rem] mr-[3rem] md:pb-2 md:mr-0 md:text-[1rem] mt-5 md:mt-2 text-[1.25rem] cursor-pointer transition-all duration-200 hover:scale-105 bg-white shadow-2xl rounded-[25px] hover:text-[#1a1a1a] hover:bg-[#f0f0f0] flex flex-row'>ثبت نام  <span>&#8594;</span></p></Link>
       {/* <div className="w-[15%] md:w-7/12 relative innerShadow pt-3 p-1 px-2 rounded-[20px] mr-2 md:mr-0">
           <span className="bg-[#ba3131] rounded-[50%] absolute left-[75%] px-2 bottom-[70%] md:bottom-[67%] text-white shadow-2xl md:text-[1rem]">0</span>
            <Image src={Basket} />
       </div> */}
    
     </div> 
     
     </div>
    )
}

export default Header;