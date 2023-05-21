import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Header from '../components/GeneralComponents/Header.js';
import main from '../public/images/main3.png';
import catMemoji from '../public/images/memoji.png';

export default function Home() {


  return (<>
    <Header />

    <div className='app font-[BHoma] flex flex-row md:flex-col-reverse justify-between'>
      <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>




      <div className='w-6/12 md:w-full flex flex-col text-center '>
        <div className='flex flex-row justify-center mt-[10rem] md:mt-[2rem]'><p className='text-[4rem] md:text-[2.5rem]  font-[600] font-[monospace] text-[#1e2f4b]'>Feed us </p><div className='w-1/12 md:w-2/12 mt-[1.5rem] md:mt-[0.25rem] pl-3'><Image src={catMemoji} /></div></div>

        <div className='flex flex-row justify-center mt-[2rem] md:mt-[1rem]'><p className='text-[1.75rem] md:text-[1.6rem] flex flex-wrap  w-5/12 md:w-8/12 text-[#a5a5a5]'>فروشگاه غذای حیوانات خانگی با ضمانت اصالت کالا</p></div>

        <div className='flex flex-row justify-between md:justify-around w-5/12 md:w-full mx-auto md: my-3'>
          <button className=' pt-1 pb-2 w-6/12 bg-gradient-to-r from-[#52219b] to-[#771b99] hover:bg-gradient-to-r hover:from-[#411584] hover:to-[#611c7a] mt-[3rem] text-[white] text-[1.5rem] rounded-[20px] shadow-3xl hover:scale-105 transition-all duration-200 flex justify-center items-center'>محصولات</button>
          <button className='mt-[3rem]   text-[#241359] text-[1.5rem] rounded-[20px] px-5 hover:shadow-xl hover:scale-105 transition-all duration-200 flex justify-center items-center'>تخفیف ها </button>
        </div>
      </div>


      <div className='w-6/12 relative md:w-full '>
        <Image src={main} />
        <div className='absolute bg-white flex flex-col h-[12rem] md:h-[7rem] w-[12rem] md:w-[7rem] right-[30%] md:right-[5%] rounded-[20px] shadow-xl top-[85%] md:top-[70%] p-3'>
          <div className='bg-[#f2934a] w-full h-[50%] px-1 mx-auto rounded-[10px] text-center text-white'>Picture</div>
        </div>
      </div>




    </div>


    <div className='my-[20rem] flex flex-row md:flex-col shadow-2xl font-[Bhoma] w-10/12 bg-gradient-to-r from-[#1c0f31] to-[#161136] rounded-[20px] h-[15rem] mx-auto'>
      <div className='w-3/12 shadow-2xl rounded-[15px] '>
        <p className='text-[#d6d6d6] text-center pt-3 text-[1.5rem] shadow-lg'> ارسال سریع</p>

      </div>
      <div className='w-3/12 boxShadow2x overflow-hidden bg-gradient-to-r from-[#511e62] relative to-[#421b71] rounded-[10px] scale-110 transition-all duration-200 '>
      <span className='bg-[#9595956b] rounded-[50%] w-[10rem] h-[10rem] absolute left-[60%] bottom-[60%]'></span>
          <p className='text-[#d6d6d6] pl-5 py-3 text-[1.75rem]'> پرفروش </p>


      </div>
      <div className='w-3/12 shadow-2xl text-center'>
          <p className='text-[#d6d6d6] pl-5 py-3 text-[1.5rem]'> ضمانت کالا </p>
      </div>
      <div className='w-3/12 shadow-2xl rounded-[15px] text-center'>
          <p className='text-[#d6d6d6] pl-5 py-3 text-[1.5rem]'> تنوع بالا </p>
      </div>
    </div>



  </>)
}
