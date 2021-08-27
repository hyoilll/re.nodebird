webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\re.nodebird\\front\\components\\PostImages.js",
    _this = undefined,
    _s = $RefreshSig$();







var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        style: {
          maxHeight: "200px"
        },
        role: "presenttaion",
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        role: "presenttaion",
        style: {
          width: "50%"
        },
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        role: "presenttaion",
        style: {
          width: "50%"
        },
        src: images[1].src,
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        role: "presenttaion",
        style: {
          width: "50%"
        },
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        role: "presentation",
        style: {
          display: "inline-block",
          width: "50%",
          textAlign: "center",
          verticalAlign: "middle"
        },
        onClick: onZoom,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["PlusOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(PostImages, "UE9uMxceBgwv4jfRR4p3tn5mPaU=");

_c = PostImages;
PostImages.proptypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsImxlbmd0aCIsIm1heEhlaWdodCIsInNyYyIsIndpZHRoIiwiZGlzcGxheSIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJwcm9wdHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ2pDLGtCQUE0Q0Msc0RBQVEsQ0FBQyxLQUFELENBQXBEO0FBQUEsTUFBT0MsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDL0JGLHFCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDRCxHQUZ5QixFQUV2QixFQUZ1QixDQUExQjs7QUFJQSxNQUFJSCxNQUFNLENBQUNNLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsd0JBQ0U7QUFBQSw2QkFDRTtBQUNFLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWIsU0FEVDtBQUVFLFlBQUksRUFBQyxjQUZQO0FBR0UsV0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBSGpCO0FBSUUsV0FBRyxFQUFFUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBSmpCO0FBS0UsZUFBTyxFQUFFSjtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFERjtBQVdEOztBQUNELE1BQUlKLE1BQU0sQ0FBQ00sTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2Qix3QkFDRTtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFLLEVBQUU7QUFBRUcsZUFBSyxFQUFFO0FBQVQsU0FGVDtBQUdFLFdBQUcsRUFBRVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUhqQjtBQUlFLFdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUpqQjtBQUtFLGVBQU8sRUFBRUo7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRTtBQUNFLFlBQUksRUFBQyxjQURQO0FBRUUsYUFBSyxFQUFFO0FBQUVLLGVBQUssRUFBRTtBQUFULFNBRlQ7QUFHRSxXQUFHLEVBQUVULE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FIakI7QUFJRSxXQUFHLEVBQUVSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FKakI7QUFLRSxlQUFPLEVBQUVKO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUEsb0JBREY7QUFrQkQ7O0FBRUQsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFLLEVBQUU7QUFBRUssZUFBSyxFQUFFO0FBQVQsU0FGVDtBQUdFLFdBQUcsRUFBRVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUhqQjtBQUlFLFdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUpqQjtBQUtFLGVBQU8sRUFBRUo7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRTtBQUNFLFlBQUksRUFBQyxjQURQO0FBRUUsYUFBSyxFQUFFO0FBQ0xNLGlCQUFPLEVBQUUsY0FESjtBQUVMRCxlQUFLLEVBQUUsS0FGRjtBQUdMRSxtQkFBUyxFQUFFLFFBSE47QUFJTEMsdUJBQWEsRUFBRTtBQUpWLFNBRlQ7QUFRRSxlQUFPLEVBQUVSLE1BUlg7QUFBQSxnQ0FVRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTBCRCxDQW5FRDs7R0FBTUwsVTs7S0FBQUEsVTtBQXFFTkEsVUFBVSxDQUFDYyxTQUFYLEdBQXVCO0FBQ3JCYixRQUFNLEVBQUVjLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCO0FBRGEsQ0FBdkI7QUFJZWpCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4N2IwOTk0OWE1NWJjNjViMDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBvc3RJbWFnZXMgPSAoeyBpbWFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudHRhaW9uXCJcclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnR0YWlvblwiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fVxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgID48L2ltZz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudHRhaW9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19XHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1sxXS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1sxXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgPjwvaW1nPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudHRhaW9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwJVwiIH19XHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBsdXNPdXRsaW5lZD48L1BsdXNPdXRsaW5lZD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3B0eXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==