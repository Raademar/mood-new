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

eval("var submitNewUser = document.querySelector('#submit-register');\nvar userEmail = document.querySelector('#user-email');\nvar userPassword = document.querySelector('#user-password');\nvar userPassword2 = document.querySelector('#user-password2');\nvar registerResponseText = document.querySelector('.responseText'); // Function for passing user info to the register route.\n\nfunction postData() {\n  var userRegisterData = {\n    email: userEmail.value,\n    password: userPassword.value,\n    password2: userPassword2.value\n  };\n  return fetch('/register', {\n    method: 'POST',\n    credentials: 'include',\n    body: JSON.stringify(userRegisterData),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    redirect: 'follow'\n  }).then(function (response) {\n    return response.json();\n  }).then(function (json) {\n    if (!json.successmsg) {\n      console.log(json.msg);\n      registerResponseText.classList.add('responseTextError');\n      if (json.length > 0) for (var i = 0; i < json.length; i++) {\n        registerResponseText.textContent += json[i].msg;\n      } else {\n        registerResponseText.textContent += json.msg;\n      }\n    } else {\n      console.log(json.successmsg);\n      registerResponseText.classList.add('responseTextSuccess');\n      registerResponseText.textContent = json.successmsg;\n      setTimeout(function () {\n        window.location.href = '/login';\n      }, 1000);\n    }\n  }).catch(function (error) {\n    return console.error('This is the response from the server. Error:', error);\n  });\n}\n\nsubmitNewUser.addEventListener('click', function () {\n  return postData();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvcmVnaXN0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvamF2YXNjcmlwdHMvcmVnaXN0ZXIuanM/YjNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdWJtaXROZXdVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1yZWdpc3RlcicpXG5jb25zdCB1c2VyRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1lbWFpbCcpXG5jb25zdCB1c2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1wYXNzd29yZCcpXG5jb25zdCB1c2VyUGFzc3dvcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXItcGFzc3dvcmQyJylcbmNvbnN0IHJlZ2lzdGVyUmVzcG9uc2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3BvbnNlVGV4dCcpXG5cblxuXG4vLyBGdW5jdGlvbiBmb3IgcGFzc2luZyB1c2VyIGluZm8gdG8gdGhlIHJlZ2lzdGVyIHJvdXRlLlxuZnVuY3Rpb24gcG9zdERhdGEoKXtcbiAgbGV0IHVzZXJSZWdpc3RlckRhdGEgPSB7XG4gICAgZW1haWw6IHVzZXJFbWFpbC52YWx1ZSxcbiAgICBwYXNzd29yZDogdXNlclBhc3N3b3JkLnZhbHVlLFxuICAgIHBhc3N3b3JkMjogdXNlclBhc3N3b3JkMi52YWx1ZSxcbiAgfVxuICByZXR1cm4gZmV0Y2goJy9yZWdpc3RlcicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJSZWdpc3RlckRhdGEpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICB9KVxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICB9KVxuICAudGhlbihmdW5jdGlvbihqc29uKXtcbiAgICBpZighanNvbi5zdWNjZXNzbXNnKXtcbiAgICAgIGNvbnNvbGUubG9nKGpzb24ubXNnKVxuICAgICAgcmVnaXN0ZXJSZXNwb25zZVRleHQuY2xhc3NMaXN0LmFkZCgncmVzcG9uc2VUZXh0RXJyb3InKVxuICAgICAgaWYoanNvbi5sZW5ndGggPiAwKVxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVnaXN0ZXJSZXNwb25zZVRleHQudGV4dENvbnRlbnQgKz0ganNvbltpXS5tc2dcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZ2lzdGVyUmVzcG9uc2VUZXh0LnRleHRDb250ZW50ICs9IGpzb24ubXNnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGpzb24uc3VjY2Vzc21zZylcbiAgICAgIHJlZ2lzdGVyUmVzcG9uc2VUZXh0LmNsYXNzTGlzdC5hZGQoJ3Jlc3BvbnNlVGV4dFN1Y2Nlc3MnKVxuICAgICAgcmVnaXN0ZXJSZXNwb25zZVRleHQudGV4dENvbnRlbnQgPSBqc29uLnN1Y2Nlc3Ntc2dcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nXG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgfSkgXG4gIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdUaGlzIGlzIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuIEVycm9yOicsIGVycm9yKSlcbn1cblxuc3VibWl0TmV3VXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBvc3REYXRhKCkpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFSQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/javascripts/register.js\n");

/***/ })

/******/ });