webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "Hyoilzzz"
    },
    content: "첫번째 게시글 #hyoil #zzz#bbb",
    Images: [{
      src: "https://placeimg.com/64/64/1"
    }, {
      src: "https://placeimg.com/64/64/2"
    }, {
      src: "https://placeimg.com/64/64/3"
    }],
    Comments: [{
      User: {
        nickname: "nero"
      },
      content: "개정판이 나왔네요."
    }, {
      User: {
        nickname: "hero"
      },
      content: "얼른 사고 싶어요."
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
}; // --- 상수화

var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
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
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    // npm i shortid, 항상 새로운 아이디를 생성해줌
    content: data,
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
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    // npm i shortid, 항상 새로운 아이디를 생성해줌
    content: data,
    User: {
      id: 1,
      nickname: "hyoil"
    }
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      console.log("ADD_POST_REQUEST");
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      console.log("ADD_POST_SUCCESS", action.type, action.data);
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        // 객체가 삽임되므로 객체를 반환하는 함수를 통해서 data를 넘겨줌
        addPostLoading: false,
        addPostDone: true // const a = [1, 2, 3, 4]
        // const b = [5, ...a]
        // b => [5, 1, 2, 3, 4]};

      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      // action : {content: commentText, postId: post.id, userId: id}
      var postIndex = state.mainPosts.findIndex(function (v) {
        return v.id === action.data.postId;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentDone: true // const a = [1, 2, 3, 4]
        // const b = [5, ...a]
        // b => [5, 1, 2, 3, 4]};

      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwicG9zdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUNUO0FBQ0VDLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRTtBQUNKRCxRQUFFLEVBQUUsQ0FEQTtBQUVKRSxjQUFRLEVBQUU7QUFGTixLQUZSO0FBTUVDLFdBQU8sRUFBRSx5QkFOWDtBQU9FQyxVQUFNLEVBQUUsQ0FDTjtBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQURNLEVBRU47QUFBRUEsU0FBRyxFQUFFO0FBQVAsS0FGTSxFQUdOO0FBQUVBLFNBQUcsRUFBRTtBQUFQLEtBSE0sQ0FQVjtBQVlFQyxZQUFRLEVBQUUsQ0FDUjtB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RUVyQixzQkFBYyxFQUFFLEtBRmxCO0FBR0VFLG9CQUFZLEVBQUVvQixNQUFNLENBQUNHO0FBSHZCOztBQU1GLFNBQUtoQixtQkFBTDtBQUNFO0FBQ0EsVUFBTWlCLFNBQVMsR0FBR0wsS0FBSyxDQUFDOUIsU0FBTixDQUFnQm9DLFNBQWhCLENBQ2hCLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNwQyxFQUFGLEtBQVM4QixNQUFNLENBQUNULElBQVAsQ0FBWWdCLE1BQTVCO0FBQUEsT0FEZ0IsQ0FBbEI7QUFHQSw2Q0FDS1IsS0FETDtBQUVFbEIseUJBQWlCLEVBQUUsSUFGckI7QUFHRUMsc0JBQWMsRUFBRSxLQUhsQjtBQUlFQyx1QkFBZSxFQUFFO0FBSm5COztBQU1GLFNBQUtLLG1CQUFMO0FBQ0UsNkNBQ0tXLEtBREw7QUFFRWxCLHlCQUFpQixFQUFFLEtBRnJCO0FBR0VDLHNCQUFjLEVBQUUsSUFIbEIsQ0FJRTtBQUNBO0FBQ0E7O0FBTkY7O0FBUUYsU0FBS08sbUJBQUw7QUFDRSw2Q0FDS1UsS0FETDtBQUVFbEIseUJBQWlCLEVBQUUsS0FGckI7QUFHRUUsdUJBQWUsRUFBRWlCLE1BQU0sQ0FBQ0c7QUFIMUI7O0FBS0Y7QUFDRSxhQUFPSixLQUFQO0FBdERKO0FBd0RELENBekREOztBQTJEZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWNkNDg0NjU1MTYzZjZjNGRlZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcIkh5b2lsenp6XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IFwi7LKr67KI7Ke4IOqyjOyLnOq4gCAjaHlvaWwgI3p6eiNiYmJcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAgeyBzcmM6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vNjQvNjQvMVwiIH0sXHJcbiAgICAgICAgeyBzcmM6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vNjQvNjQvMlwiIH0sXHJcbiAgICAgICAgeyBzcmM6IFwiaHR0cHM6Ly9wbGFjZWltZy5jb20vNjQvNjQvM1wiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJuZXJvXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLqsJzsoJXtjJDsnbQg64KY7JmU64Sk7JqULlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJoZXJvXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLslrzrpbgg7IKs6rOgIOyLtuyWtOyalC5cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuLy8gLS0tIOyDgeyImO2ZlFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuLy8gLS0tXHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLCAvLyBucG0gaSBzaG9ydGlkLCDtla3sg4Eg7IOI66Gc7Jq0IOyVhOydtOuUlOulvCDsg53shLHtlbTspIxcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuaWNrbmFtZTogXCJoeW9pbFwiLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbiAgfTtcclxufTtcclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSwgLy8gbnBtIGkgc2hvcnRpZCwg7ZWt7IOBIOyDiOuhnOyatCDslYTsnbTrlJTrpbwg7IOd7ISx7ZW07KSMXHJcbiAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmlja25hbWU6IFwiaHlvaWxcIixcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgY29uc29sZS5sb2coXCJBRERfUE9TVF9SRVFVRVNUXCIpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQUREX1BPU1RfU1VDQ0VTU1wiLCBhY3Rpb24udHlwZSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sIC8vIOqwneyytOqwgCDsgr3snoTrkJjrr4DroZwg6rCd7LK066W8IOuwmO2ZmO2VmOuKlCDtlajsiJjrpbwg7Ya17ZW07IScIGRhdGHrpbwg64SY6rKo7KSMXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgIC8vIGNvbnN0IGEgPSBbMSwgMiwgMywgNF1cclxuICAgICAgICAvLyBjb25zdCBiID0gWzUsIC4uLmFdXHJcbiAgICAgICAgLy8gYiA9PiBbNSwgMSwgMiwgMywgNF19O1xyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIC8vIGFjdGlvbiA6IHtjb250ZW50OiBjb21tZW50VGV4dCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkfVxyXG4gICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KFxyXG4gICAgICAgICh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWRcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgICAvLyBjb25zdCBhID0gWzEsIDIsIDMsIDRdXHJcbiAgICAgICAgLy8gY29uc3QgYiA9IFs1LCAuLi5hXVxyXG4gICAgICAgIC8vIGIgPT4gWzUsIDEsIDIsIDMsIDRdfTtcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==