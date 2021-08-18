webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\re.nodebird\\front\\pages\\signup.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();








var ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: red;\n"])));
_c = ErrorMsg;

var Signup = function Signup() {
  _s();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      pw = _useInput4[0],
      onChangePw = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(""),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      nickName = _useInput6[0],
      onChangeNickName = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      pwCheck = _useState[0],
      setPwCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      pwError = _useState2[0],
      setPwError = _useState2[1];

  var onChangePwCheck = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (e) {
    setPwCheck(e.target.value);
    setPwError(e.target.value !== pw);
  }, [pw]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    if (pw !== pwCheck) {
      return setPwError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(id, nickName, pw);
  }, [pw, pwCheck, term]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
        children: "NodeBird | Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      onFinish: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
          htmlFor: "user-id",
          children: "Id"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-id",
          value: id,
          required: true,
          onChange: onChangeId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
          htmlFor: "user-nickName",
          children: "nickName"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-nickName",
          value: nickName,
          required: true,
          onChange: onChangeNickName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
          htmlFor: "user-pw",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-pw",
          type: "password",
          value: pw,
          required: true,
          onChange: onChangePw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
          htmlFor: "user-pw-check",
          children: "check Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          name: "user-pw-check",
          type: "password",
          value: pwCheck,
          required: true,
          onChange: onChangePwCheck
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), pwError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(ErrorMsg, {
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 23
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
          name: "user-term",
          checked: term,
          onChange: onChangeTerm,
          children: "\uB85C\uBD07\uC774 \uC544\uB2D9\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this), termError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(ErrorMsg, {
          children: "\uCCB4\uD06C\uBC15\uC2A4\uC5D0 \uCCB4\uD06C\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        style: {
          marginTop: 10
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "primary",
          htmlType: "submit",
          children: "SignUp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(Signup, "aFPnjJ3ADzeacv5V+wCI9F3vbTU=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMsg");
$RefreshReg$(_c2, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTXNnIiwic3R5bGVkIiwiZGl2IiwiU2lnbnVwIiwidXNlSW5wdXQiLCJpZCIsIm9uQ2hhbmdlSWQiLCJwdyIsIm9uQ2hhbmdlUHciLCJuaWNrTmFtZSIsIm9uQ2hhbmdlTmlja05hbWUiLCJ1c2VTdGF0ZSIsInB3Q2hlY2siLCJzZXRQd0NoZWNrIiwicHdFcnJvciIsInNldFB3RXJyb3IiLCJvbkNoYW5nZVB3Q2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlcm0iLCJzZXRUZXJtIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwib25DaGFuZ2VUZXJtIiwiY2hlY2tlZCIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsZ0tBQWQ7S0FBTUYsUTs7QUFJTixJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLGtCQUF5QkMsK0RBQVEsQ0FBQyxFQUFELENBQWpDO0FBQUE7QUFBQSxNQUFPQyxFQUFQO0FBQUEsTUFBV0MsVUFBWDs7QUFDQSxtQkFBeUJGLCtEQUFRLENBQUMsRUFBRCxDQUFqQztBQUFBO0FBQUEsTUFBT0csRUFBUDtBQUFBLE1BQVdDLFVBQVg7O0FBQ0EsbUJBQXFDSiwrREFBUSxDQUFDLEVBQUQsQ0FBN0M7QUFBQTtBQUFBLE1BQU9LLFFBQVA7QUFBQSxNQUFpQkMsZ0JBQWpCOztBQUVBLGtCQUE4QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBOEJGLHNEQUFRLENBQUMsS0FBRCxDQUF0QztB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OGMyNWU2ZjQyZDE4YWY3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQ2hlY2tib3gsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBFcnJvck1zZyA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3B3LCBvbkNoYW5nZVB3XSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtuaWNrTmFtZSwgb25DaGFuZ2VOaWNrTmFtZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuXHJcbiAgY29uc3QgW3B3Q2hlY2ssIHNldFB3Q2hlY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3B3RXJyb3IsIHNldFB3RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUHdDaGVjayA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgc2V0UHdDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHNldFB3RXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHB3KTtcclxuICAgIH0sXHJcbiAgICBbcHddXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZVRlcm0gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkKTtcclxuICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChwdyAhPT0gcHdDaGVjaykge1xyXG4gICAgICByZXR1cm4gc2V0UHdFcnJvcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhpZCwgbmlja05hbWUsIHB3KTtcclxuICB9LCBbcHcsIHB3Q2hlY2ssIHRlcm1dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ob2RlQmlyZCB8IFByb2ZpbGU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPklkPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lkfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJZH1cclxuICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItbmlja05hbWVcIj5uaWNrTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1uaWNrTmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuaWNrTmFtZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja05hbWV9XHJcbiAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXB3XCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbmFtZT1cInVzZXItcHdcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHd9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVB3fVxyXG4gICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wdy1jaGVja1wiPmNoZWNrIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXB3LWNoZWNrXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3B3Q2hlY2t9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVB3Q2hlY2t9XHJcbiAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICAgIHtwd0Vycm9yICYmIDxFcnJvck1zZz7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L0Vycm9yTXNnPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENoZWNrYm94IG5hbWU9XCJ1c2VyLXRlcm1cIiBjaGVja2VkPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfT5cclxuICAgICAgICAgICAg66Gc67SH7J20IOyVhOuLmeuLiOuLpC5cclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICB7dGVybUVycm9yICYmIDxFcnJvck1zZz7ssrTtgazrsJXsiqTsl5Ag7LK07YGs7ZW07KO87IS47JqULjwvRXJyb3JNc2c+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBTaWduVXBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9