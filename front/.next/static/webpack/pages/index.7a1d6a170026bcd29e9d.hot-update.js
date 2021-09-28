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

      console.log("scrollFlag");
      scrollflag = true;
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      // useEffect에서 window event를 다룰 때 return문을 활용하여
      // event를 제거해줘야 함. 안그러면 메모리에 쌓임
      window.removeEventListener("scroll", onScroll);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJzY3JvbGxmbGFnIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsInNjcm9sbFkiLCJ3aW5kb3ciLCJjbGllbnRIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBbUNILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQTlDO0FBQUEsTUFBUUMsU0FBUixpQkFBUUEsU0FBUjtBQUFBLE1BQW1CQyxXQUFuQixpQkFBbUJBLFdBQW5COztBQUNBLE1BQUlDLFVBQVUsR0FBRyxJQUFqQixDQUhpQixDQUtqQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixZQUFRLENBQUM7QUFDUEcsVUFBSSxFQUFFQyxpRUFBa0JBO0FBRGpCLEtBQUQsQ0FBUjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0csUUFBVCxHQUFvQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNELE9BQXZCLENBTmtCLENBT2xCOztBQUNBLFVBQU1FLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxlQUFULENBQXlCRixZQUE5QyxDQVJrQixDQVNsQjs7QUFDQSxVQUFNRyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBOUMsQ0FWa0IsQ0FZbEI7O0FBQ0EsVUFBSUEsWUFBWSxHQUFHLEdBQWYsR0FBcUJMLE9BQU8sR0FBR0UsWUFBbkMsRUFBaUQ7QUFDL0MsWUFBSVQsVUFBVSxLQUFLLElBQWYsSUFBdUJELFdBQVcsS0FBSyxJQUEzQyxFQUFpRDtBQUMvQ0Msb0JBQVUsR0FBRyxLQUFiO0FBQ0FDLGtCQUFRLENBQ047QUFDRUcsZ0JBQUksRUFBRUMsaUVBQWtCQTtBQUQxQixXQURNLEVBSU4sRUFKTSxDQUFSO0FBTUQ7QUFDRjs7QUFDRFEsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBZCxnQkFBVSxHQUFHLElBQWI7QUFDRDs7QUFDRFEsVUFBTSxDQUFDTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1QsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWDtBQUNBO0FBQ0FFLFlBQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNWLFFBQXJDO0FBQ0QsS0FKRDtBQUtELEdBbENRLEVBa0NOLENBQUNQLFdBQUQsRUFBY0MsVUFBZCxDQWxDTSxDQUFUO0FBb0NBLHNCQUNFLHFFQUFDLDZEQUFEO0FBQUEsZUFFR0osRUFBRSxpQkFBSSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRlQsRUFHR0UsU0FBUyxDQUFDbUIsR0FBVixDQUFjLFVBQUNwQixJQUFEO0FBQUEsMEJBQ2IscUVBQUMsNERBQUQ7QUFBd0IsWUFBSSxFQUFFQTtBQUE5QixTQUFlQSxJQUFJLENBQUNxQixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFkLENBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQTFERDs7R0FBTTFCLEk7VUFDV0MsdUQsRUFDb0JBLHVELEVBSWxCUyx1RDs7O0tBTmJWLEk7QUE0RFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhMWQ2YTE3MDAyNmJjZDI5ZTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuXHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGxldCBzY3JvbGxmbGFnID0gdHJ1ZTtcclxuXHJcbiAgLy8g7ZmIIO2ZlOuptOydtCDsvJzsp4DrqbQg7JWh7IWYIOuwnOyDnVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgLy8g6rCA7J6lIOunqCDsnITsl5DshJwg7Iqk7YGs66Gk7J2EIOyWvOuniOuCmCDrgrTroLjripTsp4BcclxuICAgICAgLy8g7YKk67O065OcIOy7pOyEnCDqsJzrhZDsnLzroZwg7IOd6rCB7ZW067O07J6QLCDsiqTtgazroaTsl5DshJwg6rCA7J6lIOychOyXkOqwgCDquLDspIDsoJBcclxuICAgICAgLy8g7Iqk7YGs66Gk7J2EIOqwgOyepSDrsJHsnLzroZwg64K066Ck64+EIOyVhOyngSDtmZTrqbQg7YGs6riw66eM7YGs66+A7J20IOqzteqwhOydtCDrgqjslYTsnojsnYxcclxuICAgICAgLy8g7J20IOqzteqwhOydhCDslYzquLAg7JyE7ZW0IOuwkeydmCBjbGllbnRIZWlnaHTqsIAg7ZWE7JqU7ZWcIOqyg1xyXG4gICAgICAvLyA9PiBzY3JvbGxZICsgY2xpZW50SGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0XHJcbiAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgLy8g64K0IO2ZlOuptOydtCDrs7TsnbTripQg6ri47J20XHJcbiAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIC8vIOqwgOyepeychOyXkOyEnCDqsIDsnqUg7JWE656YLCDstJ0g6ri47J20XHJcbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAvLyAtMzAw7ZWY64qQIOydtOycoOuKlCDqsIDsnqUg67CR7JeQIOyKpO2BrOuhpOydtCDsmKTquLAg7KCE7JeQIDMwMHB466i87KCAIOyXheuNsOydtO2KuO2VmOq4sCDsnITtlahcclxuICAgICAgaWYgKHNjcm9sbEhlaWdodCAtIDMwMCA8IHNjcm9sbFkgKyBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsZmxhZyA9PT0gdHJ1ZSAmJiBoYXNNb3JlUG9zdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgc2Nyb2xsZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcInNjcm9sbEZsYWdcIik7XHJcbiAgICAgIHNjcm9sbGZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gdXNlRWZmZWN07JeQ7IScIHdpbmRvdyBldmVudOulvCDri6Tro7Ag65WMIHJldHVybuusuOydhCDtmZzsmqntlZjsl6xcclxuICAgICAgLy8gZXZlbnTrpbwg7KCc6rGw7ZW07KSY7JW8IO2VqC4g7JWI6re465+s66m0IOuplOuqqOumrOyXkCDsjJPsnoRcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaGFzTW9yZVBvc3QsIHNjcm9sbGZsYWddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIHsvKiBjaGlsZHJlbiAqL31cclxuICAgICAge21lICYmIDxQb3N0Rm9ybT48L1Bvc3RGb3JtPn1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fT48L1Bvc3RDYXJkPlxyXG4gICAgICApKX1cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9