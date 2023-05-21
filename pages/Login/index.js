import React, { useState } from "react";
import userServices from "../../Services/UserServices/user.services";
import Link from 'next/link';
import ReactLoading from "react-loading";
import { useRouter } from 'next/router';



const CreateAccount = () => {

  const router = useRouter();
  const [ isLoading , SetIsLoading ] = useState(false)

  const initialUserState = {
    email: "",
    password: ""
  };

  const [user, setUser] = useState(initialUserState)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser(( state ) => state = { ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetIsLoading(true);
    
    const data = user;
    console.log(user)
   
    userServices.create(data)
      .then((response) => {
        setUser({
          email: response.data.email,
          password: response.data.password,
        })
        SetIsLoading(false);
        router.push('/');
        console.log(response.data);
      })
      .catch((e) => {
        SetIsLoading(false);
        console.log(e);
      });
  };

  return (
    <div className="flex flex-col z-80 text-[#707070] text-center  text-[2rem] font-[BHoma] overflow-hidden">
      <div className="flex flex-row justify-between shadow-xl "><Link href='/'><p className="py-5 pl-5 md:text-[1.5rem] hover:text-[black] transition-all duration-200 cursor-pointer">{"<< بازگشت"}</p></Link> <p className="text-[2rem] md:text-[1.5rem] py-5 pr-5 text-[#828282] ">
         ورود
      </p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="FORM_CONTAINER mt-[3rem] md:text-[1rem] w-6/12 md:w-11/12 mx-auto">
        
        <div className="flex flex-row-reverse my-5">
          <p className="w-5/12 textshadow2 pt-2 md:pt-4 md:w-4/12 text-right"> : ایمیل</p>
          <input
            name="email"
            placeholder="ایمیل"
            className="ml-5 md:w-8/12 rounded-[5px] shadow-xl h-[4rem]  outline-none pl-5  bg-[#dadada]"
            onChange={handleInputChange}
            required
          ></input>
        </div>
       
        <div className="flex flex-row-reverse my-5">
          <p className="w-5/12 textshadow2 pt-2 md:pt-4 md:w-4/12 text-right"> : رمز عبور</p>
          <input
            name="password"
            placeholder="رمز عبور"
            type="password"
            className="ml-5 md:w-8/12 rounded-[5px] shadow-xl h-[4rem]  outline-none pl-5  bg-[#dadada]"
            onChange={handleInputChange}
            required
         ></input>
        </div>

        {!isLoading && 
        <button
          className="mx-auto w-3/12 md:w-8/12 md:p-4 bg-gradient-to-r from-[#c05a11] to-[#d43b11] px-5 text-[white] border-none rounded-[15px] p-2 shadow-xl my-[3rem] hover:scale-110 duration-200 transition-all"
          onClick={handleSubmit}>
           ورود
        </button>}
      </div>
      </form>

      { isLoading &&  <ReactLoading type={"spinningBubbles"} color="gray" className="m-auto mt-[3rem]" />}

    </div>
  );
};
export default CreateAccount;
