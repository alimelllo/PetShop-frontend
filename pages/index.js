import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Header from '../components/GeneralComponents/Header.js';
import mainBg from '../public/images/main.webp';
import royalCaninLogo from '../public/images/royalCaninLogo.png';
import main from '../public/images/main2.png';


export default function Home() {


  return (
   
    <div className='app font-[BHoma] flex flex-row justify-end'>
       <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>
    <div>
    
    {/* <Header /> */}
        <div className='w-5/12'>
              <Image src={main} />
        </div>
       
      </div>
  

    </div>
  )
}
