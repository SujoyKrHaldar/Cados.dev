import Head from "next/head";
import AdvocateList from "../components/home/AdvocateList";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";

export const getStaticProps = async () => {
  const res = await fetch("https://cados.up.railway.app/advocates/?limit=5");
  const userData = await res.json();
  return {
    props: {
      total: userData.total,
      user: userData.advocates,
    },
    revalidate: 10,
  };
};

export default function Home({ user, total }) {
  return (
    <>
      <Head>
        <title>Start your collaboration with Cados.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing data={user} count={total} />
        <AdvocateList data={user} />
      </Layout>
    </>
  );
}
