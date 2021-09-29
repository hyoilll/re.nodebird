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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var addFollow = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_FOLLOW_REQUEST"],
      data: post.id
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: addFollow,
      children: "Follow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(FollowButton, "/BRSl91gF5q7U5tTNj5clbonmk4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    mainPosts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0__["object"]),
    imagePaths: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0__["object"]),
    hasMorePosts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
    loadPostsLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
    loadPostsDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
    loadPostsError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null]),
    addPostLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
    addPostDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
    addPostError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null]),
    removePostLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
    removePostDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
    removePostError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null]),
    addCommentLoading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
    addCommentDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGRGb2xsb3ciLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJBRERfRk9MTE9XX1JFUVVFU1QiLCJkYXRhIiwiaWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm1haW5Qb3N0cyIsImFycmF5T2YiLCJvYmplY3QiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwib25lT2YiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2pDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNsQ0gsWUFBUSxDQUFDO0FBQ1BJLFVBQUksRUFBRUMsaUVBREM7QUFFUEMsVUFBSSxFQUFFUCxJQUFJLENBQUNRO0FBRkosS0FBRCxDQUFSO0FBSUQsR0FMNEIsRUFLMUIsRUFMMEIsQ0FBN0I7QUFPQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFTCxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FkRDs7R0FBTUosWTtVQUNhRyx1RDs7O0tBRGJILFk7QUFnQk5BLFlBQVksQ0FBQ1UsU0FBYixHQUF5QjtBQUN2QlQsTUFBSSxFQUFFVSxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3BCQyxhQUFTLEVBQUVGLGlEQUFTLENBQUNHLE9BQVYsQ0FBa0JDLGlEQUFsQixDQURTO0FBRXBCQyxjQUFVLEVBQUVMLGlEQUFTLENBQUNHLE9BQVYsQ0FBa0JDLGlEQUFsQixDQUZRO0FBR3BCRSxnQkFBWSxFQUFFTixpREFBUyxDQUFDTyxJQUFWLENBQWVDLFVBSFQ7QUFJcEJDLG9CQUFnQixFQUFFVCxpREFBUyxDQUFDTyxJQUFWLENBQWVDLFVBSmI7QUFLcEJFLGlCQUFhLEVBQUVWLGlEQUFTLENBQUNPLElBQVYsQ0FBZUMsVUFMVjtBQU1wQkcsa0JBQWMsRUFBRVgsaURBQVMsQ0FBQ1ksS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEIsQ0FOSTtBQU9wQkMsa0JBQWMsRUFBRWIsaURBQVMsQ0FBQ08sSUFBVixDQUFlQyxVQVBYO0FBUXBCTSxlQUFXLEVBQUVkLGlEQUFTLENBQUNPLElBQVYsQ0FBZUMsVUFSUjtBQVNwQk8sZ0JBQVksRUFBRWYsaURBQVMsQ0FBQ1ksS0FBVixDQUFnQixDQUFDLElBQUQsQ0FBaEIsQ0FUTTtBQVVwQkkscUJBQWlCLEVBQUVoQixpREFBUyxDQUFDTyxJQUFWLENBQWVDLFVBVmQ7QUFXcEJTLGtCQUFjLEVBQUVqQixpREFBUyxDQUFDTyxJQUFWLENBQWVDLFVBWFg7QUFZcEJVLG1CQUFlLEVBQUVsQixpREFBUyxDQUFDWSxLQUFWLENBQWdCLENBQUMsSUFBRCxDQUFoQixDQVpHO0FBYXBCTyxxQkFBaUIsRUFBRW5CLGlEQUFTLENBQUNPLElBQVYsQ0FBZUMsVUFiZDtBQWNwQlksa0JBQWMsRUFBRXBCLGlEQUFTLENBQUNPLElBQVYsQ0FBZUMsVUFkWDtBQWVwQmEsbUJBQWUsRUFBRXJCLGlEQUFTLENBQUNZLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELENBQWhCO0FBZkcsR0FBaEI7QUFEaUIsQ0FBekI7QUFvQmV2QiwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YjdhZTUyYzgzOWE4M2M0YzBmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcywgeyBvYmplY3QgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBRERfRk9MTE9XX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGFkZEZvbGxvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0ZPTExPV19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthZGRGb2xsb3d9PkZvbGxvdzwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIG1haW5Qb3N0czogUHJvcFR5cGVzLmFycmF5T2Yob2JqZWN0KSxcclxuICAgIGltYWdlUGF0aHM6IFByb3BUeXBlcy5hcnJheU9mKG9iamVjdCksXHJcbiAgICBoYXNNb3JlUG9zdHM6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBQcm9wVHlwZXMub25lT2YoW251bGxdKSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgYWRkUG9zdERvbmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBhZGRQb3N0RXJyb3I6IFByb3BUeXBlcy5vbmVPZihbbnVsbF0pLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogUHJvcFR5cGVzLm9uZU9mKFtudWxsXSksXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIGFkZENvbW1lbnREb25lOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBQcm9wVHlwZXMub25lT2YoW251bGxdKSxcclxuICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==