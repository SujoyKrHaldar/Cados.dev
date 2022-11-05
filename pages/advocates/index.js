import Head from "next/head";
import { getData } from "../../action/fetcher";
import Advocates from "../../components/advocates/Advocates";
import Landing from "../../components/advocates/Landing";
import Layout from "../../components/layout/Layout";

export const getStaticProps = async () => {
  const res = await fetch("https://cados.up.railway.app/advocates?limit=8");
  const userData = await res.json();
  return {
    props: {
      total: userData.total,
      data: userData.advocates,
    },
    revalidate: 10,
  };
};

function advocates({ total, data: initialData }) {
  const { data, error } = getData(initialData);

  return (
    <>
      <Head>
        <title>Discover peoples - Cados dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing number={total} />
        <Advocates data={data} error={error} number={total} />
      </Layout>
    </>
  );
}

export default advocates;
