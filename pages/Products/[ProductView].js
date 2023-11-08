import Image from "next/image";
import { useState } from "react";
import Header from "../../components/GeneralComponents/Header";
import productService from "../../Services/ProductsServices/product.service";
import { ordersHandler , removeOrder , addOrder, themeHandler} from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";
import { useDispatch, useSelector } from "react-redux";

const ProductView = (props) => {

    const [image, SetImage] = useState(props.product[0].productImage);

 
    const selectOrderState = useSelector(ordersHandler);
    const ordersState = selectOrderState.payload.ProfileSettings.orders;
    
    const RemoveOrdersHandler = useDispatch();
    const AddOrdersHandler = useDispatch();

    const selectThemeState = useSelector(themeHandler);
    const themeState = selectThemeState.payload.ProfileSettings.theme;
    

    return (
        <div>
            <Header />
            <div className="w-full flex flex-row h-screen overflow-hidden md:overflow-y-scroll md:flex-col">
             
                <div className="w-6/12 flex flex-col pt-[4rem] justify-center md:w-full ">
                 
                    <div className="w-9/12 md:w-11/12 flex p-2 justify-center md:mt-3 min-h-[20rem] md:min-h-[10rem] mx-auto rounded-[15px]">
                        <Image width={300} height={300} src={image} />
                    </div>
                    <div className="w-9/12 md:w-11/12 flex flex-row justify-start mt-5 min-h-[4rem] mx-auto rounded-[15px]">
                        {props.images.map((item) => (
                            <div onClick={() => SetImage(item.images)} className="w-[18%] cursor-pointer shadow-xl rounded-[10px] pt-2 ml-3">
                                <Image width={300} height={280} src={item.images} />
                            </div>
                        ))}
                    </div>
                </div>
              
                <div className={`w-6/12 justify-center ${themeState === 'light' ? 'md:bg-[#f2f2f2]' : 'md:bg-[#1b1b1b]'} flex flex-col pr-5 mt-5 md:w-full md:px-5  md:mb-[5rem] md:innerShadow`}>
                    <p className={` ${themeState === 'light' ? 'border-b-solid border-b-[#eeeeee]' : 'border-b-solid border-b-[#7a7a7a]'} text-[gray] pb-3 text-right  border-b-[2px] text-[2rem]`}>{props.product[0].name}</p>
                    <div className=" pt-3 text-center flex flex-row justify-between">
                        <p className="text-[1.5rem] pt-2 text-[gray] ">{props.product[0].description}</p>
                        <p className="font-[bhoma] text-[1.75rem] text-[#5d5d5d]">: توضیحات </p>
                    </div>
                    <div className="font-[bhoma] mt-[1rem] text-center  flex flex-row justify-between">
                        <p className="text-[1.5rem] pt-2 text-[gray] ">{props.product[0].weight / 1000} kg</p>
                        <p className="text-[1.75rem] text-[#5d5d5d]">: وزن </p>
                    </div>
                    <div className="font-[bhoma] mt-[1rem] text-center  flex flex-row justify-between">
                        <p className="text-[1.5rem] font-[400] pt-2 text-[gray] ">1402/6/31</p>
                        <p className="text-[1.75rem] text-[#5d5d5d]">: انقضا </p>
                    </div>
                    <div className="font-[bhoma] mt-[1rem] text-center  flex flex-row justify-between">
                        <p className="text-[1.5rem] font-[400] pt-2 text-[gray] ">{props.product[0].productGroup} </p>
                        <p className="text-[1.75rem] text-[#5d5d5d]">: دسته بندی </p>
                    </div>
                    <div className={`${themeState === 'light' ? 'border-b-solid border-b-[#eeeeee] border-b-[2px]' : 'border-b-solid border-b-[#7a7a7a] border-b-[2px]'}  pb-3  font-[bhoma] mt-[1rem] text-center  flex flex-row justify-between`}>
                        <p className="text-[1.75rem] font-[400] pt-2 text-[#e1691f] ">{props.product[0].price} تومان</p>
                        <p className="text-[1.75rem] text-[#5d5d5d] pt-2">: قیمت</p>
                    </div>
                    <div className={`font-[bhoma] mt-[1rem] text-[1.25rem] text-center  flex flex-row justify-between md:justify-center md:fixed md:left-0 md:top-[87%] md:py-4 md:w-full ${themeState === 'light' ? 'md:bg-[white]' : 'md:bg-[#171717]'}`}>
                        {!ordersState.find((x) => x.id === props.product[0].id) &&
                         <button onClick={()=>  AddOrdersHandler(addOrder(props.product[0]))} className="bg-[#e1561f] hover:bg-[#be410f] transition-all duration-200 hover:scale-105 p-2 px-5 text-white rounded-[15px] md:w-11/12 shadow-2xl">+ افزودن به سبد</button>}                    
                        { ordersState.find((x) => x.id === props.product[0].id) &&
                        <div className="flex flex-row justify-between w-full">
                            <div className="w-6/12 md:w-4/12 flex md:ml-2 flex-row md:justify-around ">
                                <p onClick={() => {  RemoveOrdersHandler(removeOrder(props.product[0])) }} className='bg-[#e55406] cursor-pointer rounded-[10px] shadow-xl hover:bg-[#cd4b05] transition-all duration-200 text-white p-1 pb-2 w-2/12 md:w-3/12'>-</p>
                                <p className='text-[#e54623] text-center font-[600] text-[1.5rem] w-4/12'>{ordersState.find((x) => x.id === props.product[0].id)?.count}</p>
                                <p onClick={() => {  AddOrdersHandler(addOrder(props.product[0])) }} className='bg-[#e55406] cursor-pointer rounded-[10px] shadow-xl hover:bg-[#cd4b05] transition-all duration-200  text-white p-1 pb-2  w-2/12 md:w-3/12 '>+</p>
                            </div>
                            <div className="w-6/12 md:w-7/12 flex flex-row justify-between md:justify-around text-right ">
                                <p className="text-[#e54623] text-right font-[600] text-[1.5rem]">{` ${ordersState.find((x) => x.id === props.product[0].id)?.price * ordersState.find((x) => x.id === props.product[0].id)?.count}  تومان`}</p>
                                <p className="text-[#6e2110] text-right font-[600] text-[1.5rem]">: جمع </p>
                            </div>
                        </div>
                            
                        }
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export async function getStaticPaths() {

    const ProductIds = await productService.getAllProductIds();
    const loadedPaths = ProductIds.data.map((item) => ({ params: { ProductView: String(item.id) } }));
    return {
        paths: loadedPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const params = context.params.ProductView;

    const imagesResult = await productService.GetAllProductImages(params);
    const productResult = await productService.getProductById(params);

    return {
        props: {
            product: productResult.data,
            images: imagesResult.data
        }
    }
}

export default ProductView;