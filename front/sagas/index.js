import { all, fork, take, call, put } from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

// action 매개변수로 로그인 정보가 들어옴
// action.type : "~~"
// action.data : data
// loginAPI(action.data) ==> call(logInAPI, action.data)
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data, // 성공결과가 담겨있음
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data, // 실패결과가 담겨있음
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data, // 성공결과가 담겨있음
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data, // 실패결과가 담겨있음
    });
  }
}

function addPostAPI(data) {
  return axios.post("/api/addpost");
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data, // 성공결과가 담겨있음
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data, // 실패결과가 담겨있음
    });
  }
}

function* watchLogin() {
  yield take("LOG_IN_REQUEST", logIn); // LOG_IN 액션이 실행되면 logIn함수가 실행
}

function* watchLogOut() {
  yield take("LOG_OUT_REQUEST", logOut);
}

function* watchAddPost() {
  yield take("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}

// all : 매개변수로서 배열을 받고, 배열안의 원소들을 한번에 실행시켜줌
// fork : 비동기 함수를 실행시켜줌 / 서버에서의 결과값을 기다리지 않고 그대로 실행함
// call : 동기 함수를 실행시켜줌 / 서버에서의 결과값을 기다림 await과 같은 효과
// take : 매개변수의 액션이 실행될 때 까지 기다리겠다는 것
// put : dispatch와 같은 역할, 액션을 디스패치해줌
