import Head from "next/head";
import Layout from "../components/layout/Layout";
import Search from "../components/search/Search";

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  const res = await fetch(
    `https://cados.up.railway.app/advocates?query=${name}`
  );
  const userData = await res.json();

  if (!userData) {
    return {
      redirect: "/",
      parmanent: false,
    };
  }

  return {
    props: {
      user: userData.advocates,
    },
  };
};

function search({ user }) {
  return (
    <>
      <Head>
        <title>Find your peers - Cados dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Search user={user} />
      </Layout>
    </>
  );
}

export default search;
