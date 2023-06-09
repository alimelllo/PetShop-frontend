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

function MyApp({ Component, pageProps }) {
  // NProgress.configure({ showSpinner: false });
  NProgress.configure({ easing: "ease", speed: 800 });

  useEffect(() => {
    NProgress.done(true);
    Router.events.on("routeChangeStart", NProgress.start);
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
      NProgress.done(false);
    }; 
  }, []);

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
