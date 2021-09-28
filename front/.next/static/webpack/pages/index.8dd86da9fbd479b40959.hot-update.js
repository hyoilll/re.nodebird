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

      var scrollHeight = document.documentElement.scrollHeight;

      if (scrollHeight === scrollY + clientHeight) {
        if (hasMorePost === true) {
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
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 14
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsIndpbmRvdyIsImNsaWVudEhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLHFCQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUExQjtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0FBQ0Esc0JBQW1DSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsR0FBRCxDQUE5QztBQUFBLE1BQVFDLFNBQVIsaUJBQVFBLFNBQVI7QUFBQSxNQUFtQkMsV0FBbkIsaUJBQW1CQSxXQUFuQixDQUZpQixDQUlqQjs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsWUFBUSxDQUFDO0FBQ1BHLFVBQUksRUFBRUMsaUVBQWtCQTtBQURqQixLQUFELENBQVI7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFGLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNHLFFBQVQsR0FBb0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDRCxPQUF2QixDQU5rQixDQU9sQjs7QUFDQSxVQUFNRSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkYsWUFBOUMsQ0FSa0IsQ0FTbEI7O0FBQ0EsVUFBTUcsWUFBWSxHQUFHRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTlDOztBQUVBLFVBQUlBLFlBQVksS0FBS0wsT0FBTyxHQUFHRSxZQUEvQixFQUE2QztBQUMzQyxZQUFJVCxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDeEJDLGtCQUFRLENBQ047QUFDRUcsZ0JBQUksRUFBRUMsaUVBQWtCQTtBQUQxQixXQURNLEVBSU4sRUFKTSxDQUFSO0FBTUQ7QUFDRjtBQUNGOztBQUNERyxVQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUCxRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYO0FBQ0E7QUFDQUUsWUFBTSxDQUFDTSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsUUFBckM7QUFDRCxLQUpEO0FBS0QsR0E5QlEsRUE4Qk4sRUE5Qk0sQ0FBVDtBQWdDQSxzQkFDRSxxRUFBQyw2REFBRDtBQUFBLGVBRUdULEVBQUUsaUJBQUkscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZULEVBR0dFLFNBQVMsQ0FBQ2dCLEdBQVYsQ0FBYyxVQUFDakIsSUFBRDtBQUFBLDBCQUNiLHFFQUFDLDREQUFEO0FBQXdCLFlBQUksRUFBRUE7QUFBOUIsU0FBZUEsSUFBSSxDQUFDa0IsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBZCxDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FyREQ7O0dBQU12QixJO1VBQ1dDLHVELEVBQ29CQSx1RCxFQUdsQlEsdUQ7OztLQUxiVCxJO0FBdURTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZGQ4NmRhOWZiZDQ3OWI0MDk1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgLy8g7ZmIIO2ZlOuptOydtCDsvJzsp4DrqbQg7JWh7IWYIOuwnOyDnVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgLy8g6rCA7J6lIOunqCDsnITsl5DshJwg7Iqk7YGs66Gk7J2EIOyWvOuniOuCmCDrgrTroLjripTsp4BcclxuICAgICAgLy8g7YKk67O065OcIOy7pOyEnCDqsJzrhZDsnLzroZwg7IOd6rCB7ZW067O07J6QLCDsiqTtgazroaTsl5DshJwg6rCA7J6lIOychOyXkOqwgCDquLDspIDsoJBcclxuICAgICAgLy8g7Iqk7YGs66Gk7J2EIOqwgOyepSDrsJHsnLzroZwg64K066Ck64+EIOyVhOyngSDtmZTrqbQg7YGs6riw66eM7YGs66+A7J20IOqzteqwhOydtCDrgqjslYTsnojsnYxcclxuICAgICAgLy8g7J20IOqzteqwhOydhCDslYzquLAg7JyE7ZW0IOuwkeydmCBjbGllbnRIZWlnaHTqsIAg7ZWE7JqU7ZWcIOqyg1xyXG4gICAgICAvLyA9PiBzY3JvbGxZICsgY2xpZW50SGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0XHJcbiAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgLy8g64K0IO2ZlOuptOydtCDrs7TsnbTripQg6ri47J20XHJcbiAgICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIC8vIOqwgOyepeychOyXkOyEnCDqsIDsnqUg7JWE656YLCDstJ0g6ri47J20XHJcbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsSGVpZ2h0ID09PSBzY3JvbGxZICsgY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW11cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyB1c2VFZmZlY3Tsl5DshJwgd2luZG93IGV2ZW5066W8IOuLpOujsCDrlYwgcmV0dXJu66y47J2EIO2ZnOyaqe2VmOyXrFxyXG4gICAgICAvLyBldmVudOulvCDsoJzqsbDtlbTspJjslbwg7ZWoLiDslYjqt7jrn6zrqbQg66mU66qo66as7JeQIOyMk+yehFxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIHsvKiBjaGlsZHJlbiAqL31cclxuICAgICAge21lICYmIDxQb3N0Rm9ybT48L1Bvc3RGb3JtPn1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fT48L1Bvc3RDYXJkPlxyXG4gICAgICApKX1cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9