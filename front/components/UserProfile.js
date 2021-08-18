import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const pushLogout = useCallback(() => {
    setIsLoggedIn(false);
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
        <Card.Meta avatar={<Avatar>Hi</Avatar>} title="Hyoil"></Card.Meta>
        <Button onClick={pushLogout}>Logout</Button>
      </Card>
    </>
  );
};

export default UserProfile;
