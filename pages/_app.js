import "../styles/globals.css";
import "../styles/register.css";
import "animate.css/animate.min.css";
import store from "../Redux/Store.tsx";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
