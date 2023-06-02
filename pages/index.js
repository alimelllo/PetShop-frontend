import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/GeneralComponents/Header.js";
import Main from "../components/Main/Main.js";

import {
  nameHandler,
  tokenHandler,
  isLoggedInHandler,
} from "../Redux/Reducers/Settings/Profile/ProfileSettings.ts";

import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  
  
  const selectState = useSelector(tokenHandler);
  const tokenState = selectState.payload.ProfileSettings.token;

  const selectIsLoggedInState = useSelector(isLoggedInHandler);
  const isLoggedInState = selectIsLoggedInState.payload.ProfileSettings.isLoggedIn;
  const SetIsLoggedInHandler = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userName") && localStorage.getItem("token")) {
      SetIsLoggedInHandler(isLoggedInHandler(true));
    }else if(!localStorage.getItem("userName") || !localStorage.getItem("token")) {
      SetIsLoggedInHandler(isLoggedInHandler(false));
    }
  }, [isLoggedInState]);

  return (
    <>
      <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>

      <Header />
      <Main />
    </>
  );
}
