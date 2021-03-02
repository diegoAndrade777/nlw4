module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contexts/ToggleThemeContext.tsx":
/*!*********************************************!*\
  !*** ./src/contexts/ToggleThemeContext.tsx ***!
  \*********************************************/
/*! exports provided: ToggleThemeContext, ToggleThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToggleThemeContext\", function() { return ToggleThemeContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToggleThemeProvider\", function() { return ToggleThemeProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/cliente/Documentos/GitHub/nlw4-move.it/src/contexts/ToggleThemeContext.tsx\";\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\nconst ToggleThemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ToggleThemeProvider(_ref) {\n  let {\n    children\n  } = _ref,\n      rest = _objectWithoutProperties(_ref, [\"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ToggleThemeContext.Provider, {\n    value: {\n      themeToggler: rest.themeToggler,\n      theme: rest.theme\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvVG9nZ2xlVGhlbWVDb250ZXh0LnRzeD9iNTIwIl0sIm5hbWVzIjpbIlRvZ2dsZVRoZW1lQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUb2dnbGVUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXN0IiwidGhlbWVUb2dnbGVyIiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhTyxNQUFNQSxrQkFBa0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF4QztBQUVBLFNBQVNDLG1CQUFULE9BQW9EO0FBQUEsTUFBdkI7QUFBRUM7QUFBRixHQUF1QjtBQUFBLE1BQVJDLElBQVE7O0FBQ3pELHNCQUNFLHFFQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQTZCLFNBQUssRUFBRTtBQUNsQ0Msa0JBQVksRUFBRUQsSUFBSSxDQUFDQyxZQURlO0FBRWxDQyxXQUFLLEVBQUVGLElBQUksQ0FBQ0U7QUFGc0IsS0FBcEM7QUFBQSxjQUlHSDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1RvZ2dsZVRoZW1lQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBUb2dnbGVUaGVtZVByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICB0aGVtZVRvZ2dsZXI6ICgpID0+IHZvaWQ7XG4gIHRoZW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUb2dnbGVUaGVtZVByb3ZpZGVyRGF0YSB7XG4gIHRoZW1lOiBzdHJpbmc7XG4gIHRoZW1lVG9nZ2xlcjogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFRvZ2dsZVRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgVG9nZ2xlVGhlbWVQcm92aWRlckRhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9nZ2xlVGhlbWVQcm92aWRlcih7IGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VG9nZ2xlVGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICB0aGVtZVRvZ2dsZXI6IHJlc3QudGhlbWVUb2dnbGVyLFxuICAgICAgdGhlbWU6IHJlc3QudGhlbWVcbiAgICB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RvZ2dsZVRoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ToggleThemeContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _styles_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Theme */ \"./src/styles/Theme.ts\");\n/* harmony import */ var _contexts_ToggleThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ToggleThemeContext */ \"./src/contexts/ToggleThemeContext.tsx\");\n\nvar _jsxFileName = \"/home/cliente/Documentos/GitHub/nlw4-move.it/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: theme,\n    1: setTheme\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('light');\n\n  const themeToggler = () => {\n    theme === 'light' ? setTheme('dark') : setTheme('light');\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: theme === 'light' ? _styles_Theme__WEBPACK_IMPORTED_MODULE_4__[\"lightTheme\"] : _styles_Theme__WEBPACK_IMPORTED_MODULE_4__[\"darkTheme\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_ToggleThemeContext__WEBPACK_IMPORTED_MODULE_5__[\"ToggleThemeProvider\"], {\n      themeToggler: themeToggler,\n      theme: theme,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_3__[\"GlobalStyles\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsInRoZW1lVG9nZ2xlciIsImxpZ2h0VGhlbWUiLCJkYXJrVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsT0FBRCxDQUFsQzs7QUFFQSxRQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QkgsU0FBSyxLQUFLLE9BQVYsR0FBb0JDLFFBQVEsQ0FBQyxNQUFELENBQTVCLEdBQXVDQSxRQUFRLENBQUMsT0FBRCxDQUEvQztBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVELEtBQUssS0FBSyxPQUFWLEdBQW9CSSx3REFBcEIsR0FBaUNDLHVEQUF2RDtBQUFBLDJCQUNFLHFFQUFDLGdGQUFEO0FBQXFCLGtCQUFZLEVBQUVGLFlBQW5DO0FBQWlELFdBQUssRUFBRUgsS0FBeEQ7QUFBQSw4QkFDRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEdsb2JhbFN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnO1xuaW1wb3J0IHsgZGFya1RoZW1lLCBsaWdodFRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzL1RoZW1lJztcbmltcG9ydCB7IFRvZ2dsZVRoZW1lUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9Ub2dnbGVUaGVtZUNvbnRleHQnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKTtcblxuICBjb25zdCB0aGVtZVRvZ2dsZXIgPSAoKSA9PiB7XG4gICAgdGhlbWUgPT09ICdsaWdodCcgPyBzZXRUaGVtZSgnZGFyaycpIDogc2V0VGhlbWUoJ2xpZ2h0Jyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZSA9PT0gJ2xpZ2h0JyA/IGxpZ2h0VGhlbWUgOiBkYXJrVGhlbWV9ID5cbiAgICAgIDxUb2dnbGVUaGVtZVByb3ZpZGVyIHRoZW1lVG9nZ2xlcj17dGhlbWVUb2dnbGVyfSB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVG9nZ2xlVGhlbWVQcm92aWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/Theme.ts":
/*!*****************************!*\
  !*** ./src/styles/Theme.ts ***!
  \*****************************/
/*! exports provided: lightTheme, darkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightTheme\", function() { return lightTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkTheme\", function() { return darkTheme; });\nconst lightTheme = {\n  white: '#fff',\n  background: '#f2f3f5',\n  gray_line: '#DCDDE0',\n  text: '#666666',\n  text_highlight: '#B3B9FF',\n  title: '#2E384D',\n  red: '#E83F5B',\n  green: '#4CD62B',\n  blue: '#5965E0',\n  blue_dark: '#4953B8',\n  blue_twitter: '#2AA9E0'\n};\nconst darkTheme = {\n  white: '#000',\n  background: '#0d0c0a',\n  gray_line: '#23221f',\n  text: '#999999',\n  text_highlight: '#4c4600',\n  title: '#d1c7b2',\n  red: '#17c0a4',\n  green: '#d5561f',\n  blue: '#a69a1f',\n  blue_dark: '#b6ac47',\n  blue_twitter: '#d5561f'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL1RoZW1lLnRzP2UxMjIiXSwibmFtZXMiOlsibGlnaHRUaGVtZSIsIndoaXRlIiwiYmFja2dyb3VuZCIsImdyYXlfbGluZSIsInRleHQiLCJ0ZXh0X2hpZ2hsaWdodCIsInRpdGxlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmx1ZV9kYXJrIiwiYmx1ZV90d2l0dGVyIiwiZGFya1RoZW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxVQUFVLEdBQUc7QUFDdEJDLE9BQUssRUFBRSxNQURlO0FBRXRCQyxZQUFVLEVBQUUsU0FGVTtBQUd0QkMsV0FBUyxFQUFFLFNBSFc7QUFJdEJDLE1BQUksRUFBRSxTQUpnQjtBQUt0QkMsZ0JBQWMsRUFBRSxTQUxNO0FBTXRCQyxPQUFLLEVBQUUsU0FOZTtBQU90QkMsS0FBRyxFQUFFLFNBUGlCO0FBUXRCQyxPQUFLLEVBQUUsU0FSZTtBQVN0QkMsTUFBSSxFQUFFLFNBVGdCO0FBVXRCQyxXQUFTLEVBQUUsU0FWVztBQVd0QkMsY0FBWSxFQUFFO0FBWFEsQ0FBbkI7QUFjQSxNQUFNQyxTQUFTLEdBQUc7QUFDckJYLE9BQUssRUFBRSxNQURjO0FBRXJCQyxZQUFVLEVBQUUsU0FGUztBQUdyQkMsV0FBUyxFQUFFLFNBSFU7QUFJckJDLE1BQUksRUFBRSxTQUplO0FBS3JCQyxnQkFBYyxFQUFFLFNBTEs7QUFNckJDLE9BQUssRUFBRSxTQU5jO0FBT3JCQyxLQUFHLEVBQUUsU0FQZ0I7QUFRckJDLE9BQUssRUFBRSxTQVJjO0FBU3JCQyxNQUFJLEVBQUUsU0FUZTtBQVVyQkMsV0FBUyxFQUFFLFNBVlU7QUFXckJDLGNBQVksRUFBRTtBQVhPLENBQWxCIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9UaGVtZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsaWdodFRoZW1lID0ge1xuICAgIHdoaXRlOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyNmMmYzZjUnLFxuICAgIGdyYXlfbGluZTogJyNEQ0RERTAnLFxuICAgIHRleHQ6ICcjNjY2NjY2JyxcbiAgICB0ZXh0X2hpZ2hsaWdodDogJyNCM0I5RkYnLFxuICAgIHRpdGxlOiAnIzJFMzg0RCcsXG4gICAgcmVkOiAnI0U4M0Y1QicsXG4gICAgZ3JlZW46ICcjNENENjJCJyxcbiAgICBibHVlOiAnIzU5NjVFMCcsXG4gICAgYmx1ZV9kYXJrOiAnIzQ5NTNCOCcsXG4gICAgYmx1ZV90d2l0dGVyOiAnIzJBQTlFMCdcbn1cblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IHtcbiAgICB3aGl0ZTogJyMwMDAnLFxuICAgIGJhY2tncm91bmQ6ICcjMGQwYzBhJyxcbiAgICBncmF5X2xpbmU6ICcjMjMyMjFmJyxcbiAgICB0ZXh0OiAnIzk5OTk5OScsXG4gICAgdGV4dF9oaWdobGlnaHQ6ICcjNGM0NjAwJyxcbiAgICB0aXRsZTogJyNkMWM3YjInLFxuICAgIHJlZDogJyMxN2MwYTQnLFxuICAgIGdyZWVuOiAnI2Q1NTYxZicsXG4gICAgYmx1ZTogJyNhNjlhMWYnLFxuICAgIGJsdWVfZGFyazogJyNiNmFjNDcnLFxuICAgIGJsdWVfdHdpdHRlcjogJyNkNTU2MWYnXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/Theme.ts\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return GlobalStyles; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  }\n\n  :root {\n    --white: ${({\n  theme\n}) => theme.white};\n    --background: ${({\n  theme\n}) => theme.background};\n    --gray-line: ${({\n  theme\n}) => theme.gray_line};\n    --text: ${({\n  theme\n}) => theme.text};\n    --text-highlight: ${({\n  theme\n}) => theme.text};\n    --title: ${({\n  theme\n}) => theme.title};\n    --red: ${({\n  theme\n}) => theme.red};\n    --green: ${({\n  theme\n}) => theme.green};\n    --blue: ${({\n  theme\n}) => theme.blue};\n    --blue-dark: ${({\n  theme\n}) => theme.blue_dark};\n    --blue-twitter: ${({\n  theme\n}) => theme.blue_twitter};\n  }\n\n  @media(max-width: 1080px) {\n    html {\n        font-size: 93.75%;\n    }\n  }\n\n  @media(max-width: 720px) {\n    html {\n        font-size: 87.5%;\n    }\n  }\n\n  body {\n    background: var(--background);\n    color: var(--text);\n\n    transition: all 0.4s;\n  }\n\n  body, input, button, textarea {\n    font: 400 1rem 'Inter', sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cz9iYTcxIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJ3aGl0ZSIsImJhY2tncm91bmQiLCJncmF5X2xpbmUiLCJ0ZXh0IiwidGl0bGUiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJibHVlX2RhcmsiLCJibHVlX3R3aXR0ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUdDLG1FQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxLQUFNO0FBQzFDLG9CQUFvQixDQUFDO0FBQUVEO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNFLFVBQVc7QUFDcEQsbUJBQW1CLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0csU0FBVTtBQUNsRCxjQUFjLENBQUM7QUFBRUg7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0ksSUFBSztBQUN4Qyx3QkFBd0IsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSSxJQUFLO0FBQ2xELGVBQWUsQ0FBQztBQUFFSjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDSyxLQUFNO0FBQzFDLGFBQWEsQ0FBQztBQUFFTDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDTSxHQUFJO0FBQ3RDLGVBQWUsQ0FBQztBQUFFTjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDTyxLQUFNO0FBQzFDLGNBQWMsQ0FBQztBQUFFUDtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDUSxJQUFLO0FBQ3hDLG1CQUFtQixDQUFDO0FBQUVSO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNTLFNBQVU7QUFDbEQsc0JBQXNCLENBQUM7QUFBRVQ7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ1UsWUFBYTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXBETyIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgOnJvb3Qge1xuICAgIC0td2hpdGU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgIC0tYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgICAtLWdyYXktbGluZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmF5X2xpbmV9O1xuICAgIC0tdGV4dDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAtLXRleHQtaGlnaGxpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIC0tdGl0bGU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGl0bGV9O1xuICAgIC0tcmVkOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnJlZH07XG4gICAgLS1ncmVlbjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ncmVlbn07XG4gICAgLS1ibHVlOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJsdWV9O1xuICAgIC0tYmx1ZS1kYXJrOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJsdWVfZGFya307XG4gICAgLS1ibHVlLXR3aXR0ZXI6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmx1ZV90d2l0dGVyfTtcbiAgfVxuXG4gIEBtZWRpYShtYXgtd2lkdGg6IDEwODBweCkge1xuICAgIGh0bWwge1xuICAgICAgICBmb250LXNpemU6IDkzLjc1JTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEobWF4LXdpZHRoOiA3MjBweCkge1xuICAgIGh0bWwge1xuICAgICAgICBmb250LXNpemU6IDg3LjUlO1xuICAgIH1cbiAgfVxuXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB9XG5cbiAgYm9keSwgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEge1xuICAgIGZvbnQ6IDQwMCAxcmVtICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });