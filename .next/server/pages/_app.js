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

/***/ "./src/contexts/Authentication/AuthContext.tsx":
/*!*****************************************************!*\
  !*** ./src/contexts/Authentication/AuthContext.tsx ***!
  \*****************************************************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth */ \"./src/services/auth.ts\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\nvar _jsxFileName = \"/Users/ptk/Desktop/Re-Comite/src/contexts/Authentication/AuthContext.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\nfunction AuthProvider({\n  children\n}) {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const isAuthenticated = !!user;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const {\n      '@gok/token': token\n    } = Object(nookies__WEBPACK_IMPORTED_MODULE_1__[\"parseCookies\"])();\n\n    if (token) {\n      Object(_services_auth__WEBPACK_IMPORTED_MODULE_3__[\"recoverUserInformation\"])().then(response => {\n        setUser(response.user);\n      });\n    }\n  }, []);\n\n  async function signIn({\n    email,\n    senha\n  }) {\n    try {\n      const {\n        token,\n        user\n      } = await Object(_services_auth__WEBPACK_IMPORTED_MODULE_3__[\"signInRequest\"])({\n        email,\n        senha\n      });\n      Object(nookies__WEBPACK_IMPORTED_MODULE_1__[\"setCookie\"])(undefined, '@gok/token', token, {\n        maxAge: 60 * 60 * 1 // 1 hour\n\n      });\n      _services_api__WEBPACK_IMPORTED_MODULE_4__[\"api\"].defaults.headers['Authorization'] = `Bearer ${token}`;\n      setUser(user);\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/dashboard');\n    } catch (error) {\n      console.error(error);\n    }\n  }\n\n  return __jsx(AuthContext.Provider, {\n    value: {\n      user,\n      isAuthenticated,\n      signIn\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQXV0aGVudGljYXRpb24vQXV0aENvbnRleHQudHN4P2Y3ZTIiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlRWZmZWN0IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJyZWNvdmVyVXNlckluZm9ybWF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwic2lnbkluIiwiZW1haWwiLCJzZW5oYSIsInNpZ25JblJlcXVlc3QiLCJzZXRDb29raWUiLCJ1bmRlZmluZWQiLCJtYXhBZ2UiLCJhcGkiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJTyxNQUFNQSxXQUFXLEdBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFqQztBQUVBLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFvQztBQUN6QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQU0sSUFBTixDQUFoQztBQUVBLFFBQU1DLGVBQWUsR0FBRyxDQUFDLENBQUNILElBQTFCO0FBRUFJLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU07QUFBRSxvQkFBY0M7QUFBaEIsUUFBMEJDLDREQUFZLEVBQTVDOztBQUVBLFFBQUlELEtBQUosRUFBVztBQUNURSxtRkFBc0IsR0FBR0MsSUFBekIsQ0FBOEJDLFFBQVEsSUFBSTtBQUN4Q1IsZUFBTyxDQUFDUSxRQUFRLENBQUNULElBQVYsQ0FBUDtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBVUEsaUJBQWVVLE1BQWYsQ0FBc0I7QUFBRUMsU0FBRjtBQUFTQztBQUFULEdBQXRCLEVBQW9EO0FBRWxELFFBQUk7QUFDRixZQUFNO0FBQUVQLGFBQUY7QUFBU0w7QUFBVCxVQUFrQixNQUFNYSxvRUFBYSxDQUFDO0FBQzFDRixhQUQwQztBQUUxQ0M7QUFGMEMsT0FBRCxDQUEzQztBQUtBRSwrREFBUyxDQUFDQyxTQUFELEVBQVksWUFBWixFQUEwQlYsS0FBMUIsRUFBaUM7QUFDeENXLGNBQU0sRUFBRSxLQUFLLEVBQUwsR0FBVSxDQURzQixDQUNuQjs7QUFEbUIsT0FBakMsQ0FBVDtBQUlBQyx1REFBRyxDQUFDQyxRQUFKLENBQWFDLE9BQWIsQ0FBcUIsZUFBckIsSUFBeUMsVUFBU2QsS0FBTSxFQUF4RDtBQUVBSixhQUFPLENBQUNELElBQUQsQ0FBUDtBQUVBb0Isd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFlBQVo7QUFDRCxLQWZELENBZUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLGFBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUV0QixVQUFGO0FBQVFHLHFCQUFSO0FBQXlCTztBQUF6QixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dYLFFBREgsQ0FERjtBQUtEIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0F1dGhlbnRpY2F0aW9uL0F1dGhDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNldENvb2tpZSwgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IHJlY292ZXJVc2VySW5mb3JtYXRpb24sIHNpZ25JblJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHsgQXV0aENvbnRleHRUeXBlLCBTaWduSW5EYXRhIH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0VHlwZSlcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8YW55PihudWxsKVxuXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgJ0Bnb2svdG9rZW4nOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKClcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgcmVjb3ZlclVzZXJJbmZvcm1hdGlvbigpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLnVzZXIpXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW10pXG5cbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKHsgZW1haWwsIHNlbmhhIH06IFNpZ25JbkRhdGEpIHtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHRva2VuLCB1c2VyIH0gPSBhd2FpdCBzaWduSW5SZXF1ZXN0KHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHNlbmhhXG4gICAgICB9KVxuICBcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICdAZ29rL3Rva2VuJywgdG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMSwgLy8gMSBob3VyXG4gICAgICB9KVxuICBcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgXG4gICAgICBzZXRVc2VyKHVzZXIpXG4gIFxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTsgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgc2lnbkluIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/Authentication/AuthContext.tsx\n");

/***/ }),

/***/ "./src/contexts/Notification/index.tsx":
/*!*********************************************!*\
  !*** ./src/contexts/Notification/index.tsx ***!
  \*********************************************/
/*! exports provided: NotificationContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotificationContext\", function() { return NotificationContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ptk/Desktop/Re-Comite/src/contexts/Notification/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst NotificationContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\n\nfunction NotificationProvider({\n  children\n}) {\n  const {\n    0: ShowMessage,\n    1: setShowMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: Message,\n    1: setMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const {\n    0: Icon,\n    1: setIcon\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  return __jsx(NotificationContext.Provider, {\n    value: {\n      ShowMessage,\n      setShowMessage,\n      Message,\n      setMessage,\n      Icon,\n      setIcon\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvTm90aWZpY2F0aW9uL2luZGV4LnRzeD9kNTgyIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTm90aWZpY2F0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsIlNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJ1c2VTdGF0ZSIsIk1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiSWNvbiIsInNldEljb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBR08sTUFBTUEsbUJBQW1CLEdBQUdDLDJEQUFhLENBQUUsRUFBRixDQUF6Qzs7QUFFUCxTQUFTQyxvQkFBVCxDQUE4QjtBQUFFQztBQUFGLENBQTlCLEVBQWlEO0FBRS9DLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxFQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkosc0RBQVEsRUFBaEM7QUFFQSxTQUNFLE1BQUMsbUJBQUQsQ0FBcUIsUUFBckI7QUFBOEIsU0FBSyxFQUFFO0FBQUVGLGlCQUFGO0FBQWVDLG9CQUFmO0FBQStCRSxhQUEvQjtBQUF3Q0MsZ0JBQXhDO0FBQW9EQyxVQUFwRDtBQUEwREM7QUFBMUQsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJUCxRQURKLENBREY7QUFLRDs7QUFFY0QsbUZBQWYiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvTm90aWZpY2F0aW9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSU5vdGlmaWNhdGlvblByb3BzIH0gZnJvbSAnLi9JTm90aWZpY2F0aW9uUHJvcHMnXG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgge30gYXMgSU5vdGlmaWNhdGlvblByb3BzIClcblxuZnVuY3Rpb24gTm90aWZpY2F0aW9uUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBhbnkpIHtcblxuICBjb25zdCBbU2hvd01lc3NhZ2UsIHNldFNob3dNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbTWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtJY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKClcblxuICByZXR1cm4gKFxuICAgIDxOb3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IFNob3dNZXNzYWdlLCBzZXRTaG93TWVzc2FnZSwgTWVzc2FnZSwgc2V0TWVzc2FnZSwgSWNvbiwgc2V0SWNvbiB9fT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvTm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25Qcm92aWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/Notification/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _contexts_Authentication_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/Authentication/AuthContext */ \"./src/contexts/Authentication/AuthContext.tsx\");\n/* harmony import */ var _contexts_Notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/Notification */ \"./src/contexts/Notification/index.tsx\");\nvar _jsxFileName = \"/Users/ptk/Desktop/Re-Comite/src/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(_contexts_Authentication_AuthContext__WEBPACK_IMPORTED_MODULE_4__[\"AuthProvider\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(_contexts_Notification__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  })), __jsx(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUF5QixHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFHOUQsU0FDRSxNQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFQyxxREFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixFQUVFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREEsQ0FERixDQURGO0FBVUQsQ0FiRDs7QUFlZUYsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aGVudGljYXRpb24vQXV0aENvbnRleHQnXG5pbXBvcnQgTm90aWZpY2F0aW9uUHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dHMvTm90aWZpY2F0aW9uJ1xuXG5jb25zdCBNeUFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPE5vdGlmaWNhdGlvblByb3ZpZGVyPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvTm90aWZpY2F0aW9uUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"api\", function() { return api; });\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ \"./src/services/axios.ts\");\n\nconst api = Object(_axios__WEBPACK_IMPORTED_MODULE_0__[\"getAPIClient\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXBpLnRzPzBlOWQiXSwibmFtZXMiOlsiYXBpIiwiZ2V0QVBJQ2xpZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLEdBQUcsR0FBR0MsMkRBQVksRUFBeEIiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QVBJQ2xpZW50IH0gZnJvbSBcIi4vYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGdldEFQSUNsaWVudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/auth.ts":
/*!******************************!*\
  !*** ./src/services/auth.ts ***!
  \******************************/
/*! exports provided: signInRequest, recoverUserInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signInRequest\", function() { return signInRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recoverUserInformation\", function() { return recoverUserInformation; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.ts\");\n\nasync function signInRequest(data) {\n  try {\n    const {\n      data: {\n        Usuario,\n        token\n      }\n    } = await _api__WEBPACK_IMPORTED_MODULE_0__[\"api\"].post('/login', data);\n    console.log(data);\n    return {\n      token: token,\n      user: Usuario\n    };\n  } catch (error) {\n    console.log(error);\n  }\n}\nasync function recoverUserInformation() {\n  // signInRequest()\n  return {\n    user: {\n      name: 'Diego Fernandes',\n      email: 'diego@rocketseat.com.br',\n      avatar_url: 'https://github.com/diego3g.png'\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXV0aC50cz8xZmIzIl0sIm5hbWVzIjpbInNpZ25JblJlcXVlc3QiLCJkYXRhIiwiVXN1YXJpbyIsInRva2VuIiwiYXBpIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZXJyb3IiLCJyZWNvdmVyVXNlckluZm9ybWF0aW9uIiwibmFtZSIsImVtYWlsIiwiYXZhdGFyX3VybCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9PLGVBQWVBLGFBQWYsQ0FBNkJDLElBQTdCLEVBQXNEO0FBQzNELE1BQUk7QUFFRixVQUFNO0FBQUNBLFVBQUksRUFBRTtBQUFFQyxlQUFGO0FBQVdDO0FBQVg7QUFBUCxRQUE2QixNQUFNQyx3Q0FBRyxDQUFDQyxJQUFKLENBQVMsUUFBVCxFQUFrQkosSUFBbEIsQ0FBekM7QUFFQUssV0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFFQSxXQUFPO0FBQ0xFLFdBQUssRUFBRUEsS0FERjtBQUVMSyxVQUFJLEVBQUVOO0FBRkQsS0FBUDtBQUtELEdBWEQsQ0FXRSxPQUFPTyxLQUFQLEVBQWM7QUFFZEgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFFRDtBQUVGO0FBRU0sZUFBZUMsc0JBQWYsR0FBd0M7QUFDN0M7QUFFQSxTQUFPO0FBQ0xGLFFBQUksRUFBRTtBQUNKRyxVQUFJLEVBQUUsaUJBREY7QUFFSkMsV0FBSyxFQUFFLHlCQUZIO0FBR0pDLGdCQUFVLEVBQUU7QUFIUjtBQURELEdBQVA7QUFPRCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9hdXRoLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4vYXBpXCJcblxudHlwZSBTaWduSW5SZXF1ZXN0RGF0YSA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgc2VuaGE6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25JblJlcXVlc3QoZGF0YTogU2lnbkluUmVxdWVzdERhdGEpIHtcbiAgdHJ5IHtcblxuICAgIGNvbnN0IHtkYXRhOiB7IFVzdWFyaW8sIHRva2VuIH19ID0gYXdhaXQgYXBpLnBvc3QoJy9sb2dpbicsZGF0YSlcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjogVXN1YXJpb1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuXG4gIH1cblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVjb3ZlclVzZXJJbmZvcm1hdGlvbigpIHtcbiAgLy8gc2lnbkluUmVxdWVzdCgpXG5cbiAgcmV0dXJuIHtcbiAgICB1c2VyOiB7XG4gICAgICBuYW1lOiAnRGllZ28gRmVybmFuZGVzJyxcbiAgICAgIGVtYWlsOiAnZGllZ29Acm9ja2V0c2VhdC5jb20uYnInLFxuICAgICAgYXZhdGFyX3VybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kaWVnbzNnLnBuZydcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/auth.ts\n");

/***/ }),

/***/ "./src/services/axios.ts":
/*!*******************************!*\
  !*** ./src/services/axios.ts ***!
  \*******************************/
/*! exports provided: getAPIClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAPIClient\", function() { return getAPIClient; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction getAPIClient(ctx) {\n  const {\n    '@gok/token': token\n  } = Object(nookies__WEBPACK_IMPORTED_MODULE_1__[\"parseCookies\"])(ctx);\n  const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    baseURL: 'https://comitedev.herokuapp.com'\n  });\n  api.interceptors.request.use(config => {\n    console.log(config);\n    return config;\n  });\n\n  if (token) {\n    api.defaults.headers['Authorization'] = `Bearer ${token}`;\n  }\n\n  return api;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXhpb3MudHM/ZTczOCJdLCJuYW1lcyI6WyJnZXRBUElDbGllbnQiLCJjdHgiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsImFwaSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdHMiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sU0FBU0EsWUFBVCxDQUFzQkMsR0FBdEIsRUFBaUM7QUFDdEMsUUFBTTtBQUFFLGtCQUFjQztBQUFoQixNQUEwQkMsNERBQVksQ0FBQ0YsR0FBRCxDQUE1QztBQUVBLFFBQU1HLEdBQUcsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3ZCQyxXQUFPLEVBQUU7QUFEYyxHQUFiLENBQVo7QUFJQUgsS0FBRyxDQUFDSSxZQUFKLENBQWlCQyxPQUFqQixDQUF5QkMsR0FBekIsQ0FBNkJDLE1BQU0sSUFBSTtBQUNyQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFFQSxXQUFPQSxNQUFQO0FBQ0QsR0FKRDs7QUFNQSxNQUFJVCxLQUFKLEVBQVc7QUFDVEUsT0FBRyxDQUFDVSxRQUFKLENBQWFDLE9BQWIsQ0FBcUIsZUFBckIsSUFBeUMsVUFBU2IsS0FBTSxFQUF4RDtBQUNEOztBQUVELFNBQU9FLEdBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9heGlvcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBUElDbGllbnQoY3R4PzogYW55KSB7XG4gIGNvbnN0IHsgJ0Bnb2svdG9rZW4nOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eClcblxuICBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICdodHRwczovL2NvbWl0ZWRldi5oZXJva3VhcHAuY29tJ1xuICB9KVxuXG4gIGFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoY29uZmlnID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb25maWcpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSlcblxuICBpZiAodG9rZW4pIHtcbiAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gIH1cblxuICByZXR1cm4gYXBpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/axios.ts\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n    text-decoration: none;\n  }\n\n  body {\n    background: ${props => props.theme.colors.background};\n    color: ${props => props.theme.colors.text};\n    font: 400 16px Poppins, sans-serif;\n  }\n\n  #dropdown-menu {\n    border: solid;\n  }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cz9iYTcxIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlQSxrSUFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxVQUFXO0FBQ3pELGFBQWFILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLElBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FsQkEiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgIGZvbnQ6IDQwMCAxNnB4IFBvcHBpbnMsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAjZHJvcGRvd24tbWVudSB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst theme = {\n  colors: {\n    background: '#F5F7F9',\n    foreground: '#FFF',\n    backgroundLight: '#F2F5F8',\n    backgroundLightMenu: '#FCFEFF',\n    text: '#040306',\n    textop: 'B9BBBC',\n    primary: '#8A32F5',\n    input: '#EFF1F5',\n    components: '#FEFEFE'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzk0Y2UiXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwiZm9yZWdyb3VuZCIsImJhY2tncm91bmRMaWdodCIsImJhY2tncm91bmRMaWdodE1lbnUiLCJ0ZXh0IiwidGV4dG9wIiwicHJpbWFyeSIsImlucHV0IiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUc7QUFDWkMsUUFBTSxFQUFFO0FBQ05DLGNBQVUsRUFBRSxTQUROO0FBRU5DLGNBQVUsRUFBRSxNQUZOO0FBR05DLG1CQUFlLEVBQUUsU0FIWDtBQUlOQyx1QkFBbUIsRUFBRSxTQUpmO0FBS05DLFFBQUksRUFBRSxTQUxBO0FBTU5DLFVBQU0sRUFBRSxRQU5GO0FBT05DLFdBQU8sRUFBRSxTQVBIO0FBUU5DLFNBQUssRUFBRSxTQVJEO0FBU05DLGNBQVUsRUFBRTtBQVROO0FBREksQ0FBZDtBQWNlVixvRUFBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgYmFja2dyb3VuZDogJyNGNUY3RjknLFxuICAgIGZvcmVncm91bmQ6ICcjRkZGJyxcbiAgICBiYWNrZ3JvdW5kTGlnaHQ6ICcjRjJGNUY4JyxcbiAgICBiYWNrZ3JvdW5kTGlnaHRNZW51OiAnI0ZDRkVGRicsXG4gICAgdGV4dDogJyMwNDAzMDYnLFxuICAgIHRleHRvcDogJ0I5QkJCQycsXG4gICAgcHJpbWFyeTogJyM4QTMyRjUnLFxuICAgIGlucHV0OiAnI0VGRjFGNScsXG4gICAgY29tcG9uZW50czogJyNGRUZFRkUnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nookies\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCI/ZDk3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub29raWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nookies\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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