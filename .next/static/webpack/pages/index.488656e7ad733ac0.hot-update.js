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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Title(props) {\n    var Tag = props.tag || 'h1'; // Criando um atributo dinâmico para\n    //usar nos componentes, criando uma referência no CSS também.\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-26735d336dba60b5\",\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"26735d336dba60b5\",\n                children: \"h1.jsx-26735d336dba60b5{color:white}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Title;\nfunction PaginaInicial() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState(''), 2), username = ref[0], setUsername = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var handler = function handler(event) {\n        //Onde está o valor?\n        var valor = event.target.value;\n        console.log(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image.src);\n        //Trocar o valor da variável e\n        //através do React e avise a todos\n        if (valor.length > 2) {\n            setUsername(valor);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n                backgroundRepeat: \"no-repeat\",\n                backgroundSize: \"cover\",\n                backgroundBlendMode: \"multiply\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\",\n                    flexDirection: {\n                        xs: \"column\",\n                        sm: \"row\"\n                    },\n                    width: \"100%\",\n                    maxWidth: \"700px\",\n                    borderRadius: \"5px\",\n                    padding: \"32px\",\n                    margin: \"16px\",\n                    boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function onSubmit(e) {\n                            e.preventDefault();\n                            roteamento.push('/chat');\n                        },\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            width: {\n                                xs: \"100%\",\n                                sm: \"50%\"\n                            },\n                            textAlign: \"center\",\n                            marginBottom: \"32px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                tag: \"h1\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: \"32px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: handler,\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            maxWidth: \"200px\",\n                            padding: \"16px\",\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                            border: \"1px solid\",\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[999],\n                            borderRadius: \"10px\",\n                            flex: 1,\n                            minHeight: \"240px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: \"50%\",\n                                    marginBottom: \"16px\"\n                                },\n                                src: \"https://github.com/\".concat(username, \".png\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 148,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                    padding: \"3px 10px\",\n                                    borderRadius: \"1000px\"\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 156,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(PaginaInicial, \"4kQi2/l32ddKZ2wIX8Y1dMDK2FE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c1 = PaginaInicial;\nvar _c, _c1;\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c1, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxFQUFFckUsb0VBQW9DOzRCQUNqRHdDLFlBQVksRUFBRSxDQUFNOzRCQUNwQjhCLElBQUksRUFBRSxDQUFDOzRCQUNQQyxTQUFTLEVBQUUsQ0FBTzt3QkFDcEIsQ0FBQzs7d0dBRUF4RSx1REFBSztnQ0FDSndCLFVBQVUsRUFBRSxDQUFDO29DQUNYaUIsWUFBWSxFQUFFLENBQUs7b0NBQ25CVyxZQUFZLEVBQUUsQ0FBTTtnQ0FDdEIsQ0FBQztnQ0FDRDlCLEdBQUcsRUFBRyxDQUFtQixxQkFBVyxNQUFJLENBQWJWLFFBQVEsRUFBQyxDQUFJOzs7Ozs7d0dBR3pDZCxzREFBSTtnQ0FDSHVELE9BQU8sRUFBQyxDQUFPO2dDQUNmN0IsVUFBVSxFQUFFLENBQUM7b0NBQ1g4QixLQUFLLEVBQUVyRCxvRUFBb0M7b0NBQzNDMkIsZUFBZSxFQUFFM0Isb0VBQW9DO29DQUNyRHlDLE9BQU8sRUFBRSxDQUFVO29DQUNuQkQsWUFBWSxFQUFFLENBQVE7Z0NBQ3hCLENBQUM7MENBRUE3QixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQztHQXBKdUJGLGFBQWE7O1FBR2hCUCxrREFBUzs7O01BSE5PLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgJ2gxJzsgLy8gQ3JpYW5kbyB1bSBhdHJpYnV0byBkaW7Dom1pY28gcGFyYVxyXG4gIC8vdXNhciBub3MgY29tcG9uZW50ZXMsIGNyaWFuZG8gdW1hIHJlZmVyw6puY2lhIG5vIENTUyB0YW1iw6ltLlxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xyXG4gIFxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgY29uc3Qgcm90ZWFtZW50byA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIC8vT25kZSBlc3TDoSBvIHZhbG9yP1xyXG4gICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgIGNvbnNvbGUubG9nKEltYWdlLnNyYylcclxuICAgXHJcbiAgICAvL1Ryb2NhciBvIHZhbG9yIGRhIHZhcmnDoXZlbCBlXHJcbiAgICAvL2F0cmF2w6lzIGRvIFJlYWN0IGUgYXZpc2UgYSB0b2Rvc1xyXG4gICAgaWYgKHZhbG9yLmxlbmd0aCA+IDIpIHtcclxuXHJcbiAgICBzZXRVc2VybmFtZSh2YWxvcilcclxuICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgIFwidXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKVwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjoge1xyXG4gICAgICAgICAgICAgIHhzOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIHNtOiBcInJvd1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjcwMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBhcz1cImZvcm1cIlxyXG4gICAgICAgICAgICBvblN1Ym1pdD17ZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgcm90ZWFtZW50by5wdXNoKCcvY2hhdCcpICAgICAgICAgIFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiBcIjEwMCVcIiwgc206IFwiNTAlXCIgfSxcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMycHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRpdGxlIHRhZz1cImgxXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXRsZT5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YXBwQ29uZmlnLm5hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHZhbHVlPSB7dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlcn1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW50cmFyXCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwMDBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJUaXRsZSIsInByb3BzIiwiVGFnIiwidGFnIiwiaDEiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3RlYW1lbnRvIiwiaGFuZGxlciIsImV2ZW50IiwidmFsb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzcmMiLCJsZW5ndGgiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJmbGV4RGlyZWN0aW9uIiwieHMiLCJzbSIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm94U2hhZG93IiwibmV1dHJhbHMiLCJhcyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvciIsIm5hbWUiLCJvbkNoYW5nZSIsImZ1bGxXaWR0aCIsInRleHRGaWVsZENvbG9ycyIsIm5ldXRyYWwiLCJ0ZXh0Q29sb3IiLCJtYWluQ29sb3IiLCJtYWluQ29sb3JIaWdobGlnaHQiLCJ0eXBlIiwibGFiZWwiLCJidXR0b25Db2xvcnMiLCJjb250cmFzdENvbG9yIiwibWFpbkNvbG9yTGlnaHQiLCJtYWluQ29sb3JTdHJvbmciLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImZsZXgiLCJtaW5IZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});