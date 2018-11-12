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

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Query Selectors\nvar smileys = _toConsumableArray(document.querySelectorAll('.smiley'));\n\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar userMoodContainer = document.querySelector('#user-mood-container');\nvar moodNoteTextarea = document.querySelector('#mood-note');\nvar submitFeeligns = document.querySelector('#submit-feelings');\nvar loginButton = document.querySelector('#login-btn'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n    userMoodContainer.classList.remove('hide');\n  }, 200);\n}\n\n; // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for assigning the users submitted mood to local storage\n\nfunction setLocalStorage(userMoodEntry, userMoodNote) {\n  var userMoodObj = {\n    'date': curDate,\n    'usermood': userMoodEntry,\n    'note': userMoodNote\n  };\n  var userMoodArray = JSON.parse(localStorage.getItem('userentry')) || [];\n  userMoodArray.push(userMoodObj);\n  localStorage.setItem('userentry', JSON.stringify(userMoodArray));\n}\n\n; // Function for passing user submitted mood data to the DB.\n\nfunction postData(userMoodEntry, userMoodNote) {\n  var userData = {\n    mood: userMoodEntry,\n    note: userMoodNote\n  };\n  return fetch('/mood/add', {\n    method: 'POST',\n    body: JSON.stringify(userData),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  });\n}\n\nvar pickedMood = 0;\nvar moodNote = '';\nvar userMood = []; // Get the median mood value from the userMood array.\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Assign clickListener for each smiley.\n\nsmileys.forEach(function (smiley) {\n  return smiley.addEventListener('click', function () {\n    smileys.forEach(function (item) {\n      return item.classList.remove('pickedMood');\n    });\n    event.currentTarget.classList.add('pickedMood');\n    pickedMood = parseInt(smiley.dataset.mood);\n  });\n}); // Submit feelings click listener, toggling the modals after submitted and saved in local storage.\n\nsubmitFeeligns.addEventListener('click', function () {\n  moodNote = JSON.stringify(moodNoteTextarea.value);\n  setLocalStorage(pickedMood, moodNote);\n  postData(pickedMood, moodNote);\n  moodNoteTextarea.value = '';\n  pickedMood = 0;\n  toggleModal();\n  toggleSuccessMessage();\n  setTimeout(function () {\n    toggleSuccessMessage();\n  }, 3000);\n}); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick); // Typewriter functionality\n\nvar TypeWriter = function TypeWriter(txtElement, words) {\n  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n  this.txtElement = txtElement;\n  this.words = words;\n  this.txt = '';\n  this.wordIndex = 0;\n  this.wait = parseInt(wait, 10);\n  this.type();\n  this.isDeleting = false;\n}; // Type method\n\n\nTypeWriter.prototype.type = function () {\n  var _this = this;\n\n  // Current index of word\n  var current = this.wordIndex % this.words.length; // Get full text of current word\n\n  var fullTxt = this.words[current]; // Get the cursor\n\n  var cursor = window.getComputedStyle(document.getElementById('main-header'), ':after'); // Check if deleting\n\n  if (this.isDeleting) {\n    // Delete a character\n    this.txt = fullTxt.substring(0, this.txt.length - 1); // Hide the cursor when deleting\n\n    cursor = '';\n  } else {\n    // Add a character\n    this.txt = fullTxt.substring(0, this.txt.length + 1); // Hide the cursor when typing\n\n    cursor = '';\n  } // Insert txt into element\n\n\n  this.txtElement.innerHTML = \"<span class=\\\"txt\\\">\".concat(this.txt, \"</span>\"); // Initial Type speed\n\n  var typeSpeed = 300;\n\n  if (this.isDeleting) {\n    typeSpeed /= 2;\n  } // Check if word is complete\n\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    // Make a pause at the end of each word\n    typeSpeed = this.wait; // Show the cursor when not typing\n    // Set delete to true\n\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false; // Move on to the next word\n\n    this.wordIndex++; // Pause before new word starts typing\n\n    typeSpeed = 500;\n  }\n\n  setTimeout(function () {\n    return _this.type();\n  }, typeSpeed);\n}; // Init on DOM Load\n\n\ndocument.addEventListener('DOMContentLoaded', init); //Init app\n\nfunction init() {\n  var txtElement = document.querySelector('.main-header');\n  var words = JSON.parse(txtElement.getAttribute('data-words'));\n  var wait = txtElement.getAttribute('data-wait'); // Init Typewriter\n\n  new TypeWriter(txtElement, words, wait);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXG5jb25zdCBzbWlsZXlzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbWlsZXknKV07XG5jb25zdCBmZWVsaW5nc1RleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYXJlYS1mZWVsaW5ncycpXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJyk7XG5jb25zdCBtb29kTGVhZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9vZC1sZWFkJyk7XG5jb25zdCB1c2VyTW9vZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLW1vb2QtY29udGFpbmVyJyk7XG5jb25zdCBtb29kTm90ZVRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vb2Qtbm90ZScpO1xuY29uc3Qgc3VibWl0RmVlbGlnbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWZlZWxpbmdzJyk7XG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbi1idG4nKVxuXG5cblxuLy8gRnVuY3Rpb24gZm9yIHRvZ2dsaW5nIHRoZSBtb2RhbCA+Pj4gTU9WRSBNT0RBTCBIRVJFIDw8PFxuZnVuY3Rpb24gZW50ZXJGZWVsaW5ncyhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHNtaWxleXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpLCBpdGVtLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkxlZnQnKVxuICAgIH0pO1xuICAgIGZlZWxpbmdzVGV4dEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGZlZWxpbmdzVGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnZmFkZUluTGVmdCcpO1xuICAgIHVzZXJNb29kQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSwgMjAwKVxufTtcblxuXG4vLyBDdXJyZW50IGRhdGUgZ2VuZXJhdG9yLlxuY29uc3QgY3VyRGF0ZSA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwxMCkucmVwbGFjZSgvLS9nLCcvJyk7XG5cbi8vIEZ1bmN0aW9uIGZvciBhc3NpZ25pbmcgdGhlIHVzZXJzIHN1Ym1pdHRlZCBtb29kIHRvIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZSh1c2VyTW9vZEVudHJ5LCB1c2VyTW9vZE5vdGUpe1xuICBsZXQgdXNlck1vb2RPYmogPSB7XG4gICAgJ2RhdGUnOiBjdXJEYXRlLFxuICAgICd1c2VybW9vZCc6IHVzZXJNb29kRW50cnksXG4gICAgJ25vdGUnOiB1c2VyTW9vZE5vdGVcbiAgfVxuICBsZXQgdXNlck1vb2RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJlbnRyeScpKSB8fCBbXTtcbiAgdXNlck1vb2RBcnJheS5wdXNoKHVzZXJNb29kT2JqKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJlbnRyeScsIEpTT04uc3RyaW5naWZ5KHVzZXJNb29kQXJyYXkpKTtcbn07XG5cbi8vIEZ1bmN0aW9uIGZvciBwYXNzaW5nIHVzZXIgc3VibWl0dGVkIG1vb2QgZGF0YSB0byB0aGUgREIuXG5mdW5jdGlvbiBwb3N0RGF0YSh1c2VyTW9vZEVudHJ5LCB1c2VyTW9vZE5vdGUpe1xuICBsZXQgdXNlckRhdGEgPSB7XG4gICAgbW9vZDogdXNlck1vb2RFbnRyeSxcbiAgICBub3RlOiB1c2VyTW9vZE5vdGVcbiAgfVxuICByZXR1cm4gZmV0Y2goJy9tb29kL2FkZCcsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSlcbn1cblxubGV0IHBpY2tlZE1vb2QgPSAwO1xubGV0IG1vb2ROb3RlID0gJyc7XG5sZXQgdXNlck1vb2QgPSBbXTtcblxuXG5cbi8vIEdldCB0aGUgbWVkaWFuIG1vb2QgdmFsdWUgZnJvbSB0aGUgdXNlck1vb2QgYXJyYXkuXG5jb25zdCB1c2VyTWVkaWFuTW9vZCA9IGFyciA9PiBhcnIucmVkdWNlKChhLGIpID0+IGEgKyBiLCAwKSAvIHVzZXJNb29kLmxlbmd0aDtcblxuc2hhcmVGZWVsaW5ncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVudGVyRmVlbGluZ3MpO1xuXG5cbi8vIEFzc2lnbiBjbGlja0xpc3RlbmVyIGZvciBlYWNoIHNtaWxleS5cbnNtaWxleXMuZm9yRWFjaChzbWlsZXkgPT4gc21pbGV5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgc21pbGV5cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwaWNrZWRNb29kJykpO1xuICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BpY2tlZE1vb2QnKTtcbiAgcGlja2VkTW9vZCA9IHBhcnNlSW50KHNtaWxleS5kYXRhc2V0Lm1vb2QpXG59KSk7XG5cblxuLy8gU3VibWl0IGZlZWxpbmdzIGNsaWNrIGxpc3RlbmVyLCB0b2dnbGluZyB0aGUgbW9kYWxzIGFmdGVyIHN1Ym1pdHRlZCBhbmQgc2F2ZWQgaW4gbG9jYWwgc3RvcmFnZS5cbnN1Ym1pdEZlZWxpZ25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgbW9vZE5vdGUgPSBKU09OLnN0cmluZ2lmeShtb29kTm90ZVRleHRhcmVhLnZhbHVlKTtcbiAgc2V0TG9jYWxTdG9yYWdlKHBpY2tlZE1vb2QsIG1vb2ROb3RlKTtcbiAgcG9zdERhdGEocGlja2VkTW9vZCwgbW9vZE5vdGUpXG4gIG1vb2ROb3RlVGV4dGFyZWEudmFsdWUgPSAnJztcbiAgcGlja2VkTW9vZCA9IDA7XG4gIHRvZ2dsZU1vZGFsKCk7XG4gIHRvZ2dsZVN1Y2Nlc3NNZXNzYWdlKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRvZ2dsZVN1Y2Nlc3NNZXNzYWdlKCk7XG4gIH0sIDMwMDApXG59KTtcblxuLy8gUXVlcnkgU2VsZWN0b3JzIGZvciB0aGUgbW9kYWxzLlxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IHRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpZ2dlcicpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG5jb25zdCBzdWNjZXNzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tb2RhbCcpO1xuXG5cbi8vIEZ1bmN0aW9ucyBmb3IgdG9nZ2xpbmcgdGhlIG1vZGFscy5cbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCl7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKXtcbiAgc3VjY2Vzc01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwtc3VjY2VzcycpO1xufVxuXG5mdW5jdGlvbiB3aW5kb3dPbkNsaWNrKGV2ZW50KSB7XG4gIGlmKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICB0b2dnbGVNb2RhbCgpO1xuICB9XG59XG5cbnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbCk7XG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdpbmRvd09uQ2xpY2spO1xuXG5cbi8vIFR5cGV3cml0ZXIgZnVuY3Rpb25hbGl0eVxuY29uc3QgVHlwZVdyaXRlciA9IGZ1bmN0aW9uKHR4dEVsZW1lbnQsIHdvcmRzLCB3YWl0ID0gMzAwMCkge1xuICB0aGlzLnR4dEVsZW1lbnQgPSB0eHRFbGVtZW50XG4gIHRoaXMud29yZHMgPSB3b3Jkc1xuICB0aGlzLnR4dCA9ICcnXG4gIHRoaXMud29yZEluZGV4ID0gMFxuICB0aGlzLndhaXQgPSBwYXJzZUludCh3YWl0LCAxMClcbiAgdGhpcy50eXBlKClcbiAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2Vcbn1cblxuLy8gVHlwZSBtZXRob2RcblR5cGVXcml0ZXIucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gQ3VycmVudCBpbmRleCBvZiB3b3JkXG4gIGNvbnN0IGN1cnJlbnQgPSB0aGlzLndvcmRJbmRleCAlIHRoaXMud29yZHMubGVuZ3RoXG4gIC8vIEdldCBmdWxsIHRleHQgb2YgY3VycmVudCB3b3JkXG4gIGNvbnN0IGZ1bGxUeHQgPSB0aGlzLndvcmRzW2N1cnJlbnRdXG4gIC8vIEdldCB0aGUgY3Vyc29yXG4gIGxldCBjdXJzb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1oZWFkZXInKSwgJzphZnRlcicpXG4gIFxuXG4gIC8vIENoZWNrIGlmIGRlbGV0aW5nXG4gIGlmKHRoaXMuaXNEZWxldGluZykge1xuICAgIC8vIERlbGV0ZSBhIGNoYXJhY3RlclxuICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoIC0gMSlcbiAgICAvLyBIaWRlIHRoZSBjdXJzb3Igd2hlbiBkZWxldGluZ1xuICAgIGN1cnNvciA9ICcnXG4gIH0gZWxzZSB7XG4gICAgLy8gQWRkIGEgY2hhcmFjdGVyXG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKVxuICAgIC8vIEhpZGUgdGhlIGN1cnNvciB3aGVuIHR5cGluZ1xuICAgIGN1cnNvciA9ICcnXG4gIH1cblxuICAvLyBJbnNlcnQgdHh0IGludG8gZWxlbWVudFxuICB0aGlzLnR4dEVsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwidHh0XCI+JHt0aGlzLnR4dH08L3NwYW4+YFxuICBcblxuICAvLyBJbml0aWFsIFR5cGUgc3BlZWRcbiAgbGV0IHR5cGVTcGVlZCA9IDMwMFxuXG4gIGlmKHRoaXMuaXNEZWxldGluZykge1xuICAgIHR5cGVTcGVlZCAvPSAyXG4gIH1cblxuICAvLyBDaGVjayBpZiB3b3JkIGlzIGNvbXBsZXRlXG4gIGlmKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcbiAgICAvLyBNYWtlIGEgcGF1c2UgYXQgdGhlIGVuZCBvZiBlYWNoIHdvcmRcbiAgICB0eXBlU3BlZWQgPSB0aGlzLndhaXRcbiAgICAvLyBTaG93IHRoZSBjdXJzb3Igd2hlbiBub3QgdHlwaW5nXG5cbiAgICAvLyBTZXQgZGVsZXRlIHRvIHRydWVcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSB0cnVlXG4gIH0gZWxzZSBpZih0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09ICcnKSB7XG4gICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2VcbiAgICAvLyBNb3ZlIG9uIHRvIHRoZSBuZXh0IHdvcmRcbiAgICB0aGlzLndvcmRJbmRleCsrXG4gICAgLy8gUGF1c2UgYmVmb3JlIG5ldyB3b3JkIHN0YXJ0cyB0eXBpbmdcbiAgICB0eXBlU3BlZWQgPSA1MDBcbiAgICBcbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudHlwZSgpLCB0eXBlU3BlZWQpXG59XG5cbi8vIEluaXQgb24gRE9NIExvYWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KVxuXG4vL0luaXQgYXBwXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCB0eHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyJylcbiAgY29uc3Qgd29yZHMgPSBKU09OLnBhcnNlKHR4dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXdvcmRzJykpXG4gIGNvbnN0IHdhaXQgPSB0eHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS13YWl0JylcbiAgLy8gSW5pdCBUeXBld3JpdGVyXG4gIG5ldyBUeXBlV3JpdGVyKHR4dEVsZW1lbnQsIHdvcmRzLCB3YWl0KVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });