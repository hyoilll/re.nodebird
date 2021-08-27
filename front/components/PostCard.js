import { Button, Card, Popover, Avatar, List, Comment } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  EllipsisOutlined,
  MessageOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import PostImages from "./PostImages";
import React, { useCallback, useState } from "react";
import Item from "antd/lib/list/Item";
import CommentForm from "./CommentForm";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const [commentFormOpened, setCommentFormopened] = useState(false);
  const onToggleComment = useCallback(() => {
    setCommentFormopened((prev) => !prev);
  }, []);

  const me = useSelector((state) => state.user.me);
  const id = me && me.id; // me가 있으면 id가 들어가고 없으면 undefined가 저장됨
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Card
          cover={
            post &&
            post.Images[0] && <PostImages images={post.Images}></PostImages>
          }
          actions={[
            <RetweetOutlined key="retweet"></RetweetOutlined>,
            liked ? (
              <HeartTwoTone
                twoToneColor="#eb2f96"
                key="heart"
                onClick={onToggleLike}
              ></HeartTwoTone>
            ) : (
              <HeartOutlined key="heart" onClick={onToggleLike}></HeartOutlined>
            ),
            <MessageOutlined
              key="comment"
              onClick={onToggleComment}
            ></MessageOutlined>,
            <Popover
              key="more"
              content={
                <Button.Group>
                  {id && post.User.id === id ? (
                    <>
                      <Button>수정</Button>
                      <Button type="danger">삭제</Button>
                    </>
                  ) : (
                    <Button>신고</Button>
                  )}
                </Button.Group>
              }
            >
              <EllipsisOutlined></EllipsisOutlined>
            </Popover>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={post.content}
          ></Card.Meta>
        </Card>
        {commentFormOpened && (
          <div>
            <CommentForm post={post}></CommentForm>
            <List
              header={`${post.Comments.length}개의 댓글`}
              itemLayout="horizontal"
              dataSource={post.Comments}
              renderItem={(item) => {
                return (
                  <li>
                    <Comment
                      author={item.User.nickname}
                      avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                      content={item.content}
                    ></Comment>
                  </li>
                );
              }}
            ></List>
          </div>
        )}
        {/* <CommentForm></CommentForm>
        <Comments></Comments> */}
      </div>
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
