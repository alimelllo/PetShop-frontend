import Image from "next/image";
import { useState } from "react";
import Header from "../../components/GeneralComponents/Header";
import productService from "../../Services/ProductsServices/product.service";

const ProductView = (props) => {

    const [ image , SetImage ] = useState(props.product[0].productImage)
    console.log(props);

    return (
        <div>
            <Header />
            <div className="w-full flex flex-row items-center h-screen overflow-hidden">
                <div className="w-6/12 flex flex-col mt-[4rem]">
                    <div className="w-9/12 flex p-2 justify-center bg-[#f8f8fd] shadow-xl min-h-[20rem] mx-auto rounded-[15px]">
                        <Image width={300} height={300} src={image} />
                    </div>
                    <div className="w-9/12 flex flex-row justify-start mt-5 min-h-[4rem] mx-auto rounded-[15px]">
                        {props.images.map((item) => (
                            <div onClick={() => SetImage(item.images)} className="w-[18%] cursor-pointer shadow-xl rounded-[10px] pt-2 ml-3">
                                <Image width={300} height={280} src={item.images} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-6/12 flex flex-col pr-5 mt-5">
                    <p className=" text-[gray] pb-3 text-right border-b-solid border-b-[#eeeeee] border-b-[2px] text-[2rem]">{props.product[0].name}</p>
                    <div className="font-[bhoma] pt-3 text-center  flex flex-row justify-between">
                        <p className="text-[1.5rem] pt-2 text-[gray] ">{props.product[0].description}</p>
                        <p className="text-[1.75rem] text-[#5d5d5d]">: توضیحات </p>
                    </div>
                    <div className="font-[bhoma] mt-[1rem] text-center  flex flex-row justify-between">
                        <p className="text-[1.5rem] pt-2 text-[gray] ">{props.product[0].weight}</p>
                        <p className="text-[1.75rem] text-[#5d5d5d]">: وزن </p>
                    </div>
                    <div className="font-[bhoma] mt-[1rem] text-center  flex flex-row justify-between">
                        <p className="text-[1.5rem] font-[400] pt-2 text-[gray] ">1402/6/31</p>
                        <p className="text-[1.75rem] text-[#5d5d5d]">: انقضا </p>
                    </div>
                    <div className="font-[bhoma] mt-[1rem] text-center  flex flex-row justify-between">
                        <p className="text-[1.5rem] font-[400] pt-2 text-[gray] ">غذای گربه</p>
                        <p className="text-[1.75rem] text-[#5d5d5d]">{props.product[0].productGroup}</p>
                    </div>
                    <div className="  border-b-solid pb-3 border-b-[#eeeeee] border-b-[2px] font-[bhoma] mt-[1rem] text-center  flex flex-row justify-between">
                        <p className="text-[1.5rem] font-[400] pt-2 text-[#e1691f] ">{props.product[0].price} ریال</p>
                        <p className="text-[1.75rem] text-[#5d5d5d]">: قیمت</p>
                    </div>
                    <div className="font-[bhoma] mt-[1rem] text-[1.25rem] text-center  flex flex-row justify-between">
                        <button className="bg-[#e1691f] hover:bg-[#c7540d] transition-all duration-200 hover:scale-105 p-2 text-white rounded-[15px] ">+ افزودن به سبد</button>
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