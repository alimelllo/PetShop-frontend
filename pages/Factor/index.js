import { useSelector } from "react-redux";
import Header from "../../components/GeneralComponents/Header";
import {
  ordersHandler,
  themeHandler,
} from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";

const Factor = () => {
  const selectThemeState = useSelector(themeHandler);
  const themeState = selectThemeState.payload.ProfileSettings.theme;

  const selectOrderState = useSelector(ordersHandler);
  const ordersState = selectOrderState.payload.ProfileSettings.orders;

  return (
    <div className="flex flex-row md:flex-col-reverse justify-between items-center md:items-start h-screen md:w-full">
      <Header />

      <div className="w-6/12 md:w-full md:h-[60%] relative">
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
          }  w-[350px] m-auto h-[20px]  absolute right-[27%] md:right-[5%] z-50 rounded-[3px]`}
        ></div>

        <div
          className={`${
            themeState === "light" ? "boxShadow4x " : "boxShadow3x"
          } bg-[#fafaf9] receipt logoAnimation`}
        >
          <div className="paper ">
            <div className="title mb-5">Feed Us</div>
            <div className="date mb-5 font-[bhoma]">
              {new Date().toLocaleDateString("fa")}
            </div>
            <table>
              <tbody className="">
                {ordersState.map((item) => (
                  <tr>
                    <td className="font-bold pt-1">
                      {item.count}
                      {"x "} {item.name}
                    </td>
                    <td className="text-right pt-1">{item.price} T</td>
                  </tr>
                ))}

                <tr>
                  <td className="text-[1.25rem] text-[#00773d] font-bold">Total :</td>
                  <td className="text-[1rem] text-[#00773d] font-bold text-right">2,455,000 T</td>
                </tr>

                <tr>
                  <td colspan="2" className="text-center ">
                    <input
                      className="submitFactor w-6/12 font-[bhoma] text-[1rem] my-5"
                      type="button"
                      value="ثبت فاکتور"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              {/* <div className="barcode"></div>
              <br />
              0123456789
              <br /> */}
              <div className="thankyou font-[bhoma] text-[1rem] py-5">
                از اعتماد شما به فروشگاه ما مچکریم
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="DESCRIPTION_SECTION  md:h-3/12 md:absolute md:top-20 md:z-[30] font-[bhoma] w-6/12 md:w-full h-[30rem] text-right">
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
          <p className=" pr-5 p-4 md:px-4 md:py-2 text-[1.45rem] md:text-[0.8rem] text-[#5a5a5a]  pb-3 ">
            {" "}
            ثبت سفارش از طریق کارت به کارت به حساب فروشگاه می باشد{" "}
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
