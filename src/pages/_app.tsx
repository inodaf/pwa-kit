import type { AppProps } from "next/app";

import React from "react";
import Head from "next/head";

import { AppProviders } from "@/config/providers";
import { collectWebVitals } from "@/config/logging/web-vitals";

import "@/config/workers/mocks";
import "@/config/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PWA Kit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="My Web App bootstrapped with inodaf/pwa-starter"
        />
        <link rel="apple-touch-icon" href="/projecticon.svg" />
        <link rel="icon" href="/projecticon.svg" />
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

export const reportWebVitals = collectWebVitals;
export default App;
