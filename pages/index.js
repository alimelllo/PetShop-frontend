import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/GeneralComponents/Header.tsx';
import mainBg from '../public/images/main.webp';
import royalCaninLogo from '../public/images/royalCaninLogo.png';

export default function Home() {
  return (
   
    <div className='app'>
       <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>
    <div>
    
    <Header />
    
        <div className='w-2/12 md:w-7/12 md:top-[10%] md:left-[25%] z-20 left-[5%] top-[15%] rounded-[10px] shadow-lg logoAnimation absolute'>
              <Image src={royalCaninLogo} />
        </div>


        <div className='w-3/12 z-20 left-[70%] md:left-[5%] md:top-[65%] md:w-11/12 top-[20%] rounded-[10px] absolute '>
            <p className='text-[1.5rem] md:text-[1rem] text-[gray] flex flex-wrap text-justify font-[600]' dir='rtl'> فروش غذای گربه و سگ و حیوانات خانگی با ضمانت اصالت کالا و تحویل فوری </p>
            <p className='text-[1.5rem] md:text-[1rem] text-center pb-2 md:py-3 mt-[2rem] w-6/12 md:w-8/12 mx-auto rounded-[10px] transition-all duration-200 hover:scale-105 bg-[#c71f1f] hover:bg-[#980c0c] cursor-pointer  shadow-2xl text-[white]'> محصولات</p>
        </div>

        <div className='z-10'>
             <Image src={mainBg} layout='fill' objectFit='contain'/>
        </div>
      </div>
  

    </div>
  )
}
