import type { AppProps } from "next/app";

import React from "react";
import Head from "next/head";

import { AppProviders } from "@/configurations/providers";
import "@/configurations/workers/mocks";
import "@/configurations/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WebApp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="My WebApp bootstrapped from inodaf/pwa-starter"
        />
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
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  );
}

export default App;
