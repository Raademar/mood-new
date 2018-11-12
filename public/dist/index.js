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

eval("// Query Selectors\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar loginButton = document.querySelector('#login-btn'); // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n  }, 200);\n} // Get the median mood value from the userMood array.\n\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick); // Typewriter functionality\n\nvar TypeWriter = function TypeWriter(txtElement, words) {\n  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n  this.txtElement = txtElement;\n  this.words = words;\n  this.txt = '';\n  this.wordIndex = 0;\n  this.wait = parseInt(wait, 10);\n  this.type();\n  this.isDeleting = false;\n}; // Type method\n\n\nTypeWriter.prototype.type = function () {\n  var _this = this;\n\n  // Current index of word\n  var current = this.wordIndex % this.words.length; // Get full text of current word\n\n  var fullTxt = this.words[current]; // Get the cursor\n\n  var cursor = window.getComputedStyle(document.getElementById('main-header'), ':after'); // Check if deleting\n\n  if (this.isDeleting) {\n    // Delete a character\n    this.txt = fullTxt.substring(0, this.txt.length - 1); // Hide the cursor when deleting\n\n    cursor = '';\n  } else {\n    // Add a character\n    this.txt = fullTxt.substring(0, this.txt.length + 1); // Hide the cursor when typing\n\n    cursor = '';\n  } // Insert txt into element\n\n\n  this.txtElement.innerHTML = \"<span class=\\\"txt\\\">\".concat(this.txt, \"</span>\"); // Initial Type speed\n\n  var typeSpeed = 300;\n\n  if (this.isDeleting) {\n    typeSpeed /= 2;\n  } // Check if word is complete\n\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    // Make a pause at the end of each word\n    typeSpeed = this.wait; // Show the cursor when not typing\n    // Set delete to true\n\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false; // Move on to the next word\n\n    this.wordIndex++; // Pause before new word starts typing\n\n    typeSpeed = 500;\n  }\n\n  setTimeout(function () {\n    return _this.type();\n  }, typeSpeed);\n}; // Init on DOM Load\n\n\ndocument.addEventListener('DOMContentLoaded', init); //Init app\n\nfunction init() {\n  var txtElement = document.querySelector('.main-header');\n  var words = JSON.parse(txtElement.getAttribute('data-words'));\n  var wait = txtElement.getAttribute('data-wait'); // Init Typewriter\n\n  new TypeWriter(txtElement, words, wait);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXHJcbmNvbnN0IGZlZWxpbmdzVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1hcmVhLWZlZWxpbmdzJylcclxuY29uc3Qgc2hhcmVGZWVsaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbnRlci1tb29kLXBpY2tlcicpXHJcbmNvbnN0IG1vb2RMZWFkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb29kLWxlYWQnKVxyXG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbi1idG4nKVxyXG5cclxuLy8gQ3VycmVudCBkYXRlIGdlbmVyYXRvci5cclxuY29uc3QgY3VyRGF0ZSA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwxMCkucmVwbGFjZSgvLS9nLCcvJyk7XHJcblxyXG4vLyBGdW5jdGlvbiBmb3IgdG9nZ2xpbmcgdGhlIG1vZGFsID4+PiBNT1ZFIE1PREFMIEhFUkUgPDw8XHJcbmZ1bmN0aW9uIGVudGVyRmVlbGluZ3MoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHNtaWxleXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyksIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZmFkZUluTGVmdCcpXHJcbiAgICB9KTtcclxuICAgIGZlZWxpbmdzVGV4dEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkxlZnQnKVxyXG4gIH0sIDIwMClcclxufVxyXG5cclxuLy8gR2V0IHRoZSBtZWRpYW4gbW9vZCB2YWx1ZSBmcm9tIHRoZSB1c2VyTW9vZCBhcnJheS5cclxuY29uc3QgdXNlck1lZGlhbk1vb2QgPSBhcnIgPT4gYXJyLnJlZHVjZSgoYSxiKSA9PiBhICsgYiwgMCkgLyB1c2VyTW9vZC5sZW5ndGhcclxuXHJcbnNoYXJlRmVlbGluZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbnRlckZlZWxpbmdzKTtcclxuXHJcbi8vIFF1ZXJ5IFNlbGVjdG9ycyBmb3IgdGhlIG1vZGFscy5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxyXG5jb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaWdnZXInKVxyXG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKVxyXG5jb25zdCBzdWNjZXNzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tb2RhbCcpXHJcblxyXG4vLyBGdW5jdGlvbnMgZm9yIHRvZ2dsaW5nIHRoZSBtb2RhbHMuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCl7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVN1Y2Nlc3NNZXNzYWdlKCl7XHJcbiAgc3VjY2Vzc01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwtc3VjY2VzcycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcclxuICBpZihldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XHJcbiAgICB0b2dnbGVNb2RhbCgpO1xyXG4gIH1cclxufVxyXG5cclxudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKVxyXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrKVxyXG5cclxuXHJcbi8vIFR5cGV3cml0ZXIgZnVuY3Rpb25hbGl0eVxyXG5jb25zdCBUeXBlV3JpdGVyID0gZnVuY3Rpb24odHh0RWxlbWVudCwgd29yZHMsIHdhaXQgPSAzMDAwKSB7XHJcbiAgdGhpcy50eHRFbGVtZW50ID0gdHh0RWxlbWVudFxyXG4gIHRoaXMud29yZHMgPSB3b3Jkc1xyXG4gIHRoaXMudHh0ID0gJydcclxuICB0aGlzLndvcmRJbmRleCA9IDBcclxuICB0aGlzLndhaXQgPSBwYXJzZUludCh3YWl0LCAxMClcclxuICB0aGlzLnR5cGUoKVxyXG4gIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlXHJcbn1cclxuXHJcbi8vIFR5cGUgbWV0aG9kXHJcblR5cGVXcml0ZXIucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbigpIHtcclxuICAvLyBDdXJyZW50IGluZGV4IG9mIHdvcmRcclxuICBjb25zdCBjdXJyZW50ID0gdGhpcy53b3JkSW5kZXggJSB0aGlzLndvcmRzLmxlbmd0aFxyXG4gIC8vIEdldCBmdWxsIHRleHQgb2YgY3VycmVudCB3b3JkXHJcbiAgY29uc3QgZnVsbFR4dCA9IHRoaXMud29yZHNbY3VycmVudF1cclxuICAvLyBHZXQgdGhlIGN1cnNvclxyXG4gIGxldCBjdXJzb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWhlYWRlcicpLCAnOmFmdGVyJylcclxuICBcclxuXHJcbiAgLy8gQ2hlY2sgaWYgZGVsZXRpbmdcclxuICBpZih0aGlzLmlzRGVsZXRpbmcpIHtcclxuICAgIC8vIERlbGV0ZSBhIGNoYXJhY3RlclxyXG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKVxyXG4gICAgLy8gSGlkZSB0aGUgY3Vyc29yIHdoZW4gZGVsZXRpbmdcclxuICAgIGN1cnNvciA9ICcnXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEFkZCBhIGNoYXJhY3RlclxyXG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKVxyXG4gICAgLy8gSGlkZSB0aGUgY3Vyc29yIHdoZW4gdHlwaW5nXHJcbiAgICBjdXJzb3IgPSAnJ1xyXG4gIH1cclxuXHJcbiAgLy8gSW5zZXJ0IHR4dCBpbnRvIGVsZW1lbnRcclxuICB0aGlzLnR4dEVsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwidHh0XCI+JHt0aGlzLnR4dH08L3NwYW4+YFxyXG4gIFxyXG5cclxuICAvLyBJbml0aWFsIFR5cGUgc3BlZWRcclxuICBsZXQgdHlwZVNwZWVkID0gMzAwXHJcblxyXG4gIGlmKHRoaXMuaXNEZWxldGluZykge1xyXG4gICAgdHlwZVNwZWVkIC89IDJcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIHdvcmQgaXMgY29tcGxldGVcclxuICBpZighdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XHJcbiAgICAvLyBNYWtlIGEgcGF1c2UgYXQgdGhlIGVuZCBvZiBlYWNoIHdvcmRcclxuICAgIHR5cGVTcGVlZCA9IHRoaXMud2FpdFxyXG4gICAgLy8gU2hvdyB0aGUgY3Vyc29yIHdoZW4gbm90IHR5cGluZ1xyXG5cclxuICAgIC8vIFNldCBkZWxldGUgdG8gdHJ1ZVxyXG4gICAgdGhpcy5pc0RlbGV0aW5nID0gdHJ1ZVxyXG4gIH0gZWxzZSBpZih0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09ICcnKSB7XHJcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZVxyXG4gICAgLy8gTW92ZSBvbiB0byB0aGUgbmV4dCB3b3JkXHJcbiAgICB0aGlzLndvcmRJbmRleCsrXHJcbiAgICAvLyBQYXVzZSBiZWZvcmUgbmV3IHdvcmQgc3RhcnRzIHR5cGluZ1xyXG4gICAgdHlwZVNwZWVkID0gNTAwXHJcbiAgICBcclxuICB9XHJcbiAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnR5cGUoKSwgdHlwZVNwZWVkKVxyXG59XHJcblxyXG4vLyBJbml0IG9uIERPTSBMb2FkXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KVxyXG5cclxuLy9Jbml0IGFwcFxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IHR4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXInKVxyXG4gIGNvbnN0IHdvcmRzID0gSlNPTi5wYXJzZSh0eHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS13b3JkcycpKVxyXG4gIGNvbnN0IHdhaXQgPSB0eHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS13YWl0JylcclxuICAvLyBJbml0IFR5cGV3cml0ZXJcclxuICBuZXcgVHlwZVdyaXRlcih0eHRFbGVtZW50LCB3b3Jkcywgd2FpdClcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });