import Image from 'next/image';
import burgerMenuIcon from '../../public/images/icons/burgerMenu.webp';
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Link from "next/link";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const MobileHeaderDropDown = (props) => {

    return (
        <Menu as="div" className="relative text-center">

            <Menu.Button>
                <div className='rounded-[10px] transition-all duration-200 hover:shadow-xl'>
                    <Image src={burgerMenuIcon} />
                </div>
            </Menu.Button>

            
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute font-[Bhoma] text-[1.25rem] left-[-230%] z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link href={{ pathname: '/Products', query: { category: 'cat' } }}>
                                    <p className="text-right py-2 pr-5 hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 text-[#2e2e2e] hover:font-[600] hover:tracking-[1px]">
                                        دسته{" "}
                                    </p>
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link href="/Products">
                                    <p className="text-right py-2 pr-5 hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 text-[#2e2e2e] hover:font-[600] hover:tracking-[1px]">
                                        محصولات{" "}
                                    </p>
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link href="/AboutUs">
                                    <p className="text-right py-2 pr-5 hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 text-[#2e2e2e] hover:font-[600] hover:tracking-[1px]">
                                        تماس{" "}
                                    </p>
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default MobileHeaderDropDown;