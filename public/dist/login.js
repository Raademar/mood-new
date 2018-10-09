/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/login.js":
/*!*************************************!*\
  !*** ./public/javascripts/login.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var submitNewUser = document.querySelector('#submit-register');\nvar userEmail = document.querySelector('#user-email');\nvar userPassword = document.querySelector('#user-password'); // Function for passing user info to the login route.\n\nfunction postUserData() {\n  var userLoginData = {\n    email: userEmail.value,\n    password: userPassword.value\n  };\n  return fetch('/login', {\n    method: 'POST',\n    credentials: 'include',\n    body: JSON.stringify(userLoginData),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    redirect: 'follow'\n  });\n} // redirect depending on status from server.\n\n\nsubmitNewUser.addEventListener('click', function () {\n  return postUserData();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbG9naW4uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdHMvbG9naW4uanM/ZTIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdWJtaXROZXdVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1yZWdpc3RlcicpXG5jb25zdCB1c2VyRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1lbWFpbCcpXG5jb25zdCB1c2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1wYXNzd29yZCcpXG5cbi8vIEZ1bmN0aW9uIGZvciBwYXNzaW5nIHVzZXIgaW5mbyB0byB0aGUgbG9naW4gcm91dGUuXG5mdW5jdGlvbiBwb3N0VXNlckRhdGEoKXtcbiAgbGV0IHVzZXJMb2dpbkRhdGEgPSB7XG4gICAgZW1haWw6IHVzZXJFbWFpbC52YWx1ZSxcbiAgICBwYXNzd29yZDogdXNlclBhc3N3b3JkLnZhbHVlLFxuICB9XG4gIHJldHVybiBmZXRjaCgnL2xvZ2luJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckxvZ2luRGF0YSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBcbiAgICB9LFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgfSlcbn1cbi8vIHJlZGlyZWN0IGRlcGVuZGluZyBvbiBzdGF0dXMgZnJvbSBzZXJ2ZXIuXG5cbnN1Ym1pdE5ld1VzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwb3N0VXNlckRhdGEoKSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/login.js\n");

/***/ })

/******/ });