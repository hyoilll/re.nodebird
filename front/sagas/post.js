import { all, delay, fork, put, takeLatest } from "@redux-saga/core/effects";

function addPostAPI(data) {
  return axios.post("/api/addpost");
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
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

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
