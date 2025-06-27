import { AmountProvider } from "@/context/AmountContext";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AmountProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </AmountProvider>
  );
}
