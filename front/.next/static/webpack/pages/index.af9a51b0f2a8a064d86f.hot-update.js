webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\re.nodebird\\front\\components\\FollowButton.js",
    _this = undefined,
    _s = $RefreshSig$();









var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading;

  var isFollowing = me && me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    // isFollowing이 참일 경우가 현재 팔로잉 중인 경우
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST
      });
    }
  }, [isFollowing]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      loading: followLoading || unfollowLoading,
      onClick: onClickButton,
      children: isFollowing ? "unfollow" : "follow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(FollowButton, "EmyM98b7yhkDGxSSUGFn8Q9dj0c=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    mainPosts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0__["object"]),
    imagePaths: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0__["object"]),
    hasMorePosts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    loadPostsLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    loadPostsDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    loadPostsError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null]),
    addPostLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    addPostDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    addPostError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null]),
    removePostLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    removePostDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    removePostError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null]),
    addCommentLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    addCommentDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    addCommentError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null])
  })
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGlja0J1dHRvbiIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm1haW5Qb3N0cyIsImFycmF5T2YiLCJvYmplY3QiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwiYm9vbCIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJvbmVPZiIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ2pDLHFCQUErQ0MsK0RBQVcsQ0FDeEQsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUR3RCxDQUExRDtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7QUFBQSxNQUFZQyxhQUFaLGdCQUFZQSxhQUFaO0FBQUEsTUFBMkJDLGVBQTNCLGdCQUEyQkEsZUFBM0I7O0FBR0EsTUFBTUMsV0FBVyxHQUFHSCxFQUFFLElBQUlBLEVBQUUsQ0FBQ0ksVUFBSCxDQUFjQyxJQUFkLENBQW1CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU1gsSUFBSSxDQUFDWSxJQUFMLENBQVVELEVBQTFCO0FBQUEsR0FBbkIsQ0FBMUI7QUFFQSxNQUFNRSxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdEM7QUFDQSxRQUFJVCxXQUFKLEVBQWlCO0FBQ2ZNLGNBQVEsQ0FBQztBQUNQSSxZQUFJLEVBQUVDO0FBREMsT0FBRCxDQUFSO0FBR0Q7QUFDRixHQVBnQyxFQU85QixDQUFDWCxXQUFELENBUDhCLENBQWpDO0FBU0Esc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQywyQ0FBRDtBQUNFLGFBQU8sRUFBRUYsYUFBYSxJQUFJQyxlQUQ1QjtBQUVFLGFBQU8sRUFBRVMsYUFGWDtBQUFBLGdCQUlHUixXQUFXLEdBQUcsVUFBSCxHQUFnQjtBQUo5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFVRCxDQTNCRDs7R0FBTVIsWTtVQUMyQ0UsdUQsRUFLOUJhLHVEOzs7S0FOYmYsWTtBQTZCTkEsWUFBWSxDQUFDb0IsU0FBYixHQUF5QjtBQUN2Qm5CLE1BQUksRUFBRW9CLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDcEJDLGFBQVMsRUFBRUYsaURBQVMsQ0FBQ0csT0FBVixDQUFrQkMsaURBQWxCLENBRFM7QUFFcEJDLGNBQVUsRUFBRUwsaURBQVMsQ0FBQ0csT0FBVixDQUFrQkMsaURBQWxCLENBRlE7QUFHcEJFLGdCQUFZLEVBQUVOLGlEQUFTLENBQUNPLElBSEo7QUFJcEJDLG9CQUFnQixFQUFFUixpREFBUyxDQUFDTyxJQUpSO0FBS3BCRSxpQkFBYSxFQUFFVCxpREFBUyxDQUFDTyxJQUxMO0FBTXBCRyxrQkFBYyxFQUFFVixpREFBUyxDQUFDVyxLQUFWLENBQWdCLENBQUMsSUFBRCxDQUFoQixDQU5JO0FBT3BCQyxrQkFBYyxFQUFFWixpREFBUyxDQUFDTyxJQVBOO0FBUXBCTSxlQUFXLEVBQUViLGlEQUFTLENBQUNPLElBUkg7QUFTcEJPLGdCQUFZLEVBQUVkLGlEQUFTLENBQUNXLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELENBQWhCLENBVE07QUFVcEJJLHFCQUFpQixFQUFFZixpREFBUyxDQUFDTyxJQVZUO0FBV3BCUyxrQkFBYyxFQUFFaEIsaURBQVMsQ0FBQ08sSUFYTjtBQVlwQlUsbUJBQWUsRUFBRWpCLGlEQUFTLENBQUNXLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELENBQWhCLENBWkc7QUFhcEJPLHFCQUFpQixFQUFFbEIsaURBQVMsQ0FBQ08sSUFiVDtBQWNwQlksa0JBQWMsRUFBRW5CLGlEQUFTLENBQUNPLElBZE47QUFlcEJhLG1CQUFlLEVBQUVwQixpREFBUyxDQUFDVyxLQUFWLENBQWdCLENBQUMsSUFBRCxDQUFoQjtBQWZHLEdBQWhCO0FBRGlCLENBQXpCO0FBb0JlaEMsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWY5YTUxYjBmMmE4YTA2NGQ4NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMsIHsgb2JqZWN0IH0gZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEFERF9GT0xMT1dfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCB7IG1lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS51c2VyXHJcbiAgKTtcclxuICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lICYmIG1lLkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgLy8gaXNGb2xsb3dpbmfsnbQg7LC47J28IOqyveyasOqwgCDtmITsnqwg7YyU66Gc7J6JIOykkeyduCDqsr3smrBcclxuICAgIGlmIChpc0ZvbGxvd2luZykge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRm9sbG93aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bmZvbGxvd0xvYWRpbmd9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja0J1dHRvbn1cclxuICAgICAgPlxyXG4gICAgICAgIHtpc0ZvbGxvd2luZyA/IFwidW5mb2xsb3dcIiA6IFwiZm9sbG93XCJ9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIG1haW5Qb3N0czogUHJvcFR5cGVzLmFycmF5T2Yob2JqZWN0KSxcclxuICAgIGltYWdlUGF0aHM6IFByb3BUeXBlcy5hcnJheU9mKG9iamVjdCksXHJcbiAgICBoYXNNb3JlUG9zdHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBQcm9wVHlwZXMub25lT2YoW251bGxdKSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFkZFBvc3REb25lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFkZFBvc3RFcnJvcjogUHJvcFR5cGVzLm9uZU9mKFtudWxsXSksXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IFByb3BUeXBlcy5vbmVPZihbbnVsbF0pLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBQcm9wVHlwZXMub25lT2YoW251bGxdKSxcclxuICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==