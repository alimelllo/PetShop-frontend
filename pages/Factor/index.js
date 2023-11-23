import Header from "../../components/GeneralComponents/Header";

const Factor = () => {
  return (
    <div className="flex justify-center items-center h-screen md:w-full">
      <Header />
      <div className="">
        <div className="tab"></div>
        <div className="paid">
          <p>Receipt Paid successfully</p>
        </div>
        <div className="receipt logoAnimation">
          <div className="paper">
            <div className="title">Receipt</div>
            <div className="date">Date: 20/07/2013</div>
            <table> 
              <tbody className="">
                <tr>
                  <td>2 x Coffee</td>
                  <td className="text-right">$10</td>
                </tr>
                <tr>
                  <td>1 x Rice</td>
                  <td className="text-right">$30</td>
                </tr>
                <tr>
                  <td>5 x Milk</td>
                  <td className="text-right">$90</td>
                </tr>
                <tr>
                  <td colspan="2" className="text-center ">
                    <input className="submitFactor w-5/12 font-[bhoma] text-[1rem] mt-10" type="button" value="ثبت فاکتور" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="sign text-center ">
              <div className="barcode"></div>
              <br />
              0123456789
              <br />
              <div className="thankyou font-[bhoma] text-[1rem] py-5">از اعتماد شما به فروشگاه ما مچکریم</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factor;
