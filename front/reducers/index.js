import { HYDRATE } from "next-redux-wrapper";

import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

// reducer = (이전상태, 액션) => 다음상태
// combineReducers => 쪼개진 reducer들을 합쳐주는 함수
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      //     case "CHANGE_NICKNAME":
      //       return {
      //         ...state,
      //         name: action.data,
      //       };
      //   }
      case HYDRATE:
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;

// action 형태
// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "boogicho",
// };
// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "pika",
// };

// =>

// < action creator > : Change_nickname의 형태의 action이 많아지면 코드량도 많아지고 중복되는것이 많기 떄문에 함수로 줄인 것
// const changeNickname = (data) => {
//     return {
//       type: "CHANGE_NICKNAME",
//       data: data,
//     };
//   };

// changeNickname("hyoro");

// action 생성 -> actino dispatch
// store.dispatch(changeNickname('hyoro'))
