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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Title(props) {\n    var Tag = props.tag || 'h1'; // Criando um atributo dinâmico para\n    //usar nos componentes, criando uma referência no CSS também.\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-26735d336dba60b5\",\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"26735d336dba60b5\",\n                children: \"h1.jsx-26735d336dba60b5{color:white}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Title;\nfunction PaginaInicial() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState(''), 2), username = ref[0], setUsername = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var handler = function handler(event) {\n        //Onde está o valor?\n        var valor = event.target.value;\n        valor.length > 1 ? setUsername(valor) : null;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n                backgroundRepeat: \"no-repeat\",\n                backgroundSize: \"cover\",\n                backgroundBlendMode: \"multiply\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\",\n                    flexDirection: {\n                        xs: \"column\",\n                        sm: \"row\"\n                    },\n                    width: \"100%\",\n                    maxWidth: \"700px\",\n                    borderRadius: \"5px\",\n                    padding: \"32px\",\n                    margin: \"16px\",\n                    boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: function onSubmit(e) {\n                            e.preventDefault();\n                            roteamento.push('/chat');\n                        },\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            width: {\n                                xs: \"100%\",\n                                sm: \"50%\"\n                            },\n                            textAlign: \"center\",\n                            marginBottom: \"32px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                tag: \"h1\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: \"32px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: handler,\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            maxWidth: \"200px\",\n                            padding: \"16px\",\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                            border: \"1px solid\",\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[999],\n                            borderRadius: \"10px\",\n                            flex: 1,\n                            minHeight: \"240px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: \"50%\",\n                                    marginBottom: \"16px\"\n                                },\n                                src: \"https://github.com/\".concat(username, \".png\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 143,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                    padding: \"3px 10px\",\n                                    borderRadius: \"1000px\"\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                                lineNumber: 150,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\GHOUST\\\\Desktop\\\\imers\\xe3o dev proj\\\\pages\\\\index.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(PaginaInicial, \"4kQi2/l32ddKZ2wIX8Y1dMDK2FE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c1 = PaginaInicial;\nvar _c, _c1;\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c1, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO3dCQUNwQixDQUFDOzt3R0FFQXJFLHVEQUFLO2dDQUNKcUIsVUFBVSxFQUFFLENBQUM7b0NBQ1hpQixZQUFZLEVBQUUsQ0FBSztvQ0FDbkJXLFlBQVksRUFBRSxDQUFNO2dDQUN0QixDQUFDO2dDQUNEcUIsR0FBRyxFQUFHLENBQW1CLHFCQUFXLE1BQUksQ0FBYjFELFFBQVEsRUFBQyxDQUFJOzs7Ozs7d0dBRXpDZCxzREFBSTtnQ0FDSG9ELE9BQU8sRUFBQyxDQUFPO2dDQUNmN0IsVUFBVSxFQUFFLENBQUM7b0NBQ1g4QixLQUFLLEVBQUVsRCxvRUFBb0M7b0NBQzNDd0IsZUFBZSxFQUFFeEIsb0VBQW9DO29DQUNyRHNDLE9BQU8sRUFBRSxDQUFVO29DQUNuQkQsWUFBWSxFQUFFLENBQVE7Z0NBQ3hCLENBQUM7MENBRUExQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQztHQTlJdUJGLGFBQWE7O1FBR2hCUCxrREFBUzs7O01BSE5PLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgJ2gxJzsgLy8gQ3JpYW5kbyB1bSBhdHJpYnV0byBkaW7Dom1pY28gcGFyYVxyXG4gIC8vdXNhciBub3MgY29tcG9uZW50ZXMsIGNyaWFuZG8gdW1hIHJlZmVyw6puY2lhIG5vIENTUyB0YW1iw6ltLlxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+e3Byb3BzLmNoaWxkcmVufTwvaDE+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xyXG4gIFxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgY29uc3Qgcm90ZWFtZW50byA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIC8vT25kZSBlc3TDoSBvIHZhbG9yP1xyXG4gICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgIHZhbG9yLmxlbmd0aCA+IDFcclxuICAgIC8vVHJvY2FyIG8gdmFsb3IgZGEgdmFyacOhdmVsIGVcclxuICAgIC8vYXRyYXbDqXMgZG8gUmVhY3QgZSBhdmlzZSBhIHRvZG9zXHJcbiAgICA/c2V0VXNlcm5hbWUodmFsb3IpXHJcbiAgICA6bnVsbFxyXG4gIH1cclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICBcInVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylcIixcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICB4czogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBzbTogXCJyb3dcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI3MDBweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMzJweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMTZweFwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2Z1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgIHJvdGVhbWVudG8ucHVzaCgnL2NoYXQnKSAgICAgICAgICBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICB3aWR0aDogeyB4czogXCIxMDAlXCIsIHNtOiBcIjUwJVwiIH0sXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUaXRsZSB0YWc9XCJoMVwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0bGU+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkzXCJcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzJweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICB2YWx1ZT0ge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkVudHJhclwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogXCIyNDBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjNweCAxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt1c2VybmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJhcHBDb25maWciLCJSZWFjdCIsInVzZVJvdXRlciIsIlRpdGxlIiwicHJvcHMiLCJUYWciLCJ0YWciLCJoMSIsImNoaWxkcmVuIiwiUGFnaW5hSW5pY2lhbCIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInJvdGVhbWVudG8iLCJoYW5kbGVyIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsIm5ldXRyYWxzIiwiYXMiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3IiLCJuYW1lIiwib25DaGFuZ2UiLCJmdWxsV2lkdGgiLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwidHlwZSIsImxhYmVsIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});