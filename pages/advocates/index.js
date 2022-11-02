import Head from "next/head";
import Link from "next/link";
import { getData } from "../../action/fetcher";
import Landing from "../../components/advocates/Landing";
import ProfileCard from "../../components/design/ProfileCard";
import Layout from "../../components/layout/Layout";
import Img from "../../components/tools/Img";

export const getStaticProps = async () => {
  const res = await fetch("https://cados.up.railway.app/advocates?limit=8");
  const userData = await res.json();
  return {
    props: {
      data: userData.advocates,
    },
    revalidate: 10,
  };
};

function advocates({ data: initialData }) {
  const { data, error } = getData(initialData);

  return (
    <>
      <Head>
        <title>Discover peoples - Cados dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <section className="container py-16 overflow-hidden">
          {error && <h1>Error</h1>}
          {data && !error ? (
            <div className="grid grid-cols-4 gap-4">
              {data.map((data) => (
                <ProfileCard data={data} key={data.id} />
              ))}
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </section>
      </Layout>
    </>
  );
}

export default advocates;
