webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, ADD_FOLLOW_REQUEST, ADD_FOLLOW_SUCCESS, ADD_FOLLOW_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FOLLOW_REQUEST", function() { return ADD_FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FOLLOW_SUCCESS", function() { return ADD_FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FOLLOW_FAILURE", function() { return ADD_FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  addFollowLoading: false,
  addFollowDone: false,
  addFollowError: null,
  logInLoading: false,
  // 로그인 시도중인지 확인하는 변수
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중인지 확인하는 변수
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입중인지 확인하는 변수
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중인지 확인하는 변수
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
}; // --- 상수화

var ADD_FOLLOW_REQUEST = "ADD_FOLLOW_REQUEST";
var ADD_FOLLOW_SUCCESS = "ADD_FOLLOW_SUCCESS";
var ADD_FOLLOW_FAILURE = "ADD_FOLLOW_FAILURE";
var LOG_IN_REQUEST = "LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
var LOG_IN_FAILURE = "LOG_IN_FAILURE";
var LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
var LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
var SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
var SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
var CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
var CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
var CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
var FOLLOW_REQUEST = "FOLLOW_REQUEST";
var FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
var FOLLOW_FAILURE = "FOLLOW_FAILURE";
var UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
var UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
var UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE"; // user reducer의 상태를 바꿀 수 있는 액션

var ADD_POST_TO_ME = "ADD_POST_TO_ME";
var REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME"; // ---

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: "hyoil",
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: "aaa"
    }, {
      nickname: "bbb"
    }, {
      nickname: "ccc"
    }],
    Followers: [{
      nickname: "aaa"
    }, {
      nickname: "bbb"
    }, {
      nickname: "ccc"
    }]
  });
};

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_FOLLOW_REQUEST:
        draft.addFollowLoading = true;
        draft.addFollowDone = false;
        draft.addFollowError = null;
        break;

      case ADD_FOLLOW_SUCCESS:
        draft.addFollowLoading = false;
        draft.addFollowDone = true;
        break;

      case ADD_FOLLOW_FAILURE:
        draft.addFollowLoading = false;
        draft.addFollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        // 리듀서의 액션이 실행되면서 saga의 액션도 같이 실행이됨 동시에
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      // return {
      //   // request에서 3개의 변수를 모두 초기화 시켜줌
      //   ...state,
      //   logInLoading: true,
      //   logInDone: false,
      //   logInError: null,
      // };

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      // return {
      //   // success에서 필요한 변수만 초기화 시켜줌
      //   ...state,
      //   logInLoading: false,
      //   logInDone: true,
      //   me: dummyUser(action.data),
      // };

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      // return {
      //   // failure에서 필요한 변수만 초기화 시켜줌
      //   ...state,
      //   logInLoading: false,
      //   logInError: action.error,
      // };

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      // return {
      //   ...state,
      //   logOutLoading: true,
      //   logOutDone: false,
      //   logOutError: null,
      // };

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.me = null;
        break;
      // return {
      //   ...state,
      //   logOutLoading: false,
      //   logOutDone: true,
      //   logInDone: false,
      //   me: null,
      // };

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      // return {
      //   ...state,
      //   logOutLoading: false,
      //   logOutError: action.error,
      // };

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      // return {
      //   ...state,
      //   signUpLoading: true,
      //   signUpDone: false,
      //   signUpError: null,
      // };

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      // return {
      //   ...state,
      //   signUpLoading: false,
      //   signUpDone: true,
      // };

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      // return {
      //   ...state,
      //   signUpLoading: false,
      //   signUpError: action.error,
      // };

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      // return {
      //   ...state,
      //   changeNicknameLoading: true,
      //   changeNicknameDone: false,
      //   changeNicknameError: null,
      // };

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      // return {
      //   ...state,
      //   changeNicknameLoading: false,
      //   changeNicknameDone: true,
      // };

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      // return {
      //   ...state,
      //   changeNicknameLoading: false,
      //   changeNicknameError: action.error,
      // };

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;
      // const postIndex = state.me.Posts.findIndex((v) => v.id === action.data);
      // const posts = [...state.me.Posts];
      // posts.splice(postIndex, 1);
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //   },
      // };

      default:
        break;
      // return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJhZGRGb2xsb3dMb2FkaW5nIiwiYWRkRm9sbG93RG9uZSIsImFkZEZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkFERF9GT0xMT1dfUkVRVUVTVCIsIkFERF9GT0xMT1dfU1VDQ0VTUyIsIkFERF9GT0xMT1dfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ2luUmVxdWVzdEFjdGlvbiIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGtCQUFnQixFQUFFLEtBRFE7QUFFMUJDLGVBQWEsRUFBRSxLQUZXO0FBRzFCQyxnQkFBYyxFQUFFLElBSFU7QUFLMUJDLGNBQVksRUFBRSxLQUxZO0FBS0w7QUFDckJDLFdBQVMsRUFBRSxLQU5lO0FBTzFCQyxZQUFVLEVBQUUsSUFQYztBQVMxQkMsZUFBYSxFQUFFLEtBVFc7QUFTSjtBQUN0QkMsWUFBVSxFQUFFLEtBVmM7QUFXMUJDLGFBQVcsRUFBRSxJQVhhO0FBYTFCQyxlQUFhLEVBQUUsS0FiVztBQWFKO0FBQ3RCQyxZQUFVLEVBQUUsS0FkYztBQWUxQkMsYUFBVyxFQUFFLElBZmE7QUFpQjFCQyx1QkFBcUIsRUFBRSxLQWpCRztBQWlCSTtBQUM5QkMsb0JBQWtCLEVBQUUsS0FsQk07QUFtQjFCQyxxQkFBbUIsRUFBRSxJQW5CSztBQXFCMUJDLElBQUUsRUFBRSxJQXJCc0I7QUFzQjFCQyxZQUFVLEVBQUUsRUF0QmM7QUF1QjFCQyxXQUFTLEVBQUU7QUF2QmUsQ0FBckIsQyxDQTBCUDs7QUFDTyxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxJ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Q3hDLEVBQU4sQ0FBUzhCLEtBQVQsQ0FBZWEsTUFBZixDQUFzQixVQUFDQyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ2YsRUFBRixLQUFTUyxNQUFNLENBQUNYLElBQXZCO0FBQUEsU0FBdEIsQ0FBakI7QUFDQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0U7QUFDRjtBQTFLRjtBQTRLRCxHQTdLYSxDQUFkO0FBOEtELENBL0tEOztBQWlMZVMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NTc4ZmQzMWJiZmFhZGRjZDcwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGFkZEZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZEZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGFkZEZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSR7J247KeAIO2ZleyduO2VmOuKlCDrs4DsiJhcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcblxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSR7J247KeAIO2ZleyduO2VmOuKlCDrs4DsiJhcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyeheykkeyduOyngCDtmZXsnbjtlZjripQg67OA7IiYXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcblxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSR7J247KeAIO2ZleyduO2VmOuKlCDrs4DsiJhcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcblxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG4vLyAtLS0g7IOB7IiY7ZmUXHJcbmV4cG9ydCBjb25zdCBBRERfRk9MTE9XX1JFUVVFU1QgPSBcIkFERF9GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0ZPTExPV19TVUNDRVNTID0gXCJBRERfRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9GT0xMT1dfRkFJTFVSRSA9IFwiQUREX0ZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG4vLyB1c2VyIHJlZHVjZXLsnZgg7IOB7YOc66W8IOuwlOq/gCDsiJgg7J6I64qUIOyVoeyFmFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuLy8gLS0tXHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6IFwiaHlvaWxcIixcclxuICAgIGlkOiAxLFxyXG4gICAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gICAgRm9sbG93aW5nczogW3sgbmlja25hbWU6IFwiYWFhXCIgfSwgeyBuaWNrbmFtZTogXCJiYmJcIiB9LCB7IG5pY2tuYW1lOiBcImNjY1wiIH1dLFxyXG4gICAgRm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogXCJhYWFcIiB9LCB7IG5pY2tuYW1lOiBcImJiYlwiIH0sIHsgbmlja25hbWU6IFwiY2NjXCIgfV0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBRERfRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkRm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkRm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkRm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZEZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRGb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkRm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOiAvLyDrpqzrk4DshJzsnZgg7JWh7IWY7J20IOyLpO2WieuQmOuptOyEnCBzYWdh7J2YIOyVoeyFmOuPhCDqsJnsnbQg7Iuk7ZaJ7J2065CoIOuPmeyLnOyXkFxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLy8gcmVxdWVzdOyXkOyEnCAz6rCc7J2YIOuzgOyImOulvCDrqqjrkZAg7LSI6riw7ZmUIOyLnOy8nOykjFxyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGxvZ0luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgLy8gICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICAvLyAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLy8gc3VjY2Vzc+yXkOyEnCDtlYTsmpTtlZwg67OA7IiY66eMIOy0iOq4sO2ZlCDsi5zsvJzspIxcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgLy8gICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC8vIGZhaWx1cmXsl5DshJwg7ZWE7JqU7ZWcIOuzgOyImOunjCDstIjquLDtmZQg7Iuc7Lyc7KSMXHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBsb2dJbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIC8vIH07XHJcblxyXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGxvZ091dExvYWRpbmc6IHRydWUsXHJcbiAgICAgIC8vICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICAgIC8vICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgbG9nT3V0RG9uZTogdHJ1ZSxcclxuICAgICAgLy8gICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICAvLyAgIG1lOiBudWxsLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgbG9nT3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgLy8gfTtcclxuXHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgc2lnblVwTG9hZGluZzogdHJ1ZSxcclxuICAgICAgLy8gICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgICAgLy8gICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIHNpZ25VcERvbmU6IHRydWUsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBzaWduVXBFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAvLyB9O1xyXG5cclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogdHJ1ZSxcclxuICAgICAgLy8gICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgICAvLyAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGNoYW5nZU5pY2tuYW1lRG9uZTogdHJ1ZSxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgY2hhbmdlTmlja25hbWVFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAvLyB9O1xyXG5cclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH07XHJcblxyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1lLlBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAvLyBjb25zdCBwb3N0cyA9IFsuLi5zdGF0ZS5tZS5Qb3N0c107XHJcbiAgICAgIC8vIHBvc3RzLnNwbGljZShwb3N0SW5kZXgsIDEpO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9