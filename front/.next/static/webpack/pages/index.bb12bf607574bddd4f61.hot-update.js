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
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_FOLLOW_REQUEST"],
        data: post.User.id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsImlkIiwiVXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkZvbGxvdyIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkFERF9GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJtYWluUG9zdHMiLCJhcnJheU9mIiwib2JqZWN0IiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImJvb2wiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwib25lT2YiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUNqQyxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLE1BQU1DLFdBQVcsR0FBR0QsRUFBRSxJQUFJQSxFQUFFLENBQUNFLFVBQUgsQ0FBY0MsSUFBZCxDQUFtQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNULElBQUksQ0FBQ1UsSUFBTCxDQUFVRCxFQUExQjtBQUFBLEdBQW5CLENBQTFCO0FBRUEsTUFBTUUsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2pDLFFBQUlULFdBQUosRUFBaUI7QUFDZk0sY0FBUSxDQUFDO0FBQ1BJLFlBQUksRUFBRUMsaUVBREM7QUFFUEMsWUFBSSxFQUFFakIsSUFBSSxDQUFDVSxJQUFMLENBQVVEO0FBRlQsT0FBRCxDQUFSO0FBSUQ7QUFDRixHQVAyQixFQU96QixDQUFDSixXQUFELENBUHlCLENBQTVCO0FBU0FhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsSUFBWjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVhLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRCxDQXJCRDs7R0FBTWQsWTtVQUNXRSx1RCxFQUdFVyx1RDs7O0tBSmJiLFk7QUF1Qk5BLFlBQVksQ0FBQ3FCLFNBQWIsR0FBeUI7QUFDdkJwQixNQUFJLEVBQUVxQixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3BCQyxhQUFTLEVBQUVGLGlEQUFTLENBQUNHLE9BQVYsQ0FBa0JDLGlEQUFsQixDQURTO0FBRXBCQyxjQUFVLEVBQUVMLGlEQUFTLENBQUNHLE9BQVYsQ0FBa0JDLGlEQUFsQixDQUZRO0FBR3BCRSxnQkFBWSxFQUFFTixpREFBUyxDQUFDTyxJQUhKO0FBSXBCQyxvQkFBZ0IsRUFBRVIsaURBQVMsQ0FBQ08sSUFKUjtBQUtwQkUsaUJBQWEsRUFBRVQsaURBQVMsQ0FBQ08sSUFMTDtBQU1wQkcsa0JBQWMsRUFBRVYsaURBQVMsQ0FBQ1csS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEIsQ0FOSTtBQU9wQkMsa0JBQWMsRUFBRVosaURBQVMsQ0FBQ08sSUFQTjtBQVFwQk0sZUFBVyxFQUFFYixpREFBUyxDQUFDTyxJQVJIO0FBU3BCTyxnQkFBWSxFQUFFZCxpREFBUyxDQUFDVyxLQUFWLENBQWdCLENBQUMsSUFBRCxDQUFoQixDQVRNO0FBVXBCSSxxQkFBaUIsRUFBRWYsaURBQVMsQ0FBQ08sSUFWVDtBQVdwQlMsa0JBQWMsRUFBRWhCLGlEQUFTLENBQUNPLElBWE47QUFZcEJVLG1CQUFlLEVBQUVqQixpREFBUyxDQUFDVyxLQUFWLENBQWdCLENBQUMsSUFBRCxDQUFoQixDQVpHO0FBYXBCTyxxQkFBaUIsRUFBRWxCLGlEQUFTLENBQUNPLElBYlQ7QUFjcEJZLGtCQUFjLEVBQUVuQixpREFBUyxDQUFDTyxJQWROO0FBZXBCYSxtQkFBZSxFQUFFcEIsaURBQVMsQ0FBQ1csS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFmRyxHQUFoQjtBQURpQixDQUF6QjtBQW9CZWpDLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJiMTJiZjYwNzU3NGJkZGQ0ZjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzLCB7IG9iamVjdCB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBRERfRk9MTE9XX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lICYmIG1lLkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBvbkZvbGxvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChpc0ZvbGxvd2luZykge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQUREX0ZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRm9sbG93aW5nXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHBvc3QpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uRm9sbG93fT5Gb2xsb3c8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBtYWluUG9zdHM6IFByb3BUeXBlcy5hcnJheU9mKG9iamVjdCksXHJcbiAgICBpbWFnZVBhdGhzOiBQcm9wVHlwZXMuYXJyYXlPZihvYmplY3QpLFxyXG4gICAgaGFzTW9yZVBvc3RzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogUHJvcFR5cGVzLm9uZU9mKFtudWxsXSksXHJcbiAgICBhZGRQb3N0TG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhZGRQb3N0RG9uZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBhZGRQb3N0RXJyb3I6IFByb3BUeXBlcy5vbmVPZihbbnVsbF0pLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBQcm9wVHlwZXMub25lT2YoW251bGxdKSxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFkZENvbW1lbnREb25lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogUHJvcFR5cGVzLm9uZU9mKFtudWxsXSksXHJcbiAgfSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=