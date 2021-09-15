import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);

  const pushLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <>
      <Card
        actions={[
          <div key="twit">
            a<br />0
          </div>,
          <div key="followings">
            b<br></br>0
          </div>,
          <div key="followings">
            c<br></br>0
          </div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
        ></Card.Meta>
        <Button onClick={pushLogout} loading={isLoggingOut}>
          Logout
        </Button>
      </Card>
    </>
  );
};

export default UserProfile;
