import { useSelector } from "react-redux";
import Header from "../../components/GeneralComponents/Header";
import {
  ordersHandler,
  themeHandler,
} from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";
import { useState } from "react";
import { useEffect } from "react";
import userServices from "../../Services/UserServices/user.services";
import { useRouter } from "next/router";
import factorService from "../../Services/FactorServices/factor.service.js";

const Factor = () => {
  const router = useRouter();
  const [paymentType, SetPaymentType] = useState("ONLINE");

  const selectThemeState = useSelector(themeHandler);
  const themeState = selectThemeState.payload.ProfileSettings.theme;

  const selectOrderState = useSelector(ordersHandler);
  const ordersState = selectOrderState.payload.ProfileSettings.orders;

  useEffect(() => {}, [paymentType]);

  const getCurrentUserInfo = () => {
    userServices.getCurrentUserInfo({ id: localStorage.getItem("id") })
      .then((response) => {
        factorService.Createfactor(
          {
            user: response.id ,
            products: ordersState.map((item)=> (item.id) ),
            discount: 0,
            finalPrice : 545000,
            payment: paymentType,
          }
        ).then((resp) => {
          router.push('/SuccessPage');
        })
      });
  };

  return (
    <div className="flex flex-row md:flex-col-reverse justify-between items-center md:items-start h-screen md:w-full">
      <Header />

      <div className="w-6/12 md:w-full md:h-[63%] md:flex md:flex-row relative">
        <div
          className={`${
            themeState === "light" ? "bg-[white]" : "bg-[#141414]"
          } z-30 absolute h-full w-[350px] top-[-100%] md:top-[-100%] right-[27%] md:right-[5%]`}
        ></div>
        <div
          className={`${
            themeState === "light"
              ? "bg-[#3c3939] boxShadow3x"
              : "bg-[#2a2a2a] boxShadow2x"
          } w-[350px] m-auto md:w-11/12 md:z-[30] h-[15px] absolute right-[27%] md:right-[5%] z-50 rounded-[3px]`}
        ></div>

        <div
          className={`${
            themeState === "light" ? "boxShadow4x " : "boxShadow3x"
          } bg-[#fafaf9] receipt h-[100%] md:h-[95%] logoAnimation`}
        >
          <div className="paper pt-[1rem] md:pt-0">
            <div className="title mb-5">Feed Us</div>
            <div className="date mb-5 ">
              {new Date().toLocaleDateString("en")}
            </div>
            <table className="table">
              <tbody className="">
                {ordersState.map((item) => (
                  <tr>
                    <td className="font-bold pt-1">
                      {item.count}
                      {"x "}
                      {item.name}
                    </td>
                    <td className="text-right pt-1">{item.price} T</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex font-[bhoma] flex-row justify-center px-2 py-2 my-3 md:my-1 items-center ">
              <p
                onClick={() => SetPaymentType("ONLINE")}
                className={`${
                  paymentType === "ONLINE"
                    ? "opactiy-[1] scale-105 boxShadow4x"
                    : "opacity-[0.4] scale-100"
                } cursor-pointer transition-all duration-200 w-6/12 text-[1.25rem] text-[white]  text-center p-1 md:p-1 rounded-l-[10px]  bg-[#823edb]`}
              >
                پرداخت آنلاین
              </p>
              <p
                onClick={() => SetPaymentType("ONSITE")}
                className={`${
                  paymentType === "ONSITE"
                    ? "opactiy-[1] scale-105 boxShadow4x"
                    : "opacity-[0.4] scale-100"
                } cursor-pointer transition-all duration-200 w-6/12 text-[1.25rem] text-[white]  text-center p-1 md:p-1 rounded-r-[10px]  bg-[#3e56db]`}
              >
                درب منزل
              </p>
            </div>

            <div className="border-t-[3px] border-dashed border-t-[#807777] flex flex-row justify-between px-2 py-2 my-3 md:my-1 items-center">
              <p className="text-[1.1rem] text-[#00773d] font-bold">Total :</p>
              <p className="text-[1rem] text-[#00773d] font-bold text-right">
                2,455,000 T
              </p>
            </div>
            <div className="flex">
              <input
                onClick={getCurrentUserInfo}
                className="submitFactor mt-1 p-2 mx-auto w-6/12 md:w-10/12 font-[bhoma] text-[1rem]"
                type="button"
                value="ثبت فاکتور"
              />
            </div>

            <div className="thankyou text-center  font-[bhoma] text-[1rem] py-5">
              از اعتماد شما به فروشگاه ما مچکریم
            </div>
          </div>
        </div>
      </div>

      <div className="DESCRIPTION_SECTION md:h-[40%] md:absolute md:top-[10%] md:z-[30] font-[bhoma] w-6/12 md:w-full h-[30rem] text-right">
        <p
          className={` w-6/12 md:w-full mx-auto rounded-[10px] text-center text-[1.5rem] md:text-[1.2rem] ${
            themeState === "light"
              ? "text-[#3b3b3b] shadow-xl"
              : "text-[#9e9e9e] boxShadow4x"
          }  font-bold py-2 pb-3`}
        >
          لطفا موارد زیر را با دقت بخوانید
        </p>

        <div className="w-full flex rounded-[10px] mt-[5rem] md:mt-[1rem] flex-row justify-end ">
          <p className=" pr-5 p-4 md:px-3 md:py-2 text-[1.45rem] md:text-[0.8rem] text-[#5a5a5a]  pb-3 ">
            {" "}
            سفارش و پرداخت از طریق درگاه آنلاین یا پرداخت درب منزل مقدور می باشد{" "}
          </p>
          <span className="w-[0.75rem] mr-5 mt-6 md:mt-3 h-[0.75rem] bg-[#505050] rounded-[50%]"></span>
        </div>
        <div className="w-full flex rounded-[10px] flex-row justify-end ">
          <p className=" pr-5 p-4 md:px-4 md:py-2 text-[1.45rem] md:text-[0.8rem] text-[#5a5a5a]  pb-3 ">
            {" "}
            پس از واریز کردن مبلغ فاکتور فرایند پیگیری سفارش قابل مشاهده است{" "}
          </p>
          <span className="w-[0.75rem] mr-5 mt-6 md:mt-3 h-[0.75rem] bg-[#505050] rounded-[50%]"></span>
        </div>
        <div className="w-full flex rounded-[10px] flex-row justify-end ">
          <p className=" pr-5 p-4 md:px-4 md:py-2 text-[1.45rem] md:text-[0.8rem] text-[#5a5a5a]  pb-3 ">
            {" "}
            پس از ثبت واریز کردن مبلغ فاکتور هیج گونه تغییر و بازگشتی مقدور نمی
            باشد{" "}
          </p>
          <span className="w-[0.75rem] mr-5 mt-6 md:mt-3 h-[0.75rem] bg-[#505050] rounded-[50%]"></span>
        </div>
      </div>
    </div>
  );
};

export default Factor;
