import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useEffect } from "react";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );

  // 홈 화면이 켜지면 액션 발생
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      // 가장 맨 위에서 스크롤을 얼마나 내렸는지
      // 키보드 커서 개념으로 생각해보자, 스크롤에서 가장 위에가 기준점
      // 스크롤을 가장 밑으로 내려도 아직 화면 크기만크므이 공간이 남아있음
      // 이 공간을 알기 위해 밑의 clientHeight가 필요한 것
      // => scrollY + clientHeight = scrollHeight
      const scrollY = window.scrollY;
      // 내 화면이 보이는 길이
      const clientHeight = document.documentElement.clientHeight;
      // 가장위에서 가장 아래, 총 길이
      const scrollHeight = document.documentElement.scrollHeight;

      // -300하느 이유는 가장 밑에 스크롤이 오기 전에 300px먼저 업데이트하기 위함
      if (scrollHeight - 300 < scrollY + clientHeight) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      // useEffect에서 window event를 다룰 때 return문을 활용하여
      // event를 제거해줘야 함. 안그러면 메모리에 쌓임
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);

  return (
    <AppLayout>
      {/* children */}
      {me && <PostForm></PostForm>}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </AppLayout>
  );
};

export default Home;
