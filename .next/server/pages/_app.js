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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst lightThemeOptions = {\n  components: {\n    // MuiCssBaseline: {\n    //   styleOverrides: (themeParam) => `\n    //   body {\n    //     color: ${themeParam.palette.success.main};\n    //   }\n    // `,\n    // },\n    // Name of the component\n    MuiAppBar: {\n      defaultProps: {\n        color: 'transparent'\n      },\n      styleOverrides: {}\n    },\n    MuiButtonBase: {\n      defaultProps: {\n        // The props to change the default for.\n        disableRipple: true // No more ripple, on the whole application 💣!\n\n      }\n    },\n    MuiButton: {\n      variants: [{\n        props: {\n          variant: 'dashed'\n        },\n        style: {\n          textTransform: 'none' // border: `2px dashed ${defaultTheme.palette.primary.main}`,\n          // color: 'defaultTheme.palette.primary.main',\n\n        }\n      }, {\n        props: {\n          variant: 'dashed',\n          color: 'secondary'\n        },\n        style: {// border: `2px dashed ${defaultTheme.palette.secondary.main}`,\n          // color: defaultTheme.palette.secondary.main,\n        }\n      }, {\n        props: {\n          variant: 'dashed',\n          size: 'large'\n        },\n        style: {\n          borderWidth: 4\n        }\n      }, {\n        props: {\n          variant: 'dashed',\n          color: 'secondary',\n          size: 'large'\n        },\n        style: {\n          fontSize: 18\n        }\n      }]\n    }\n  },\n  palette: {\n    mode: 'light',\n    // action: {\n    //   hover: 'secondary', // can delete this\n    // },\n    // success: {\n    //   main: '#FF', //\n    // },\n    background: {\n      default: '#e5e5e5'\n    }\n  },\n  breakpoints: {\n    values: {\n      xs: 0,\n      sm: 600,\n      md: 900,\n      lg: 1200,\n      xl: 1536,\n      mobile: 0,\n      tablet: 640,\n      laptop: 1024,\n      desktop: 1200\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightThemeOptions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUvbGlnaHRUaGVtZU9wdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQW1CQSxNQUFNQSxpQkFBK0IsR0FBRztFQUN0Q0MsVUFBVSxFQUFFO0lBQ1Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQyxTQUFTLEVBQUU7TUFDVEMsWUFBWSxFQUFFO1FBQ1pDLEtBQUssRUFBRTtNQURLLENBREw7TUFJVEMsY0FBYyxFQUFFO0lBSlAsQ0FURDtJQWVWQyxhQUFhLEVBQUU7TUFDYkgsWUFBWSxFQUFFO1FBQ1o7UUFDQUksYUFBYSxFQUFFLElBRkgsQ0FFUzs7TUFGVDtJQURELENBZkw7SUFxQlZDLFNBQVMsRUFBRTtNQUNUQyxRQUFRLEVBQUUsQ0FDUjtRQUNFQyxLQUFLLEVBQUU7VUFBRUMsT0FBTyxFQUFFO1FBQVgsQ0FEVDtRQUVFQyxLQUFLLEVBQUU7VUFDTEMsYUFBYSxFQUFFLE1BRFYsQ0FFTDtVQUNBOztRQUhLO01BRlQsQ0FEUSxFQVNSO1FBQ0VILEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUUsUUFBWDtVQUFxQlAsS0FBSyxFQUFFO1FBQTVCLENBRFQ7UUFFRVEsS0FBSyxFQUFFLENBQ0w7VUFDQTtRQUZLO01BRlQsQ0FUUSxFQWdCUjtRQUNFRixLQUFLLEVBQUU7VUFBRUMsT0FBTyxFQUFFLFFBQVg7VUFBcUJHLElBQUksRUFBRTtRQUEzQixDQURUO1FBRUVGLEtBQUssRUFBRTtVQUNMRyxXQUFXLEVBQUU7UUFEUjtNQUZULENBaEJRLEVBc0JSO1FBQ0VMLEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUUsUUFBWDtVQUFxQlAsS0FBSyxFQUFFLFdBQTVCO1VBQXlDVSxJQUFJLEVBQUU7UUFBL0MsQ0FEVDtRQUVFRixLQUFLLEVBQUU7VUFDTEksUUFBUSxFQUFFO1FBREw7TUFGVCxDQXRCUTtJQUREO0VBckJELENBRDBCO0VBc0R0Q0MsT0FBTyxFQUFFO0lBQ1BDLElBQUksRUFBRSxPQURDO0lBRVA7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0FDLFVBQVUsRUFBRTtNQUNWQyxPQUFPLEVBQUU7SUFEQztFQVJMLENBdEQ2QjtFQWtFdENDLFdBQVcsRUFBRTtJQUNYQyxNQUFNLEVBQUU7TUFDTkMsRUFBRSxFQUFFLENBREU7TUFFTkMsRUFBRSxFQUFFLEdBRkU7TUFHTkMsRUFBRSxFQUFFLEdBSEU7TUFJTkMsRUFBRSxFQUFFLElBSkU7TUFLTkMsRUFBRSxFQUFFLElBTEU7TUFNTkMsTUFBTSxFQUFFLENBTkY7TUFPTkMsTUFBTSxFQUFFLEdBUEY7TUFRTkMsTUFBTSxFQUFFLElBUkY7TUFTTkMsT0FBTyxFQUFFO0lBVEg7RUFERztBQWxFeUIsQ0FBeEM7QUFpRkEsaUVBQWUvQixpQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWlubi8uL3N0eWxlcy90aGVtZS9saWdodFRoZW1lT3B0aW9ucy50cz9iMGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lT3B0aW9ucyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuZGVjbGFyZSBtb2R1bGUgJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJyB7XG4gIGludGVyZmFjZSBCdXR0b25Qcm9wc1ZhcmlhbnRPdmVycmlkZXMge1xuICAgIGRhc2hlZDogdHJ1ZVxuICB9XG59XG5kZWNsYXJlIG1vZHVsZSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnIHtcbiAgaW50ZXJmYWNlIEJyZWFrcG9pbnRPdmVycmlkZXMge1xuICAgIHhzOiB0cnVlIC8vIHJlbW92ZXMgdGhlIGB4c2AgYnJlYWtwb2ludFxuICAgIHNtOiB0cnVlXG4gICAgbWQ6IHRydWVcbiAgICBsZzogdHJ1ZVxuICAgIHhsOiB0cnVlXG4gICAgbW9iaWxlOiB0cnVlIC8vIGFkZHMgdGhlIGBtb2JpbGVgIGJyZWFrcG9pbnRcbiAgICB0YWJsZXQ6IHRydWVcbiAgICBsYXB0b3A6IHRydWVcbiAgICBkZXNrdG9wOiB0cnVlXG4gIH1cbn1cbmNvbnN0IGxpZ2h0VGhlbWVPcHRpb25zOiBUaGVtZU9wdGlvbnMgPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICAvLyBNdWlDc3NCYXNlbGluZToge1xuICAgIC8vICAgc3R5bGVPdmVycmlkZXM6ICh0aGVtZVBhcmFtKSA9PiBgXG4gICAgLy8gICBib2R5IHtcbiAgICAvLyAgICAgY29sb3I6ICR7dGhlbWVQYXJhbS5wYWxldHRlLnN1Y2Nlc3MubWFpbn07XG4gICAgLy8gICB9XG4gICAgLy8gYCxcbiAgICAvLyB9LFxuICAgIC8vIE5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICAgIE11aUFwcEJhcjoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgfSxcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7fSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbkJhc2U6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAvLyBUaGUgcHJvcHMgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IGZvci5cbiAgICAgICAgZGlzYWJsZVJpcHBsZTogdHJ1ZSwgLy8gTm8gbW9yZSByaXBwbGUsIG9uIHRoZSB3aG9sZSBhcHBsaWNhdGlvbiDwn5KjIVxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aUJ1dHRvbjoge1xuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3BzOiB7IHZhcmlhbnQ6ICdkYXNoZWQnIH0sXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgIC8vIGJvcmRlcjogYDJweCBkYXNoZWQgJHtkZWZhdWx0VGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59YCxcbiAgICAgICAgICAgIC8vIGNvbG9yOiAnZGVmYXVsdFRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvcHM6IHsgdmFyaWFudDogJ2Rhc2hlZCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9LFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAvLyBib3JkZXI6IGAycHggZGFzaGVkICR7ZGVmYXVsdFRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59YCxcbiAgICAgICAgICAgIC8vIGNvbG9yOiBkZWZhdWx0VGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvcHM6IHsgdmFyaWFudDogJ2Rhc2hlZCcsIHNpemU6ICdsYXJnZScgfSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BzOiB7IHZhcmlhbnQ6ICdkYXNoZWQnLCBjb2xvcjogJ3NlY29uZGFyeScsIHNpemU6ICdsYXJnZScgfSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiAnbGlnaHQnLFxuICAgIC8vIGFjdGlvbjoge1xuICAgIC8vICAgaG92ZXI6ICdzZWNvbmRhcnknLCAvLyBjYW4gZGVsZXRlIHRoaXNcbiAgICAvLyB9LFxuICAgIC8vIHN1Y2Nlc3M6IHtcbiAgICAvLyAgIG1haW46ICcjRkYnLCAvL1xuICAgIC8vIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNlNWU1ZTUnLFxuICAgIH0sXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgdmFsdWVzOiB7XG4gICAgICB4czogMCxcbiAgICAgIHNtOiA2MDAsXG4gICAgICBtZDogOTAwLFxuICAgICAgbGc6IDEyMDAsXG4gICAgICB4bDogMTUzNixcbiAgICAgIG1vYmlsZTogMCxcbiAgICAgIHRhYmxldDogNjQwLFxuICAgICAgbGFwdG9wOiAxMDI0LFxuICAgICAgZGVza3RvcDogMTIwMCxcbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBsaWdodFRoZW1lT3B0aW9uc1xuIl0sIm5hbWVzIjpbImxpZ2h0VGhlbWVPcHRpb25zIiwiY29tcG9uZW50cyIsIk11aUFwcEJhciIsImRlZmF1bHRQcm9wcyIsImNvbG9yIiwic3R5bGVPdmVycmlkZXMiLCJNdWlCdXR0b25CYXNlIiwiZGlzYWJsZVJpcHBsZSIsIk11aUJ1dHRvbiIsInZhcmlhbnRzIiwicHJvcHMiLCJ2YXJpYW50Iiwic3R5bGUiLCJ0ZXh0VHJhbnNmb3JtIiwic2l6ZSIsImJvcmRlcldpZHRoIiwiZm9udFNpemUiLCJwYWxldHRlIiwibW9kZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYnJlYWtwb2ludHMiLCJ2YWx1ZXMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwibW9iaWxlIiwidGFibGV0IiwibGFwdG9wIiwiZGVza3RvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/theme/lightThemeOptions.ts\n");

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