import React, { useEffect, useState } from "react";
import userServices from "../../Services/UserServices/user.services";
import ReactLoading from "react-loading";
import { useRouter } from 'next/router';
import { Icon } from 'react-icons-kit'
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { nameHandler , tokenHandler , isLoggedInHandler} from '../../Redux/Reducers/Settings/Profile/ProfileSettings.ts';
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
 
  const router = useRouter();

  const selectState  = useSelector(tokenHandler);
  const tokenState = selectState.payload.ProfileSettings.token;
  const SetToken = useDispatch();
  
  const selectNameState  = useSelector(nameHandler);
  const nameState = selectNameState.payload.ProfileSettings.name;
  const SetName = useDispatch();

  const selectisLoggedInState = useSelector(isLoggedInHandler);
  const isLoggedInState = selectisLoggedInState.payload.ProfileSettings.isLoggedIn;
  const SetIsLoggedInHandler = useDispatch();


  const [type, settype] = useState('password');
  const [icon, seticon] = useState(eyeOff);
  const [isLoading, SetIsLoading] = useState(false)
  const [ checkLoginRequierd , SetCheckLoginRequired ] = useState(false);
  const [ checkRegisterRequierd , SetCheckRegisterRequired ] = useState(false);

  
  const initialUserState = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((state) => state = { ...user, [name]: value });

    const regixEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regixPhone = /^(0|98)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/mg;

    regixPhone.test(user.mobile) ? console.log('yes') : console.log('no')
    regixEmail.test(user.email) ? console.log('yes') : console.log('no')
   

  };

  useEffect(() => {
    console.log(user)
  } , [user]);


  const handleShowPass = () => {
    settype(type === 'password' ? 'text' : 'password')
    seticon(icon === eyeOff ? eye : eyeOff)
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if(!user.name || !user.mobile|| !user.email || !user.password){
      SetCheckRegisterRequired(true);
      return
    }
    SetIsLoading(true);
    SetCheckRegisterRequired(true);
    const data = user;
    console.log(user)

    userServices.create(data)
      .then((response) => {
        setUser({
          name: response.data.name,
          email: response.data.email,
          mobile: response.data.mobile,
          password: response.data.password,
        })
         SetIsLoading(false);
        //  SetToken(tokenHandler(response.data.token));
        //  SetName(nameHandler(response.data.user.name));
        localStorage.setItem("token" , response.data.token);
        localStorage.setItem("userName" , response.data.user.name)
        localStorage.setItem("id" , response.data.user.id)

        SetIsLoggedInHandler(isLoggedInHandler(true));
        router.push('/');
        console.log(response.data)
      })
      .catch((e) => {
        SetIsLoading(false);
        console.log(e);
      });
  };




  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if( !user.email || !user.password){
      SetCheckLoginRequired(true);
      return
    }
    SetIsLoading(true);
    const data = user;
    console.log(user)

    userServices.login(data)
      .then((response) => {
        setUser({
          email: response.data.email,
          password: response.data.password,
        })
        SetIsLoading(false);
        localStorage.setItem("userName" , response.data.user.name );
        localStorage.setItem("token" , response.data.token );
        localStorage.setItem("id" , response.data.user.id)

        // SetToken(tokenHandler(response.data.token));
        // SetName(nameHandler(response.data.user.name));
        
        SetIsLoggedInHandler(isLoggedInHandler(true));
        router.push('/');
      })
      .catch((e) => {
        SetIsLoading(false);
        console.log(e);
      });
  };

  return (
    <div className="body relative">
      <span className="absolute bubbleLeftAnimation left-[-10%]  top-[-25%] w-[25rem] h-[25rem] rounded-[50%] bg-[#d1d1d131]"></span>
      <span className="absolute right-[-10%] bubbleRightAnimation bottom-[-25%] w-[25rem] h-[25rem] rounded-[50%] bg-[#d1d1d130]"></span>
      <span className="absolute right-[10%] bubbleTopAnimation top-[5%] w-[10rem] h-[10rem] rounded-[50%] bg-[#d1d1d119]"></span>

      <div className="main">
        <input className="input" type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleRegisterSubmit}>
            <label onClick={() =>  {SetCheckLoginRequired(false); SetCheckRegisterRequired(false)}} className="label mb-[15px] pt-[15px]" for="chk" aria-hidden="true">ثبت نام</label>
            <input
              className={`input shadow-3xl   placeholder:text-right placeholder:font-[bhoma]  ${ checkRegisterRequierd && !user.name ? "border-[1px] border-solid border-[#ff4444] placeholder:text-[#c23c3c]" :"placeholder:text-[#828282]"}`}
              autoComplete="true" 
              name="name"
              placeholder="نام کاربری"
              onChange={handleInputChange}
              required />
            <input
              className={`input shadow-3xl  placeholder:text-right placeholder:font-[bhoma]  ${ checkRegisterRequierd && !user.email ? "border-[1px] border-solid border-[#f04242] placeholder:text-[#c23c3c]" :"placeholder:text-[#828282]"}`}
              autoComplete="true"
              name="email"
              placeholder="ایمیل"
              onChange={handleInputChange}
              required
            />
            <input
              className={`input shadow-3xl  placeholder:text-right placeholder:font-[bhoma]  ${ checkRegisterRequierd && !user.mobile ? "border-[1px] border-solid border-[#f04242] placeholder:text-[#c23c3c]" :"placeholder:text-[#828282]"}`}
              autoComplete="false"
              name="mobile"
              placeholder="شماره موبایل"
              onChange={handleInputChange}
              required
            />
            <input
              className={`input shadow-3xl  placeholder:text-right placeholder:font-[bhoma]  ${ checkRegisterRequierd && !user.password ? "border-[1px] border-solid border-[#f04242] placeholder:text-[#c23c3c]" :"placeholder:text-[#828282]"}`}
              name="password"
              placeholder="رمز عبور"
              type={type}
              onChange={handleInputChange}
              required
            />
            { !isLoading && <button onClick={handleRegisterSubmit} className="button shadow-3xl">ثبت نام</button>}
            { isLoading && <ReactLoading type={"bars"} color="#2c125c" width={50} className=" mt-[2rem] mx-auto" />}

          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLoginSubmit}>
            <label onClick={() => {SetCheckRegisterRequired(false); SetCheckLoginRequired(false)}} className="label mt-[6rem]" for="chk" aria-hidden="true">ورود</label>
            <input
              className={`input boxShadow1x placeholder:text-right placeholder:font-[bhoma] ${ checkLoginRequierd && !user.email ? "border-[2px] border-solid border-[#ff4141] placeholder:text-[#cb4f4f]" :"placeholder:text-[#828282]"}`}
              autoComplete="true"
              name="email"
              placeholder="... ایمیل خود را وارد کنید"
              onChange={handleInputChange}
              required
            />

            <input
              className={`input boxShadow1x  placeholder:text-right placeholder:font-[bhoma]  ${ checkLoginRequierd && !user.password ? "border-[2px] border-solid border-[#f04242] placeholder:text-[#c23c3c]" :"placeholder:text-[#828282]"}`}
              name="password"
              placeholder="... رمز عبور را وارد کنید "
              type={type}
              onChange={handleInputChange}
              required
            />
            {!isLoading &&
              <button
                className="button boxShadow1x"
                onClick={handleLoginSubmit}>
                ورود
              </button>}
            {isLoading && <ReactLoading type={"bars"} color="white" width={50} className=" mt-[2rem] mx-auto" />}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;






{/* <div className="bg-violet-500 text-white flex flex-col z-80  text-center text-[1.5rem] font-[BHoma] overflow-hidden h-[100vh]">
      <div className="flex justify-around">
        <Link href='/'>
          <p className="py-5 pl-5 md:text-[1.5rem] text-[20px] text-white hover:text-[black] transition-all duration-200 cursor-pointer">{"<< بازگشت"}</p></Link> <p className="hover:text-[black] md:text-[1.5rem] py-5 pr-5 text-[20px]">
          ورود به حساب کاربری
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="FORM_CONTAINER mb-9  md:text-[1rem] h-[85vh] md:w-11/12 mx-auto w-4/12 rounded-[25px] bg-white round flex flex-col items-center">
          <p className="text-[gray]">فرم ثبت نام</p>
          <p className="w-4/12 text-[gray] textshadow2 pt-2 md:pt-4 md:w-4/12 text-right"> نام کاربری  </p>
          <div className="flex flex-row-reverse my-5">
            <input
              autoComplete="true"
              name="name"
              placeholder="نام کاربری"
              className="w-8/12 ml-5 md:w-8/12 rounded-[5px] shadow-xl h-[4rem]  outline-none px-5 text-zinc-800  bg-[#dadada]"
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div className="flex flex-row-reverse my-5">
            <p className="w-5/12 textshadow2 pt-2 md:pt-4 md:w-4/12 text-right"> : ایمیل</p>
            <input
              autoComplete="true"
              name="email"
              placeholder="ایمیل"
              className="ml-5 md:w-8/12 rounded-[5px] shadow-xl h-[4rem]  outline-none pl-5  bg-[#dadada]"
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div className="flex flex-row-reverse my-5">
            <p className="w-5/12 textshadow2 pt-2 md:pt-4 md:w-4/12 text-right"> : تلفن همراه</p>
            <input
              autoComplete="false"
              name="mobile"
              placeholder="شماره موبایل"
              className="ml-5 md:w-8/12  rounded-[5px] shadow-xl h-[4rem]  outline-none pl-5  bg-[#dadada]"
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div className="flex flex-row-reverse my-5">
            <p className="w-5/12 textshadow2 pt-2 md:pt-4 md:w-4/12 text-right"> : رمز عبور</p>
            <label>
              <span className="cursor-pointer relative left-[16vw]" onClick={handleShowPass}><Icon icon={icon} size={25}></Icon></span>
              <input
                name="password"
                placeholder="رمز عبور"
                type={type}
                className="ml-5 md:w-8/12 rounded-[5px] shadow-xl h-[4rem]  outline-none pl-5  bg-[#dadada]"
                onChange={handleInputChange}
                required
              ></input>
            </label>
          </div>
          {!isLoading &&
            <button
              className="mx-auto w-3/12 md:w-8/12 md:p-4 bg-gradient-to-r from-[#c05a11] to-[#d43b11] px-5 text-[white] border-none rounded-[15px] p-2 shadow-xl my-[3rem] hover:scale-110 duration-200 transition-all"
              onClick={handleSubmit}>
              ثبت نام
            </button>}
        </div>
      </form>

      {isLoading && <ReactLoading type={"spinningBubbles"} color="gray" className="m-auto mt-[3rem]" />}

    </div> */}