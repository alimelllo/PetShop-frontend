import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Header from '../components/GeneralComponents/Header.js';
import mainBg from '../public/images/main.webp';
import royalCaninLogo from '../public/images/royalCaninLogo.png';
import main from '../public/images/main3.png';
import catMemoji from '../public/images/memoji.png';

export default function Home() {


  return (<>
   <Header/>
   
    <div className='app font-[BHoma] flex flex-row md:flex-col-reverse justify-between'>
       <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>
  

     
      
      <div className='w-6/12 md:w-full flex flex-col text-center '>
          <div className='flex flex-row justify-center mt-[10rem] md:mt-[3rem]'><p className='text-[4rem] md:text-[2.5rem]  font-[600] font-[monospace] text-[#1e2f4b]'>Feed us </p><div className='w-1/12 md:w-2/12 mt-[1.5rem] md:mt-[0.25rem] pl-3'><Image src={catMemoji}/></div></div>
      
          <div className='flex flex-row justify-center mt-[2rem] md:mt-[1rem]'><p className='text-[1.75rem] md:text-[1.6rem] text-justify w-5/12 md:w-8/12 text-[#a5a5a5]'>فروشگاه غذای حیوانات خانگی با ضمانت اصالت کالا</p></div>
      
          <div className='flex flex-row justify-between md:justify-around w-5/12 md:w-full mx-auto'>
              <button className=' pb-2 pt-1  w-6/12 bg-gradient-to-r from-[#52219b] to-[#771b99] hover:bg-gradient-to-r hover:from-[#411584] hover:to-[#611c7a] mt-[3rem] text-[white] text-[1.5rem] rounded-[20px] shadow-3xl hover:scale-105 transition-all duration-200'>محصولات</button>
              <button className='mt-[3rem]  py-2 text-[#241359] text-[1.5rem] rounded-[20px] px-5 hover:shadow-xl hover:scale-105 transition-all duration-200 '>تخفیف ها </button>
          </div>
      </div>
      

      <div className='w-6/12 md:w-full '>
          <Image src={main} />
      </div>

       
        

    </div>
  </>)
}
