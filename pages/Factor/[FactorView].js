import { useState } from "react";
import factorService from "../../Services/FactorServices/factor.service";
import Header from "../../components/GeneralComponents/Header";
import { useDispatch } from "react-redux";
import { emptyBasket } from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";

const FactorView = (props) => {
 const router  = useRouter();
    const [paymentSuccess, SetPaymentSuccess] = useState(false)
    const emtyBasketHandler = useDispatch();

    const Payment = () => {
        factorService.Payment({ amount: 45000 }).then((resp) => {
            emtyBasketHandler(emptyBasket())
            SetPaymentSuccess(true);
        })
    }

    if(router.isFallback) {
        return <ReactLoading type={"bars"} color="#2c125c" width={100} className=" mt-[10rem] m-auto"/>
    }

    return (<div className="h-screen font-[bhoma] ">
        <Header />
        <div className="h-screen flex items-center">
            <div id="invoiceholder">
                <div id="invoice" className="w-6/12  md:w-11/12 effect2 shadow-2xl">
                    <div id="invoice-top flex flex-row  ">
                        {paymentSuccess && <>
                            <p className="text-center text-[green] text-[1.4rem] ">پرداخت با موفقیت انجام شد</p>
                            <div className="absolute right-[45%] md:right-[35%] top-[-20%]">
                                <div className="svg-container logoAnimation rounded-[50%] boxShadow4x">
                                    <svg className="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                                        <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22" />
                                        <path className="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17" />
                                    </svg>
                                </div>
                            </div>
                        </>

                        }
                        {!paymentSuccess && <div className="logo w-3/12 ">
                            <p className="text-[1.25rem] font-[monospace] mt-[4rem] md:mt-[2rem] md:text-[1rem]">1402/06/31</p>
                        </div>}
                        {!paymentSuccess && <div className="flex flex-col w-9/12 md:pb-[2rem]">
                            <div className="info text-right">
                                <h2 className="font-bold font-[monospace] text-[1.25rem]">Alireza Maleki</h2>
                                <p className="font-[monospace] text-[1rem] pt-1 text-[#565656]"> 0904 632 9661 </p>
                            </div>
                            <div className="info flex flex-row h-[2rem] md:absolute md:top-[15%] md:right-8 justify-end mt-2 items-center text-justify md:w-10/12 md:text-[0.7rem]">
                                <p className="pr-3 text-[#565656] pt-5"> جنت آباد شمالی - خیابان اکبری - علامه شمالی  -ایرانشهر جنوبی  - پلاک 32 - واحد 17</p>
                                <h2 className="text-right w-4/12 md:w-3/12 font-bold text-[1.1rem] md:pt-1 md:text-[1rem]">: آدرس</h2>
                            </div>
                        </div>}

                    </div>



                    <div className="p-5 md:p-0">
                        <div id="table">
                            <table>
                                <tbody>
                                    <tr className="tabletitle">
                                        <td className="Hours"><h2>مبلغ نهایی</h2></td>
                                        <td className="Rate"><h2>تخفیف</h2></td>
                                        <td className="subtotal"><h2>تعداد</h2></td>
                                        <td className="subtotal"><h2>مبلغ</h2></td>
                                        <td className="w-[30%]"><h2> محصول</h2></td>
                                    </tr>

                                    {props.factor.products.map((item) => (
                                        <tr className="service font-[monospace] text-[1rem]">
                                            <td className="tableitem"><p className="itemtext">{item.price}</p></td>
                                            <td className="tableitem"><p className="itemtext">{item.discount}</p></td>
                                            <td className="tableitem"><p className="itemtext">{item.count}</p></td>
                                            <td className="tableitem"><p className="itemtext">{item.price}</p></td>
                                            <td className="tableitem"><p className="itemtext">{item.name}</p></td>
                                        </tr>
                                    ))}

                                    {props.factor.products.length > 0 &&
                                        <tr className="tabletitle">
                                            <td className="payment"><h2 className="font-[monospace] md:font-bold text-[1rem]"> 365,000 </h2></td>
                                            <td></td>
                                            <td></td>
                                            <td className="Rate"><h2></h2></td>
                                            <td><h2>: قابل پرداخت </h2></td>
                                        </tr>}
                                </tbody>
                            </table>
                        </div>

                        <div id="legalcopy" className="flex flex-row md:flex-col justify-between text-right">
                            <div className="flex w-[30%] md:w-full justify-center">
                                {!paymentSuccess && <button onClick={Payment} className="m-auto w-8/12 md:w-10/12 bg-[#8957b8] text-[white]  text-[1.1rem] p-2 md:p-3 rounded-[10px] transition-all duration-200 hover:bg-[#673f8d] boxShadow4x">پرداخت</button>}
                                {paymentSuccess && <button className="m-auto my-5 w-8/12 md:w-10/12 bg-[#d86b38] text-[white]  text-[1.1rem] p-2 md:p-3  rounded-[10px] transition-all duration-200 hover:bg-[#d85538] boxShadow4x">پیگیری سفارش</button>}
                            </div>
                            {!paymentSuccess && <p className="w-[70%] text-[#4b4b4b] text-[1.1rem] md:text-[0.9rem] md:w-full md:px-2 md:py-4"> لطفا درست بودن اطلاعات فاکتور را بررسی کنید. <strong>پس از پرداخت امکان تغییر برروی سفارش امکان پذیر نمی باشد</strong> </p>}
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </div>
    )
}

export async function getStaticPaths() {
    const FactorIds = await factorService.getAllFactorIds();
    const loadedPaths = FactorIds.data.map((item) => ({ params: { FactorView: String(item.id) } }));
    return {
        paths: loadedPaths,
        fallback: true,
    }
}

export async function getStaticProps(context) {

    const params = context.params.FactorView;
    const factorResult = await factorService.GetFactorById(params);

    return {
        props: {
            factor: factorResult.data[0],
        },
        revalidate: 1000
    }
}


export default FactorView;