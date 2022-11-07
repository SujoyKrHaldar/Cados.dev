import Head from "next/head";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import PageTransition from "../components/tools/PageTransition";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="" />
        <link rel="canonical" href="https://cados-dev.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextNProgress color="#cb997e" options={{ showSpinner: false }} />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </>
  );
}

export default MyApp;
