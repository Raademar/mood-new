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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/main.js":
/*!************************************!*\
  !*** ./public/javascripts/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Query Selectors\nvar smileys = _toConsumableArray(document.querySelectorAll('.smiley'));\n\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar userMoodContainer = document.querySelector('#user-mood-container');\nvar moodNoteTextarea = document.querySelector('#mood-note');\nvar submitFeeligns = document.querySelector('#submit-feelings');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar loginButton = document.querySelector('#login-btn'); // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n  }, 200);\n} // Get the median mood value from the userMood array.\n\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick); // Typewriter functionality\n\nvar TypeWriter = function TypeWriter(txtElement, words) {\n  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n  this.txtElement = txtElement;\n  this.words = words;\n  this.txt = '';\n  this.wordIndex = 0;\n  this.wait = parseInt(wait, 10);\n  this.type();\n  this.isDeleting = false;\n}; // Type method\n\n\nTypeWriter.prototype.type = function () {\n  var _this = this;\n\n  // Current index of word\n  var current = this.wordIndex % this.words.length; // Get full text of current word\n\n  var fullTxt = this.words[current]; // Get the cursor\n\n  var cursor = window.getComputedStyle(document.getElementById('main-header'), ':after'); // Check if deleting\n\n  if (this.isDeleting) {\n    // Delete a character\n    this.txt = fullTxt.substring(0, this.txt.length - 1); // Hide the cursor when deleting\n\n    cursor = '';\n  } else {\n    // Add a character\n    this.txt = fullTxt.substring(0, this.txt.length + 1); // Hide the cursor when typing\n\n    cursor = '';\n  } // Insert txt into element\n\n\n  this.txtElement.innerHTML = \"<span class=\\\"txt\\\">\".concat(this.txt, \"</span>\"); // Initial Type speed\n\n  var typeSpeed = 300;\n\n  if (this.isDeleting) {\n    typeSpeed /= 2;\n  } // Check if word is complete\n\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    // Make a pause at the end of each word\n    typeSpeed = this.wait; // Show the cursor when not typing\n    // Set delete to true\n\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false; // Move on to the next word\n\n    this.wordIndex++; // Pause before new word starts typing\n\n    typeSpeed = 500;\n  }\n\n  setTimeout(function () {\n    return _this.type();\n  }, typeSpeed);\n}; // Init on DOM Load\n\n\ndocument.addEventListener('DOMContentLoaded', init); //Init app\n\nfunction init() {\n  var txtElement = document.querySelector('.main-header');\n  var words = JSON.parse(txtElement.getAttribute('data-words'));\n  var wait = txtElement.getAttribute('data-wait'); // Init Typewriter\n\n  new TypeWriter(txtElement, words, wait);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXHJcbmNvbnN0IHNtaWxleXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtaWxleScpXVxyXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJylcclxuY29uc3QgZmVlbGluZ3NUZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LWFyZWEtZmVlbGluZ3MnKVxyXG5jb25zdCB1c2VyTW9vZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLW1vb2QtY29udGFpbmVyJylcclxuY29uc3QgbW9vZE5vdGVUZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb29kLW5vdGUnKVxyXG5jb25zdCBzdWJtaXRGZWVsaWducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtZmVlbGluZ3MnKVxyXG5jb25zdCBtb29kTGVhZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9vZC1sZWFkJylcclxuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4tYnRuJylcclxuXHJcbi8vIEN1cnJlbnQgZGF0ZSBnZW5lcmF0b3IuXHJcbmNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApLnJlcGxhY2UoLy0vZywnLycpO1xyXG5cclxuLy8gRnVuY3Rpb24gZm9yIHRvZ2dsaW5nIHRoZSBtb2RhbCA+Pj4gTU9WRSBNT0RBTCBIRVJFIDw8PFxyXG5mdW5jdGlvbiBlbnRlckZlZWxpbmdzKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBzbWlsZXlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpLCBpdGVtLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkxlZnQnKVxyXG4gICAgfSk7XHJcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgZmVlbGluZ3NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdmYWRlSW5MZWZ0JylcclxuICB9LCAyMDApXHJcbn1cclxuXHJcbi8vIEdldCB0aGUgbWVkaWFuIG1vb2QgdmFsdWUgZnJvbSB0aGUgdXNlck1vb2QgYXJyYXkuXHJcbmNvbnN0IHVzZXJNZWRpYW5Nb29kID0gYXJyID0+IGFyci5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApIC8gdXNlck1vb2QubGVuZ3RoXHJcblxyXG5zaGFyZUZlZWxpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW50ZXJGZWVsaW5ncyk7XHJcblxyXG4vLyBRdWVyeSBTZWxlY3RvcnMgZm9yIHRoZSBtb2RhbHMuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJylcclxuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyJylcclxuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJylcclxuY29uc3Qgc3VjY2Vzc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MtbW9kYWwnKVxyXG5cclxuLy8gRnVuY3Rpb25zIGZvciB0b2dnbGluZyB0aGUgbW9kYWxzLlxyXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpe1xyXG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTdWNjZXNzTWVzc2FnZSgpe1xyXG4gIHN1Y2Nlc3NNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vZGFsLXN1Y2Nlc3MnKVxyXG59XHJcblxyXG5mdW5jdGlvbiB3aW5kb3dPbkNsaWNrKGV2ZW50KSB7XHJcbiAgaWYoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xyXG4gICAgdG9nZ2xlTW9kYWwoKTtcclxuICB9XHJcbn1cclxuXHJcbnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbClcclxuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbClcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljaylcclxuXHJcblxyXG4vLyBUeXBld3JpdGVyIGZ1bmN0aW9uYWxpdHlcclxuY29uc3QgVHlwZVdyaXRlciA9IGZ1bmN0aW9uKHR4dEVsZW1lbnQsIHdvcmRzLCB3YWl0ID0gMzAwMCkge1xyXG4gIHRoaXMudHh0RWxlbWVudCA9IHR4dEVsZW1lbnRcclxuICB0aGlzLndvcmRzID0gd29yZHNcclxuICB0aGlzLnR4dCA9ICcnXHJcbiAgdGhpcy53b3JkSW5kZXggPSAwXHJcbiAgdGhpcy53YWl0ID0gcGFyc2VJbnQod2FpdCwgMTApXHJcbiAgdGhpcy50eXBlKClcclxuICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZVxyXG59XHJcblxyXG4vLyBUeXBlIG1ldGhvZFxyXG5UeXBlV3JpdGVyLnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24oKSB7XHJcbiAgLy8gQ3VycmVudCBpbmRleCBvZiB3b3JkXHJcbiAgY29uc3QgY3VycmVudCA9IHRoaXMud29yZEluZGV4ICUgdGhpcy53b3Jkcy5sZW5ndGhcclxuICAvLyBHZXQgZnVsbCB0ZXh0IG9mIGN1cnJlbnQgd29yZFxyXG4gIGNvbnN0IGZ1bGxUeHQgPSB0aGlzLndvcmRzW2N1cnJlbnRdXHJcbiAgLy8gR2V0IHRoZSBjdXJzb3JcclxuICBsZXQgY3Vyc29yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1oZWFkZXInKSwgJzphZnRlcicpXHJcbiAgXHJcblxyXG4gIC8vIENoZWNrIGlmIGRlbGV0aW5nXHJcbiAgaWYodGhpcy5pc0RlbGV0aW5nKSB7XHJcbiAgICAvLyBEZWxldGUgYSBjaGFyYWN0ZXJcclxuICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoIC0gMSlcclxuICAgIC8vIEhpZGUgdGhlIGN1cnNvciB3aGVuIGRlbGV0aW5nXHJcbiAgICBjdXJzb3IgPSAnJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBBZGQgYSBjaGFyYWN0ZXJcclxuICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSlcclxuICAgIC8vIEhpZGUgdGhlIGN1cnNvciB3aGVuIHR5cGluZ1xyXG4gICAgY3Vyc29yID0gJydcclxuICB9XHJcblxyXG4gIC8vIEluc2VydCB0eHQgaW50byBlbGVtZW50XHJcbiAgdGhpcy50eHRFbGVtZW50LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInR4dFwiPiR7dGhpcy50eHR9PC9zcGFuPmBcclxuICBcclxuXHJcbiAgLy8gSW5pdGlhbCBUeXBlIHNwZWVkXHJcbiAgbGV0IHR5cGVTcGVlZCA9IDMwMFxyXG5cclxuICBpZih0aGlzLmlzRGVsZXRpbmcpIHtcclxuICAgIHR5cGVTcGVlZCAvPSAyXHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiB3b3JkIGlzIGNvbXBsZXRlXHJcbiAgaWYoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xyXG4gICAgLy8gTWFrZSBhIHBhdXNlIGF0IHRoZSBlbmQgb2YgZWFjaCB3b3JkXHJcbiAgICB0eXBlU3BlZWQgPSB0aGlzLndhaXRcclxuICAgIC8vIFNob3cgdGhlIGN1cnNvciB3aGVuIG5vdCB0eXBpbmdcclxuXHJcbiAgICAvLyBTZXQgZGVsZXRlIHRvIHRydWVcclxuICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWVcclxuICB9IGVsc2UgaWYodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSAnJykge1xyXG4gICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2VcclxuICAgIC8vIE1vdmUgb24gdG8gdGhlIG5leHQgd29yZFxyXG4gICAgdGhpcy53b3JkSW5kZXgrK1xyXG4gICAgLy8gUGF1c2UgYmVmb3JlIG5ldyB3b3JkIHN0YXJ0cyB0eXBpbmdcclxuICAgIHR5cGVTcGVlZCA9IDUwMFxyXG4gICAgXHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50eXBlKCksIHR5cGVTcGVlZClcclxufVxyXG5cclxuLy8gSW5pdCBvbiBET00gTG9hZFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdClcclxuXHJcbi8vSW5pdCBhcHBcclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBjb25zdCB0eHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyJylcclxuICBjb25zdCB3b3JkcyA9IEpTT04ucGFyc2UodHh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd29yZHMnKSlcclxuICBjb25zdCB3YWl0ID0gdHh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2FpdCcpXHJcbiAgLy8gSW5pdCBUeXBld3JpdGVyXHJcbiAgbmV3IFR5cGVXcml0ZXIodHh0RWxlbWVudCwgd29yZHMsIHdhaXQpXHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });