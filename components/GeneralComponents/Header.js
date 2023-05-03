import React from "react";
import Image from 'next/image';
import Basket from '../../public/images/basket.png';
import logo from '../../public/images/logo.PNG';
import Link from 'next/link';

const Header  = ()  => {
    return (
     <div className='flex flex-row justify-between text-white w-full z-50 fixed '>
       
     <div className="w-3/12 text-center text-[#bfbfbf] p-2 text-[1.25rem] ">
       Logo
     </div>

     <div className="w-4/12 flex flex-row justify-center  text-[#bfbfbf] text-center pt-3 text-[1.5rem] md:text-[1rem]">
        <p className='p-2 mx-2 md:mx-0  cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[700] hover:tracking-[1px]'>تماس </p>
        <p className='p-2 mx-2 md:mx-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[700] hover:tracking-[1px]'>محصولات</p>
        <p className='p-2 mx-2 md:mx-0 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[700] hover:tracking-[1px]'>دسته</p>
     </div>  




     <div className="w-3/12 flex flex-row py-3 justify-end pr-5 text-center text-[#bfbfbf] text-[1.25rem]  ">
     
       <Link href='/CreateAcount'><p className='text-center md:hidden text-[#bfbfbf] pt-3 pr-[2rem] text-[1.25rem] cursor-pointer transition-all duration-200 hover:scale-105 hover:text-[#1a1a1a] hover:font-[600]'>ثبت نام </p></Link>
       <div className="w-[15%] md:w-7/12 relative innerShadow pt-3 p-1 px-2 rounded-[20px] mr-2 md:mr-0">
           <span className="bg-[#ba3131] rounded-[50%] absolute left-[75%] px-2 bottom-[70%] md:bottom-[67%] text-white shadow-2xl md:text-[1rem]">0</span>
            <Image src={Basket} />
       </div>
    
     </div> 
     
     </div>
    )
}

export default Header;