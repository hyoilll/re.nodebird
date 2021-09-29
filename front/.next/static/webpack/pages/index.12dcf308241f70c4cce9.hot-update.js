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
      me = _useSelector.me;

  var isFollowing = me && me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var onFollow = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
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
      onClick: onFollow,
      children: "Follow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(FollowButton, "UnEPjDNyDPg5vRpOSekhQcEShwA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsImlkIiwiVXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkZvbGxvdyIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJtYWluUG9zdHMiLCJhcnJheU9mIiwib2JqZWN0IiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImJvb2wiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwib25lT2YiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUNqQyxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLE1BQU1DLFdBQVcsR0FBR0QsRUFBRSxJQUFJQSxFQUFFLENBQUNFLFVBQUgsQ0FBY0MsSUFBZCxDQUFtQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNULElBQUksQ0FBQ1UsSUFBTCxDQUFVRCxFQUExQjtBQUFBLEdBQW5CLENBQTFCO0FBRUEsTUFBTUUsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2pDO0FBQ0EsUUFBSVQsV0FBSixFQUFpQjtBQUNmTSxjQUFRLENBQUM7QUFDUEksWUFBSSxFQUFFQztBQURDLE9BQUQsQ0FBUjtBQUdEO0FBQ0YsR0FQMkIsRUFPekIsQ0FBQ1gsV0FBRCxDQVB5QixDQUE1QjtBQVNBWSxTQUFPLENBQUNDLEdBQVIsQ0FBWWxCLElBQVo7QUFDQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFYSxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FyQkQ7O0dBQU1kLFk7VUFDV0UsdUQsRUFHRVcsdUQ7OztLQUpiYixZO0FBdUJOQSxZQUFZLENBQUNvQixTQUFiLEdBQXlCO0FBQ3ZCbkIsTUFBSSxFQUFFb0IsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNwQkMsYUFBUyxFQUFFRixpREFBUyxDQUFDRyxPQUFWLENBQWtCQyxpREFBbEIsQ0FEUztBQUVwQkMsY0FBVSxFQUFFTCxpREFBUyxDQUFDRyxPQUFWLENBQWtCQyxpREFBbEIsQ0FGUTtBQUdwQkUsZ0JBQVksRUFBRU4saURBQVMsQ0FBQ08sSUFISjtBQUlwQkMsb0JBQWdCLEVBQUVSLGlEQUFTLENBQUNPLElBSlI7QUFLcEJFLGlCQUFhLEVBQUVULGlEQUFTLENBQUNPLElBTEw7QUFNcEJHLGtCQUFjLEVBQUVWLGlEQUFTLENBQUNXLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELENBQWhCLENBTkk7QUFPcEJDLGtCQUFjLEVBQUVaLGlEQUFTLENBQUNPLElBUE47QUFRcEJNLGVBQVcsRUFBRWIsaURBQVMsQ0FBQ08sSUFSSDtBQVNwQk8sZ0JBQVksRUFBRWQsaURBQVMsQ0FBQ1csS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEIsQ0FUTTtBQVVwQkkscUJBQWlCLEVBQUVmLGlEQUFTLENBQUNPLElBVlQ7QUFXcEJTLGtCQUFjLEVBQUVoQixpREFBUyxDQUFDTyxJQVhOO0FBWXBCVSxtQkFBZSxFQUFFakIsaURBQVMsQ0FBQ1csS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEIsQ0FaRztBQWFwQk8scUJBQWlCLEVBQUVsQixpREFBUyxDQUFDTyxJQWJUO0FBY3BCWSxrQkFBYyxFQUFFbkIsaURBQVMsQ0FBQ08sSUFkTjtBQWVwQmEsbUJBQWUsRUFBRXBCLGlEQUFTLENBQUNXLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELENBQWhCO0FBZkcsR0FBaEI7QUFEaUIsQ0FBekI7QUFvQmVoQywyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMmRjZjMwODI0MWY3MGM0Y2NlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcywgeyBvYmplY3QgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQUREX0ZPTExPV19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZSAmJiBtZS5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25Gb2xsb3cgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyBpc0ZvbGxvd2luZ+ydtCDssLjsnbwg6rK97Jqw6rCAIO2YhOyerCDtjJTroZzsnokg7KSR7J24IOqyveyasFxyXG4gICAgaWYgKGlzRm9sbG93aW5nKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbaXNGb2xsb3dpbmddKTtcclxuXHJcbiAgY29uc29sZS5sb2cocG9zdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25Gb2xsb3d9PkZvbGxvdzwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIG1haW5Qb3N0czogUHJvcFR5cGVzLmFycmF5T2Yob2JqZWN0KSxcclxuICAgIGltYWdlUGF0aHM6IFByb3BUeXBlcy5hcnJheU9mKG9iamVjdCksXHJcbiAgICBoYXNNb3JlUG9zdHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBQcm9wVHlwZXMub25lT2YoW251bGxdKSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFkZFBvc3REb25lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFkZFBvc3RFcnJvcjogUHJvcFR5cGVzLm9uZU9mKFtudWxsXSksXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IFByb3BUeXBlcy5vbmVPZihbbnVsbF0pLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBQcm9wVHlwZXMub25lT2YoW251bGxdKSxcclxuICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==