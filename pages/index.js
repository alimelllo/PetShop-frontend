import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/GeneralComponents/Header.js";
import Main from "../components/Main/Main.js";
import productService from '../Services/ProductsServices/product.service';
import {
  nameHandler,
  tokenHandler,
  isLoggedInHandler,
} from "../Redux/Reducers/Settings/Profile/ProfileSettings.ts";

import { useDispatch, useSelector } from "react-redux";

export default function Home( props ) {
  
  const selectState = useSelector(tokenHandler);
  const tokenState = selectState.payload.ProfileSettings.token;

  const selectIsLoggedInState = useSelector(isLoggedInHandler);
  const isLoggedInState = selectIsLoggedInState.payload.ProfileSettings.isLoggedIn;
  const SetIsLoggedInHandler = useDispatch();

  console.log(props);
  useEffect(() => {
    if (props.session.userName && props.session.token) {
      SetIsLoggedInHandler(isLoggedInHandler(true));
    }else if(!props.session.userName || !props.session.token) {
      SetIsLoggedInHandler(isLoggedInHandler(false));
    }
  } );

  return (
    <>
      <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>

      <Header />
      <Main data={props.data} />
    </>
  );
}

export async function getStaticProps() {
  const result = await productService.getAllProducts("");
  return{
    props: {
      data : result.data
    }
  }
}