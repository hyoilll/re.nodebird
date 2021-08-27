webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\re.nodebird\\front\\components\\CommentForm.js",
    _this = undefined;




var CommentForm = function CommentForm(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    children: "\uD3FC"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, _this);
};

_c = CommentForm;
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/list/Item */ "./node_modules/antd/lib/list/Item.js");
/* harmony import */ var antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\re.nodebird\\front\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();












var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormopened = _useState2[1];

  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    setCommentFormopened(function (prev) {
      return !prev;
    });
  }, []);
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.me;
  });
  var id = me && me.id; // me가 있으면 id가 들어가고 없으면 undefined가 저장됨

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: {
        marginBottom: 20
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        cover: post && post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
          images: post.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 31
        }, _this),
        actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {}, "retweet", false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
          twoToneColor: "#eb2f96",
          onClick: onToggleLike
        }, "heart", false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
          onClick: onToggleLike
        }, "heart", false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
          onClick: onToggleComment
        }, "comment", false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
          content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"].Group, {
            children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
                children: "\uC218\uC815"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
                type: "danger",
                children: "\uC0AD\uC81C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 23
              }, _this)]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              children: "\uC2E0\uACE0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }, _this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, _this)
        }, "more", false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, _this)],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
            children: post.User.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 21
          }, _this),
          title: post.User.nickname,
          description: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
          post: post
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
          header: "".concat(post.Comments.lengths, "\uAC1C\uC758 \uB313\uAE00"),
          itemLayout: "horizontal",
          dataSource: post.Comments,
          renderItem: function renderItem(item) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Comment"], {
                author: item.User.nickname,
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
                  children: antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_6___default.a.User.nickname[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 31
                }, _this),
                content: item.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 19
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(PostCard, "zxNaB93r44CaRwPpM83scSIQyTk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJQb3N0Q2FyZCIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwicHJldiIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1vcGVuZWQiLCJvblRvZ2dsZUNvbW1lbnQiLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaWQiLCJtYXJnaW5Cb3R0b20iLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGhzIiwiaXRlbSIsIkl0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZUF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEMsc0JBQU8scUVBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0tBQU1ELFc7QUFJU0EsMEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhELElBQVcsUUFBWEEsSUFBVzs7QUFDN0Is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USxFQUFFTCxpREFBUyxDQUFDRyxNQUpBO0FBS3BCUixZQUFRLEVBQUVLLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCLENBTFU7QUFNcEJaLFVBQU0sRUFBRVMsaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUI7QUFOWSxHQUFoQixFQU9ISTtBQVJnQixDQUFyQjtBQVdlaEMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWFlZjc3OTAzZjY4YThlZDBhYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBwb3N0IH0pID0+IHtcclxuICByZXR1cm4gPEZvcm0+7Y+8PC9Gb3JtPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xyXG4iLCJpbXBvcnQgeyBCdXR0b24sIENhcmQsIFBvcG92ZXIsIEF2YXRhciwgTGlzdCwgQ29tbWVudCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgUmV0d2VldE91dGxpbmVkLFxyXG4gIEhlYXJ0T3V0bGluZWQsXHJcbiAgRWxsaXBzaXNPdXRsaW5lZCxcclxuICBNZXNzYWdlT3V0bGluZWQsXHJcbiAgSGVhcnRUd29Ub25lLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcImFudGQvbGliL2xpc3QvSXRlbVwiO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0TGlrZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1vcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3Jtb3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgY29uc3QgaWQgPSBtZSAmJiBtZS5pZDsgLy8gbWXqsIAg7J6I7Jy866m0IGlk6rCAIOuTpOyWtOqwgOqzoCDsl4bsnLzrqbQgdW5kZWZpbmVk6rCAIOyggOyepeuQqFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgcG9zdCAmJlxyXG4gICAgICAgICAgICBwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfT48L1Bvc3RJbWFnZXM+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiPjwvUmV0d2VldE91dGxpbmVkPixcclxuICAgICAgICAgICAgbGlrZWQgPyAoXHJcbiAgICAgICAgICAgICAgPEhlYXJ0VHdvVG9uZVxyXG4gICAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXHJcbiAgICAgICAgICAgICAgICBrZXk9XCJoZWFydFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9XHJcbiAgICAgICAgICAgICAgPjwvSGVhcnRUd29Ub25lPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfT48L0hlYXJ0T3V0bGluZWQ+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWRcclxuICAgICAgICAgICAgICBrZXk9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9XHJcbiAgICAgICAgICAgID48L01lc3NhZ2VPdXRsaW5lZD4sXHJcbiAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAga2V5PVwibW9yZVwiXHJcbiAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiPuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7Iug6rOgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZD48L0VsbGlwc2lzT3V0bGluZWQ+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgICAgPjwvQ2FyZC5NZXRhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9PjwvQ29tbWVudEZvcm0+XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aHN96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e0l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvQ29tbWVudD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPjwvTGlzdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIDxDb21tZW50Rm9ybT48L0NvbW1lbnRGb3JtPlxyXG4gICAgICAgIDxDb21tZW50cz48L0NvbW1lbnRzPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==