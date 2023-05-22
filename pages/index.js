import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/GeneralComponents/Header.js';
import Main from '../components/Main/Main.js';

export default function Home() {

  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  const initialState = {
    token: typeof window !== "undefined" ? window.localStorage.getItem('token') : false,
    userName: typeof window !== "undefined" ? window.localStorage.getItem('userName') : false,
  };

  const logOut = () => {
     SetIsLoggedIn(false);
  }

  useEffect(() => {

    if (initialState.token && initialState.userName) {
      SetIsLoggedIn(true);
    }

  }, [initialState.token])

  return (
    <>

      <Head>
        <title>Pet Shop</title>
        <meta property="og:title" content="Pet Shop" key="title" />
      </Head>

      <Header isLoggedIn={isLoggedIn} logOut={logOut} />
      <Main />

    </>

  )
}
