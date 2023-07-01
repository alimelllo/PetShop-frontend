import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import basketIcon from "../../public/images/basket.png";

export default function Basket() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

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
          <div className="fixed inset-0 bg-[#04040496] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed  inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-[60%] mt-[3rem] items-end justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all w-8/12">
                <div className="MODAL_CONTAINER w-full flex flex-col pb-[1rem]">
                  {/* ///////////////// HEADER /////////////////////// */}

                  <div className="MODAL_HEADER flex flex-row shadow-xl mb-[1rem] py-[1rem] w-full ">
                    <div className="w-4/12 flex flex-row justify-start">
                      <div className="w-2/12 mx-auto ml-5">
                        <Image src={basketIcon} layout="responsive" />
                      </div>
                    </div>
                    <div className="w-4/12 text-[gray] font-[bhoma] text-[2rem]">
                      سبد خرید
                    </div>

                    <div className="w-4/12 flex flex-row justify-end">
                      <span className="p-2 px-5 font-[700] bg-[#d11f3a] text-white rounded-[10px] mr-5 shadow-2xl hover:bg-[#9b0b20] transition-all duration-200 flex justify-center items-center cursor-pointer">
                        X
                      </span>
                    </div>
                  </div>

                  {/* ///////////////// HEADER /////////////////////// */}

                  {/* ///////////////// MODAL_BODY /////////////////////// */}
<div className="flex flex-col h-[100%] overflow-y-scroll">
<div className="w-[95%]  border-b-[2px] border-b-solid border-b-[#b7b7b7] py-5 mx-auto flex flex-row">
                    <div className="w-4/12 flex flex-row justify-start ml-5">
                      <div className="w-4/12">
                        <Image src={basketIcon} />
                      </div>
                    </div>
                    <div className="w-4/12 flex flex-col justify-between">
                      <p className="text-[1.5rem] text-[#626262] font-[600]">
                        Royal Canin biscuits
                      </p>
                      <p className="text-[2rem] text-[#e43419] font-[700] font-[bhoma] tracking-[4px]">
                        <span className="text-[#fd8c7a] tracking-[0px] text-[1.5rem] pl-5"> تومان </span> 198,000{" "}
                      </p>
                    </div>
                    <div className="w-4/12 flex flex-row justify-end mr-5">
                      <div className="flex flex-col justify-between w-6/12">
                        <p className="font-[600] text-[2rem] pb-5">1</p>
                        <div className="flex flex-row justify-around ">
                          <p className="text-[1.5rem] border-[2px] border-solid border-[#df2f07] text-[#df2f07] hover:bg-[#df2f07]  hover:text-white p-[1px] pb-1 px-4 rounded-[10px] shadow-xl transition-all duration-200 cursor-pointer">-</p>
                          <p className="text-[1.5rem] border-[2px] border-solid border-[#df2f07] text-[#df2f07] hover:bg-[#df2f07]  hover:text-white p-[1px] pb-1 px-4 rounded-[10px] shadow-xl transition-all duration-200 cursor-pointer">+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[95%] border-b-[2px] border-b-solid border-b-[#b7b7b7] py-5 mx-auto flex flex-row">
                    <div className="w-4/12 flex flex-row justify-start ml-5">
                      <div className="w-4/12">
                        <Image src={basketIcon} />
                      </div>
                    </div>
                    <div className="w-4/12 flex flex-col justify-between">
                      <p className="text-[1.5rem] text-[#626262] font-[600]">
                        Royal Canin Persian
                      </p>
                      <p className="text-[2rem] text-[#e43419] font-[700] font-[bhoma] tracking-[4px]">
                        <span className="text-[#e77c6c] tracking-[0px] text-[1.5rem] pl-5"> تومان </span> 210,000{" "}
                      </p>
                    </div>
                    <div className="w-4/12 flex flex-row justify-end mr-5">
                      <div className="flex flex-col justify-between w-6/12">
                        <p className="font-[600] text-[2rem] pb-5">1</p>
                        <div className="flex flex-row justify-around ">
                          <p className="text-[1.5rem] border-[2px] border-solid border-[#df2f07] text-[#df2f07] hover:bg-[#df2f07]  hover:text-white p-[1px] pb-1 px-4 rounded-[10px] shadow-xl transition-all duration-200 cursor-pointer  ">-</p>
                          <p className="text-[1.5rem] border-[2px] border-solid border-[#df2f07] text-[#df2f07] hover:bg-[#df2f07]  hover:text-white p-[1px] pb-1 px-4 rounded-[10px] shadow-xl transition-all duration-200 cursor-pointer">+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[95%] border-b-[2px] border-b-solid border-b-[#b7b7b7] py-5 mx-auto flex flex-row">
                    <div className="w-4/12 flex flex-row justify-start ml-5">
                      <div className="w-4/12">
                        <Image src={basketIcon} />
                      </div>
                    </div>
                    <div className="w-4/12 flex flex-col justify-between">
                      <p className="text-[1.5rem] text-[#626262] font-[600]">
                        Felix Dyjestive biscuits
                      </p>
                      <p className="text-[2rem] text-[#e43419] font-[700] font-[bhoma] tracking-[4px]">
                        <span className="text-[#e77c6c] tracking-[0px] text-[1.5rem] pl-5"> تومان </span> 345,000{" "}
                      </p>
                    </div>
                    <div className="w-4/12 flex flex-row justify-end mr-5">
                      <div className="flex flex-col justify-between w-6/12">
                        <p className="font-[600] text-[2rem] pb-5">1</p>
                        <div className="flex flex-row justify-around">
                          <p className="text-[1.5rem] border-[2px] border-solid border-[#df2f07] text-[#df2f07] hover:bg-[#df2f07]  hover:text-white p-[1px] pb-1 px-4 rounded-[10px] shadow-xl transition-all duration-200 cursor-pointer">-</p>
                          <p className="text-[1.5rem] border-[2px] border-solid border-[#df2f07] text-[#df2f07] hover:bg-[#df2f07]  hover:text-white p-[1px] pb-1 px-4 rounded-[10px] shadow-xl transition-all duration-200 cursor-pointer">+</p>
                        </div>
                      </div>
                    </div>
                  </div>
</div>
                  
                  
                  {/* ///////////////// MODAL_BODY /////////////////////// */}
                  <div className="fixed bg-[white] w-full  py-[1.75rem] top-[86%] uperShadow">
footer
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
