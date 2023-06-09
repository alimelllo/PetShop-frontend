import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/GeneralComponents/Header.js";
import Main from "../components/Main/Main.js";
import productService from "../Services/ProductsServices/product.service";

export default function Home(props) {
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
  return {
    props: {
      data: result.data,
    },
  };
}
