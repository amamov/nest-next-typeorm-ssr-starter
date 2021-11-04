import { AppProps } from "next/app";
import Head from "next/head";
import "./global.css";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>amamov</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default RootApp;
