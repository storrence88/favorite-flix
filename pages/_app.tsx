import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StateProvider } from "../components/StateProvider.js";
import reducer, { initialState } from "../components/reducer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
