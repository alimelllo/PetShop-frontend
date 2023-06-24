import Image from 'next/image';
import burgerMenuIcon from '../../public/images/icons/burgerMenu.webp';
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const MobileFilterDropDown = () => {
    return ( 
        <Menu as="div" className="relative text-center ">
        <div>
          <Menu.Button>
            <div className='w-full'>
              <Image src={burgerMenuIcon}/>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute font-[Bhoma] text-[1.25rem] right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block w-full px-4 py-2 text-right "
                    )}
                  >
                    پروفایل
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700",
                      "block w-full px-4 py-2 text-right "
                    )}
                  >
                    خروج
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
}

export default MobileFilterDropDown;