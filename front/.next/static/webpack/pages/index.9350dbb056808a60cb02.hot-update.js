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
      hasMorePost = _useSelector2.hasMorePost;

  var scrollflag = true; // 홈 화면이 켜지면 액션 발생

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
        if (scrollflag === true && hasMorePost === true) {
          scrollflag = false;
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
    console.log("scrollFlag");
    scrollflag = true;
  }, [hasMorePost, scrollflag]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 14
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);
};

_s(Home, "555f9WWrfXWIwmSUxi1Yqhq/UG8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJzY3JvbGxmbGFnIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsInNjcm9sbFkiLCJ3aW5kb3ciLCJjbGllbnRIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBbUNILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQTlDO0FBQUEsTUFBUUMsU0FBUixpQkFBUUEsU0FBUjtBQUFBLE1BQW1CQyxXQUFuQixpQkFBbUJBLFdBQW5COztBQUNBLE1BQUlDLFVBQVUsR0FBRyxJQUFqQixDQUhpQixDQUtqQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixZQUFRLENBQUM7QUFDUEcsVUFBSSxFQUFFQyxpRUFBa0JBO0FBRGpCLEtBQUQsQ0FBUjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0csUUFBVCxHQUFvQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNELE9BQXZCLENBTmtCLENBT2xCOztBQUNBLFVBQU1FLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxlQUFULENBQXlCRixZQUE5QyxDQVJrQixDQVNsQjs7QUFDQSxVQUFNRyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBOUMsQ0FWa0IsQ0FZbEI7O0FBQ0EsVUFBSUEsWUFBWSxHQUFHLEdBQWYsR0FBcUJMLE9BQU8sR0FBR0UsWUFBbkMsRUFBaUQ7QUFDL0MsWUFBSVQsVUFBVSxLQUFLLElBQWYsSUFBdUJELFdBQVcsS0FBSyxJQUEzQyxFQUFpRDtBQUMvQ0Msb0JBQVUsR0FBRyxLQUFiO0FBQ0FDLGtCQUFRLENBQ047QUFDRUcsZ0JBQUksRUFBRUMsaUVBQWtCQTtBQUQxQixXQURNLEVBSU4sRUFKTSxDQUFSO0FBTUQ7QUFDRjtBQUNGOztBQUNERyxVQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUCxRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYO0FBQ0E7QUFDQUUsWUFBTSxDQUFDTSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsUUFBckM7QUFDRCxLQUpEO0FBS0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQWhCLGNBQVUsR0FBRyxJQUFiO0FBQ0QsR0FsQ1EsRUFrQ04sQ0FBQ0QsV0FBRCxFQUFjQyxVQUFkLENBbENNLENBQVQ7QUFvQ0Esc0JBQ0UscUVBQUMsNkRBQUQ7QUFBQSxlQUVHSixFQUFFLGlCQUFJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGVCxFQUdHRSxTQUFTLENBQUNtQixHQUFWLENBQWMsVUFBQ3BCLElBQUQ7QUFBQSwwQkFDYixxRUFBQyw0REFBRDtBQUF3QixZQUFJLEVBQUVBO0FBQTlCLFNBQWVBLElBQUksQ0FBQ3FCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLEtBQWQsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBMUREOztHQUFNMUIsSTtVQUNXQyx1RCxFQUNvQkEsdUQsRUFJbEJTLHVEOzs7S0FOYlYsSTtBQTREU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM1MGRiYjA1NjgwOGE2MGNiMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5cclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgbGV0IHNjcm9sbGZsYWcgPSB0cnVlO1xyXG5cclxuICAvLyDtmYgg7ZmU66m07J20IOy8nOyngOuptCDslaHshZgg67Cc7IOdXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICAvLyDqsIDsnqUg66eoIOychOyXkOyEnCDsiqTtgazroaTsnYQg7Ja866eI64KYIOuCtOuguOuKlOyngFxyXG4gICAgICAvLyDtgqTrs7Trk5wg7Luk7IScIOqwnOuFkOycvOuhnCDsg53qsIHtlbTrs7TsnpAsIOyKpO2BrOuhpOyXkOyEnCDqsIDsnqUg7JyE7JeQ6rCAIOq4sOykgOygkFxyXG4gICAgICAvLyDsiqTtgazroaTsnYQg6rCA7J6lIOuwkeycvOuhnCDrgrTroKTrj4Qg7JWE7KeBIO2ZlOuptCDtgazquLDrp4ztgazrr4DsnbQg6rO16rCE7J20IOuCqOyVhOyeiOydjFxyXG4gICAgICAvLyDsnbQg6rO16rCE7J2EIOyVjOq4sCDsnITtlbQg67CR7J2YIGNsaWVudEhlaWdodOqwgCDtlYTsmpTtlZwg6rKDXHJcbiAgICAgIC8vID0+IHNjcm9sbFkgKyBjbGllbnRIZWlnaHQgPSBzY3JvbGxIZWlnaHRcclxuICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAvLyDrgrQg7ZmU66m07J20IOuztOydtOuKlCDquLjsnbRcclxuICAgICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgLy8g6rCA7J6l7JyE7JeQ7IScIOqwgOyepSDslYTrnpgsIOy0nSDquLjsnbRcclxuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgIC8vIC0zMDDtlZjripAg7J207Jyg64qUIOqwgOyepSDrsJHsl5Ag7Iqk7YGs66Gk7J20IOyYpOq4sCDsoITsl5AgMzAwcHjrqLzsoIAg7JeF642w7J207Yq47ZWY6riwIOychO2VqFxyXG4gICAgICBpZiAoc2Nyb2xsSGVpZ2h0IC0gMzAwIDwgc2Nyb2xsWSArIGNsaWVudEhlaWdodCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxmbGFnID09PSB0cnVlICYmIGhhc01vcmVQb3N0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBzY3JvbGxmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW11cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyB1c2VFZmZlY3Tsl5DshJwgd2luZG93IGV2ZW5066W8IOuLpOujsCDrlYwgcmV0dXJu66y47J2EIO2ZnOyaqe2VmOyXrFxyXG4gICAgICAvLyBldmVudOulvCDsoJzqsbDtlbTspJjslbwg7ZWoLiDslYjqt7jrn6zrqbQg66mU66qo66as7JeQIOyMk+yehFxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coXCJzY3JvbGxGbGFnXCIpO1xyXG4gICAgc2Nyb2xsZmxhZyA9IHRydWU7XHJcbiAgfSwgW2hhc01vcmVQb3N0LCBzY3JvbGxmbGFnXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICB7LyogY2hpbGRyZW4gKi99XHJcbiAgICAgIHttZSAmJiA8UG9zdEZvcm0+PC9Qb3N0Rm9ybT59XHJcbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0+PC9Qb3N0Q2FyZD5cclxuICAgICAgKSl9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==