import Image from 'next/image';
import React, { useEffect, useState } from "react";
import main from '../../public/images/main3.png';
import catMemoji from '../../public/images/memoji.png';
import royalCaninLogo from '../../public/images/royalcaninlogo.png';
import productService from '../../Services/ProductsServices/product.service';
import ProductCard from '../GeneralComponents/ProductCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import instagram from './../../public/images//icons/instagram.png';
import whatsapp from './../../public/images//icons/whatsapp.png';
import gmail from './../../public/images//icons/gmail.png';
import twitter from './../../public/images//icons/twitter.png';

const Main = () => {

    const [productList, SetProductList] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);



    useEffect(() => {

        const getAllProducts = async () => {

            try {
                const result = await productService.getAllProducts();
                console.log(result);
                const list = result.data.map((item) => (
                    <ProductCard
                        name={item.name}
                        price={item.price}
                        productImage={item.productImage}
                        description={item.description}
                        weight={item.weight}
                        width={"w-[19%] md:w-[45%]"} />
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
        <>
            <div className='app font-[BHoma] flex flex-row md:flex-col-reverse justify-between'>


                <div className='w-6/12 md:w-full flex flex-col text-center z-30'>
                    <div className='flex flex-row justify-center mt-[10rem] md:mt-[2rem]'><p className='text-[4rem] md:text-[2.5rem]  font-[600] font-[monospace] text-[#1e2f4b]'>Feed us </p><div className='w-1/12 md:w-2/12 mt-[1.5rem] md:mt-[0.25rem] pl-3'><Image src={catMemoji} /></div></div>

                    <div className='flex flex-row justify-center mt-[2rem] md:mt-[1rem]'><p className='text-[1.75rem] md:text-[1.6rem] flex flex-wrap  w-5/12 md:w-8/12 text-[#a5a5a5]'>فروشگاه غذای حیوانات خانگی با ضمانت اصالت کالا</p></div>

                    <div className='flex flex-row justify-between md:justify-around w-5/12 md:w-full mx-auto md: my-3'>
                        <button className=' pt-1 pb-2 w-6/12 bg-gradient-to-r from-[#52219b] to-[#771b99] hover:bg-gradient-to-r hover:from-[#411584] hover:to-[#611c7a] mt-[3rem] md:mt-[2rem] text-[white] text-[1.5rem] rounded-[20px] shadow-3xl hover:scale-105 transition-all duration-200 flex justify-center items-center'>محصولات</button>
                        <button className='mt-[3rem] md:mt-[2.5rem]  text-[#241359] text-[1.5rem] rounded-[20px] px-5 hover:shadow-xl hover:scale-105 transition-all duration-200 flex justify-center items-center'>تخفیف ها </button>
                    </div>
                </div>

                <span className='bg-[#d8d7fd3a] md:hidden w-[40rem] absolute right-[55%] z-10 top-[10%]  h-[35rem] rounded-r-[45%]'></span>
                <div className='w-6/12 relative md:w-full md:mt-[2rem] '>
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

            {!isLoading && <div className='mt-[5rem] mb-[1rem] py-[3rem] innerShadow2 w-full flex flex-row flex-wrap justify-around'>
                {productList}
            </div>}

            <p className='bg-[#7777ef] rounded-[15px] transition-all duration-200 cursor-pointer hover:bg-[#3f3fae] hover:scale-105 flex justify-center p-2 pb-3 items-center text-white text-center w-2/12 md:w-6/12 mx-auto font-[Bhoma] text-[1.25rem]'>نمایش همه</p>
            
            {isLoading && <div className='my-[5rem] py-[5rem] innerShadow2 overflow-hidden flex flex-row flex-wrap justify-around'>
                <div className='w-2/12 md:w-5/12 md:my-5'>
                    {<Skeleton count={1} height={280} />}
                </div>
                <div className='w-2/12 md:w-5/12 md:my-5'>
                    {<Skeleton count={1} height={280} />}
                </div>
                <div className='w-2/12 md:w-5/12 md:my-5'>
                    {<Skeleton count={1} height={280} />}
                </div>
                <div className='w-2/12 md:w-5/12 md:my-5'>
                    {<Skeleton count={1} height={280} />}
                </div>
            </div>}







            <div className='bg-gradient-to-r from-[#1c0f31] to-[#161136] mt-[10rem] rounded-t-[40px] w-11/12 mx-auto flex flex-col'>

                <div className='bg-[#8383831b] w-[95%] mx-auto my-[3rem] rounded-[10px] flex flex-row justify-between md:flex-wrap'>

                    <div className='text-[#c2c2c2] pt-3 shadow-2xl border-r-[#dbdbdb1a] md:border-0 border-r-[1px] border-r-[solid] h-[10rem]  text-center w-3/12 md:w-5/12'>
                        Cell
                    </div>
                    <div className='text-[#c2c2c2] pt-3 shadow-2xl border-r-[#dbdbdb1a] md:border-0 border-r-[1px] border-r-[solid] h-[10rem]  text-center w-3/12 md:w-5/12'>
                        Cell
                    </div>
                    <div className='text-[#c2c2c2] pt-3 shadow-2xl border-r-[#dbdbdb1a] md:border-0 border-r-[1px] border-r-[solid] h-[10rem]  text-center w-3/12 md:w-5/12'>
                        Cell
                    </div>
                    <div className='text-[#c2c2c2] pt-3 shadow-2xl  h-[10rem]  text-center w-3/12 md:w-5/12'>
                        Cell
                    </div>
                </div>




                <div className='flex flex-row justify-center mx-auto  w-4/12 md:w-10/12 '>

                    <div className=' w-[3rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
                        <Image src={instagram} layout="responsive" objectFit='cover' />
                    </div>
                    <div className=' w-[3rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
                        <Image src={whatsapp} layout="responsive" objectFit='cover' />
                    </div>
                    <div className='w-[3rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
                        <Image src={gmail} layout="responsive" objectFit='cover' />
                    </div>
                    <div className='w-[3rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
                        <Image src={twitter} layout="responsive" objectFit='cover' />
                    </div>


                </div>

                <p className='text-[#a1a1a1] text-center  py-[1rem] text-[1rem] md:text-[0.75rem] font-[monospace]'>&copy;2023 Feed Us IR,inc.All rights reserved </p>

            </div>



        </>
    )
}

export default Main;