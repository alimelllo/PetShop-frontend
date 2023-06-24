import Image from 'next/image';
import Link from 'next/link';
import React from "react";


const productCard = (props) => {
    return (
        <Link href={`/Products/${props.id}`}>
            <div className={`shadow-2xl ${props.width} rounded-[10px] flex flex-col  justify-between my-5`}>
                <div className='m-3 innerShadow2 p-3 min-h-[45%] flex justify-center'>
                    <Image width={props.imageWidth} height={props.imageHeight} src={props.productImage} />
                </div>
                <p className='text-[1rem] text-[#5c5c5c] font-[700] font-[monospace] px-3 md:text-[1rem] '>{props.name}</p>
                <p className='text-[0.8rem] mt-2 text-[#9a9a9a] font-[600] font-[monospace] px-3 md:text-[0.8rem]'> {props.description}</p>
                <p className='text-[0.9rem] text-[#272727] font-[700] font-[monospace] pl-3 mt-2 md:mt-2 md:text-[1rem] '>{props.weight ? props.weight / 1000 + "Kg" : ""}</p>

                <div className='flex flex-row justify-between'>
                    <p className='text-[1.25rem]  text-[#5484f3] font-[800] font-[monospace] pl-3 pt-3 md:pt-2 md:text-[1.1rem]'>{props.price}</p>
                    <p className='text-[1rem] rounded-[10px] bg-[#7698e8] text-white font-[800] font-[monospace] m-2 md:mb-3 py-1 px-3 duration-200 hover:scale-105 transition-all hover:bg-[#365ebd] cursor-pointer md:text-[0.8rem]'>Add +</p>
                </div>
            </div>
        </Link>
    )
}
export default productCard;