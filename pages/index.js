import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Header from '../components/GeneralComponents/Header.js';
import mainBg from '../public/images/main.webp';
import royalCaninLogo from '../public/images/royalCaninLogo.png';
import main from '../public/images/main.png';


export default function Home() {


  return (
   
    <div className='app font-[BHoma] flex flex-col'>
       <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>
    <div>
    
    <Header />


<div className='MAIN-CONTAINER flex flex-row  justify-between w-full'>
     
     <div className='flex flex-col w-full text-enter'>
       <div className='font-[monospace] text-[#4b4b4b] mt-[10rem] text-[4rem] text-center'>
             Feed us
        </div>
        <div className='font-[2rem] text-[#a8a8a8] mt-[2rem] text-[3rem] text-center'>
              فروشگاه غذای حیوانات
        </div>
     </div> 
      
     <div className='w-full'>
            <Image src={main} />
     </div>
</div>
        
       
        {/* 
        <div className='w-3/12 z-20 left-[70%] md:left-[10%] md:top-[70%] md:w-10/12 top-[20%] rounded-[10px] absolute '>
            <p className='text-[1.5rem] md:text-[1rem] text-[gray] flex flex-wrap text-justify' dir='rtl'> فروش غذای گربه و سگ و حیوانات خانگی با ضمانت اصالت کالا و تحویل فوری </p>
            <p className='text-[1.5rem] md:text-[1rem] text-center pb-2 md:py-3 mt-[2rem] w-6/12 md:w-8/12 mx-auto rounded-[10px] transition-all duration-200 hover:scale-105 bg-[#c43a3a] hover:bg-[#9e2d2d] cursor-pointer shadow-xl text-[white]'> محصولات</p>
        </div>

        <div className='z-10'>
             <Image src={mainBg} layout='fill' objectFit='contain'/>
        </div> */}
      </div>
  

    </div>
  )
}
