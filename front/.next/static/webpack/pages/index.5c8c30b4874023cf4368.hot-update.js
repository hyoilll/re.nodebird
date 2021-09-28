webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\re.nodebird\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var Home = function Home() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading; // 홈 화면이 켜지면 액션 발생


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function onScroll() {
      // 가장 맨 위에서 스크롤을 얼마나 내렸는지
      // 키보드 커서 개념으로 생각해보자, 스크롤에서 가장 위에가 기준점
      // 스크롤을 가장 밑으로 내려도 아직 화면 크기만크므이 공간이 남아있음
      // 이 공간을 알기 위해 밑의 clientHeight가 필요한 것
      // => scrollY + clientHeight = scrollHeight
      var scrollY = window.scrollY; // 내 화면이 보이는 길이

      var clientHeight = document.documentElement.clientHeight; // 가장위에서 가장 아래, 총 길이

      var scrollHeight = document.documentElement.scrollHeight; // -300하느 이유는 가장 밑에 스크롤이 오기 전에 300px먼저 업데이트하기 위함

      if (scrollHeight - 300 < scrollY + clientHeight) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
          }, []);
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      // useEffect에서 window event를 다룰 때 return문을 활용하여
      // event를 제거해줘야 함. 안그러면 메모리에 쌓임
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 14
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(Home, "cWGJ8hKUlv7gW7QesOlI3UuQZ0c=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJzY3JvbGxZIiwid2luZG93IiwiY2xpZW50SGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBc0RILCtEQUFXLENBQy9ELFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsR0FEK0QsQ0FBakU7QUFBQSxNQUFRQyxTQUFSLGlCQUFRQSxTQUFSO0FBQUEsTUFBbUJDLFlBQW5CLGlCQUFtQkEsWUFBbkI7QUFBQSxNQUFpQ0MsZ0JBQWpDLGlCQUFpQ0EsZ0JBQWpDLENBRmlCLENBTWpCOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixZQUFRLENBQUM7QUFDUEcsVUFBSSxFQUFFQyxpRUFBa0JBO0FBRGpCLEtBQUQsQ0FBUjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0csUUFBVCxHQUFvQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNELE9BQXZCLENBTmtCLENBT2xCOztBQUNBLFVBQU1FLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxlQUFULENBQXlCRixZQUE5QyxDQVJrQixDQVNsQjs7QUFDQSxVQUFNRyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBOUMsQ0FWa0IsQ0FZbEI7O0FBQ0EsVUFBSUEsWUFBWSxHQUFHLEdBQWYsR0FBcUJMLE9BQU8sR0FBR0UsWUFBbkMsRUFBaUQ7QUFDL0MsWUFBSVYsWUFBWSxJQUFJLENBQUNDLGdCQUFyQixFQUF1QztBQUNyQ0Msa0JBQVEsQ0FDTjtBQUNFRyxnQkFBSSxFQUFFQyxpRUFBa0JBO0FBRDFCLFdBRE0sRUFJTixFQUpNLENBQVI7QUFNRDtBQUNGO0FBQ0Y7O0FBQ0RHLFVBQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NQLFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1g7QUFDQTtBQUNBRSxZQUFNLENBQUNNLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUixRQUFyQztBQUNELEtBSkQ7QUFLRCxHQS9CUSxFQStCTixDQUFDUCxZQUFELEVBQWVDLGdCQUFmLENBL0JNLENBQVQ7QUFpQ0Esc0JBQ0UscUVBQUMsNkRBQUQ7QUFBQSxlQUVHSixFQUFFLGlCQUFJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGVCxFQUdHRSxTQUFTLENBQUNpQixHQUFWLENBQWMsVUFBQ2xCLElBQUQ7QUFBQSwwQkFDYixxRUFBQyw0REFBRDtBQUF3QixZQUFJLEVBQUVBO0FBQTlCLFNBQWVBLElBQUksQ0FBQ21CLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBeEREOztHQUFNeEIsSTtVQUNXQyx1RCxFQUN1Q0EsdUQsRUFLckNTLHVEOzs7S0FQYlYsSTtBQTBEU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWM4YzMwYjQ4NzQwMjNjZjQzNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5cclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIC8vIO2ZiCDtmZTrqbTsnbQg7Lyc7KeA66m0IOyVoeyFmCDrsJzsg51cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIC8vIOqwgOyepSDrp6gg7JyE7JeQ7IScIOyKpO2BrOuhpOydhCDslrzrp4jrgpgg64K066C464qU7KeAXHJcbiAgICAgIC8vIO2CpOuztOuTnCDsu6TshJwg6rCc64WQ7Jy866GcIOyDneqwge2VtOuztOyekCwg7Iqk7YGs66Gk7JeQ7IScIOqwgOyepSDsnITsl5DqsIAg6riw7KSA7KCQXHJcbiAgICAgIC8vIOyKpO2BrOuhpOydhCDqsIDsnqUg67CR7Jy866GcIOuCtOugpOuPhCDslYTsp4Eg7ZmU66m0IO2BrOq4sOunjO2BrOuvgOydtCDqs7XqsITsnbQg64Ko7JWE7J6I7J2MXHJcbiAgICAgIC8vIOydtCDqs7XqsITsnYQg7JWM6riwIOychO2VtCDrsJHsnZggY2xpZW50SGVpZ2h06rCAIO2VhOyalO2VnCDqsoNcclxuICAgICAgLy8gPT4gc2Nyb2xsWSArIGNsaWVudEhlaWdodCA9IHNjcm9sbEhlaWdodFxyXG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgIC8vIOuCtCDtmZTrqbTsnbQg67O07J2064qUIOq4uOydtFxyXG4gICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAvLyDqsIDsnqXsnITsl5DshJwg6rCA7J6lIOyVhOuemCwg7LSdIOq4uOydtFxyXG4gICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgLy8gLTMwMO2VmOuKkCDsnbTsnKDripQg6rCA7J6lIOuwkeyXkCDsiqTtgazroaTsnbQg7Jik6riwIOyghOyXkCAzMDBweOuovOyggCDsl4XrjbDsnbTtirjtlZjquLAg7JyE7ZWoXHJcbiAgICAgIGlmIChzY3JvbGxIZWlnaHQgLSAzMDAgPCBzY3JvbGxZICsgY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gdXNlRWZmZWN07JeQ7IScIHdpbmRvdyBldmVudOulvCDri6Tro7Ag65WMIHJldHVybuusuOydhCDtmZzsmqntlZjsl6xcclxuICAgICAgLy8gZXZlbnTrpbwg7KCc6rGw7ZW07KSY7JW8IO2VqC4g7JWI6re465+s66m0IOuplOuqqOumrOyXkCDsjJPsnoRcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICB7LyogY2hpbGRyZW4gKi99XHJcbiAgICAgIHttZSAmJiA8UG9zdEZvcm0+PC9Qb3N0Rm9ybT59XHJcbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0+PC9Qb3N0Q2FyZD5cclxuICAgICAgKSl9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==