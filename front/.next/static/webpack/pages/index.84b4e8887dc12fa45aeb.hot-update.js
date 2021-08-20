webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwicG9zdCIsIm1haW5Qb3N0cyIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFFO0FBQ0pDLGNBQVUsRUFBRSxLQURSO0FBRUpELFFBQUksRUFBRSxJQUZGO0FBR0pFLGNBQVUsRUFBRSxFQUhSO0FBSUpDLGFBQVMsRUFBRTtBQUpQLEdBRGE7QUFPbkJDLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUU7QUFEUDtBQVBhLENBQXJCO0FBWU8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ25DLFNBQU87QUFDTEMsUUFBSSxFQUFFLFFBREQ7QUFFTEQsUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUNoQyxTQUFPO0FBQ0xELFFBQUksRUFBRTtBQURELEdBQVA7QUFHRCxDQUpNLEMsQ0FNUDs7QUFDQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJaLFlBQXlCO0FBQUEsTUFBWGEsTUFBVzs7QUFDcEQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBSyxRQUFMO0FBQ0UsNkNBQ0tHLEtBREw7QUFFRVgsWUFBSSxrQ0FDQ1csS0FBSyxDQUFDWCxJQURQO0FBRUZDLG9CQUFVLEVBQUUsSUFGVjtBQUdGRCxjQUFJLEVBQUVZLE1BQU0sQ0FBQ0w7QUFIWDtBQUZOOztBQVFGLFNBQUssU0FBTDtBQUNFLDZDQUNLSSxLQURMO0FBRUVYLFlBQUksa0NBQ0NXLEtBQUssQ0FBQ1gsSUFEUDtBQUVGQyxvQkFBVSxFQUFFLEtBRlY7QUFHRkQsY0FBSSxFQUFFO0FBSEo7QUFGTjtBQWpCSjtBQTBCRCxDQTNCRDs7QUE2QmVVLDBFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg0YjRlODg4N2RjMTJmYTQ1YWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IHtcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgdXNlcjogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxuICB9LFxyXG4gIHBvc3Q6IHtcclxuICAgIG1haW5Qb3N0czoge30sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiTE9HX0lOXCIsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19PVVRcIixcclxuICB9O1xyXG59O1xyXG5cclxuLy8gcmVkdWNlciA9ICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAvLyAgICAgY2FzZSBcIkNIQU5HRV9OSUNLTkFNRVwiOlxyXG4gICAgLy8gICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICAgIG5hbWU6IGFjdGlvbi5kYXRhLFxyXG4gICAgLy8gICAgICAgfTtcclxuICAgIC8vICAgfVxyXG4gICAgY2FzZSBcIkxPR19JTlwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgXCJMT0dfT1VUXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG5cclxuLy8gYWN0aW9uIO2Yle2DnFxyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IHtcclxuLy8gICB0eXBlOiBcIkNIQU5HRV9OSUNLTkFNRVwiLFxyXG4vLyAgIGRhdGE6IFwiYm9vZ2ljaG9cIixcclxuLy8gfTtcclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSB7XHJcbi8vICAgdHlwZTogXCJDSEFOR0VfTklDS05BTUVcIixcclxuLy8gICBkYXRhOiBcInBpa2FcIixcclxuLy8gfTtcclxuXHJcbi8vID0+XHJcblxyXG4vLyA8IGFjdGlvbiBjcmVhdG9yID4gOiBDaGFuZ2Vfbmlja25hbWXsnZgg7ZiV7YOc7J2YIGFjdGlvbuydtCDrp47slYTsp4DrqbQg7L2U65Oc65+J64+EIOunjuyVhOyngOqzoCDspJHrs7XrkJjripTqsoPsnbQg66eO6riwIOuWhOusuOyXkCDtlajsiJjroZwg7KSE7J24IOqyg1xyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICB0eXBlOiBcIkNIQU5HRV9OSUNLTkFNRVwiLFxyXG4vLyAgICAgICBkYXRhOiBkYXRhLFxyXG4vLyAgICAgfTtcclxuLy8gICB9O1xyXG5cclxuLy8gY2hhbmdlTmlja25hbWUoXCJoeW9yb1wiKTtcclxuXHJcbi8vIGFjdGlvbiDsg53shLEgLT4gYWN0aW5vIGRpc3BhdGNoXHJcbi8vIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCdoeW9ybycpKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9