import Head from "next/head";
import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
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

      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        redirectUri={process.env.NEXT_PUBLIC_AUTH0_BASE_URL}
      >
        <NextNProgress color="#cb997e" options={{ showSpinner: false }} />
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </Auth0Provider>
    </>
  );
}

export default MyApp;
