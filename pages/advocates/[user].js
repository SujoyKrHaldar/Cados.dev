import Head from "next/head";
import OthersAdvocates from "../../components/advocates/OthersAdvocates";
import Profile from "../../components/advocates/Profile";
import Layout from "../../components/layout/Layout";

export const getServerSideProps = async ({ params }) => {
  const otherRes = await fetch(
    `https://cados.up.railway.app/advocates?limit=13`
  );
  const res = await fetch(
    `https://cados.up.railway.app/advocates/${params.user}`
  );
  const userData = await res.json();
  const otherData = await otherRes.json();

  if (!userData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: userData.advocate,
      otherData: otherData.advocates,
    },
  };
};

function User({ user, otherData }) {
  return (
    <>
      <Head>
        <title>Hey, I'm {user.username} from Cados dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Profile user={user} others={otherData} />
        {otherData.length > 0 && (
          <OthersAdvocates data={otherData} existing={user} />
        )}
      </Layout>
    </>
  );
}

export default User;
