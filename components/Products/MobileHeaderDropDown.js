import Image from 'next/image';
import burgerMenuIcon from '../../public/images/icons/burgerMenu.webp';
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import {
    themeHandler
} from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";
import { useSelector } from "react-redux";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const MobileHeaderDropDown = (props) => {

    const selectThemeState = useSelector(themeHandler);
    const themeState = selectThemeState.payload.ProfileSettings.theme;

    const [showProductGroups, SetShowProductGroups] = useState(false);
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
                    <div className="">
                        <Menu as="div" className="relative text-center">
                            <div onClick={() => SetShowProductGroups(!showProductGroups)} className={`flex justify-end hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 text-[#2e2e2e] hover:font-[600] hover:tracking-[1px]  ${themeState === 'light' ? 'bg-gray-100 text-[#5c5c5c]' : 'bg-[#242424] hover:bg-[#1a1a1a] text-[#bfbfbf]'}`}>
                                <Menu.Button>

                                    <p className={`text-right py-2 pr-5  `}>
                                        <span className={`${showProductGroups ? 'rotate-[-45deg]' : 'rotate-0'} transition-all duration-200`}>{"<"}</span>
                                        {" "}
                                        دسته{" "}
                                    </p>
                                </Menu.Button>
                            </div>
                        </Menu>

                        {showProductGroups &&
                            props.productGroups.map((item) => (
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={`w-full flex justify-between ${themeState === 'light' ? 'bg-gray-100 text-[#5c5c5c]' : 'bg-[#242424] hover:bg-[#1a1a1a] text-[#bfbfbf]'}`}>
                                            <Link href={{ pathname: '/Products', query: { category: item.categoryName } }}>
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        `block w-full pr-5 py-2 text-right ${themeState === 'light' ? 'bg-gray-100 text-[#5c5c5c] hover:bg-gray-200 transition-all duration-150' : 'bg-[#242424] hover:bg-[#1a1a1a] text-[#bfbfbf]'}`
                                                    )}>
                                                    {item.title}
                                                </button>
                                            </Link>
                                        </div>
                                    )}
                                </Menu.Item>
                            ))
                        }
                        <Menu.Item>
                            {({ active }) => (
                                <Link href="/Products">
                                    <p className={`text-right  ${themeState === 'light' ? 'bg-gray-100 text-[#5c5c5c]' : 'bg-[#242424] hover:bg-[#1a1a1a] text-[#bfbfbf]'} py-2 pr-5 hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 hover:font-[600] hover:tracking-[1px]`}>
                                        محصولات{" "}
                                    </p>
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link href="/AboutUs">
                                    <p className={`  ${themeState === 'light' ? 'bg-gray-100 text-[#5c5c5c]' : 'bg-[#242424] hover:bg-[#1a1a1a] text-[#bfbfbf]'} text-right py-2 pr-5 hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-105 hover:font-[600] hover:tracking-[1px]`}>
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