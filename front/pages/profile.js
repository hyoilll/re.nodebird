import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>NodeBird | Profile</title>
      </Head>
      <AppLayout>
        <div>Hello Profile</div>
      </AppLayout>
    </>
  );
};

export default Profile;
