import Header from '../../components/GeneralComponents/Header.js';
import { useEffect, useState } from 'react';
import LoadingProductCard from '../../components/GeneralComponents/LoadingProductCard.js';

const Products = () => {

   const [ loadingProducts, SetLoadingProducts ] = useState([]);

   useEffect(() => {
      const arr = [];
      for (let i = 0; i < 10; i++) {arr.push(<LoadingProductCard/>)}
      SetLoadingProducts(arr);
   }, [])

   return (
      <div>
         <Header />
         <div className='flex flex-row  mt-[3rem]'>

            <div className='PRODUCTS_CONTAINER w-10/12 mt-[1rem] pl-5 border-r-[3px] border-r-[solid] border-r-[#f7f7f7] flex flex-row flex-wrap h-[100%]'>
               <div className='bg-[#e8e8e861] shadow-2xl flex flex-row justify-between items-center w-[95%] py-2 mx-auto mt-[2rem]'>
                  <button className='ml-5 bg-[#5e5e5eb4] rounded-[15px] shadow-xl font-[Bhoma] px-5 h-[3rem] text-white flex justify-center items-center'>جستجو</button>
                  <input className='w-8/12 h-[3rem] rounded-[15px] shadow-md mr-3 bg-[#b2b2b242]'/>
               </div>
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