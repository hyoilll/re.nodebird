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
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
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
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGlja0J1dHRvbiIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJkYXRhIiwiRk9MTE9XX1JFUVVFU1QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm1haW5Qb3N0cyIsImFycmF5T2YiLCJvYmplY3QiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwiYm9vbCIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJvbmVPZiIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ2pDLHFCQUErQ0MsK0RBQVcsQ0FDeEQsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUR3RCxDQUExRDtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7QUFBQSxNQUFZQyxhQUFaLGdCQUFZQSxhQUFaO0FBQUEsTUFBMkJDLGVBQTNCLGdCQUEyQkEsZUFBM0I7O0FBR0EsTUFBTUMsV0FBVyxHQUFHSCxFQUFFLElBQUlBLEVBQUUsQ0FBQ0ksVUFBSCxDQUFjQyxJQUFkLENBQW1CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU1gsSUFBSSxDQUFDWSxJQUFMLENBQVVELEVBQTFCO0FBQUEsR0FBbkIsQ0FBMUI7QUFFQSxNQUFNRSxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdEM7QUFDQSxRQUFJVCxXQUFKLEVBQWlCO0FBQ2ZNLGNBQVEsQ0FBQztBQUNQSSxZQUFJLEVBQUVDLCtEQURDO0FBRVBDLFlBQUksRUFBRW5CLElBQUksQ0FBQ1ksSUFBTCxDQUFVRDtBQUZULE9BQUQsQ0FBUjtBQUlELEtBTEQsTUFLTztBQUNMRSxjQUFRLENBQUM7QUFDUEksWUFBSSxFQUFFRyw2REFEQztBQUVQRCxZQUFJLEVBQUVuQixJQUFJLENBQUNZLElBQUwsQ0FBVUQ7QUFGVCxPQUFELENBQVI7QUFJRDtBQUNGLEdBYmdDLEVBYTlCLENBQUNKLFdBQUQsQ0FiOEIsQ0FBakM7QUFlQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDJDQUFEO0FBQ0UsYUFBTyxFQUFFRixhQUFhLElBQUlDLGVBRDVCO0FBRUUsYUFBTyxFQUFFUyxhQUZYO0FBQUEsZ0JBSUdSLFdBQVcsR0FBRyxVQUFILEdBQWdCO0FBSjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVVELENBakNEOztHQUFNUixZO1VBQzJDRSx1RCxFQUs5QmEsdUQ7OztLQU5iZixZO0FBbUNOQSxZQUFZLENBQUNzQixTQUFiLEdBQXlCO0FBQ3ZCckIsTUFBSSxFQUFFc0IsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNwQkMsYUFBUyxFQUFFRixpREFBUyxDQUFDRyxPQUFWLENBQWtCQyxpREFBbEIsQ0FEUztBQUVwQkMsY0FBVSxFQUFFTCxpREFBUyxDQUFDRyxPQUFWLENBQWtCQyxpREFBbEIsQ0FGUTtBQUdwQkUsZ0JBQVksRUFBRU4saURBQVMsQ0FBQ08sSUFISjtBQUlwQkMsb0JBQWdCLEVBQUVSLGlEQUFTLENBQUNPLElBSlI7QUFLcEJFLGlCQUFhLEVBQUVULGlEQUFTLENBQUNPLElBTEw7QUFNcEJHLGtCQUFjLEVBQUVWLGlEQUFTLENBQUNXLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELENBQWhCLENBTkk7QUFPcEJDLGtCQUFjLEVBQUVaLGlEQUFTLENBQUNPLElBUE47QUFRcEJNLGVBQVcsRUFBRWIsaURBQVMsQ0FBQ08sSUFSSDtBQVNwQk8sZ0JBQVksRUFBRWQsaURBQVMsQ0FBQ1csS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEIsQ0FUTTtBQVVwQkkscUJBQWlCLEVBQUVmLGlEQUFTLENBQUNPLElBVlQ7QUFXcEJTLGtCQUFjLEVBQUVoQixpREFBUyxDQUFDTyxJQVhOO0FBWXBCVSxtQkFBZSxFQUFFakIsaURBQVMsQ0FBQ1csS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEIsQ0FaRztBQWFwQk8scUJBQWlCLEVBQUVsQixpREFBUyxDQUFDTyxJQWJUO0FBY3BCWSxrQkFBYyxFQUFFbkIsaURBQVMsQ0FBQ08sSUFkTjtBQWVwQmEsbUJBQWUsRUFBRXBCLGlEQUFTLENBQUNXLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELENBQWhCO0FBZkcsR0FBaEI7QUFEaUIsQ0FBekI7QUFvQmVsQywyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNGFjM2ZiM2YwMTFlZjg2ZGNjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcywgeyBvYmplY3QgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBtZSwgZm9sbG93TG9hZGluZywgdW5mb2xsb3dMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUudXNlclxyXG4gICk7XHJcbiAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZSAmJiBtZS5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vIGlzRm9sbG93aW5n7J20IOywuOydvCDqsr3smrDqsIAg7ZiE7J6sIO2MlOuhnOyeiSDspJHsnbgg6rK97JqwXHJcbiAgICBpZiAoaXNGb2xsb3dpbmcpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpc0ZvbGxvd2luZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259XHJcbiAgICAgID5cclxuICAgICAgICB7aXNGb2xsb3dpbmcgPyBcInVuZm9sbG93XCIgOiBcImZvbGxvd1wifVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBtYWluUG9zdHM6IFByb3BUeXBlcy5hcnJheU9mKG9iamVjdCksXHJcbiAgICBpbWFnZVBhdGhzOiBQcm9wVHlwZXMuYXJyYXlPZihvYmplY3QpLFxyXG4gICAgaGFzTW9yZVBvc3RzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogUHJvcFR5cGVzLm9uZU9mKFtudWxsXSksXHJcbiAgICBhZGRQb3N0TG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhZGRQb3N0RG9uZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhZGRQb3N0RXJyb3I6IFByb3BUeXBlcy5vbmVPZihbbnVsbF0pLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBQcm9wVHlwZXMub25lT2YoW251bGxdKSxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFkZENvbW1lbnREb25lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogUHJvcFR5cGVzLm9uZU9mKFtudWxsXSksXHJcbiAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=