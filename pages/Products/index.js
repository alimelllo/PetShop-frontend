import Header from '../../components/GeneralComponents/Header.js';
import { useEffect, useState } from 'react';
import LoadingProductCard from '../../components/GeneralComponents/LoadingProductCard.js';
import { skeleton } from '../../components/Main/Main.js';
import productService from '../../Services/ProductsServices/product.service';
import ProductCard from '../../components/GeneralComponents/ProductCard';

const Products = () => {

   const [ loadingProducts, SetLoadingProducts ] = useState([]);
   const [ isLoading, SetIsLoading ] = useState(true);
   const [ productList, SetProductList ] = useState([]);


   useEffect(() => {
      const arr = [];
      for (let i = 0; i < 10; i++) {arr.push(<LoadingProductCard/>)}
      SetLoadingProducts(arr);
   }, [])


   useEffect(() => {

      const getAllProducts = async () => {

          try {
              const result = await productService.getAllProducts();
              const list = result.data.map((item) => (
                  <ProductCard
                      imageWidth={130}
                      imageHeight={120}
                      name={item.name}
                      price={item.price}
                      productImage={item.productImage}
                      description={item.description}
                      weight={item.weight}
                      width={"w-[18%] md:w-[45%]"} />
              ))
              SetProductList(list);
              SetIsLoading(false);
          } catch (err) {
              SetIsLoading(false);
          }
      }
      getAllProducts();
  }, [])


   return (
      <div>
         <Header />
         <div className='flex flex-row  mt-[3rem]'>

            <div className='PRODUCTS_CONTAINER w-full mt-[1rem] pl-5 border-r-[3px] border-r-[solid] border-r-[#f7f7f7] flex flex-row flex-wrap h-[100%]'>
               <div className='bg-[#e8e8e861] shadow-2xl pr-5 flex flex-row justify-end items-center w-full py-2 mx-auto mt-[1rem]'>
                  <button className='mr-5 bg-[#537df9f4] rounded-[15px] font-[Bhoma] px-5 h-[3rem] text-white flex justify-center items-center transition-all duration-200 hover:bg-[#535ef9f4] shadow-2xl '>جستجو</button>
                  <input 
                    className='w-8/12 h-[3rem] rounded-[15px] placeholder:font-[Bhoma] text-right pr-5 shadow-md mr-8 bg-[#b2b2b242]'
                    placeholder='... محصول مورد نظر را جستجو کنید'
                    />
               </div>
                { isLoading && loadingProducts}
                {!isLoading && <div className=' w-full flex flex-row flex-wrap justify-around'>
                {productList}
            </div>}
            </div>
            <div className='FILTER_CONTAINER bg-white w-2/12 shadow-2xl h-screen'>
               nav bar
            </div>

         </div>
      </div>
   )
}

export default Products;