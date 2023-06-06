import "../styles/globals.css";
import "../styles/register.css";
import "animate.css/animate.min.css";
import store from "../Redux/Store.tsx";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";



function MyApp({ Component, pageProps }) {

  const [session, SetSession] = useState({});

  useEffect(() => {
    SetSession({
      token: localStorage.getItem("token"),
      userName: localStorage.getItem("userName")
    })
  },[])

  pageProps.session = session;
 
  return (
    <>
      <Provider store={store}>
         <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;

