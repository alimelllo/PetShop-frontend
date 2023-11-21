import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/GeneralComponents/Header.js";
import Main from "../components/Main/Main.js";
import productService from "../Services/ProductsServices/product.service";
import { useSelector } from "react-redux";
import { themeHandler } from "../Redux/Reducers/Settings/Profile/ProfileSettings.ts";

export default function Home(props) {

  const selectThemeState = useSelector(themeHandler);
  const themeState = selectThemeState.payload.ProfileSettings.theme;
  
  useEffect(() => { } ,[themeState])
  return (
    <div className={`${themeState === 'light' ? 'bg-[#ffffff]' : 'bg-[#141414]'}`}>
      <Head>
        <title>Feed Us</title>
        <meta property="og:title" content="Feed Us" key="title" />
        <link rel="manifest" href="/manifest.json" id='pwa-manifest'></link> 
      </Head>

      <Header />
      <Main data={props.data} />
    </div>
  );
}

export async function getStaticProps() {
  const result = await productService.getAllProducts("" , "" , 1);
  return {
    props: {
      data: result.data,
    },
  };
}
