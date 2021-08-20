webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {}
  },
  post: {
    mainPosts: {}
  }
};
var loginAction = function loginAction(data) {
  return {
    type: "LOG_IN",
    data: data
  };
};
var logoutAction = function logoutAction() {
  return {
    type: "LOG_OUT"
  };
}; // reducer = (이전상태, 액션) => 다음상태

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    //     case "CHANGE_NICKNAME":
    //       return {
    //         ...state,
    //         name: action.data,
    //       };
    //   }
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case "LOG_IN":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: true,
          user: action.data
        })
      });

    case "LOG_OUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: false,
          user: null
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer); // action 형태
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwicG9zdCIsIm1haW5Qb3N0cyIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFLEtBRFI7QUFFSkQsUUFBSSxFQUFFLElBRkY7QUFHSkUsY0FBVSxFQUFFLEVBSFI7QUFJSkMsYUFBUyxFQUFFO0FBSlAsR0FEYTtBQU9uQkMsTUFBSSxFQUFFO0FBQ0pDLGFBQVMsRUFBRTtBQURQO0FBUGEsQ0FBckI7QUFZTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDbkMsU0FBTztBQUNMQyxRQUFJLEVBQUUsUUFERDtBQUVMRCxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlELENBTE07QUFPQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLFNBQU87QUFDTEQsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdELENBSk0sQyxDQU1QOztBQUNBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QlosWUFBeUI7QUFBQSxNQUFYYSxNQUFXOztBQUNwRCxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFLSywwREFBTDtBQUNFLDZDQUFZRixLQUFaLEdBQXNCQyxNQUFNLENBQUNFLE9BQTdCOztBQUNGLFNBQUssUUFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVYLFlBQUksa0NBQ0NXLEtBQUssQ0FBQ1gsSUFEUDtBQUVGQyxvQkFBVSxFQUFFLElBRlY7QUFHRkQsY0FBSSxFQUFFWSxNQUFNLENBQUNMO0FBSFg7QUFGTjs7QUFRRixTQUFLLFNBQUw7QUFDRSw2Q0FDS0ksS0FETDtBQUVFWCxZQUFJLGtDQUNDVyxLQUFLLENBQUNYLElBRFA7QUFFRkMsb0JBQVUsRUFBRSxLQUZWO0FBR0ZELGNBQUksRUFBRTtBQUhKO0FBRk47O0FBUUY7QUFDRSxhQUFPVyxLQUFQO0FBNUJKO0FBOEJELENBL0JEOztBQWlDZUQsMEVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MzM0NTI1MDU4ZTVkYzlmZWYwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbiAgfSxcclxuICBwb3N0OiB7XHJcbiAgICBtYWluUG9zdHM6IHt9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTlwiLFxyXG4gICAgZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfT1VUXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIHJlZHVjZXIgPSAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgLy8gICAgIGNhc2UgXCJDSEFOR0VfTklDS05BTUVcIjpcclxuICAgIC8vICAgICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgICAgICBuYW1lOiBhY3Rpb24uZGF0YSxcclxuICAgIC8vICAgICAgIH07XHJcbiAgICAvLyAgIH1cclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiTE9HX0lOXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkxPR19PVVRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcblxyXG4vLyBhY3Rpb24g7ZiV7YOcXHJcbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0ge1xyXG4vLyAgIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbi8vICAgZGF0YTogXCJib29naWNob1wiLFxyXG4vLyB9O1xyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IHtcclxuLy8gICB0eXBlOiBcIkNIQU5HRV9OSUNLTkFNRVwiLFxyXG4vLyAgIGRhdGE6IFwicGlrYVwiLFxyXG4vLyB9O1xyXG5cclxuLy8gPT5cclxuXHJcbi8vIDwgYWN0aW9uIGNyZWF0b3IgPiA6IENoYW5nZV9uaWNrbmFtZeydmCDtmJXtg5zsnZggYWN0aW9u7J20IOunjuyVhOyngOuptCDsvZTrk5zrn4nrj4Qg66eO7JWE7KeA6rOgIOykkeuzteuQmOuKlOqyg+ydtCDrp47quLAg65aE66y47JeQIO2VqOyImOuhnCDspITsnbgg6rKDXHJcbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbi8vICAgICAgIGRhdGE6IGRhdGEsXHJcbi8vICAgICB9O1xyXG4vLyAgIH07XHJcblxyXG4vLyBjaGFuZ2VOaWNrbmFtZShcImh5b3JvXCIpO1xyXG5cclxuLy8gYWN0aW9uIOyDneyEsSAtPiBhY3Rpbm8gZGlzcGF0Y2hcclxuLy8gc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoJ2h5b3JvJykpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=