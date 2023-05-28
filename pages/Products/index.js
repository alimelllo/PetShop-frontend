import Header from '../../components/GeneralComponents/Header.js';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useEffect, useState } from 'react';

const Products = () => {

   const [loadingProducts, SetLoadingProducts] = useState([]);


   useEffect(() => {
      const arr = [];
      for (let i = 0; i < 10; i++) {
         arr.push(
            <div className='w-[18%] flex flex-col justify-around ml-4 h-[15rem] z-20 shadow-2xl my-[1rem]'>
               <div className='w-[90%] mx-auto rounded-[10px] py-5 h-[40%]'>
                  <Skeleton count={1} height={80} baseColor='#cbcbcb' highlightColor='white' />
               </div>
               <div className='w-[50%] pl-3  rounded-[10px] h-[15%] pt-3 '>
                  <Skeleton count={1} baseColor='#cbcbcb' highlightColor='white' />
               </div>
               <div className='w-[90%] pl-3  rounded-[10px] h-[15%] '>
                  <Skeleton count={1} baseColor='#cbcbcb' highlightColor='white' />
               </div>

               <div className='flex flex-row w-[90%] justify-between  mx-auto'>
                  <div className='w-[40%] pl-1  rounded-[10px] h-[15%] '>
                     <Skeleton count={1} baseColor='#cbcbcb' highlightColor='white' />
                  </div>
                  <div className='w-[20%] pr-1 rounded-[10px] h-[15%] '>
                     <Skeleton count={1} baseColor='#cbcbcb' highlightColor='white' />
                  </div>
               </div>
            </div>
         )
      }
      SetLoadingProducts(arr);
   }, [])



   return (
      <div>
         <Header />
         <div className='flex flex-row  mt-[3rem]'>

            <div className='PRODUCTS_CONTAINER w-10/12 mt-[2rem] pl-5 border-r-[3px] border-r-[solid] border-r-[#f7f7f7] flex flex-row flex-wrap h-[100%]'>
               {loadingProducts}
            </div>
            <div className='FILTER_CONTAINER bg-white w-2/12 shadow-2xl h-screen'>
               nav bar
            </div>

         </div>
      </div>
   )
}

export default Products;