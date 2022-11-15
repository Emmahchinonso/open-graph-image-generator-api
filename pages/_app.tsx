import "../styles/globals.js";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/globals";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
