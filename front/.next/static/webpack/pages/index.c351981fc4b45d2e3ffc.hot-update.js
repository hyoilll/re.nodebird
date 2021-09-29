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
  console.log(post);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      loading: followLoading || unfollowLoading,
      onClick: onClickButton,
      children: "Follow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DbGlja0J1dHRvbiIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJtYWluUG9zdHMiLCJhcnJheU9mIiwib2JqZWN0IiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImJvb2wiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwib25lT2YiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUNqQyxxQkFBK0NDLCtEQUFXLENBQ3hELFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FEd0QsQ0FBMUQ7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSO0FBQUEsTUFBWUMsYUFBWixnQkFBWUEsYUFBWjtBQUFBLE1BQTJCQyxlQUEzQixnQkFBMkJBLGVBQTNCOztBQUdBLE1BQU1DLFdBQVcsR0FBR0gsRUFBRSxJQUFJQSxFQUFFLENBQUNJLFVBQUgsQ0FBY0MsSUFBZCxDQUFtQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNYLElBQUksQ0FBQ1ksSUFBTCxDQUFVRCxFQUExQjtBQUFBLEdBQW5CLENBQTFCO0FBRUEsTUFBTUUsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3RDO0FBQ0EsUUFBSVQsV0FBSixFQUFpQjtBQUNmTSxjQUFRLENBQUM7QUFDUEksWUFBSSxFQUFFQztBQURDLE9BQUQsQ0FBUjtBQUdEO0FBQ0YsR0FQZ0MsRUFPOUIsQ0FBQ1gsV0FBRCxDQVA4QixDQUFqQztBQVNBWSxTQUFPLENBQUNDLEdBQVIsQ0FBWXBCLElBQVo7QUFDQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDJDQUFEO0FBQ0UsYUFBTyxFQUFFSyxhQUFhLElBQUlDLGVBRDVCO0FBRUUsYUFBTyxFQUFFUyxhQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFVRCxDQTVCRDs7R0FBTWhCLFk7VUFDMkNFLHVELEVBSzlCYSx1RDs7O0tBTmJmLFk7QUE4Qk5BLFlBQVksQ0FBQ3NCLFNBQWIsR0FBeUI7QUFDdkJyQixNQUFJLEVBQUVzQixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3BCQyxhQUFTLEVBQUVGLGlEQUFTLENBQUNHLE9BQVYsQ0FBa0JDLGlEQUFsQixDQURTO0FBRXBCQyxjQUFVLEVBQUVMLGlEQUFTLENBQUNHLE9BQVYsQ0FBa0JDLGlEQUFsQixDQUZRO0FBR3BCRSxnQkFBWSxFQUFFTixpREFBUyxDQUFDTyxJQUhKO0FBSXBCQyxvQkFBZ0IsRUFBRVIsaURBQVMsQ0FBQ08sSUFKUjtBQUtwQkUsaUJBQWEsRUFBRVQsaURBQVMsQ0FBQ08sSUFMTDtBQU1wQkcsa0JBQWMsRUFBRVYsaURBQVMsQ0FBQ1csS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEIsQ0FOSTtBQU9wQkMsa0JBQWMsRUFBRVosaURBQVMsQ0FBQ08sSUFQTjtBQVFwQk0sZUFBVyxFQUFFYixpREFBUyxDQUFDTyxJQVJIO0FBU3BCTyxnQkFBWSxFQUFFZCxpREFBUyxDQUFDVyxLQUFWLENBQWdCLENBQUMsSUFBRCxDQUFoQixDQVRNO0FBVXBCSSxxQkFBaUIsRUFBRWYsaURBQVMsQ0FBQ08sSUFWVDtBQVdwQlMsa0JBQWMsRUFBRWhCLGlEQUFTLENBQUNPLElBWE47QUFZcEJVLG1CQUFlLEVBQUVqQixpREFBUyxDQUFDVyxLQUFWLENBQWdCLENBQUMsSUFBRCxDQUFoQixDQVpHO0FBYXBCTyxxQkFBaUIsRUFBRWxCLGlEQUFTLENBQUNPLElBYlQ7QUFjcEJZLGtCQUFjLEVBQUVuQixpREFBUyxDQUFDTyxJQWROO0FBZXBCYSxtQkFBZSxFQUFFcEIsaURBQVMsQ0FBQ1csS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFmRyxHQUFoQjtBQURpQixDQUF6QjtBQW9CZWxDLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMzNTE5ODFmYzRiNDVkMmUzZmZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzLCB7IG9iamVjdCB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBRERfRk9MTE9XX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBtZSwgZm9sbG93TG9hZGluZywgdW5mb2xsb3dMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUudXNlclxyXG4gICk7XHJcbiAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZSAmJiBtZS5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vIGlzRm9sbG93aW5n7J20IOywuOydvCDqsr3smrDqsIAg7ZiE7J6sIO2MlOuhnOyeiSDspJHsnbgg6rK97JqwXHJcbiAgICBpZiAoaXNGb2xsb3dpbmcpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpc0ZvbGxvd2luZ10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhwb3N0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259XHJcbiAgICAgID5cclxuICAgICAgICBGb2xsb3dcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuRm9sbG93QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbWFpblBvc3RzOiBQcm9wVHlwZXMuYXJyYXlPZihvYmplY3QpLFxyXG4gICAgaW1hZ2VQYXRoczogUHJvcFR5cGVzLmFycmF5T2Yob2JqZWN0KSxcclxuICAgIGhhc01vcmVQb3N0czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxvYWRQb3N0c0RvbmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IFByb3BUeXBlcy5vbmVPZihbbnVsbF0pLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgYWRkUG9zdERvbmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgYWRkUG9zdEVycm9yOiBQcm9wVHlwZXMub25lT2YoW251bGxdKSxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlbW92ZVBvc3REb25lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogUHJvcFR5cGVzLm9uZU9mKFtudWxsXSksXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhZGRDb21tZW50RG9uZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IFByb3BUeXBlcy5vbmVPZihbbnVsbF0pLFxyXG4gIH0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9