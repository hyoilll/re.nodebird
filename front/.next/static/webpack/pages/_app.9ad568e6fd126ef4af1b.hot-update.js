webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
 // npm i shortid, 항상 새로운 아이디를 생성해줌

 // npm i immer

 // npm i faker

var initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
      }]
    };
  });
}; // --- 상수화

var LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
var LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
var LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
var REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE"; // ---

var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: "hyoil"
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    // npm i shortid, 항상 새로운 아이디를 생성해줌
    content: data,
    User: {
      id: 1,
      nickname: "hyoil"
    }
  };
}; // 이전 상태를 액션을 통해 다음 상태로 만들어 내는 함수(불변성은 지키면서)


var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.hasMorePost = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      // return {
      //   ...state,
      //   addPostLoading: true,
      //   addPostDone: false,
      //   addPostError: null,
      // };

      case ADD_POST_SUCCESS:
        // draft가 알아서 불변성을 지켜주기 때문에 그냥 삽입하면 됨
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      // return {
      //   ...state,
      //   mainPosts: [dummyPost(action.data), ...state.mainPosts], // 객체가 삽임되므로 객체를 반환하는 함수를 통해서 data를 넘겨줌
      //   addPostLoading: false,
      //   addPostDone: true,
      //   // const a = [1, 2, 3, 4]
      //   // const b = [5, ...a]
      //   // b => [5, 1, 2, 3, 4]};
      // };

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      // return {
      //   ...state,
      //   addPostLoading: false,
      //   addPostError: action.error,
      // };

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      //   return {
      //   ...state,
      //   addCommentLoading: true,
      //   addCommentDone: false,
      //   addCommentError: null,
      // };

      case ADD_COMMENT_SUCCESS:
        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.postId;
        });
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      // action : {content: commentText, postId: post.id, userId: id}
      // const postIndex = state.mainPosts.findIndex(
      //   (v) => v.id === action.data.postId
      // );
      // const post = { ...state.mainPosts[postIndex] };
      // post.Comments = [dummyComment(action.data.content), ...post.Comments];
      // const addMainPosts = [...state.mainPosts];
      // addMainPosts[postIndex] = post;
      // return {
      //   ...state,
      //   mainPosts: addMainPosts,
      //   addCommentLoading: false,
      //   addCommentDone: true,
      // };

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      //   return {
      //   ...state,
      //   addCommentLoading: false,
      //   addCommentError: action.error,
      // };

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      // return {
      //   ...state,
      //   removePostLoading: true,
      //   removePostDone: false,
      //   removePostError: null,
      // };

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      // return {
      //   ...state,
      //   mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
      //   removePostLoading: false,
      //   removePostDone: true,
      // };

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
      // return {
      //   ...state,
      //   addPostLoading: false,
      //   addPostError: action.error,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxl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SUFBdkI7QUFBQSxTQUF2QixDQUFsQjtBQUNBUyxhQUFLLENBQUNqRCxpQkFBTixHQUEwQixLQUExQjtBQUNBaUQsYUFBSyxDQUFDaEQsY0FBTixHQUF1QixJQUF2QjtBQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQUtrQyxtQkFBTDtBQUNFYyxhQUFLLENBQUNqRCxpQkFBTixHQUEwQixLQUExQjtBQUNBaUQsYUFBSyxDQUFDL0MsZUFBTixHQUF3QjZDLE1BQU0sQ0FBQ0ssS0FBL0I7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0U7QUFDRjtBQTlIRjtBQWdJRCxHQWpJYSxDQUFkO0FBa0lELENBbklEOztBQXFJZVAsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45YWQ1NjhlNmZkMTI2ZWY0YWYxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjsgLy8gbnBtIGkgc2hvcnRpZCwg7ZWt7IOBIOyDiOuhnOyatCDslYTsnbTrlJTrpbwg7IOd7ISx7ZW07KSMXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiOyAvLyBucG0gaSBpbW1lclxyXG5pbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7IC8vIG5wbSBpIGZha2VyXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5KG51bWJlcilcclxuICAgIC5maWxsKClcclxuICAgIC5tYXAoKCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgICBJbWFnZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIC0tLSDsg4HsiJjtmZRcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuLy8gLS0tXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5pY2tuYW1lOiBcImh5b2lsXCIsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxuICB9O1xyXG59O1xyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLCAvLyBucG0gaSBzaG9ydGlkLCDtla3sg4Eg7IOI66Gc7Jq0IOyVhOydtOuUlOulvCDsg53shLHtlbTspIxcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuaWNrbmFtZTogXCJoeW9pbFwiLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJgo67aI67OA7ISx7J2AIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAvLyAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgLy8gICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAvLyBkcmFmdOqwgCDslYzslYTshJwg67aI67OA7ISx7J2EIOyngOy8nOyjvOq4sCDrlYzrrLjsl5Ag6re464OlIOyCveyehe2VmOuptCDrkKhcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLCAvLyDqsJ3ssrTqsIAg7IK97J6E65CY66+A66GcIOqwneyytOulvCDrsJjtmZjtlZjripQg7ZWo7IiY66W8IO2Gte2VtOyEnCBkYXRh66W8IOuEmOqyqOykjFxyXG4gICAgICAvLyAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBhZGRQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgLy8gICAvLyBjb25zdCBhID0gWzEsIDIsIDMsIDRdXHJcbiAgICAgIC8vICAgLy8gY29uc3QgYiA9IFs1LCAuLi5hXVxyXG4gICAgICAvLyAgIC8vIGIgPT4gWzUsIDEsIDIsIDMsIDRdfTtcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgLy8gfTtcclxuXHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyAgIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAvLyAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gYWN0aW9uIDoge2NvbnRlbnQ6IGNvbW1lbnRUZXh0LCBwb3N0SWQ6IHBvc3QuaWQsIHVzZXJJZDogaWR9XHJcbiAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXHJcbiAgICAgIC8vICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxyXG4gICAgICAvLyApO1xyXG4gICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIC8vIGNvbnN0IGFkZE1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAvLyBhZGRNYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWFpblBvc3RzOiBhZGRNYWluUG9zdHMsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIC8vIH07XHJcblxyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICByZW1vdmVQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgLy8gICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgIC8vICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAvLyAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgLy8gfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==