import type { AppProps } from "next/app";

import React from "react";
import Head from "next/head";

import "@/configurations/workers/mocks";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>WebApp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          href="/add-your-192-apple-touch-icon.png"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#FFF"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
