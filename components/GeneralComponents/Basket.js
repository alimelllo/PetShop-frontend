import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import basketIcon from "../../public/images/basket.png";
import { showBasketHandler , ordersHandler , removeOrder , addOrder} from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function Basket() {

  const selectShowBasketState = useSelector(showBasketHandler);
  const showBasketState = selectShowBasketState.payload.ProfileSettings.showBasket;
  const SetShowBasketHandler = useDispatch();

  const selectOrderState = useSelector(ordersHandler);
  const ordersState = selectOrderState.payload.ProfileSettings.orders;
  
  const RemoveOrdersHandler = useDispatch();
  const AddOrdersHandler = useDispatch();

  const cancelButtonRef = useRef(null);
  
  const countTotalSome = () => {
    let sum = 0;
    for(let i=0 ; i < ordersState.length; i ++){
      sum = sum + (ordersState[i].price * ordersState[i].count)
    }
    return sum;
  }
  
  return (
    <Transition.Root show={showBasketState} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => SetShowBasketHandler(showBasketHandler(false))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#04040496] bg-opacity-75 transition-opacity " />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-hidden h-screen">
          <div className="flex h-[85%] md:h-[95%] mt-[1rem] justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={`fadeLoadAnimation relative transform ${ ordersState.length > 0 ? 'overflow-y-scroll' : 'overflow-y-hidden'} rounded-lg bg-white shadow-xl transition-all w-8/12 md:w-full`}>
                <div className="MODAL_CONTAINER bg-white relative w-full flex flex-col ">
                  {/* ///////////////// HEADER /////////////////////// */}
                  <div className="MODAL_HEADER sticky top-0 z-50 bg-white flex flex-row shadow-xl mb-[1rem] py-[1rem] w-full">
                    <div className="w-4/12 flex flex-row justify-start">
                      <div className="w-2/12 md:w-4/12 mx-auto ml-5 z-10">
                        <Image src={basketIcon} />
                      </div>
                    </div>
                    <div className="w-4/12 text-[gray] font-[bhoma] text-[2rem] md:text-[1.5rem]">
                      سبد خرید
                    </div>

                    <div className="w-4/12 flex flex-row justify-end">
                      <span onClick={() => SetShowBasketHandler(showBasketHandler(false))} className="h-[3rem] md:h-[2.5rem] mt-1 px-5 font-[700] bg-[#d11f3a] text-white rounded-[10px] mr-5 shadow-2xl hover:bg-[#9b0b20] transition-all duration-200 flex justify-center items-center cursor-pointer">
                        X
                      </span>
                    </div>
                  </div>

                  {/* ///////////////// HEADER /////////////////////// */}

                  {/* ///////////////// MODAL_BODY /////////////////////// */}
                  <div className="flex flex-col bg-white pb-5 h-screen">
                    { ordersState.map(( item) => (
                      <div className="w-[95%] border-[1px] bg-[white] border-solid border-[#acacac] my-2 rounded-[10px] py-4 md:py-3 mx-auto flex flex-row">
                        <div className="w-4/12 md:w-3/12 flex flex-row justify-start ml-5 md:ml-1">
                          <div className="w-4/12 md:w-full">
                             <Image height={150} width={130} src={item.productImage} layout='responsive'/>
                          </div>
                        </div>
                        <div className="w-4/12 md:w-5/12 flex flex-col justify-between md:justify-around">
                          <p className="text-[1.5rem] md:text-[1.2rem] text-[#626262] font-[600]">
                            {item.name}
                          </p>
                          <p className="text-[2rem] md:text-[1rem] text-[#e43419] font-[600] font-[bhoma] tracking-[4px]">
                            <span className="text-[#fd8c7a] tracking-[0px] text-[1.5rem] md:text-[0.75rem] pl-5 "> تومان </span> {item.price}{" "}
                          </p>
                        </div>
                        <div className="w-4/12 md:w-3/12 flex flex-row justify-end mr-5 md:pr-2">
                          <div className="flex flex-col justify-between w-6/12">
                            <p className="font-[600] text-[1.75rem] mx-auto text-center px-3 text-[#a9341a] border-solid border-[2px] rounded-[10px] border-[#75210f]">{item.count}</p>
                            <div className=" flex flex-row justify-center pt-5">
                              <p onClick={() => RemoveOrdersHandler(removeOrder( item ))} className="text-[1.5rem] mx-2 border-[2px] border-solid bg-[#5d1a0b] hover:bg-[#a32b10] text-white px-3 rounded-[15px] shadow-xl transition-all duration-200 cursor-pointer">-</p>
                              <p onClick={() => AddOrdersHandler(addOrder( item ))} className="text-[1.5rem] mx-2 border-[2px] border-solid bg-[#75210f] hover:bg-[#a32b10] text-white px-2 rounded-[15px] shadow-xl transition-all duration-200 cursor-pointer">+</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    { ordersState.length === 0 && 
                    <div className="text-center text-[#969696] flex justify-center items-center">
                          <p className="mt-[7rem] text-[2.5rem] md:text-[1.5rem] font-[bhoma]">سبد خرید خالی است</p>
                    </div>
                    }
                  </div>


                  {/* ///////////////// MODAL_BODY /////////////////////// */}
                  
                
                  {/* ///////////////// FOOTER /////////////////////// */}
                  <div className=" bg-[white] w-full flex flex-row justify-between py-[1rem] sticky bottom-0 uperShadow">
                    <div className="w-4/12 md:w-5/12 md:text-[1rem] flex flex-row justify-start items-center">
                      <Link href={'/Factor'}>
                         <button onClick={() => SetShowBasketHandler(showBasketHandler(false))} className={`ml-5 font-[bhoma] outline-none bg-[#e1561f] hover:bg-[#be410f] transition-all duration-200 hover:scale-105 p-3  md:px-5 font-[600] px-10 text-white rounded-[15px] shadow-2xl`}>تکمیل خرید </button>
                      </Link>
                    </div>
                    <div className="p-1 font-[bhoma] flex flex-row justify-around w-4/12 md:w-6/12 text-[2rem] md:text-[1.5rem]">
                      <p className="text-[#e05721] font-[600]">{countTotalSome()}</p>
                      {/* <p className="font-[700] text-[#5b5b5b] text-[1.75rem] pt-1 md:text-[1.25rem]">: جمع کل  </p> */}
                    </div>
                  </div>
                 {/* ///////////////// FOOTER /////////////////////// */}


                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
