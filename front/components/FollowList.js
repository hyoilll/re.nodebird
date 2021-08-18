import { Card, Button, List } from "antd";
import PropTypes from "prop-types";
import { StopOutlined } from "@ant-design/icons";
import React from "react";

const FollowList = ({ header, data }) => {
  console.log(data);
  return (
    <>
      <List
        style={{ marginBottom: 20 }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>{header}</div>}
        loadMore={
          <div style={{ textAlign: "center", margin: "10px 0" }}>
            <Button>더 보기...</Button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => {
          return (
            <List.Item style={{ margin: 20 }}>
              <Card actions={[<StopOutlined key="stop"></StopOutlined>]}>
                <Card.Meta description={item.nickName}></Card.Meta>
              </Card>
            </List.Item>
          );
        }}
      ></List>
    </>
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
