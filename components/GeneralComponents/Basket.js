import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import basketIcon from "../../public/images/basket.png";

export default function Basket() {
 
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  
  const arr = ['1', '2', '3', '4', '5', '6'];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
          <div className="flex h-[90%] mt-[1rem] justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-y-scroll rounded-lg bg-white shadow-xl transition-all w-8/12">
                <div className="MODAL_CONTAINER relative w-full flex flex-col ">
                  {/* ///////////////// HEADER /////////////////////// */}
                  <div className="MODAL_HEADER sticky top-0 z-50 bg-white flex flex-row shadow-xl mb-[1rem] py-[1rem] w-full ">
                    <div className="w-4/12 flex flex-row justify-start">
                      <div className="w-2/12 mx-auto ml-5 z-10">
                        <Image src={basketIcon} />
                      </div>
                    </div>
                    <div className="w-4/12 text-[gray] font-[bhoma] text-[2rem]">
                      سبد خرید
                    </div>

                    <div className="w-4/12 flex flex-row justify-end">
                      <span className="h-[3rem] mt-1 px-5 font-[700] bg-[#d11f3a] text-white rounded-[10px] mr-5 shadow-2xl hover:bg-[#9b0b20] transition-all duration-200 flex justify-center items-center cursor-pointer">
                        X
                      </span>
                    </div>
                  </div>

                  {/* ///////////////// HEADER /////////////////////// */}

                  {/* ///////////////// MODAL_BODY /////////////////////// */}
                  <div className="flex flex-col">
                    {arr.map((item) => (
                      <div className="w-[95%] shadow-xl my-4 rounded-[15px] py-4 mx-auto flex flex-row">
                        <div className="w-4/12 flex flex-row justify-start ml-5">
                          <div className="w-4/12">
                             <Image src={basketIcon} layout='responsive'/>
                          </div>
                        </div>
                        <div className="w-4/12 flex flex-col justify-between">
                          <p className="text-[1.5rem] text-[#626262] font-[600]">
                            Royal Canin biscuits
                          </p>
                          <p className="text-[2rem] text-[#e43419] font-[600] font-[bhoma] tracking-[4px]">
                            <span className="text-[#fd8c7a] tracking-[0px] text-[1.5rem] pl-5"> تومان </span> 198,000{" "}
                          </p>
                        </div>
                        <div className="w-4/12 flex flex-row justify-end mr-5">
                          <div className="flex flex-col justify-between w-6/12">
                            <p className="font-[600] text-[2rem] w-10/12 mx-auto pb-2 text-[#a9341a] border-b-solid border-b-[1px] border-b-[#85250f]">1</p>
                            <div className="flex flex-row justify-around pt-5">
                              <p className="text-[1.5rem] border-[2px] border-solid border-[#df2f07] text-[#df2f07] hover:bg-[#df2f07]  hover:text-white px-3 rounded-[15px] shadow-xl transition-all duration-200 cursor-pointer">-</p>
                              <p className="text-[1.5rem] border-[2px] border-solid border-[#df2f07] text-[#df2f07] hover:bg-[#df2f07]  hover:text-white px-2 rounded-[15px] shadow-xl transition-all duration-200 cursor-pointer">+</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}


                  </div>


                  {/* ///////////////// MODAL_BODY /////////////////////// */}
                  
                
                  {/* ///////////////// FOOTER /////////////////////// */}
                  <div className=" bg-[white] w-full flex flex-row justify-between py-[1rem] sticky bottom-0 uperShadow">
                    <div className="w-4/12 flex flex-row justify-start items-center">
                        <button className="ml-5 outline-none bg-[#e1561f] hover:bg-[#be410f] transition-all duration-200 hover:scale-105 p-3 font-[600] px-5 text-white rounded-[15px] shadow-2xl">+ افزودن به سبد</button>
                    </div>
                    <div className="p-1 font-[bhoma] flex flex-row justify-around w-4/12 text-[2rem]">
                      <p className="text-[#e05721] font-[600]">155,0000</p>
                      <p className="font-[700] text-[#5b5b5b] text-[1.75rem] pt-1">: جمع کل  </p>
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
