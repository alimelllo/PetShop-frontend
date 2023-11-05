import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { ordersHandler , removeOrder , addOrder, themeHandler} from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";
import { useDispatch, useSelector } from "react-redux";


const productCard = (props) => {
    
    const selectOrderState = useSelector(ordersHandler);
    const ordersState = selectOrderState.payload.ProfileSettings.orders;
    
    const RemoveOrdersHandler = useDispatch();
    const AddOrdersHandler = useDispatch();

    const selectThemeState = useSelector(themeHandler);
    const themeState = selectThemeState.payload.ProfileSettings.theme;

    return (
        <Link href={`/Products/${props.id}`}>
            <div className={` ${props.width} rounded-[10px] flex flex-col transition-all duration-200 hover:cursor-pointer ${themeState === 'light' ? 'hover:bg-[#f5f5f5] shadow-2xl' :'bg-[#1f1f1f] boxShadow3x'} hover:scale-105 justify-between my-5`}>
                <div className={`m-3 ${ themeState === 'light' ? 'innerShadow2' : 'innerShadowDark'}  p-3 min-h-[45%] flex justify-center`}>
                    <Image width={props.imageWidth} height={props.imageHeight} src={props.productImage} />
                </div>
                <p className='text-[1rem] text-[#5c5c5c] font-[700] font-[monospace] px-3 md:text-[1rem] '>{props.name}</p>
                <p className='text-[0.8rem] mt-2 text-[#9a9a9a] font-[600] font-[monospace] px-3 md:text-[0.8rem]'> {props.description}</p>
                <p className='text-[0.9rem] text-[#272727] font-[700] font-[monospace] pl-3 mt-2 md:mt-2 md:text-[1rem] '>{props.weight ? props.weight / 1000 + "Kg" : ""}</p>

                <div className='flex flex-row justify-between'>
                 <p className='text-[1.25rem]  text-[#5484f3] font-[800] font-[monospace] pl-3 pt-3 pb-2  md:pt-3 md:text-[1.1rem]'>{props.price}</p>
                 { !ordersState.find((x) => x.id === props.id) && <p onClick={(e) =>{e.stopPropagation(); props.onClick()}} className='text-[1rem] rounded-[10px] bg-[#7698e8] text-white font-[800] font-[monospace] m-2 md:mb-3 py-1 px-3 duration-200 hover:scale-105 transition-all hover:bg-[#365ebd] cursor-pointer md:text-[0.8rem]'>Add +</p>}  
                 { ordersState.find((x) => x.id === props.id) && 
                       <div className='w-5/12  m-2 flex flex-row justify-between text-center'>
                        <p onClick={(e) => {e.stopPropagation(); RemoveOrdersHandler(removeOrder( props.data ))}}  className='bg-[#e55406] rounded-[10px] shadow-xl hover:bg-[#cd4b05] transition-all duration-200 text-white p-1 px-2 w-4/12'>-</p>
                        <p className='text-[#cd4b05] text-center font-[600] text-[1.25rem] w-4/12'>{ordersState.find((x) => x.id === props.id)?.count}</p>
                        <p onClick={(e) => {e.stopPropagation(); AddOrdersHandler(addOrder( props.data ))}} className='bg-[#e55406] rounded-[10px] shadow-xl hover:bg-[#cd4b05] transition-all duration-200  text-white p-1 px-2 w-4/12 pr-2'>+</p>
                        </div>                 
                 }                
                </div>

            </div>
        </Link>
    )
}
export default productCard;