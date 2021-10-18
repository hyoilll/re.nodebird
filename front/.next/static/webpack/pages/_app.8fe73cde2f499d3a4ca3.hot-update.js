webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./sagas/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = "http://localhost:3065";
function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_post__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_user__WEBPACK_IMPORTED_MODULE_4__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
} // all : 매개변수로서 배열을 받고, 배열안의 원소들을 한번에 실행시켜줌
// fork : 비동기 함수를 실행시켜줌 / 서버에서의 결과값을 기다리지 않고 그대로 실행함
// call : 동기 함수를 실행시켜줌 / 서버에서의 결과값을 기다림 await과 같은 효과
// put : dispatch와 같은 역할, 액션을 디스패치해줌
// take : (1회용) 매개변수의 액션이 실행될 때 까지 기다리겠다는 것
//  1. while take : 동기적으로 동작
//  2. takeEvery : 비동기적으로 동작
// takeLatest : 실수로 여러번 발생된 액션을 마지막 액션 1번으로 취급해주는 것
//              3개의 액션을 서버로 요청하면 서버로부터 응답을 1개로 줄여주는 것이지, 요청까지 1개로 줄여주진 않음 => 서버에 3개의 액션 기록이 남음
//              => 서버쪽 검사가 필요함 (이미 등록한 액션이기 때문에 등록되지 않습니다. 와 같은 메세지를 안내함)
//              위의 문제를 해결해준 것이 "throttle" 지정한 시간당 한번밖에 요청을 할 수 없도록 제한을 둠
//  ex) 3번의 액션발생하였을 때 앞의 2번의 액션이 이미 완료된 것이면 적용되고
//      2번의 액션이 완료되지 않고 마지막 액션과 같이 액션이 발생된 것이라면 앞의 2개의 액션은 적용안됨
// throttling / debouncing의 차이
// https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBUXlCQSxROztBQVJ6QjtBQUNBO0FBRUE7QUFDQTtBQUVBQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsdUJBQXpCO0FBRWUsU0FBVUgsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTUksOERBQUcsQ0FBQyxDQUFDQywrREFBSSxDQUFDQyw2Q0FBRCxDQUFMLEVBQWlCRCwrREFBSSxDQUFDRSw2Q0FBRCxDQUFyQixDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQUlmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhmZTczY2RlMmY0OTlkM2E0Y2EzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwNjVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2ZvcmsocG9zdFNhZ2EpLCBmb3JrKHVzZXJTYWdhKV0pO1xyXG59XHJcblxyXG4vLyBhbGwgOiDrp6TqsJzrs4DsiJjroZzshJwg67Cw7Je07J2EIOuwm+qzoCwg67Cw7Je07JWI7J2YIOybkOyGjOuTpOydhCDtlZzrsojsl5Ag7Iuk7ZaJ7Iuc7Lyc7KSMXHJcbi8vIGZvcmsgOiDruYTrj5nquLAg7ZWo7IiY66W8IOyLpO2WieyLnOy8nOykjCAvIOyEnOuyhOyXkOyEnOydmCDqsrDqs7zqsJLsnYQg6riw64uk66as7KeAIOyViuqzoCDqt7jrjIDroZwg7Iuk7ZaJ7ZWoXHJcbi8vIGNhbGwgOiDrj5nquLAg7ZWo7IiY66W8IOyLpO2WieyLnOy8nOykjCAvIOyEnOuyhOyXkOyEnOydmCDqsrDqs7zqsJLsnYQg6riw64uk66a8IGF3YWl06rO8IOqwmeydgCDtmqjqs7xcclxuLy8gcHV0IDogZGlzcGF0Y2jsmYAg6rCZ7J2AIOyXre2VoCwg7JWh7IWY7J2EIOuUlOyKpO2MqOy5mO2VtOykjFxyXG4vLyB0YWtlIDogKDHtmozsmqkpIOunpOqwnOuzgOyImOydmCDslaHshZjsnbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64uk64qUIOqyg1xyXG4vLyAgMS4gd2hpbGUgdGFrZSA6IOuPmeq4sOyggeycvOuhnCDrj5nsnpFcclxuLy8gIDIuIHRha2VFdmVyeSA6IOu5hOuPmeq4sOyggeycvOuhnCDrj5nsnpFcclxuLy8gdGFrZUxhdGVzdCA6IOyLpOyImOuhnCDsl6zrn6zrsogg67Cc7IOd65CcIOyVoeyFmOydhCDrp4jsp4Drp4kg7JWh7IWYIDHrsojsnLzroZwg7Leo6riJ7ZW07KO864qUIOqyg1xyXG4vLyAgICAgICAgICAgICAgM+qwnOydmCDslaHshZjsnYQg7ISc67KE66GcIOyalOyyre2VmOuptCDshJzrsoTroZzrtoDthLAg7J2R64u17J2EIDHqsJzroZwg7KSE7Jes7KO864qUIOqyg+ydtOyngCwg7JqU7LKt6rmM7KeAIDHqsJzroZwg7KSE7Jes7KO87KeEIOyViuydjCA9PiDshJzrsoTsl5AgM+qwnOydmCDslaHshZgg6riw66Gd7J20IOuCqOydjFxyXG4vLyAgICAgICAgICAgICAgPT4g7ISc67KE7Kq9IOqygOyCrOqwgCDtlYTsmpTtlaggKOydtOuvuCDrk7HroZ3tlZwg7JWh7IWY7J206riwIOuVjOusuOyXkCDrk7HroZ3rkJjsp4Ag7JWK7Iq164uI64ukLiDsmYAg6rCZ7J2AIOuplOyEuOyngOulvCDslYjrgrTtlagpXHJcbi8vICAgICAgICAgICAgICDsnITsnZgg66y47KCc66W8IO2VtOqysO2VtOykgCDqsoPsnbQgXCJ0aHJvdHRsZVwiIOyngOygle2VnCDsi5zqsITri7kg7ZWc67KI67CW7JeQIOyalOyyreydhCDtlaAg7IiYIOyXhuuPhOuhnSDsoJztlZzsnYQg65GgXHJcbi8vICBleCkgM+uyiOydmCDslaHshZjrsJzsg53tlZjsmIDsnYQg65WMIOyVnuydmCAy67KI7J2YIOyVoeyFmOydtCDsnbTrr7gg7JmE66OM65CcIOqyg+ydtOuptCDsoIHsmqnrkJjqs6BcclxuLy8gICAgICAy67KI7J2YIOyVoeyFmOydtCDsmYTro4zrkJjsp4Ag7JWK6rOgIOuniOyngOuniSDslaHshZjqs7wg6rCZ7J20IOyVoeyFmOydtCDrsJzsg53rkJwg6rKD7J20652866m0IOyVnuydmCAy6rCc7J2YIOyVoeyFmOydgCDsoIHsmqnslYjrkKhcclxuLy8gdGhyb3R0bGluZyAvIGRlYm91bmNpbmfsnZgg7LCo7J20XHJcbi8vIGh0dHBzOi8vd3d3Lnplcm9jaG8uY29tL2NhdGVnb3J5L0phdmFTY3JpcHQvcG9zdC81OWE4ZTljYjE1YWMwMDAwMTgyNzk0ZmFcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==