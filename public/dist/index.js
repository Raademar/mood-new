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

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Query Selectors\nvar smileys = _toConsumableArray(document.querySelectorAll('.smiley'));\n\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar userMoodContainer = document.querySelector('#user-mood-container');\nvar moodNoteTextarea = document.querySelector('#mood-note');\nvar submitFeeligns = document.querySelector('#submit-feelings');\nvar loginButton = document.querySelector('#login-btn'); // Check if user is logged in.\n\n/* if(user){\n  loginButton.style.display = 'none'\n} */\n// Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n    userMoodContainer.classList.remove('hide');\n  }, 200);\n}\n\n; // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for assigning the users submitted mood to local storage\n\nfunction setLocalStorage(userMoodEntry, userMoodNote) {\n  var userMoodObj = {\n    'date': curDate,\n    'usermood': userMoodEntry,\n    'note': userMoodNote\n  };\n  var userMoodArray = JSON.parse(localStorage.getItem('userentry')) || [];\n  userMoodArray.push(userMoodObj);\n  localStorage.setItem('userentry', JSON.stringify(userMoodArray));\n}\n\n; // Function for passing user submitted mood data to the DB.\n\nfunction postData(userMoodEntry, userMoodNote) {\n  var userData = {\n    mood: userMoodEntry,\n    note: userMoodNote\n  };\n  return fetch('/mood/add', {\n    method: 'POST',\n    body: JSON.stringify(userData),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  });\n}\n\nvar pickedMood = 0;\nvar moodNote = '';\nvar userMood = []; // Get the median mood value from the userMood array.\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Assign clickListener for each smiley.\n\nsmileys.forEach(function (smiley) {\n  return smiley.addEventListener('click', function () {\n    smileys.forEach(function (item) {\n      return item.classList.remove('pickedMood');\n    });\n    event.currentTarget.classList.add('pickedMood');\n    pickedMood = parseInt(smiley.dataset.mood);\n  });\n}); // Submit feelings click listener, toggling the modals after submitted and saved in local storage.\n\nsubmitFeeligns.addEventListener('click', function () {\n  moodNote = JSON.stringify(moodNoteTextarea.value);\n  setLocalStorage(pickedMood, moodNote);\n  postData(pickedMood, moodNote);\n  moodNoteTextarea.value = '';\n  pickedMood = 0;\n  toggleModal();\n  toggleSuccessMessage();\n  setTimeout(function () {\n    toggleSuccessMessage();\n  }, 3000);\n}); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick); // Typewriter functionality\n\nvar TypeWriter = function TypeWriter(txtElement, words) {\n  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n  this.txtElement = txtElement;\n  this.words = words;\n  this.txt = '';\n  this.wordIndex = 0;\n  this.wait = parseInt(wait, 10);\n  this.type();\n  this.isDeleting = false;\n}; // Type method\n\n\nTypeWriter.prototype.type = function () {\n  var _this = this;\n\n  // Current index of word\n  var current = this.wordIndex % this.words.length; // Get full text of current word\n\n  var fullTxt = this.words[current]; // Get the cursor\n\n  var cursor = window.getComputedStyle(document.getElementById('main-header'), ':after'); // Check if deleting\n\n  if (this.isDeleting) {\n    // Delete a character\n    this.txt = fullTxt.substring(0, this.txt.length - 1); // Hide the cursor when deleting\n\n    cursor = '';\n  } else {\n    // Add a character\n    this.txt = fullTxt.substring(0, this.txt.length + 1); // Hide the cursor when typing\n\n    cursor = '';\n  } // Insert txt into element\n\n\n  this.txtElement.innerHTML = \"<span class=\\\"txt\\\">\".concat(this.txt, \"</span>\"); // Initial Type speed\n\n  var typeSpeed = 300;\n\n  if (this.isDeleting) {\n    typeSpeed /= 2;\n  } // Check if word is complete\n\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    // Make a pause at the end of each word\n    typeSpeed = this.wait; // Show the cursor when not typing\n    // Set delete to true\n\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false; // Move on to the next word\n\n    this.wordIndex++; // Pause before new word starts typing\n\n    typeSpeed = 500;\n  }\n\n  setTimeout(function () {\n    return _this.type();\n  }, typeSpeed);\n}; // Init on DOM Load\n\n\ndocument.addEventListener('DOMContentLoaded', init); // Init app\n\nfunction init() {\n  var txtElement = document.querySelector('.main-header');\n  var words = JSON.parse(txtElement.getAttribute('data-words'));\n  var wait = txtElement.getAttribute('data-wait'); // Init Typewriter\n\n  new TypeWriter(txtElement, words, wait);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXG5jb25zdCBzbWlsZXlzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbWlsZXknKV07XG5jb25zdCBmZWVsaW5nc1RleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYXJlYS1mZWVsaW5ncycpXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJyk7XG5jb25zdCBtb29kTGVhZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9vZC1sZWFkJyk7XG5jb25zdCB1c2VyTW9vZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLW1vb2QtY29udGFpbmVyJyk7XG5jb25zdCBtb29kTm90ZVRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vb2Qtbm90ZScpO1xuY29uc3Qgc3VibWl0RmVlbGlnbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWZlZWxpbmdzJyk7XG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbi1idG4nKVxuXG5cblxuLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW4uXG4vKiBpZih1c2VyKXtcbiAgbG9naW5CdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufSAqL1xuXG4vLyBGdW5jdGlvbiBmb3IgdG9nZ2xpbmcgdGhlIG1vZGFsID4+PiBNT1ZFIE1PREFMIEhFUkUgPDw8XG5mdW5jdGlvbiBlbnRlckZlZWxpbmdzKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgc21pbGV5cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyksIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZmFkZUluTGVmdCcpXG4gICAgfSk7XG4gICAgZmVlbGluZ3NUZXh0QXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgZmVlbGluZ3NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdmYWRlSW5MZWZ0Jyk7XG4gICAgdXNlck1vb2RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9LCAyMDApXG59O1xuXG5cbi8vIEN1cnJlbnQgZGF0ZSBnZW5lcmF0b3IuXG5jb25zdCBjdXJEYXRlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLDEwKS5yZXBsYWNlKC8tL2csJy8nKTtcblxuLy8gRnVuY3Rpb24gZm9yIGFzc2lnbmluZyB0aGUgdXNlcnMgc3VibWl0dGVkIG1vb2QgdG8gbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKHVzZXJNb29kRW50cnksIHVzZXJNb29kTm90ZSl7XG4gIGxldCB1c2VyTW9vZE9iaiA9IHtcbiAgICAnZGF0ZSc6IGN1ckRhdGUsXG4gICAgJ3VzZXJtb29kJzogdXNlck1vb2RFbnRyeSxcbiAgICAnbm90ZSc6IHVzZXJNb29kTm90ZVxuICB9XG4gIGxldCB1c2VyTW9vZEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcmVudHJ5JykpIHx8IFtdO1xuICB1c2VyTW9vZEFycmF5LnB1c2godXNlck1vb2RPYmopO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmVudHJ5JywgSlNPTi5zdHJpbmdpZnkodXNlck1vb2RBcnJheSkpO1xufTtcblxuLy8gRnVuY3Rpb24gZm9yIHBhc3NpbmcgdXNlciBzdWJtaXR0ZWQgbW9vZCBkYXRhIHRvIHRoZSBEQi5cbmZ1bmN0aW9uIHBvc3REYXRhKHVzZXJNb29kRW50cnksIHVzZXJNb29kTm90ZSl7XG4gIGxldCB1c2VyRGF0YSA9IHtcbiAgICBtb29kOiB1c2VyTW9vZEVudHJ5LFxuICAgIG5vdGU6IHVzZXJNb29kTm90ZVxuICB9XG4gIHJldHVybiBmZXRjaCgnL21vb2QvYWRkJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KVxufVxuXG5sZXQgcGlja2VkTW9vZCA9IDA7XG5sZXQgbW9vZE5vdGUgPSAnJztcbmxldCB1c2VyTW9vZCA9IFtdO1xuXG5cblxuLy8gR2V0IHRoZSBtZWRpYW4gbW9vZCB2YWx1ZSBmcm9tIHRoZSB1c2VyTW9vZCBhcnJheS5cbmNvbnN0IHVzZXJNZWRpYW5Nb29kID0gYXJyID0+IGFyci5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApIC8gdXNlck1vb2QubGVuZ3RoO1xuXG5zaGFyZUZlZWxpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW50ZXJGZWVsaW5ncyk7XG5cblxuLy8gQXNzaWduIGNsaWNrTGlzdGVuZXIgZm9yIGVhY2ggc21pbGV5Llxuc21pbGV5cy5mb3JFYWNoKHNtaWxleSA9PiBzbWlsZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBzbWlsZXlzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BpY2tlZE1vb2QnKSk7XG4gIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgncGlja2VkTW9vZCcpO1xuICBwaWNrZWRNb29kID0gcGFyc2VJbnQoc21pbGV5LmRhdGFzZXQubW9vZClcbn0pKTtcblxuXG4vLyBTdWJtaXQgZmVlbGluZ3MgY2xpY2sgbGlzdGVuZXIsIHRvZ2dsaW5nIHRoZSBtb2RhbHMgYWZ0ZXIgc3VibWl0dGVkIGFuZCBzYXZlZCBpbiBsb2NhbCBzdG9yYWdlLlxuc3VibWl0RmVlbGlnbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBtb29kTm90ZSA9IEpTT04uc3RyaW5naWZ5KG1vb2ROb3RlVGV4dGFyZWEudmFsdWUpO1xuICBzZXRMb2NhbFN0b3JhZ2UocGlja2VkTW9vZCwgbW9vZE5vdGUpO1xuICBwb3N0RGF0YShwaWNrZWRNb29kLCBtb29kTm90ZSlcbiAgbW9vZE5vdGVUZXh0YXJlYS52YWx1ZSA9ICcnO1xuICBwaWNrZWRNb29kID0gMDtcbiAgdG9nZ2xlTW9kYWwoKTtcbiAgdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKTtcbiAgfSwgMzAwMClcbn0pO1xuXG4vLyBRdWVyeSBTZWxlY3RvcnMgZm9yIHRoZSBtb2RhbHMuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyJyk7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbmNvbnN0IHN1Y2Nlc3NNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLW1vZGFsJyk7XG5cblxuLy8gRnVuY3Rpb25zIGZvciB0b2dnbGluZyB0aGUgbW9kYWxzLlxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKXtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbCcpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTdWNjZXNzTWVzc2FnZSgpe1xuICBzdWNjZXNzTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbC1zdWNjZXNzJyk7XG59XG5cbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcbiAgaWYoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIHRvZ2dsZU1vZGFsKCk7XG4gIH1cbn1cblxudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKTtcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9kYWwpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljayk7XG5cblxuLy8gVHlwZXdyaXRlciBmdW5jdGlvbmFsaXR5XG5jb25zdCBUeXBlV3JpdGVyID0gZnVuY3Rpb24odHh0RWxlbWVudCwgd29yZHMsIHdhaXQgPSAzMDAwKSB7XG4gIHRoaXMudHh0RWxlbWVudCA9IHR4dEVsZW1lbnRcbiAgdGhpcy53b3JkcyA9IHdvcmRzXG4gIHRoaXMudHh0ID0gJydcbiAgdGhpcy53b3JkSW5kZXggPSAwXG4gIHRoaXMud2FpdCA9IHBhcnNlSW50KHdhaXQsIDEwKVxuICB0aGlzLnR5cGUoKVxuICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZVxufVxuXG4vLyBUeXBlIG1ldGhvZFxuVHlwZVdyaXRlci5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBDdXJyZW50IGluZGV4IG9mIHdvcmRcbiAgY29uc3QgY3VycmVudCA9IHRoaXMud29yZEluZGV4ICUgdGhpcy53b3Jkcy5sZW5ndGhcbiAgLy8gR2V0IGZ1bGwgdGV4dCBvZiBjdXJyZW50IHdvcmRcbiAgY29uc3QgZnVsbFR4dCA9IHRoaXMud29yZHNbY3VycmVudF1cbiAgLy8gR2V0IHRoZSBjdXJzb3JcbiAgbGV0IGN1cnNvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWhlYWRlcicpLCAnOmFmdGVyJylcbiAgXG5cbiAgLy8gQ2hlY2sgaWYgZGVsZXRpbmdcbiAgaWYodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgLy8gRGVsZXRlIGEgY2hhcmFjdGVyXG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKVxuICAgIC8vIEhpZGUgdGhlIGN1cnNvciB3aGVuIGRlbGV0aW5nXG4gICAgY3Vyc29yID0gJydcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGQgYSBjaGFyYWN0ZXJcbiAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpXG4gICAgLy8gSGlkZSB0aGUgY3Vyc29yIHdoZW4gdHlwaW5nXG4gICAgY3Vyc29yID0gJydcbiAgfVxuXG4gIC8vIEluc2VydCB0eHQgaW50byBlbGVtZW50XG4gIHRoaXMudHh0RWxlbWVudC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJ0eHRcIj4ke3RoaXMudHh0fTwvc3Bhbj5gXG4gIFxuXG4gIC8vIEluaXRpYWwgVHlwZSBzcGVlZFxuICBsZXQgdHlwZVNwZWVkID0gMzAwXG5cbiAgaWYodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgdHlwZVNwZWVkIC89IDJcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHdvcmQgaXMgY29tcGxldGVcbiAgaWYoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xuICAgIC8vIE1ha2UgYSBwYXVzZSBhdCB0aGUgZW5kIG9mIGVhY2ggd29yZFxuICAgIHR5cGVTcGVlZCA9IHRoaXMud2FpdFxuICAgIC8vIFNob3cgdGhlIGN1cnNvciB3aGVuIG5vdCB0eXBpbmdcblxuICAgIC8vIFNldCBkZWxldGUgdG8gdHJ1ZVxuICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWVcbiAgfSBlbHNlIGlmKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gJycpIHtcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZVxuICAgIC8vIE1vdmUgb24gdG8gdGhlIG5leHQgd29yZFxuICAgIHRoaXMud29yZEluZGV4KytcbiAgICAvLyBQYXVzZSBiZWZvcmUgbmV3IHdvcmQgc3RhcnRzIHR5cGluZ1xuICAgIHR5cGVTcGVlZCA9IDUwMFxuICAgIFxuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50eXBlKCksIHR5cGVTcGVlZClcbn1cblxuLy8gSW5pdCBvbiBET00gTG9hZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpXG5cbi8vIEluaXQgYXBwXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCB0eHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyJylcbiAgY29uc3Qgd29yZHMgPSBKU09OLnBhcnNlKHR4dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXdvcmRzJykpXG4gIGNvbnN0IHdhaXQgPSB0eHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS13YWl0JylcbiAgLy8gSW5pdCBUeXBld3JpdGVyXG4gIG5ldyBUeXBlV3JpdGVyKHR4dEVsZW1lbnQsIHdvcmRzLCB3YWl0KVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OztBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });