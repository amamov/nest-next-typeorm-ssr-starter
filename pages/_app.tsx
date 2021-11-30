import { AppProps } from "next/app";
import Head from "next/head";
import "./global.css";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>amamov</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default RootApp;
