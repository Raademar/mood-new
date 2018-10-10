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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/register.js":
/*!****************************************!*\
  !*** ./public/javascripts/register.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var submitNewUser = document.querySelector('#submit-register');\nvar userEmail = document.querySelector('#user-email');\nvar userPassword = document.querySelector('#user-password');\nvar userPassword2 = document.querySelector('#user-password2');\nvar registerResponseText = document.querySelector('.responseText'); // Function for passing user info to the register route.\n\nfunction postData() {\n  var userRegisterData = {\n    email: userEmail.value,\n    password: userPassword.value,\n    password2: userPassword2.value\n  };\n  return fetch('/register', {\n    method: 'POST',\n    credentials: 'include',\n    body: JSON.stringify(userRegisterData),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    redirect: 'follow'\n  }).then(function (res) {\n    return res.json();\n  }).then(function (response) {\n    if (response.message) {\n      registerResponseText.classList.toggle('.responseText');\n      registerResponseText.classList.add('responseTextSuccess');\n      registerResponseText.textContent = JSON.stringify(response.message);\n      setTimeout(function () {\n        window.location.replace(\"/index.html\");\n      }, 3000);\n    } else if (response[0].msg) {\n      registerResponseText.classList.toggle('.responseText');\n      registerResponseText.classList.add('responseTextError');\n      registerResponseText.textContent = JSON.stringify(response[0].msg);\n    }\n  }).catch(function (error) {\n    return console.error('This is the response from the server. Error:', error);\n  });\n}\n\nsubmitNewUser.addEventListener('click', function () {\n  return postData();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvcmVnaXN0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdHMvcmVnaXN0ZXIuanM/YjNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdWJtaXROZXdVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1yZWdpc3RlcicpXHJcbmNvbnN0IHVzZXJFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLWVtYWlsJylcclxuY29uc3QgdXNlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXItcGFzc3dvcmQnKVxyXG5jb25zdCB1c2VyUGFzc3dvcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXItcGFzc3dvcmQyJylcclxuY29uc3QgcmVnaXN0ZXJSZXNwb25zZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2VUZXh0JylcclxuXHJcblxyXG5cclxuLy8gRnVuY3Rpb24gZm9yIHBhc3NpbmcgdXNlciBpbmZvIHRvIHRoZSByZWdpc3RlciByb3V0ZS5cclxuZnVuY3Rpb24gcG9zdERhdGEoKXtcclxuICBsZXQgdXNlclJlZ2lzdGVyRGF0YSA9IHtcclxuICAgIGVtYWlsOiB1c2VyRW1haWwudmFsdWUsXHJcbiAgICBwYXNzd29yZDogdXNlclBhc3N3b3JkLnZhbHVlLFxyXG4gICAgcGFzc3dvcmQyOiB1c2VyUGFzc3dvcmQyLnZhbHVlLFxyXG4gIH1cclxuICByZXR1cm4gZmV0Y2goJy9yZWdpc3RlcicsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJSZWdpc3RlckRhdGEpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsXHJcbiAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7IFxyXG4gICAgaWYocmVzcG9uc2UubWVzc2FnZSl7XHJcbiAgICAgIHJlZ2lzdGVyUmVzcG9uc2VUZXh0LmNsYXNzTGlzdC50b2dnbGUoJy5yZXNwb25zZVRleHQnKVxyXG4gICAgICByZWdpc3RlclJlc3BvbnNlVGV4dC5jbGFzc0xpc3QuYWRkKCdyZXNwb25zZVRleHRTdWNjZXNzJylcclxuICAgICAgcmVnaXN0ZXJSZXNwb25zZVRleHQudGV4dENvbnRlbnQgPSAoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UubWVzc2FnZSkpXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9pbmRleC5odG1sXCIpXHJcbiAgICAgIH0sIDMwMDApXHJcbiAgICB9IGVsc2UgaWYocmVzcG9uc2VbMF0ubXNnKXtcclxuICAgICAgcmVnaXN0ZXJSZXNwb25zZVRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnLnJlc3BvbnNlVGV4dCcpXHJcbiAgICAgIHJlZ2lzdGVyUmVzcG9uc2VUZXh0LmNsYXNzTGlzdC5hZGQoJ3Jlc3BvbnNlVGV4dEVycm9yJylcclxuICAgICAgcmVnaXN0ZXJSZXNwb25zZVRleHQudGV4dENvbnRlbnQgPSAoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VbMF0ubXNnKSlcclxuICAgIH1cclxuICB9KVxyXG4gIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdUaGlzIGlzIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuIEVycm9yOicsIGVycm9yKSlcclxufVxyXG5cclxuc3VibWl0TmV3VXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvc3REYXRhKCkpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFUQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/register.js\n");

/***/ })

/******/ });