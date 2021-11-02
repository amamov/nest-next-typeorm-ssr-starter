import { FC } from "react";
import type { AppProps /*, AppContext */ } from "next/app";
import dynamic from "next/dynamic";
import Sidebar from "../components/sidebar";
import Image from "next/image";
const ToastEditor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <title>hello world</title>
      <div style={{ display: "flex", maxWidth: 1100 }}>
        <div style={{ flexBasis: "30%", margin: 25 }}>
          <Sidebar />
          <ToastEditor />
          <Image src="/test.png" alt="me" width="64" height="64" />
        </div>
        <div style={{ flexBasis: "70%", margin: 25 }}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default MyApp;
