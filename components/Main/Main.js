import Image from 'next/image';
import React, { useEffect, useState } from "react";
import catMemoji from '../../public/images/memoji.png';
import ProductCard from '../GeneralComponents/ProductCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import Link from 'next/link';
import expressDelivery from '../../public/images/icons/expressDelivery.svg';
import guarantee from '../../public/images/icons/guarantee.svg';
import { Icon } from 'react-icons-kit';
import { instagram } from 'react-icons-kit/fa/instagram';
import { whatsapp } from 'react-icons-kit/fa/whatsapp'
import { phone } from 'react-icons-kit/fa/phone';
import { telegram } from 'react-icons-kit/fa/telegram';
import { useSelector } from 'react-redux';
import { themeHandler } from '../../Redux/Reducers/Settings/Profile/ProfileSettings.ts';
import royalCaninLogo from '../../public/images/royalCaninWhite.png'
import royalCaninProduct from '../../public/images/royalCaninProduct.png'
import feedUsLogo from '../../public/images/feedUsLogo.png'
import offerLogo from '../../public/images/offer.png';

export const skeleton = (height, width) => {
    return (
        <Skeleton baseColor='#cbcbcb' className='shadow-2xl' highlightColor='white' count={1} height={height} width={width} />
    )
}

const Main = (props) => {

    const [productList, SetProductList] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        try {
            const list = props.data.map((item, i) => (
                <ProductCard
                    key={i}
                    id={item.id}
                    imageWidth={130}
                    imageHeight={140}
                    name={item.name}
                    price={item.price}
                    productImage={item.productImage}
                    description={item.description}
                    weight={item.weight}
                    width={"w-[17%] md:w-[45%]"}
                    data={item} />
            ))
            let arr = [];
            for (let i = 0; i < list.length; i++) {
                arr.push(list[i]);
                if (i === 3) break
            }
            SetProductList(arr);
            SetIsLoading(false);
        } catch (err) {
            SetIsLoading(false);
        }

    }, [])


    const selectThemeState = useSelector(themeHandler);
    const themeState = selectThemeState.payload.ProfileSettings.theme;

    const CARDS = [
        { title: 'somthing 1 ', background: "bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900" },
        { title: 'somthing 2 ', background: "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700" },
        { title: 'somthing 3 ', background: "bg-gradient-to-br from-pink-900 via-rose-700 to-rose-500" },
        { title: 'somthing 4 ', background: "bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600" },
        { title: 'somthing 5 ', background: "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500" },
        { title: 'somthing 6 ', background: "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700" },
        { title: 'somthing 7 ', background: "bg-gradient-to-r from-orange-400 to-rose-400" },
        { title: 'somthing 8 ', background: "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800" },
        { title: 'somthing 9 ', background: "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900" },
        { title: 'somthing 10', background: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" },
    ];

    const MAX_VISIBILITY = 3;


    const Card = ({ title, background }) => {
        return (
            <div className="card shadow-2xl relative hover:scale-105 hover:bg-[#f0f0f0] cursor-pointer">
                <div className=' rotate-[25deg] w-[7rem] md:w-[6rem] h-[7rem] md:h-[6rem] text-[1.5rem] md:text-[1.25rem] text-[#7a7a7a] font-[800] shadow-2xl flex justify-center items-center bg-[#ffffff] absolute right-[-5%] top-[-10%] md:top-[-8%] font-[monospace] rounded-[50%]'>
                  20% Off
                </div>

                <div className={`h-[15rem] w-full ${background}`}>
                    <div className='w-6/12 m-2 p-2'>
                        <Image src={royalCaninLogo} />
                    </div>
                    <div className='w-full flex justify-end'>
                        <div className='w-8/12 absolute left-[50%] md:left-[45%] bottom-0 pl-5'>
                            <Image src={royalCaninProduct} />
                        </div>
                    </div>
                </div>
                <p className='text-black text-[1.2rem] font-[monospace] p-3 font-[600]'>Royal Canin Medium</p>
                <p className='text-[#2f2f2f] text-[1rem] font-[monospace] pt-1 px-3'>fresh mest food</p>
                <p className={`${background} text-[white] w-6/12 shadow-xl rounded-r-[10px] text-[1.75rem] px-3 mt-5  font-[800] font-[monospace]`}>145,000 T</p>
            </div>
        )
    }


    const Carousel = ({ children }) => {
        const count = React.Children.count(children);
        const [active, setActive] = useState(2);
        const [animate, setAnimate] = useState('increament');

        useEffect(() => {
            const interval = setInterval(() => {
                if(active === 9 ){
                    setAnimate('decreament');
                }else if(active === 0){
                    setAnimate('increament');
                }
                if(animate === 'increament'){
                    setActive(active++);
                }else if(animate === 'decreament'){
                    setActive(active--);
                }
            }, 4000)
            return () => {
                clearInterval(interval);
            }
        }, [animate])

        return (
            React.createElement("div", { className: "carousel" },
                React.Children.map(children, (child, i) =>
                    React.createElement("div", {
                        className: "card-container", style: {
                            '--active': i === active ? 1 : 0,
                            '--offset': (active - i) / 3,
                            '--direction': Math.sign(active - i),
                            '--abs-offset': Math.abs(active - i) / 3,
                            'pointer-events': active === i ? 'auto' : 'none',
                            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block'
                        }
                    }, child)),
            ));
    };

    const SlideShow = () =>
        React.createElement("div", { className: "app" },
            React.createElement(Carousel, null,
                CARDS.map((item, i) =>
                    React.createElement(Card, { title: 'Card ' + (i + 1), background: item.background }))));


    return (
        <>

            <div className='app font-[BHoma] flex flex-row md:flex-col-reverse justify-between overflow-x-hidden'>

                <div className='w-6/12 md:w-full flex flex-col text-center z-30'>
                    <div className='flex flex-row justify-center mt-[10rem] md:mt-0'>
                        <div className='w-4/12 md:w-5/12 mt-[1.5rem] md:mt-[0.75rem] pl-3'>
                            <Image src={feedUsLogo} />
                        </div>
                        <div className='w-1/12 md:w-2/12 mt-[2rem] md:mt-[0.25rem] pl-3'>
                            <Image src={catMemoji} />
                        </div>
                    </div>

                    <div className='flex flex-row justify-center mt-[2rem] md:mt-[0rem]'><p className='text-[1.75rem] md:text-[1.6rem] flex flex-wrap  w-5/12 md:w-8/12 text-[#a5a5a5]'>فروشگاه غذای حیوانات خانگی با ضمانت اصالت کالا</p></div>

                    <div className='flex flex-row justify-between md:flex-col md:justify-center w-5/12 md:w-full mx-auto'>
                        <Link href='/Products'>
                            <button className={`pt-1 pb-2 w-6/12 md:w-10/12 md:mx-auto bg-gradient-to-r from-[#52219b] to-[#771b99] hover:bg-gradient-to-r hover:from-[#411584] hover:to-[#611c7a] mt-[3rem] md:mt-[1rem] text-[white] text-[1.5rem] rounded-[20px] ${themeState === 'light' ? 'shadow-3xl' : 'shadow-2xl'}  hover:scale-105 transition-all duration-200 flex justify-center items-center`}>
                                محصولات
                            </button>
                        </Link>
                        <button onClick={() => setActive(active++)} className={`mt-[3rem] md:mt-[2.5rem] ${themeState === 'light' ? 'text-[#241359]' : 'text-[#6b6b6b] hover:bg-[#171717] hover:text-white'}   text-[1.5rem] rounded-[20px] px-5 hover:shadow-xl hover:scale-105 transition-all duration-200 flex justify-center items-center`}>تخفیف ها </button>
                    </div>
                </div>

                <span className='bubbleTopAnimation  bg-[#e19e9821] md:hidden w-[10rem] absolute right-[83%] z-10 top-[30%] h-[10rem] rounded-[50%]'></span>
                <span className='bubbleRightAnimation bg-[#9f9dd421] md:hidden w-[15rem] absolute right-[53%] z-10 top-[15%] h-[15rem] rounded-[50%]'></span>
                <span className='bubbleLeftAnimation bg-[#6298a721] md:hidden w-[8rem] absolute right-[70%] z-10 top-[70%] h-[8rem] rounded-[50%]'></span>


                <div className='w-6/12 flex justify-center md:h-full h-screen md:items-start items-center md:w-full md:scale-[0.85]  md:mt-[5rem]'>

                    <SlideShow />

                </div>

            </div>


            <div className='mt-[20rem] mb-[20rem] md:my-[10rem] flex flex-row md:flex-col  shadow-2xl font-[Bhoma] w-10/12 bg-gradient-to-r from-[#1c0f31] to-[#161136] rounded-[20px]  mx-auto'>
                <div className='w-3/12 md:w-full shadow-2xl rounded-[15px] py-5'>
                    <p className='text-[#d6d6d6] text-center text-[1.5rem] shadow-lg'> ارسال سریع</p>
                    <div className="w-5/12 mx-auto opacity-[0.7]">
                        <Image className="w-5/12 mx-auto opacity-[0.7]" src={expressDelivery} />
                    </div>
                    <p className='text-white text-center opacity-[0.7]'>تحویل تا 2 ساعت بعد از سفارش</p>
                </div>
                <div className=' w-3/12 md:w-full pb-[2rem] boxShadow2x overflow-hidden bg-gradient-to-r from-[#511e62] relative to-[#421b71] rounded-[10px] scale-110 transition-all duration-200 '>
                    <span className='bg-[#95959541] rounded-[50%] w-[10rem] h-[10rem] absolute left-[60%] bottom-[60%]'></span>
                    <p className='text-[#d6d6d6]  pl-5 py-2 text-[1.75rem]'> کیفت مناسب</p>
                    <div className="w-4/12 mx-auto opacity-[0.6] mt-3">
                        <Image className='' src={guarantee} />
                    </div>
                    <p className='text-white text-center opacity-[0.7] mt-2'>غذای های  برتر و کم یاب</p>
                </div>
                <div className='w-3/12 md:w-full shadow-2xl text-center py-5'>
                    <p className='text-[#d6d6d6] text-[1.5rem]'> ضمانت کالا </p>
                    <div className="w-5/12 mx-auto mt-1">
                        <Image className='' src={offerLogo} />
                    </div>
                    <p className='text-white text-center opacity-[0.7]'>ضمانت تقلبی نبودن محصول</p>
                </div>
                <div className='w-3/12 md:w-full pb-[2rem] shadow-2xl rounded-[15px] text-center py-5'>
                    <p className='text-[#d6d6d6] text-[1.5rem]'> مشتری ها </p>
                    <div className="w-8/12 mx-auto">
                        <div className='w-[6.5rem] m-auto h-[6.5rem] flex justify-center items-center rounded-[50%] bg-[#66d4a165] mt-2 mb-3 ' >
                            <span className='text-white text-[2.5rem] font-[600]'>+43</span>
                        </div>
                    </div>
                    <p className='text-white text-center pt-2 opacity-[0.7]'>۴۷ مشتری فعال</p>
                </div>
            </div>

            <p className='text-center text-[2rem] font-[Bhoma] text-[#b3b3b3]'>محصولات</p>

            {!isLoading && <div className={`mt-[3rem] mb-[1rem] py-[3rem] ${themeState === 'light' ? 'innerShadow2' : 'innerShadowDark'}  w-full flex flex-row flex-wrap justify-around`}>
                {productList}
            </div>}

            {!isLoading && <p className={`bg-[#7777ef] rounded-[15px] transition-all duration-200 cursor-pointer hover:bg-[#3f3fae] hover:scale-105 flex justify-center p-2  items-center text-white text-center w-2/12 md:w-6/12 mx-auto font-[Bhoma] ${themeState === 'light' ? 'shadow-3xl' : 'boxShadow2x'} text-[1.25rem]`}>نمایش همه</p>}
            {isLoading && <div className='my-[5rem] py-[5rem] innerShadow2 overflow-hidden flex flex-row flex-wrap justify-around'>
                <div className='w-2/12 md:w-5/12 md:my-5'>
                    {<Skeleton baseColor='#cbcbcb' className='shadow-2xl' highlightColor='white' count={1} height={280} />}
                </div>
                <div className='w-2/12 md:w-5/12 md:my-5'>
                    {<Skeleton baseColor='#cbcbcb' className='shadow-2xl' highlightColor='white' count={1} height={280} />}
                </div>
                <div className='w-2/12 md:w-5/12 md:my-5'>
                    {<Skeleton baseColor='#cbcbcb' className='shadow-2xl' highlightColor='white' count={1} height={280} />}
                </div>
                <div className='w-2/12 md:w-5/12 md:my-5'>
                    {<Skeleton baseColor='#cbcbcb' className='shadow-2xl' highlightColor='white' count={1} height={280} />}
                </div>
            </div>}



            <footer className={`bg-gradient-to-r from-[#1c0f31] to-[#161136] mt-[10rem] rounded-t-[40px] w-11/12 mx-auto flex flex-col ${themeState === 'light' ? 'uperShadow' : 'boxShadow3x'}`}>

                <div className='bg-[#8383831b] w-[95%] mx-auto my-[3rem] rounded-[10px] flex flex-row justify-between md:flex-wrap'>
                    <div className='text-[#a9a9a9] pt-3 shadow-2xl h-[10rem]  text-center w-3/12 md:w-5/12'>
                         <p className='text-[#e8e8e8] text-[1.25rem] font-[700]'>خدمات مشتریان</p>
                         <p className='mt-5 pr-3'> تحویل فوری تا 1 ساعت </p>
                         <p className='pt-1 pr-3'> تخیف ویژه مشتریان </p>
                         <p className='pt-1 pr-3'>ضمانت تقلبی نبودن محصول</p>
                    </div>
                    <div className='text-[#c2c2c2] pt-3 shadow-2xl h-[10rem] text-center w-3/12 md:w-5/12'>
                        Feed Us  اطلاعات
                    </div>
                    <div className='text-[#c2c2c2] pt-3 shadow-2xl h-[10rem] text-center w-3/12 md:w-5/12'>
                        دسته‌بندی‌ها
                    </div>
                    <div className='text-[#c2c2c2] pt-3 shadow-2xl  h-[10rem]  text-center w-3/12 md:w-5/12'>
                        Cell
                    </div>
                </div>




                <div className='flex flex-row justify-center mx-auto  w-4/12 md:w-10/12 '>

                    <div className=' w-[3rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
                        <div className='bg-neutral-400 w-[4vw] h-[4vw] md:w-[40px] md:h-[40px] rounded-[50px] flex justify-center items-center hover:bg-pink-500 py-1'>
                            <Icon icon={instagram} size={30} style={{ color: 'white' }}></Icon>
                        </div>
                    </div>
                    <div className=' w-[3rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
                        <div className='bg-neutral-400 w-[4vw] h-[4vw] md:w-[40px] md:h-[40px] rounded-[50px] flex justify-center items-center hover:bg-green-500 py-1'>
                            <Icon icon={whatsapp} size={30} style={{ color: 'white' }}></Icon>
                        </div>
                    </div>
                    <div className='w-[3rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
                        <div className='bg-neutral-400 w-[4vw] h-[4vw] md:w-[40px] md:h-[40px] rounded-[50px] flex justify-center items-center hover:bg-[#007fc9] py-1'>
                            <Icon icon={telegram} size={30} style={{ color: 'white' }}></Icon>
                        </div>
                    </div>
                    <div className='w-[3rem] mx-5 rounded-[10px] cursor-pointer hover:scale-125 transition-all duration-300'>
                        <div className='bg-neutral-400 w-[4vw] h-[4vw] md:w-[40px] md:h-[40px] rounded-[50px] flex justify-center items-center hover:bg-orange-600 py-1'>
                            <Icon icon={phone} size={30} style={{ color: 'white' }}></Icon>
                        </div>
                    </div>


                </div>

                <p className='text-[#a1a1a1] text-center  py-[1rem] text-[1rem] md:text-[0.75rem] font-[monospace]'>&copy;2023 Feed Us IR,inc.All rights reserved </p>

            </footer>



        </>
    )
}

export default Main;

