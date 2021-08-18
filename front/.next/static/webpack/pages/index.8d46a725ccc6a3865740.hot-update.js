webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\re.nodebird\\front\\components\\LoginForm.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();








var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 10px;\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 10px;\n"])));
_c2 = FormWrapper;

var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      pw = _useState2[0],
      setPw = _useState2[1]; //   component에 사용하는 함수는 useCallback으로 최적화
  //   값은 useMemo로 최적화


  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePw = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPw(e.target.value);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(id, pw);
    setIsLoggedIn(true);
  }, [id, pw]); //[] : 디펜던시

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FormWrapper, {
      onFinish: onSubmitForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
          htmlFor: "user-id",
          children: "ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "user-id",
          value: id,
          onChange: onChangeId,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
          htmlFor: "user-pw",
          children: "PW"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "user-pw",
          type: "password",
          value: pw,
          onChange: onChangePw,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ButtonWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: false,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "SignUp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(LoginForm, "cdyLrA6juktyv9JEO/w/0ppih2I=");

_c3 = LoginForm;
LoginForm.propTypes = {
  setIsLoggedIn: propTypes.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luRm9ybSIsInNldElzTG9nZ2VkSW4iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJwdyIsInNldFB3Iiwib25DaGFuZ2VJZCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQdyIsIm9uU3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLHNLQUFuQjtLQUFNRixhO0FBSU4sSUFBTUcsV0FBVyxHQUFHRixpRUFBTSxDQUFDRyx5Q0FBRCxDQUFULHFLQUFqQjtNQUFNRCxXOztBQUlOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjs7QUFDdkMsa0JBQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBNUI7QUFBQSxNQUFPQyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxtQkFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUE1QjtBQUFBLE1BQU9HLEVBQVA7QUFBQSxNQUFXQyxLQUFYLGlCQUZ1QyxDQUl2QztBQUNBOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDTCxTQUFLLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQUw7QUFDRCxHQUY2QixFQUUzQixFQUYyQixDQUE5QjtBQUlBLE1BQU1DLFVBQVUsR0FBR0oseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDcENILFNBQUssQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTDtBQUNELEdBRjZCLEVBRTNCLEVBRjJCLENBQTlCO0FBSUEsTUFBTUUsWUFBWSxHQUFHTCx5REFBVyxDQUFDLFlBQU07QUFDckNNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixFQUFaLEVBQWdCRSxFQUFoQjtBQUNBSixpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEdBSCtCLEVBRzdCLENBQUNFLEVBQUQsRUFBS0UsRUFBTCxDQUg2QixDQUFoQyxDQWR1QyxDQWlCekI7O0FBRWQsc0JBQ0U7QUFBQSwyQkFFRSxxRUFBQyxXQUFEO0FBQWEsY0FBUSxFQUFFUSxZQUF2QjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UscUVBQUMsMENBQUQ7QUFDRSxjQUFJLEVBQUMsU0FEUDtBQUVFLGVBQUssRUFBRVYsRUFGVDtBQUdFLGtCQUFRLEVBQUVJLFVBSFo7QUFJRSxrQkFBUTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFXRTtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLHFFQUFDLDBDQUFEO0FBQ0UsY0FBSSxFQUFDLFNBRFA7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGVBQUssRUFBRUYsRUFIVDtBQUlFLGtCQUFRLEVBQUVPLFVBSlo7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFzQkUscUVBQUMsYUFBRDtBQUFBLGdDQUNFLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsa0JBQVEsRUFBQyxRQUFoQztBQUF5QyxpQkFBTyxFQUFFLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0UscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsbUJBREY7QUFzQ0QsQ0F6REQ7O0dBQU1aLFM7O01BQUFBLFM7QUEyRE5BLFNBQVMsQ0FBQ2dCLFNBQVYsR0FBc0I7QUFDcEJmLGVBQWEsRUFBRWUsU0FBUyxDQUFDQyxJQUFWLENBQWVDO0FBRFYsQ0FBdEI7QUFJZWxCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhkNDZhNzI1Y2NjNmEzODY1NzQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKHsgc2V0SXNMb2dnZWRJbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHcsIHNldFB3XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLyAgIGNvbXBvbmVudOyXkCDsgqzsmqntlZjripQg7ZWo7IiY64qUIHVzZUNhbGxiYWNr7Jy866GcIOy1nOygge2ZlFxyXG4gIC8vICAg6rCS7J2AIHVzZU1lbW/roZwg7LWc7KCB7ZmUXHJcbiAgY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVB3ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFB3KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkLCBwdyk7XHJcbiAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gIH0sIFtpZCwgcHddKTsgLy9bXSA6IOuUlO2OnOuNmOyLnFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIG9uRmluaXNoIDogZS5wcmV2ZW50RGVmYXVsdOqwgCDsnbTrr7gg7KCB7Jqp65CY7Ja0IOyeiOydjCAqL31cclxuICAgICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj5JRDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSWR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXB3XCI+UFc8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbmFtZT1cInVzZXItcHdcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVB3fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtmYWxzZX0+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+U2lnblVwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuTG9naW5Gb3JtLnByb3BUeXBlcyA9IHtcclxuICBzZXRJc0xvZ2dlZEluOiBwcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9