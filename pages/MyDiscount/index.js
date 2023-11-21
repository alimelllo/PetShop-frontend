import Header from "../../components/GeneralComponents/Header";
import Ticket from "../../components/GeneralComponents/Ticket";

const MyDiscount = () => {



    return (
        <div>
            <Header />

            <div className="w-full flex flex-row justify-center mt-[8rem] md:mt-[5rem] ">
                

                <div className="w-7/12 flex flex-col md:w-full">

                    <div className="w-full mt-5">
                        <Ticket data={
                            {
                                title: 'تخفیف ویژه غذای گربه',
                                description: ' پنجاه هزار تومن مخصوص سفارش اول',
                                discountPercent: 10,
                                url: 'GHtJUUDFV65I7',
                                isActive: true
                            }
                        } />
                    </div>
                    <div className="w-full mt-5">
                        <Ticket data={
                            {
                                title: 'تخفیف ویژه غذای گربه',
                                description: ' پنجاه هزار تومن مخصوص سفارش دوم',
                                discountPercent: 25,
                                url: 'GHtJUUDFV65I7',
                                isActive: true
                            }
                        } />
                    </div>
                    <div className="w-full mt-5">
                        <Ticket data={
                            {
                                title: 'تخفیف ویژه غذای گربه',
                                description: ' پنجاه هزار تومن سفارش بالای 500 تومان',
                                discountPercent: 15,
                                url: 'GHtJUUDFV65I7',
                                isActive: false
                            }
                        } />
                    </div>
                    <div className="w-full mt-5">
                        <Ticket data={
                            {
                                title: 'تخفیف ویژه غذای گربه',
                                description: ' پنجاه هزار تومن مخصوص سفارش اول',
                                discountPercent: 35,
                                url: 'GHtJUUDFV65I7',
                                isActive: true
                            }
                        } />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default MyDiscount;