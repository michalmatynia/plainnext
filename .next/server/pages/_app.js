/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/emotion/createEmotionCache.ts":
/*!*******************************************!*\
  !*** ./lib/emotion/createEmotionCache.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createEmotionCache = () => {\n  return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n    key: 'css'\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEmotionCache);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW1vdGlvbi9jcmVhdGVFbW90aW9uQ2FjaGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsTUFBTTtFQUMvQixPQUFPRCxxREFBVyxDQUFDO0lBQUVFLEdBQUcsRUFBRTtFQUFQLENBQUQsQ0FBbEI7QUFDRCxDQUZEOztBQUlBLGlFQUFlRCxrQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWlubi8uL2xpYi9lbW90aW9uL2NyZWF0ZUVtb3Rpb25DYWNoZS50cz83MTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSdcblxuY29uc3QgY3JlYXRlRW1vdGlvbkNhY2hlID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVtb3Rpb25DYWNoZVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/emotion/createEmotionCache.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/roboto/300.css */ \"./node_modules/@fontsource/roboto/300.css\");\n/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/roboto/400.css */ \"./node_modules/@fontsource/roboto/400.css\");\n/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/roboto/500.css */ \"./node_modules/@fontsource/roboto/500.css\");\n/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fontsource/roboto/700.css */ \"./node_modules/@fontsource/roboto/700.css\");\n/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_emotion_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lib/emotion/createEmotionCache */ \"./lib/emotion/createEmotionCache.ts\");\n/* harmony import */ var _styles_theme_lightThemeOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/theme/lightThemeOptions */ \"./styles/theme/lightThemeOptions.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/michalmatynia/Desktop/NPM/2023/plain-nextJS/plainn/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,_lib_emotion_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\nconst lightTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.createTheme)(_styles_theme_lightThemeOptions__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\nconst MyApp = props => {\n  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment\n  const {\n    Component,\n    emotionCache = clientSideEmotionCache,\n    pageProps\n  } = props;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.CacheProvider, {\n    value: emotionCache,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Generated by create next app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined)]\n    }, \"head\", true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n      theme: lightTheme,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n/* ORIGINAL CODE */\n// // import '@/styles/globals.css'\n// import type { AppProps } from 'next/app'\n// import { ThemeProvider, createTheme } from '@mui/material/styles'\n// import { red } from '@mui/material/colors'\n// const theme = createTheme({\n//   palette: {\n//     primary: {\n//       main: red[500],\n//     },\n//   },\n// })\n// export default function App({ Component, pageProps }: AppProps) {\n//   return (\n//     <ThemeProvider theme={theme}>\n//       <Component {...pageProps} />\n//     </ThemeProvider>\n//   )\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBS0EsTUFBTVEsc0JBQXNCLEdBQUdILDJFQUFrQixFQUFqRDtBQUVBLE1BQU1JLFVBQVUsR0FBR0wsMERBQVcsQ0FBQ0UsdUVBQUQsQ0FBOUI7O0FBRUEsTUFBTUksS0FBMEMsR0FBSUMsS0FBRCxJQUFXO0VBQzVEO0VBQ0EsTUFBTTtJQUFFQyxTQUFGO0lBQWFDLFlBQVksR0FBR0wsc0JBQTVCO0lBQW9ETTtFQUFwRCxJQUFrRUgsS0FBeEU7RUFFQSxvQkFDRSwrREFBQyx5REFBRDtJQUFlLEtBQUssRUFBRUUsWUFBdEI7SUFBQSx3QkFDRSwrREFBQyxtREFBRDtNQUFBLHdCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBREYsZUFFRTtRQUFNLElBQUksRUFBQyxhQUFYO1FBQXlCLE9BQU8sRUFBQztNQUFqQztRQUFBO1FBQUE7UUFBQTtNQUFBLGFBRkYsZUFHRTtRQUFNLElBQUksRUFBQyxVQUFYO1FBQXNCLE9BQU8sRUFBQztNQUE5QjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBSEYsZUFJRTtRQUFNLEdBQUcsRUFBQyxNQUFWO1FBQWlCLElBQUksRUFBQztNQUF0QjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBSkY7SUFBQSxHQUFVLE1BQVY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLGVBT0UsK0RBQUMsd0RBQUQ7TUFBZSxLQUFLLEVBQUVKLFVBQXRCO01BQUEsd0JBQ0UsK0RBQUMsc0RBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQURGLGVBRUUsK0RBQUMsU0FBRCxvQkFBZUssU0FBZjtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBUEY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFjRCxDQWxCRDs7QUFvQkEsaUVBQWVKLEtBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWlubi8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciwgRW1vdGlvbkNhY2hlIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDc3NCYXNlbGluZSwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuXG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by8zMDAuY3NzJ1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vNDAwLmNzcydcbmltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvLzUwMC5jc3MnXG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by83MDAuY3NzJ1xuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICdAbGliL2Vtb3Rpb24vY3JlYXRlRW1vdGlvbkNhY2hlJ1xuXG5pbXBvcnQgbGlnaHRUaGVtZU9wdGlvbnMgZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lL2xpZ2h0VGhlbWVPcHRpb25zJ1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbnRlcmZhY2UgTXlBcHBQcm9wcyBleHRlbmRzIEFwcFByb3BzIHtcbiAgZW1vdGlvbkNhY2hlPzogRW1vdGlvbkNhY2hlXG59XG5cbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKVxuXG5jb25zdCBsaWdodFRoZW1lID0gY3JlYXRlVGhlbWUobGlnaHRUaGVtZU9wdGlvbnMpXG5cbmNvbnN0IE15QXBwOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxNeUFwcFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgIDxIZWFkIGtleT1cImhlYWRcIj5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2xpZ2h0VGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuLyogT1JJR0lOQUwgQ09ERSAqL1xuLy8gLy8gaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbi8vIGltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbi8vIGltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXG4vLyBpbXBvcnQgeyByZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycydcblxuLy8gY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4vLyAgIHBhbGV0dGU6IHtcbi8vICAgICBwcmltYXJ5OiB7XG4vLyAgICAgICBtYWluOiByZWRbNTAwXSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gfSlcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuLy8gICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuLy8gICAgIDwvVGhlbWVQcm92aWRlcj5cbi8vICAgKVxuLy8gfVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FjaGVQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsImNyZWF0ZVRoZW1lIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwibGlnaHRUaGVtZU9wdGlvbnMiLCJIZWFkIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsImxpZ2h0VGhlbWUiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwiZW1vdGlvbkNhY2hlIiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./styles/theme/lightThemeOptions.ts":
/*!*******************************************!*\
  !*** ./styles/theme/lightThemeOptions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst lightThemeOptions = {\n  components: {\n    // Name of the component\n    MuiAppBar: {\n      defaultProps: {\n        color: 'transparent'\n      },\n      styleOverrides: {}\n    },\n    MuiButtonBase: {\n      defaultProps: {\n        // The props to change the default for.\n        disableRipple: true // No more ripple, on the whole application 💣!\n\n      }\n    },\n    MuiButton: {\n      variants: [{\n        props: {\n          variant: 'dashed'\n        },\n        style: {\n          textTransform: 'none' // border: `2px dashed ${defaultTheme.palette.primary.main}`,\n          // color: 'defaultTheme.palette.primary.main',\n\n        }\n      }, {\n        props: {\n          variant: 'dashed',\n          color: 'secondary'\n        },\n        style: {// border: `2px dashed ${defaultTheme.palette.secondary.main}`,\n          // color: defaultTheme.palette.secondary.main,\n        }\n      }, {\n        props: {\n          variant: 'dashed',\n          size: 'large'\n        },\n        style: {\n          borderWidth: 4\n        }\n      }, {\n        props: {\n          variant: 'dashed',\n          color: 'secondary',\n          size: 'large'\n        },\n        style: {\n          fontSize: 18\n        }\n      }]\n    }\n  },\n  palette: {\n    mode: 'light',\n    action: {\n      hover: 'secondary'\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightThemeOptions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUvbGlnaHRUaGVtZU9wdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE1BQU1BLGlCQUErQixHQUFHO0VBQ3RDQyxVQUFVLEVBQUU7SUFDVjtJQUNBQyxTQUFTLEVBQUU7TUFDVEMsWUFBWSxFQUFFO1FBQ1pDLEtBQUssRUFBRTtNQURLLENBREw7TUFJVEMsY0FBYyxFQUFFO0lBSlAsQ0FGRDtJQVFWQyxhQUFhLEVBQUU7TUFDYkgsWUFBWSxFQUFFO1FBQ1o7UUFDQUksYUFBYSxFQUFFLElBRkgsQ0FFUzs7TUFGVDtJQURELENBUkw7SUFjVkMsU0FBUyxFQUFFO01BQ1RDLFFBQVEsRUFBRSxDQUNSO1FBQ0VDLEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUU7UUFBWCxDQURUO1FBRUVDLEtBQUssRUFBRTtVQUNMQyxhQUFhLEVBQUUsTUFEVixDQUVMO1VBQ0E7O1FBSEs7TUFGVCxDQURRLEVBU1I7UUFDRUgsS0FBSyxFQUFFO1VBQUVDLE9BQU8sRUFBRSxRQUFYO1VBQXFCUCxLQUFLLEVBQUU7UUFBNUIsQ0FEVDtRQUVFUSxLQUFLLEVBQUUsQ0FDTDtVQUNBO1FBRks7TUFGVCxDQVRRLEVBZ0JSO1FBQ0VGLEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUUsUUFBWDtVQUFxQkcsSUFBSSxFQUFFO1FBQTNCLENBRFQ7UUFFRUYsS0FBSyxFQUFFO1VBQ0xHLFdBQVcsRUFBRTtRQURSO01BRlQsQ0FoQlEsRUFzQlI7UUFDRUwsS0FBSyxFQUFFO1VBQUVDLE9BQU8sRUFBRSxRQUFYO1VBQXFCUCxLQUFLLEVBQUUsV0FBNUI7VUFBeUNVLElBQUksRUFBRTtRQUEvQyxDQURUO1FBRUVGLEtBQUssRUFBRTtVQUNMSSxRQUFRLEVBQUU7UUFETDtNQUZULENBdEJRO0lBREQ7RUFkRCxDQUQwQjtFQStDdENDLE9BQU8sRUFBRTtJQUNQQyxJQUFJLEVBQUUsT0FEQztJQUVQQyxNQUFNLEVBQUU7TUFDTkMsS0FBSyxFQUFFO0lBREQ7RUFGRDtBQS9DNkIsQ0FBeEM7QUF1REEsaUVBQWVwQixpQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWlubi8uL3N0eWxlcy90aGVtZS9saWdodFRoZW1lT3B0aW9ucy50cz9iMGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lT3B0aW9ucyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuZGVjbGFyZSBtb2R1bGUgJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJyB7XG4gIGludGVyZmFjZSBCdXR0b25Qcm9wc1ZhcmlhbnRPdmVycmlkZXMge1xuICAgIGRhc2hlZDogdHJ1ZVxuICB9XG59XG5cbmNvbnN0IGxpZ2h0VGhlbWVPcHRpb25zOiBUaGVtZU9wdGlvbnMgPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICAvLyBOYW1lIG9mIHRoZSBjb21wb25lbnRcbiAgICBNdWlBcHBCYXI6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIH0sXG4gICAgICBzdHlsZU92ZXJyaWRlczoge30sXG4gICAgfSxcbiAgICBNdWlCdXR0b25CYXNlOiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLy8gVGhlIHByb3BzIHRvIGNoYW5nZSB0aGUgZGVmYXVsdCBmb3IuXG4gICAgICAgIGRpc2FibGVSaXBwbGU6IHRydWUsIC8vIE5vIG1vcmUgcmlwcGxlLCBvbiB0aGUgd2hvbGUgYXBwbGljYXRpb24g8J+SoyFcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wczogeyB2YXJpYW50OiAnZGFzaGVkJyB9LFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAvLyBib3JkZXI6IGAycHggZGFzaGVkICR7ZGVmYXVsdFRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufWAsXG4gICAgICAgICAgICAvLyBjb2xvcjogJ2RlZmF1bHRUaGVtZS5wYWxldHRlLnByaW1hcnkubWFpbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BzOiB7IHZhcmlhbnQ6ICdkYXNoZWQnLCBjb2xvcjogJ3NlY29uZGFyeScgfSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgLy8gYm9yZGVyOiBgMnB4IGRhc2hlZCAke2RlZmF1bHRUaGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufWAsXG4gICAgICAgICAgICAvLyBjb2xvcjogZGVmYXVsdFRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BzOiB7IHZhcmlhbnQ6ICdkYXNoZWQnLCBzaXplOiAnbGFyZ2UnIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiA0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wczogeyB2YXJpYW50OiAnZGFzaGVkJywgY29sb3I6ICdzZWNvbmRhcnknLCBzaXplOiAnbGFyZ2UnIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2xpZ2h0JyxcbiAgICBhY3Rpb246IHtcbiAgICAgIGhvdmVyOiAnc2Vjb25kYXJ5JyxcbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBsaWdodFRoZW1lT3B0aW9uc1xuIl0sIm5hbWVzIjpbImxpZ2h0VGhlbWVPcHRpb25zIiwiY29tcG9uZW50cyIsIk11aUFwcEJhciIsImRlZmF1bHRQcm9wcyIsImNvbG9yIiwic3R5bGVPdmVycmlkZXMiLCJNdWlCdXR0b25CYXNlIiwiZGlzYWJsZVJpcHBsZSIsIk11aUJ1dHRvbiIsInZhcmlhbnRzIiwicHJvcHMiLCJ2YXJpYW50Iiwic3R5bGUiLCJ0ZXh0VHJhbnNmb3JtIiwic2l6ZSIsImJvcmRlcldpZHRoIiwiZm9udFNpemUiLCJwYWxldHRlIiwibW9kZSIsImFjdGlvbiIsImhvdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme/lightThemeOptions.ts\n");

/***/ }),

/***/ "./node_modules/@fontsource/roboto/300.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/300.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/400.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/400.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/500.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/500.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/roboto/700.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/roboto/700.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();