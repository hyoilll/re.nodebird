import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useSelector } from "react-redux";

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>NodeBird | Profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm></NicknameEditForm>
        <FollowList header="following list" data={me.Followings}></FollowList>
        <FollowList header="follower list" data={me.Followers}></FollowList>
      </AppLayout>
    </>
  );
};

export default Profile;
