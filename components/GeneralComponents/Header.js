import React, { Fragment } from "react";
import Image from "next/image";
import BasketIcon from "../../public/images/basket.png";
import logo from "../../public/images/feedUsLogo.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import {
  isLoggedInHandler,
  showBasketHandler,
  ordersHandler,
  themeHandler,
} from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";
import { useDispatch, useSelector } from "react-redux";
import Basket from "../GeneralComponents/Basket";
import productService from "../../Services/ProductsServices/product.service";
import MobileHeaderDropDown from "../Products/MobileHeaderDropDown";
import ThemeToggle from "./ThemeToggle";
import darkIcon from "../../public/images/icons/darkIcon.jpg";
import lightIcon from "../../public/images/icons/lightIcon.png";
import { skeleton } from "../../components/Main/Main.js";
import Skeleton from "react-loading-skeleton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = (props) => {
  const [productGroups, SetProductGroups] = useState([]);
  const [productGroupsIsLoading, SetProductGroupsIsLoading] = useState(true);

  const selectState = useSelector(isLoggedInHandler);
  const isLoggedInState = selectState.payload.ProfileSettings.isLoggedIn;
  const SetIsLoggedInHandler = useDispatch();

  const selectShowBasketState = useSelector(showBasketHandler);
  const showBasketState =
    selectShowBasketState.payload.ProfileSettings.showBasket;
  const SetShowBasketHandler = useDispatch();

  const selectOrderState = useSelector(ordersHandler);
  const ordersState = selectOrderState.payload.ProfileSettings.orders;

  const selectThemeState = useSelector(themeHandler);
  const themeState = selectThemeState.payload.ProfileSettings.theme;
  const SetThemeHandler = useDispatch();

  useEffect(() => {
    //  const link = document.querySelector('#pwa-manifest');
    //  link.setAttribute('href','/manifestDark.json')
    console.log("Current Theme : " + " " + themeState);
  }, [themeState]);

  useEffect(() => {
    SetProductGroupsIsLoading(true);
    productService.getAllProductGroups().then((resp) => {
      SetProductGroups(resp.data);
      SetProductGroupsIsLoading(false);
    });
    SetProductGroupsIsLoading(false);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("userName")) {
      SetIsLoggedInHandler(isLoggedInHandler(true));
    } else if (
      !localStorage.getItem("token") ||
      !localStorage.getItem("userName")
    ) {
      SetIsLoggedInHandler(isLoggedInHandler(false));
    }
  }, []);

  const { asPath } = useRouter();

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    themeState === "dark"
      ? (document.body.style.background = "#141414")
      : (document.body.style.background = "#ffffff");
  }, [themeState]);

  return (
    <header
      className={`flex flex-row w-full py-3 ${asPath !== "/" &&
        ` ${themeState === "dark"
          ? "bg-[#101010] boxShadow2x"
          : "bg-white shadow-2xl"
        }`
        }  ${clientWindowHeight > 30
          ? ` ${themeState === "dark"
            ? "bg-[#101010] boxShadow2x"
            : "bg-white shadow-2xl"
          }`
          : `${themeState === "dark"
            ? "bg-[#101010] boxShadow2x"
            : "bg-transparent md:bg-[white] md:shadow-2xl"
          }`
        } transition-all duration-300 fixed top-[-0.25%] justify-between text-white z-50 font-[Bhoma] md:py-2 ${themeState === "dark"
          ? "md:bg-[#101010] boxShadow2x"
          : "bg-transparent md:bg-[white] md:shadow-2xl"
        } `}
    >
      {showBasketState && <Basket />}

      <div className="hidden md:flex w-1/12 ml-2 mt-2">
        <MobileHeaderDropDown productGroups={productGroups} />
      </div>

      <div
        className={`w-6/12 flex flex-row justify-between items-center ${themeState === "light" ? "text-[#505050]" : "text-[#919191]"
          }  text-center text-[1.25rem] md:text-[1rem]`}
      >
        {asPath !== "/" ? (
          <div className="w-[22%] md:w-[50%] md:ml-2 ml-5 cursor-pointer">
            <Link href="/">
              <Image src={logo} />
            </Link>
          </div>
        ) : (
          <div className="w-[22%] md:w-[50%] md:ml-2 ml-5 md:pt-1 ">
            <Image src={logo} />
          </div>
        )}

        <div className="flex flex-row w-8/12 justify-between md:hidden">
          <Link href="/AboutUs">
            <p
              className={`h-[3rem] md:h-[2rem] md:py-0 px-5 flex items-center  md:px-3 md:font-[700] ml-[10rem] md:ml-0 mx-5 hover:shadow-xl rounded-[20px] md:mx-0  cursor-pointer transition-all duration-200 hover:scale-105 ${themeState === "light"
                ? "hover:text-[#1a1a1a]"
                : "hover:text-[#c0c0c0]"
                } hover:font-[600] hover:tracking-[1px]`}
            >
              تماس{" "}
            </p>
          </Link>
          <Link href="/Products">
            <p
              className={`h-[3rem] md:h-[2rem] md:py-0 px-5 flex items-center  md:px-3 md:font-[700] mx-5 hover:shadow-xl rounded-[20px] md:mx-0 cursor-pointer transition-all duration-200 hover:scale-105 ${themeState === "light"
                ? "hover:text-[#1a1a1a]"
                : "hover:text-[#c0c0c0]"
                } hover:font-[600] hover:tracking-[1px]`}
            >
              محصولات
            </p>
          </Link>
          {
            <Menu as="div" className="relative text-center">
              <div>
                <Menu.Button>
                  <p
                    className={`h-[3rem] md:h-[2rem] md:py-0 px-5 flex items-center  md:px-3 md:font-[700] mx-5 hover:shadow-xl rounded-[20px] md:mx-0 cursor-pointer transition-all duration-200 hover:scale-105 ${themeState === "light"
                      ? "hover:text-[#1a1a1a]"
                      : "hover:text-[#c0c0c0]"
                      } hover:font-[600] hover:tracking-[1px]`}
                  >
                    {" "}
                    دسته{" "}
                  </p>
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
                  {productGroupsIsLoading && (
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`w-full flex justify-between ${themeState === "light"
                            ? "bg-gray-100 text-[#5c5c5c]"
                            : "bg-[#242424] hover:bg-[#1a1a1a] text-[#bfbfbf]"
                            }`}
                        >
                          <div className="w-[80%] mx-auto my-4">
                            <Skeleton
                              count={3}
                              baseColor="#e1dfdff4"
                              height={"1.25rem"}
                              highlightColor="white"
                              className="my-3"
                            />
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  )}

                  {!productGroupsIsLoading &&
                    productGroups.map((item) => (
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`w-full flex justify-between ${themeState === "light"
                              ? "bg-gray-100 text-[#5c5c5c]"
                              : "bg-[#242424] hover:bg-[#1a1a1a] text-[#bfbfbf]"
                              }`}
                          >
                            <Link
                              href={{
                                pathname: "/Products",
                                query: { category: item.categoryName },
                              }}
                            >
                              <button
                                type="submit"
                                className={classNames(
                                  `block w-full px-4 py-2 text-right ${themeState === "light"
                                    ? "bg-gray-100 text-[#5c5c5c] hover:bg-gray-200 transition-all duration-150"
                                    : "bg-[#242424] hover:bg-[#1a1a1a] text-[#bfbfbf]"
                                  }`
                                )}
                              >
                                {item.title}
                              </button>
                            </Link>
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                </Menu.Items>
              </Transition>
            </Menu>
          }
        </div>
      </div>

      <div className="w-3/12 flex flex-row justify-end pr-5  md:pr-2 text-center text-[#bfbfbf] md:w-5/12">
        {!isLoggedInState && (
          <Link href="/Register">
            <div className=" h-[3rem] text-[#545454]  md:h-[2.5rem] md:pt-1 md:py-1 mr-[1rem] cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-[#ebebeb] md:mr-0 md:text-[1rem] md:mt-1 text-[1.25rem]  bg-white shadow-xl rounded-[25px]  flex flex-row justify-between items-center">
              <span className="px-4  rounded-l-[10px] md:text-[0.9rem]">
                ثبت نام{" "}
              </span>{" "}
              | <span className="px-6 rounded-r-[10px]"> ورود </span>
            </div>
          </Link>
        )}

        {isLoggedInState && (
          <Menu as="div" className="relative text-center">
            <div>
              <Menu.Button
                className={`font-[monospace] h-[3rem] mt-3 md:mt-1 cursor-pointer transition-all duration-200 text-[gray] hover:text-[#4e4e4e] font-[600] text-[1.5rem] pr-3`}
              >
                {localStorage.getItem("userName")}
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
              <Menu.Items className="absolute font-[Bhoma] text-[1.25rem] right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`flex justify-between pr-3 pt-2 ${themeState === "light"
                          ? "bg-gray-100 text-[#5c5c5c]"
                          : "bg-[#333333] text-[#bfbfbf]"
                          }`}
                      >
                        <div className="p-2 pb-3 ml-3 w-[3rem] h-[3rem]">
                          <Image
                            src={themeState === "dark" ? darkIcon : lightIcon}
                          />
                        </div>
                        <ThemeToggle />
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          `block w-full px-4 py-2 text-right ${themeState === "light"
                            ? "bg-gray-100 text-[#5c5c5c]"
                            : "bg-[#333333] text-[#bfbfbf]"
                          }`
                        )}
                      >
                        پروفایل
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={{ pathname: "/MyFactors" }}>
                        <button
                          type="submit"
                          className={classNames(
                            `block w-full px-4 py-2 text-right ${themeState === "light"
                              ? "bg-gray-100 text-[#5c5c5c]"
                              : "bg-[#333333] text-[#bfbfbf]"
                            }`
                          )}
                        >
                          سفارشات
                        </button>
                      </Link>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={{ pathname: "/MyDiscount" }}>
                        <button
                          type="submit"
                          className={classNames(
                            `block w-full px-4 py-2 text-right ${themeState === "light"
                              ? "bg-gray-100 text-[#5c5c5c]"
                              : "bg-[#333333] text-[#bfbfbf]"
                            }`
                          )}
                        >
                          تخفیف ها
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("userName");
                          SetIsLoggedInHandler(isLoggedInHandler(false));
                        }}
                        type="submit"
                        className={classNames(
                          `block w-full px-4 py-2 text-right ${themeState === "light"
                            ? "bg-gray-100 text-[#5c5c5c]"
                            : "bg-[#333333] text-[#bfbfbf]"
                          }`
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
        )}

        {isLoggedInState && (
          <div
            onClick={() => SetShowBasketHandler(showBasketHandler(true))}
            className={`w-[4rem]  h-[4rem] md:w-[3rem] md:min-w-[3rem] md:h-[3rem] relative   p-2  rounded-[20px] mr-2 ${themeState === "light"
              ? "bg-white innerShadow hover:bg-[#e1e1e1]"
              : " bg-[#1f1f1f] innerShadowDark"
              } mt-2 md:mt-1 md:mr-3 text-[1rem]  cursor-pointer transition-all duration-200`}
          >
            <p
              key={ordersState}
              className="bump bg-[#ba3131] w-[1.5rem]  h-[1.5rem] rounded-[50%] absolute left-[75%]  bottom-[70%] md:bottom-[67%] text-white shadow-2xl font-[monospace]"
            >
              {ordersState.length}
            </p>
            <Image src={BasketIcon} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
