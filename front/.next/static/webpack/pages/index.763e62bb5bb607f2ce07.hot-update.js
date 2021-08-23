webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\re.nodebird\\front\\components\\PostForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostForm = function PostForm() {
  _s();

  var imagePaths = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.imagePaths;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      text = _useState[0],
      setText = _useState[1];

  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["addPost"]);
    setText("");
  }, []);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
      style: {
        margin: "10px 0 20px"
      },
      encType: "multipart/form-data",
      onFinish: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
        value: text,
        onChange: onChangeText,
        maxLength: 140,
        placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "file",
          multiple: true,
          hidden: true,
          ref: imageInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          onClick: onClickImageUpload,
          children: "Upload Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          type: "primary",
          style: {
            "float": "right"
          },
          htmlType: "submit",
          children: "Upload"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: imagePaths.map(function (v) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              display: "inline-block"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              src: v,
              style: {
                width: "200px"
              },
              alt: v
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
                children: "\uC81C\uAC70"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, _this)]
          }, v, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(PostForm, "aOE9tyxkXXHZB69REnSjYpY2nus=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImltYWdlUGF0aHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbWFnZUlucHV0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsIm9uQ2hhbmdlVGV4dCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJhZGRQb3N0Iiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwibWFyZ2luIiwibWFwIiwidiIsImRpc3BsYXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxVQUFVLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxVQUF0QjtBQUFBLEdBQUQsQ0FBOUI7QUFDQSxNQUFNSSxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyxvREFBTSxFQUF6Qjs7QUFFQSxrQkFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDdENILFdBQU8sQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNELEdBRitCLEVBRTdCLEVBRjZCLENBQWhDO0FBSUEsTUFBTUMsUUFBUSxHQUFHSix5REFBVyxDQUFDLFlBQU07QUFDakNSLFlBQVEsQ0FBQ2Esc0RBQUQsQ0FBUjtBQUNBUCxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0QsR0FIMkIsRUFHekIsRUFIeUIsQ0FBNUI7QUFLQSxNQUFNUSxrQkFBa0IsR0FBR04seURBQVcsQ0FBQyxZQUFNO0FBQzNDTixjQUFVLENBQUNhLE9BQVgsQ0FBbUJDLEtBQW5CO0FBQ0QsR0FGcUMsRUFFbkMsRUFGbUMsQ0FBdEM7QUFJQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHlDQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWLE9BRFQ7QUFFRSxhQUFPLEVBQUMscUJBRlY7QUFHRSxjQUFRLEVBQUVMLFFBSFo7QUFBQSw4QkFLRSxxRUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDRSxhQUFLLEVBQUVQLElBRFQ7QUFFRSxnQkFBUSxFQUFFRSxZQUZaO0FBR0UsaUJBQVMsRUFBRSxHQUhiO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQVdFO0FBQUEsZ0NBQ0U7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBUSxNQUEzQjtBQUE0QixnQkFBTSxNQUFsQztBQUFtQyxhQUFHLEVBQUVMO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQywyQ0FBRDtBQUFRLGlCQUFPLEVBQUVZLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsZUFBSyxFQUFFO0FBQUUscUJBQU87QUFBVCxXQUE5QjtBQUFrRCxrQkFBUSxFQUFDLFFBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBa0JFO0FBQUEsa0JBQ0dsQixVQUFVLENBQUNzQixHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3JCLDhCQUNFO0FBQWEsaUJBQUssRUFBRTtBQUFFQyxxQkFBTyxFQUFFO0FBQVgsYUFBcEI7QUFBQSxvQ0FDRTtBQUFLLGlCQUFHLEVBQUVELENBQVY7QUFBYSxtQkFBSyxFQUFFO0FBQUVFLHFCQUFLLEVBQUU7QUFBVCxlQUFwQjtBQUF3QyxpQkFBRyxFQUFFRjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSxxQ0FDRSxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQSxhQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFRRCxTQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW1DRCxDQXRERDs7R0FBTXhCLFE7VUFDZUUsdUQsRUFDRkksdUQ7OztLQUZiTixRO0FBd0RTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NjNlNjJiYjViYjYwN2YyY2UwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBpbWFnZVBhdGhzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0LmltYWdlUGF0aHMpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYWRkUG9zdCk7XHJcbiAgICBzZXRUZXh0KFwiXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHhcIiB9fVxyXG4gICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cclxuICAgICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCJcclxuICAgICAgICA+PC9JbnB1dC5UZXh0QXJlYT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0+PC9pbnB1dD5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT5VcGxvYWQgSW1hZ2U8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Z9IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIgfX0gYWx0PXt2fT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=