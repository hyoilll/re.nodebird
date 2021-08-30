export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "Hyoilzzz",
      },
      content: "첫번째 게시글 #hyoil #zzz#bbb",
      Images: [
        { src: "https://placeimg.com/64/64/1" },
        { src: "https://placeimg.com/64/64/2" },
        { src: "https://placeimg.com/64/64/3" },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "개정판이 나왔네요.",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 사고 싶어요.",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "hyoil",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
        // const a = [1, 2, 3, 4]
        // const b = [5, ...a]
        // b => [5, 1, 2, 3, 4]
      };
    default:
      return state;
  }
};

export default reducer;
