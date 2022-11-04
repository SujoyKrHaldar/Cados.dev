import Layout from "../components/layout/Layout";
import Head from "next/head"

function pageNotFound() {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>404</h1>
      </Layout>
    </>
  );
}

export default pageNotFound;
