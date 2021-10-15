import Head from "next/head";

function App({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Head>
        <title>WebApp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
