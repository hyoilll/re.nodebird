import PropTypes, { object } from "prop-types";
import { Button } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";

const FollowButton = ({ post }) => {
  const { me, followLoading, unfollowLoading } = useSelector(
    (state) => state.user
  );

  //Followings안에 post.User.id가 있으면 해당 인덱스를 반환
  const isFollowing = me && me.Followings.find((v) => v.id === post.User.id);

  const dispatch = useDispatch();

  const onClickButton = useCallback(() => {
    // isFollowing이 참일 경우가 현재 팔로잉 중인 경우
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);

  return (
    <>
      <Button
        loading={followLoading || unfollowLoading}
        onClick={onClickButton}
      >
        {isFollowing ? "unfollow" : "follow"}
      </Button>
    </>
  );
};

FollowButton.propTypes = {
  post: PropTypes.shape({
    mainPosts: PropTypes.arrayOf(object),
    imagePaths: PropTypes.arrayOf(object),
    hasMorePosts: PropTypes.bool,
    loadPostsLoading: PropTypes.bool,
    loadPostsDone: PropTypes.bool,
    loadPostsError: PropTypes.oneOf([null]),
    addPostLoading: PropTypes.bool,
    addPostDone: PropTypes.bool,
    addPostError: PropTypes.oneOf([null]),
    removePostLoading: PropTypes.bool,
    removePostDone: PropTypes.bool,
    removePostError: PropTypes.oneOf([null]),
    addCommentLoading: PropTypes.bool,
    addCommentDone: PropTypes.bool,
    addCommentError: PropTypes.oneOf([null]),
  }),
};

export default FollowButton;
