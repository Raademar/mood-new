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

eval("// Query Selectors\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar loginButton = document.querySelector('#login-btn'); // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n  }, 200);\n} // Get the median mood value from the userMood array.\n\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick); // Typewriter functionality\n\nvar TypeWriter = function TypeWriter(txtElement, words) {\n  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n  this.txtElement = txtElement;\n  this.words = words;\n  this.txt = '';\n  this.wordIndex = 0;\n  this.wait = parseInt(wait, 10);\n  this.type();\n  this.isDeleting = false;\n}; // Type method\n\n\nTypeWriter.prototype.type = function () {\n  var _this = this;\n\n  // Current index of word\n  var current = this.wordIndex % this.words.length; // Get full text of current word\n\n  var fullTxt = this.words[current]; // Get the cursor\n\n  var cursor = window.getComputedStyle(document.getElementById('main-header'), ':after'); // Check if deleting\n\n  if (this.isDeleting) {\n    // Delete a character\n    this.txt = fullTxt.substring(0, this.txt.length - 1); // Hide the cursor when deleting\n\n    cursor = '';\n  } else {\n    // Add a character\n    this.txt = fullTxt.substring(0, this.txt.length + 1); // Hide the cursor when typing\n\n    cursor = '';\n  } // Insert txt into element\n\n\n  this.txtElement.innerHTML = \"<span class=\\\"txt\\\">\".concat(this.txt, \"</span>\"); // Initial Type speed\n\n  var typeSpeed = 300;\n\n  if (this.isDeleting) {\n    typeSpeed /= 2;\n  } // Check if word is complete\n\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    // Make a pause at the end of each word\n    typeSpeed = this.wait; // Show the cursor when not typing\n    // Set delete to true\n\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false; // Move on to the next word\n\n    this.wordIndex++; // Pause before new word starts typing\n\n    typeSpeed = 500;\n  }\n\n  setTimeout(function () {\n    return _this.type();\n  }, typeSpeed);\n}; // Init on DOM Load\n\n\ndocument.addEventListener('DOMContentLoaded', init); //Init app\n\nfunction init() {\n  var txtElement = document.querySelector('.main-header');\n  var words = JSON.parse(txtElement.getAttribute('data-words'));\n  var wait = txtElement.getAttribute('data-wait'); // Init Typewriter\n\n  new TypeWriter(txtElement, words, wait);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXG5jb25zdCBmZWVsaW5nc1RleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYXJlYS1mZWVsaW5ncycpXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJylcbmNvbnN0IG1vb2RMZWFkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb29kLWxlYWQnKVxuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4tYnRuJylcblxuLy8gQ3VycmVudCBkYXRlIGdlbmVyYXRvci5cbmNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApLnJlcGxhY2UoLy0vZywnLycpO1xuXG4vLyBGdW5jdGlvbiBmb3IgdG9nZ2xpbmcgdGhlIG1vZGFsID4+PiBNT1ZFIE1PREFMIEhFUkUgPDw8XG5mdW5jdGlvbiBlbnRlckZlZWxpbmdzKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBzbWlsZXlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSwgaXRlbS5jbGFzc0xpc3QuYWRkKCdmYWRlSW5MZWZ0JylcbiAgICB9KTtcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIGZlZWxpbmdzVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnZmFkZUluTGVmdCcpXG4gIH0sIDIwMClcbn1cblxuLy8gR2V0IHRoZSBtZWRpYW4gbW9vZCB2YWx1ZSBmcm9tIHRoZSB1c2VyTW9vZCBhcnJheS5cbmNvbnN0IHVzZXJNZWRpYW5Nb29kID0gYXJyID0+IGFyci5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApIC8gdXNlck1vb2QubGVuZ3RoXG5cbnNoYXJlRmVlbGluZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbnRlckZlZWxpbmdzKTtcblxuLy8gUXVlcnkgU2VsZWN0b3JzIGZvciB0aGUgbW9kYWxzLlxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyJylcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpXG5jb25zdCBzdWNjZXNzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tb2RhbCcpXG5cbi8vIEZ1bmN0aW9ucyBmb3IgdG9nZ2xpbmcgdGhlIG1vZGFscy5cbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCl7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKVxufVxuXG5mdW5jdGlvbiB0b2dnbGVTdWNjZXNzTWVzc2FnZSgpe1xuICBzdWNjZXNzTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbC1zdWNjZXNzJylcbn1cblxuZnVuY3Rpb24gd2luZG93T25DbGljayhldmVudCkge1xuICBpZihldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgdG9nZ2xlTW9kYWwoKTtcbiAgfVxufVxuXG50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9kYWwpXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljaylcblxuXG4vLyBUeXBld3JpdGVyIGZ1bmN0aW9uYWxpdHlcbmNvbnN0IFR5cGVXcml0ZXIgPSBmdW5jdGlvbih0eHRFbGVtZW50LCB3b3Jkcywgd2FpdCA9IDMwMDApIHtcbiAgdGhpcy50eHRFbGVtZW50ID0gdHh0RWxlbWVudFxuICB0aGlzLndvcmRzID0gd29yZHNcbiAgdGhpcy50eHQgPSAnJ1xuICB0aGlzLndvcmRJbmRleCA9IDBcbiAgdGhpcy53YWl0ID0gcGFyc2VJbnQod2FpdCwgMTApXG4gIHRoaXMudHlwZSgpXG4gIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlXG59XG5cbi8vIFR5cGUgbWV0aG9kXG5UeXBlV3JpdGVyLnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24oKSB7XG4gIC8vIEN1cnJlbnQgaW5kZXggb2Ygd29yZFxuICBjb25zdCBjdXJyZW50ID0gdGhpcy53b3JkSW5kZXggJSB0aGlzLndvcmRzLmxlbmd0aFxuICAvLyBHZXQgZnVsbCB0ZXh0IG9mIGN1cnJlbnQgd29yZFxuICBjb25zdCBmdWxsVHh0ID0gdGhpcy53b3Jkc1tjdXJyZW50XVxuICAvLyBHZXQgdGhlIGN1cnNvclxuICBsZXQgY3Vyc29yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4taGVhZGVyJyksICc6YWZ0ZXInKVxuICBcblxuICAvLyBDaGVjayBpZiBkZWxldGluZ1xuICBpZih0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICAvLyBEZWxldGUgYSBjaGFyYWN0ZXJcbiAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpXG4gICAgLy8gSGlkZSB0aGUgY3Vyc29yIHdoZW4gZGVsZXRpbmdcbiAgICBjdXJzb3IgPSAnJ1xuICB9IGVsc2Uge1xuICAgIC8vIEFkZCBhIGNoYXJhY3RlclxuICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSlcbiAgICAvLyBIaWRlIHRoZSBjdXJzb3Igd2hlbiB0eXBpbmdcbiAgICBjdXJzb3IgPSAnJ1xuICB9XG5cbiAgLy8gSW5zZXJ0IHR4dCBpbnRvIGVsZW1lbnRcbiAgdGhpcy50eHRFbGVtZW50LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInR4dFwiPiR7dGhpcy50eHR9PC9zcGFuPmBcbiAgXG5cbiAgLy8gSW5pdGlhbCBUeXBlIHNwZWVkXG4gIGxldCB0eXBlU3BlZWQgPSAzMDBcblxuICBpZih0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICB0eXBlU3BlZWQgLz0gMlxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd29yZCBpcyBjb21wbGV0ZVxuICBpZighdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XG4gICAgLy8gTWFrZSBhIHBhdXNlIGF0IHRoZSBlbmQgb2YgZWFjaCB3b3JkXG4gICAgdHlwZVNwZWVkID0gdGhpcy53YWl0XG4gICAgLy8gU2hvdyB0aGUgY3Vyc29yIHdoZW4gbm90IHR5cGluZ1xuXG4gICAgLy8gU2V0IGRlbGV0ZSB0byB0cnVlXG4gICAgdGhpcy5pc0RlbGV0aW5nID0gdHJ1ZVxuICB9IGVsc2UgaWYodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSAnJykge1xuICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlXG4gICAgLy8gTW92ZSBvbiB0byB0aGUgbmV4dCB3b3JkXG4gICAgdGhpcy53b3JkSW5kZXgrK1xuICAgIC8vIFBhdXNlIGJlZm9yZSBuZXcgd29yZCBzdGFydHMgdHlwaW5nXG4gICAgdHlwZVNwZWVkID0gNTAwXG4gICAgXG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnR5cGUoKSwgdHlwZVNwZWVkKVxufVxuXG4vLyBJbml0IG9uIERPTSBMb2FkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdClcblxuLy9Jbml0IGFwcFxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgdHh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcicpXG4gIGNvbnN0IHdvcmRzID0gSlNPTi5wYXJzZSh0eHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS13b3JkcycpKVxuICBjb25zdCB3YWl0ID0gdHh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2FpdCcpXG4gIC8vIEluaXQgVHlwZXdyaXRlclxuICBuZXcgVHlwZVdyaXRlcih0eHRFbGVtZW50LCB3b3Jkcywgd2FpdClcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });