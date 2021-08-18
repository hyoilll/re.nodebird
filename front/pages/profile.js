import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const followerList = [
  { nickName: "Hyoil1" },
  { nickName: "Hyoil2" },
  { nickName: "Hyoil3" },
];
const followingList = [
  { nickName: "Hyoil11" },
  { nickName: "Hyoil22" },
  { nickName: "Hyoil33" },
];

const Profile = () => {
  return (
    <>
      <Head>
        <title>NodeBird | Profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm></NicknameEditForm>
        <FollowList header="following list" data={followingList}></FollowList>
        <FollowList header="follower list" data={followerList}></FollowList>
      </AppLayout>
    </>
  );
};

export default Profile;
