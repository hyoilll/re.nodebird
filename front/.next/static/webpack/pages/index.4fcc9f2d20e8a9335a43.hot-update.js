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
      hasMorePost = _useSelector2.hasMorePost; // 홈 화면이 켜지면 액션 발생


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
        if (scrollflag === true || hasMorePost === true) {
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
  }, [hasMorePost]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 14
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsIndpbmRvdyIsImNsaWVudEhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsZmxhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLHNCQUFtQ0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FBOUM7QUFBQSxNQUFRQyxTQUFSLGlCQUFRQSxTQUFSO0FBQUEsTUFBbUJDLFdBQW5CLGlCQUFtQkEsV0FBbkIsQ0FGaUIsQ0FJakI7OztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLFlBQVEsQ0FBQztBQUNQRyxVQUFJLEVBQUVDLGlFQUFrQkE7QUFEakIsS0FBRCxDQUFSO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BRix5REFBUyxDQUFDLFlBQU07QUFDZCxhQUFTRyxRQUFULEdBQW9CO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0QsT0FBdkIsQ0FOa0IsQ0FPbEI7O0FBQ0EsVUFBTUUsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJGLFlBQTlDLENBUmtCLENBU2xCOztBQUNBLFVBQU1HLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUE5QyxDQVZrQixDQVlsQjs7QUFDQSxVQUFJQSxZQUFZLEdBQUcsR0FBZixHQUFxQkwsT0FBTyxHQUFHRSxZQUFuQyxFQUFpRDtBQUMvQyxZQUFJSSxVQUFVLEtBQUssSUFBZixJQUF1QmIsV0FBVyxLQUFLLElBQTNDLEVBQWlEO0FBQy9DQyxrQkFBUSxDQUNOO0FBQ0VHLGdCQUFJLEVBQUVDLGlFQUFrQkE7QUFEMUIsV0FETSxFQUlOLEVBSk0sQ0FBUjtBQU1EO0FBQ0Y7QUFDRjs7QUFDREcsVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1IsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWDtBQUNBO0FBQ0FFLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNULFFBQXJDO0FBQ0QsS0FKRDtBQUtELEdBL0JRLEVBK0JOLENBQUNOLFdBQUQsQ0EvQk0sQ0FBVDtBQWlDQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFBLGVBRUdILEVBQUUsaUJBQUkscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZULEVBR0dFLFNBQVMsQ0FBQ2lCLEdBQVYsQ0FBYyxVQUFDbEIsSUFBRDtBQUFBLDBCQUNiLHFFQUFDLDREQUFEO0FBQXdCLFlBQUksRUFBRUE7QUFBOUIsU0FBZUEsSUFBSSxDQUFDbUIsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZCxDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0F0REQ7O0dBQU14QixJO1VBQ1dDLHVELEVBQ29CQSx1RCxFQUdsQlEsdUQ7OztLQUxiVCxJO0FBd0RTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZmNjOWYyZDIwZThhOTMzNWE0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgLy8g7ZmIIO2ZlOuptOydtCDsvJzsp4DrqbQg7JWh7IWYIOuwnOyDnVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgLy8g6rCA7J6lIOunqCDsnITsl5DshJwg7Iqk7YGs66Gk7J2EIOyWvOuniOuCmCDrgrTroLjripTsp4BcclxuICAgICAgLy8g7YKk67O065OcIOy7pOyEnCDqsJzrhZDsnLzroZwg7IOd6rCB7ZW067O07J6QLCDsiqTtgazroaTsl5DshJwg6rCA7J6lIOychOyXkOqwgCDquLDspIDsoJBcclxuICAgICAgLy8g7Iqk7YGs66Gk7J2EIOqwgOyepSDrsJHsnLzroZwg64K066Ck64+EIOyVhOyngSDtmZTrqbQg7YGs6riw66eM7YGs66+A7J20IOqzteqwhOydtCDrgqjslYTsnojsnYxcclxuICAgICAgLy8g7J20IOqzteqwhOydhCDslYzquLAg7JyE7ZW0IOuwkeydmCBjbGllbnRIZWlnaHTqsIAg7ZWE7JqU7ZWcIOqyg1xyXG4gICAgICAvLyA9PiBzY3JvbGxZICsgY2xpZW50SGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0XHJcbiAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgLy8g64K0IO2ZlOuptOydtCDrs7TsnbTripQg6ri47J20XHJcbiAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIC8vIOqwgOyepeychOyXkOyEnCDqsIDsnqUg7JWE656YLCDstJ0g6ri47J20XHJcbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAvLyAtMzAw7ZWY64qQIOydtOycoOuKlCDqsIDsnqUg67CR7JeQIOyKpO2BrOuhpOydtCDsmKTquLAg7KCE7JeQIDMwMHB466i87KCAIOyXheuNsOydtO2KuO2VmOq4sCDsnITtlahcclxuICAgICAgaWYgKHNjcm9sbEhlaWdodCAtIDMwMCA8IHNjcm9sbFkgKyBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsZmxhZyA9PT0gdHJ1ZSB8fCBoYXNNb3JlUG9zdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gdXNlRWZmZWN07JeQ7IScIHdpbmRvdyBldmVudOulvCDri6Tro7Ag65WMIHJldHVybuusuOydhCDtmZzsmqntlZjsl6xcclxuICAgICAgLy8gZXZlbnTrpbwg7KCc6rGw7ZW07KSY7JW8IO2VqC4g7JWI6re465+s66m0IOuplOuqqOumrOyXkCDsjJPsnoRcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaGFzTW9yZVBvc3RdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIHsvKiBjaGlsZHJlbiAqL31cclxuICAgICAge21lICYmIDxQb3N0Rm9ybT48L1Bvc3RGb3JtPn1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fT48L1Bvc3RDYXJkPlxyXG4gICAgICApKX1cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9