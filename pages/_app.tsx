import { AmountProvider } from "@/context/AmountContext";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AmountProvider>
      <Component {...pageProps} />
    </AmountProvider>
  );
}
