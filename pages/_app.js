import "../styles/globals.css";
import "../styles/register.css";
import "animate.css/animate.min.css";
import store from "../Redux/Store.tsx";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/nprogress.css";
import Router from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/GeneralComponents/Loading";
import { createPortal } from "react-dom";

function MyApp({ Component, pageProps }) {

  const [isLoading, SetIsLoading] = useState(false);

  NProgress.configure({ showSpinner: false });
  NProgress.configure({ easing: "ease", speed: 800 });

  useEffect(() => {
    NProgress.done(true);
    Router.events.on("routeChangeStart", () => { SetIsLoading(true); NProgress.start()});
    Router.events.on("routeChangeComplete", () =>  { SetIsLoading(false); NProgress.done()});
    Router.events.on("routeChangeError", () => { SetIsLoading(false); NProgress.done()});

    return () => {
      Router.events.off("routeChangeStart",() => { SetIsLoading(true); NProgress.start()});
      Router.events.off("routeChangeComplete",() =>  { SetIsLoading(false); NProgress.done()});
      Router.events.off("routeChangeError",() =>  { SetIsLoading(false); NProgress.done()});
      NProgress.done(false);
      SetIsLoading(false);
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        { isLoading ? <Loading/> : null }
      </Provider>
    </>
  );
}

export default MyApp;
