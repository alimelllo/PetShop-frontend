import Image from 'next/image';
import React, { useEffect, useState } from "react";
import main from '../../public/images/main3.png';
import catMemoji from '../../public/images/memoji.png';
import royalCaninLogo from '../../public/images/royalcaninlogo.png';
import productService from '../../Services/ProductsServices/product.service';


const Main = () => {

const [ productList , SetProductList] = useState([]);




useEffect(() => {
    
const getAllProducts = async () => {
  const result = await productService.getAllProducts();
  console.log(result);
  const list = result.data.map(( item ) => (
    <div className='shadow-2xl w-[18%] rounded-[10px] flex flex-col h-[20rem]'>
    <div className='m-3 innerShadow2 p-3 h-[50%]'>
      <Image src={item.productImage} />
    </div>
    <p className='text-[1.25rem] text-[#5c5c5c] text-[700] font-[monospace] pl-3 '>{item.name}</p>
    <p className='text-[1rem] mt-5 text-[gray] text-[600] font-[monospace] pl-3 '> {item.description}</p>
    <div className='flex flex-row justify-between mt-5'>
      <p className='text-[1.5rem]  text-[#5484f3] font-[800] font-[monospace] pl-3 pt-1'>{item.price}</p>
      <p className='text-[1rem] rounded-[10px] bg-[#7698e8] text-white font-[800] font-[monospace] m-2 py-1 px-3 duration-200 hover:scale-105 transition-all hover:bg-[#365ebd] cursor-pointer'>Add +</p>
    </div>

    </div>
  ))
  SetProductList(list);
}    
    getAllProducts();
} , [])
    



   return (
        <>
            <div className='app font-[BHoma] flex flex-row md:flex-col-reverse justify-between'>


                <div className='w-6/12 md:w-full flex flex-col text-center '>
                    <div className='flex flex-row justify-center mt-[10rem] md:mt-[2rem]'><p className='text-[4rem] md:text-[2.5rem]  font-[600] font-[monospace] text-[#1e2f4b]'>Feed us </p><div className='w-1/12 md:w-2/12 mt-[1.5rem] md:mt-[0.25rem] pl-3'><Image src={catMemoji} /></div></div>

                    <div className='flex flex-row justify-center mt-[2rem] md:mt-[1rem]'><p className='text-[1.75rem] md:text-[1.6rem] flex flex-wrap  w-5/12 md:w-8/12 text-[#a5a5a5]'>فروشگاه غذای حیوانات خانگی با ضمانت اصالت کالا</p></div>

                    <div className='flex flex-row justify-between md:justify-around w-5/12 md:w-full mx-auto md: my-3'>
                        <button className=' pt-1 pb-2 w-6/12 bg-gradient-to-r from-[#52219b] to-[#771b99] hover:bg-gradient-to-r hover:from-[#411584] hover:to-[#611c7a] mt-[3rem] md:mt-[2rem] text-[white] text-[1.5rem] rounded-[20px] shadow-3xl hover:scale-105 transition-all duration-200 flex justify-center items-center'>محصولات</button>
                        <button className='mt-[3rem]   text-[#241359] text-[1.5rem] rounded-[20px] px-5 hover:shadow-xl hover:scale-105 transition-all duration-200 flex justify-center items-center'>تخفیف ها </button>
                    </div>
                </div>


                <div className='w-6/12 relative md:w-full md:mt-[2rem]'>
                    <Image src={main} />
                    <div className='absolute bg-white flex flex-col h-[13rem]  md:h-[8rem] w-[12rem] md:w-[7rem] right-[20%] md:right-[5%] rounded-[20px] shadow-xl top-[85%] md:top-[70%] p-3 md:p-2'>
                        <div className='w-full bg-[#ffcead] shadow-2xl h-[40%] md:h-[50%] px-1 md:px-0 mx-auto rounded-[10px] text-center text-white'>
                            <div className='mt-2'>
                                <Image src={royalCaninLogo} className="shadow-xl opacity-[0.7]" />
                            </div>
                            <p className='text-center pt-2 md:pt-1 text-[#e43e24] font-[monospace] font-[600] text-[1.5rem] md:text-[1rem]'>10% Off</p>
                            <p className='text-center  text-[#808080] font-[Bhoma]  text-[1rem] md:text-[0.8rem]'>محصولات</p>
                            <p className='text-center bg-[#ebebeb] shadow-xl rounded-[5px] mb-3 text-[#505050] font-[monospace] font-[600] text-[1.25rem] md:text-[0.6rem]'>(Royal Canin)</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className='mt-[20rem] mb-[10rem] md:my-[10rem] flex flex-row md:flex-col  shadow-2xl font-[Bhoma] w-10/12 bg-gradient-to-r from-[#1c0f31] to-[#161136] rounded-[20px]  mx-auto'>
                <div className='w-3/12 d:w-10/12 pb-[10rem] pt-2 shadow-2xl rounded-[15px] '>
                    <p className='text-[#d6d6d6] text-center pt-3 text-[1.5rem] shadow-lg'> ارسال سریع</p>
                </div>
                <div className='w-3/12 md:w-full pb-[10rem] pt-2 boxShadow2x overflow-hidden bg-gradient-to-r from-[#511e62] relative to-[#421b71] rounded-[10px] scale-110 transition-all duration-200 '>
                    <span className='bg-[#9595956b] rounded-[50%] w-[10rem] h-[10rem] absolute left-[60%] bottom-[60%]'></span>
                    <p className='text-[#d6d6d6] pl-5 py-3 text-[1.75rem]'> پرفروش </p>
                </div>
                <div className='w-3/12 d:w-10/12 pb-[10rem] pt-2 shadow-2xl text-center'>
                    <p className='text-[#d6d6d6] pl-5 py-3 text-[1.5rem]'> ضمانت کالا </p>
                </div>
                <div className='w-3/12 d:w-10/12 pb-[10rem] pt-2 shadow-2xl rounded-[15px] text-center'>
                    <p className='text-[#d6d6d6] pl-5 py-3 text-[1.5rem]'> تنوع بالا </p>
                </div>
            </div>

            <p className='text-center text-[3rem] font-[Bhoma] text-[#b3b3b3]'>محصولات</p>
           
            <div className='my-[5rem] py-[5rem] innerShadow2 w-full flex flex-row justify-around'>
               {productList}
            </div>

        </>
    )
}

export default Main;