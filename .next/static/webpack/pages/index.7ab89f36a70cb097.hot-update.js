"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Prices = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USD\"), state = ref[0], setstate = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), List = ref1[0], setList = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (state == \"USD\") {\n            setList(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                className: \"list-group-item\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                },\n                __self: _this1,\n                children: [\n                    \"Bitcoin rate for \",\n                    props.bpi.USD.description,\n                    \":\",\n                    \"\",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        className: \"badge badge-primary\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                            lineNumber: 13,\n                            columnNumber: 23\n                        },\n                        __self: _this1,\n                        children: props.bpi.USD.code\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                            lineNumber: 14,\n                            columnNumber: 23\n                        },\n                        __self: _this1,\n                        children: props.bpi.USD.rate\n                    })\n                ]\n            }));\n        } else if (state == \"GBP\") {\n            setList(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                className: \"list-group-item\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                },\n                __self: _this1,\n                children: [\n                    \"Bitcoin rate for \",\n                    props.bpi.GBP.description,\n                    \":\",\n                    \"\",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        className: \"badge badge-primary\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                            lineNumber: 23,\n                            columnNumber: 23\n                        },\n                        __self: _this1,\n                        children: props.bpi.GBP.code\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                            lineNumber: 24,\n                            columnNumber: 23\n                        },\n                        __self: _this1,\n                        children: props.bpi.GBP.rate\n                    })\n                ]\n            }));\n        } else if (state == \"EUR\") {\n            setList(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                className: \"list-group-item\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                },\n                __self: _this1,\n                children: [\n                    \"Bitcoin rate for \",\n                    props.bpi.EUR.description,\n                    \":\",\n                    \"\",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        className: \"badge badge-primary\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                            lineNumber: 33,\n                            columnNumber: 23\n                        },\n                        __self: _this1,\n                        children: props.bpi.EUR.code\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"strong\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                            lineNumber: 34,\n                            columnNumber: 23\n                        },\n                        __self: _this1,\n                        children: props.bpi.EUR.rate\n                    })\n                ]\n            }));\n        }\n    }, [\n        state\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n            lineNumber: 44,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                className: \"list-group\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: List\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                className: \"form-control\",\n                onChange: function(event) {\n                    return setstate(event.target.value);\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"USD\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"USD\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"GBP\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"GBP\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"EUR\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ManikandanAshokkumar\\\\Documents\\\\Nextjs learning\\\\components\\\\Prices.js\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"EUR\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Prices, \"V4Bt94yKGte8EvDnqx5gAAh//TI=\");\n_c = Prices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7eUZBQzFFQyxDQUFNO3dCQUFDRCxLQUFLLEVBQUMsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFHOzt5RkFDdEJDLENBQU07d0JBQUNELEtBQUssRUFBQyxDQUFLOzs7Ozs7O2tDQUFDLENBQUc7O3lGQUN0QkMsQ0FBTTt3QkFBQ0QsS0FBSyxFQUFDLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBRzs7Ozs7O0FBSXZDLENBQUM7R0FyREsxQixNQUFNO0tBQU5BLE1BQU07QUF1RFosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanM/ZTcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUHJpY2VzID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gICAgY29uc3QgW0xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZihzdGF0ZT09XCJVU0RcIikge1xyXG4gICAgICAgICAgICBzZXRMaXN0KFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3Byb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259OntcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcInJlZFwifX0gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPntwcm9wcy5icGkuVVNELmNvZGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZihzdGF0ZT09XCJHQlBcIikge1xyXG4gICAgICAgICAgICBzZXRMaXN0KFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3Byb3BzLmJwaS5HQlAuZGVzY3JpcHRpb259OntcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcInJlZFwifX0gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPntwcm9wcy5icGkuR0JQLmNvZGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cHJvcHMuYnBpLkdCUC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZihzdGF0ZT09XCJFVVJcIikge1xyXG4gICAgICAgICAgICBzZXRMaXN0KFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3Byb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259OntcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcInJlZFwifX0gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPntwcm9wcy5icGkuRVVSLmNvZGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cHJvcHMuYnBpLkVVUi5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0sW3N0YXRlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAge0xpc3R9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIG9uQ2hhbmdlPXsoZXZlbnQpPT5zZXRzdGF0ZShldmVudC50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHQlBcIj5HQlA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFVVJcIj5FVVI8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlc1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByaWNlcyIsInByb3BzIiwic3RhdGUiLCJzZXRzdGF0ZSIsIkxpc3QiLCJzZXRMaXN0IiwibGkiLCJjbGFzc05hbWUiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwiY29kZSIsInN0cm9uZyIsInJhdGUiLCJHQlAiLCJFVVIiLCJkaXYiLCJ1bCIsImJyIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

});