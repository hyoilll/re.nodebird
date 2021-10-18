import {
  all,
  delay,
  fork,
  put,
  takeLatest,
  call,
} from "@redux-saga/core/effects";
import {
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
} from "../reducers/user";
import axios from "axios";

function logInAPI(data) {
  // index.js에서 axios.defaults.baseURL = "http://localhost:3065";
  // 처럼 baseURL을 설정해줬기에
  // post("http://localhost:3065/user/login")으로 적용이됨
  return axios.post("/user/login", data);
}

// action 매개변수로 로그인 정보가 들어옴
// action.type : "~~"
// action.data : data
// loginAPI(action.data) ==> call(logInAPI, action.data)
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data, // 성공결과가 담겨있음
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data, // 실패결과가 담겨있음
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: null, // 성공결과가 담겨있음
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data, // 실패결과가 담겨있음
    });
  }
}

function signUpAPI(data) {
  // data: { email, pw, nickName }
  return axios.post("/user", data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    // status < 400 ~ 500 > 의 결과가 올 경우
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data, // 실패결과가 담겨있음
    });
  }
}

function followAPI() {
  return axios.post("/api/follow");
}

function* follow(action) {
  try {
    // const result = yield call(followAPI);
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data, //post.User.id
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data, // 실패결과가 담겨있음
    });
  }
}

function unfollowAPI() {
  return axios.post("/api/unfollow");
}

function* unfollow(action) {
  try {
    // const result = yield call(infollowAPI);
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data, //post.User.id
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data, // 실패결과가 담겨있음
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn); // LOG_IN 액션이 실행되면 logIn함수가 실행 , reducer와 saga가 동시에 실행됨
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchFollow),
    fork(watchUnfollow),
  ]);
}
