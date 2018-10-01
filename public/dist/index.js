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

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Query Selectors\nvar smileys = _toConsumableArray(document.querySelectorAll('.smiley'));\n\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar userMoodContainer = document.querySelector('#user-mood-container');\nvar moodNoteTextarea = document.querySelector('#mood-note');\nvar submitFeeligns = document.querySelector('#submit-feelings'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n    userMoodContainer.classList.remove('hide');\n  }, 200);\n}\n\n; // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for assigning the users submitted mood to local storage\n\nfunction setLocalStorage(userMoodEntry, userMoodNote) {\n  var userMoodObj = {\n    'date': curDate,\n    'usermood': userMoodEntry,\n    'note': userMoodNote\n  };\n  var userMoodArray = JSON.parse(localStorage.getItem('userentry')) || [];\n  userMoodArray.push(userMoodObj);\n  localStorage.setItem('userentry', JSON.stringify(userMoodArray));\n}\n\n; // Function for passing user submitted mood data to the DB.\n\nfunction postData(userMoodEntry, userMoodNote) {\n  var userData = {\n    mood: userMoodEntry,\n    note: userMoodNote\n  };\n  return fetch('/mood/add', {\n    method: 'POST',\n    body: JSON.stringify(userData),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  });\n}\n\nvar pickedMood = 0;\nvar moodNote = '';\nvar userMood = []; // Get the median mood value from the userMood array.\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Assign clickListener for each smiley.\n\nsmileys.forEach(function (smiley) {\n  return smiley.addEventListener('click', function () {\n    smileys.forEach(function (item) {\n      return item.classList.remove('pickedMood');\n    });\n    event.currentTarget.classList.add('pickedMood');\n    pickedMood = parseInt(smiley.dataset.mood);\n  });\n}); // Submit feelings click listener, toggling the modals after submitted and saved in local storage.\n\nsubmitFeeligns.addEventListener('click', function () {\n  moodNote = JSON.stringify(moodNoteTextarea.value);\n  setLocalStorage(pickedMood, moodNote);\n  postData(pickedMood, moodNote);\n  moodNoteTextarea.value = '';\n  pickedMood = 0;\n  toggleModal();\n  toggleSuccessMessage();\n  setTimeout(function () {\n    toggleSuccessMessage();\n  }, 3000);\n}); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick); // Typewriter functionality\n\nvar TypeWriter = function TypeWriter(txtElement, words) {\n  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n  this.txtElement = txtElement;\n  this.words = words;\n  this.txt = '';\n  this.wordIndex = 0;\n  this.wait = parseInt(wait, 10);\n  this.type();\n  this.isDeleting = false;\n}; // Type method\n\n\nTypeWriter.prototype.type = function () {\n  var _this = this;\n\n  // Current index of word\n  var current = this.wordIndex % this.words.length; // Get full text of current word\n\n  var fullTxt = this.words[current]; // Get the cursor\n\n  var cursor = window.getComputedStyle(document.getElementById('main-header'), ':after'); // Check if deleting\n\n  if (this.isDeleting) {\n    // Delete a character\n    this.txt = fullTxt.substring(0, this.txt.length - 1); // Hide the cursor when typing\n\n    cursor = '';\n  } else {\n    // Add a character\n    this.txt = fullTxt.substring(0, this.txt.length + 1); // Hide the cursor when typing\n\n    cursor = '';\n  } // Insert txt into element\n\n\n  this.txtElement.innerHTML = \"<span class=\\\"txt\\\">\".concat(this.txt, \"</span>\"); // Initial Type speed\n\n  var typeSpeed = 300;\n\n  if (this.isDeleting) {\n    typeSpeed /= 2;\n  } // Check if word is complete\n\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    // Make a pause at the end of each word\n    typeSpeed = this.wait; // Show the cursor when not typing\n    // Set delete to true\n\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false; // Move on to the next word\n\n    this.wordIndex++; // Pause before new word starts typing\n\n    typeSpeed = 500;\n  }\n\n  setTimeout(function () {\n    return _this.type();\n  }, typeSpeed);\n}; // Init on DOM Load\n\n\ndocument.addEventListener('DOMContentLoaded', init); // Init app\n\nfunction init() {\n  var txtElement = document.querySelector('.main-header');\n  var words = JSON.parse(txtElement.getAttribute('data-words'));\n  var wait = txtElement.getAttribute('data-wait'); // Init Typewriter\n\n  new TypeWriter(txtElement, words, wait);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXHJcbmNvbnN0IHNtaWxleXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtaWxleScpXTtcclxuY29uc3QgZmVlbGluZ3NUZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LWFyZWEtZmVlbGluZ3MnKVxyXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJyk7XHJcbmNvbnN0IG1vb2RMZWFkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb29kLWxlYWQnKTtcclxuY29uc3QgdXNlck1vb2RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1tb29kLWNvbnRhaW5lcicpO1xyXG5jb25zdCBtb29kTm90ZVRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vb2Qtbm90ZScpO1xyXG5jb25zdCBzdWJtaXRGZWVsaWducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtZmVlbGluZ3MnKTtcclxuXHJcbi8vIEZ1bmN0aW9uIGZvciB0b2dnbGluZyB0aGUgbW9kYWwgPj4+IE1PVkUgTU9EQUwgSEVSRSA8PDxcclxuZnVuY3Rpb24gZW50ZXJGZWVsaW5ncyhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHNtaWxleXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyksIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZmFkZUluTGVmdCcpXHJcbiAgICB9KTtcclxuICAgIGZlZWxpbmdzVGV4dEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgZmVlbGluZ3NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdmYWRlSW5MZWZ0Jyk7XHJcbiAgICB1c2VyTW9vZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgfSwgMjAwKVxyXG59O1xyXG5cclxuXHJcbi8vIEN1cnJlbnQgZGF0ZSBnZW5lcmF0b3IuXHJcbmNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApLnJlcGxhY2UoLy0vZywnLycpO1xyXG5cclxuLy8gRnVuY3Rpb24gZm9yIGFzc2lnbmluZyB0aGUgdXNlcnMgc3VibWl0dGVkIG1vb2QgdG8gbG9jYWwgc3RvcmFnZVxyXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UodXNlck1vb2RFbnRyeSwgdXNlck1vb2ROb3RlKXtcclxuICBsZXQgdXNlck1vb2RPYmogPSB7XHJcbiAgICAnZGF0ZSc6IGN1ckRhdGUsXHJcbiAgICAndXNlcm1vb2QnOiB1c2VyTW9vZEVudHJ5LFxyXG4gICAgJ25vdGUnOiB1c2VyTW9vZE5vdGVcclxuICB9XHJcbiAgbGV0IHVzZXJNb29kQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyZW50cnknKSkgfHwgW107XHJcbiAgdXNlck1vb2RBcnJheS5wdXNoKHVzZXJNb29kT2JqKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmVudHJ5JywgSlNPTi5zdHJpbmdpZnkodXNlck1vb2RBcnJheSkpO1xyXG59O1xyXG5cclxuLy8gRnVuY3Rpb24gZm9yIHBhc3NpbmcgdXNlciBzdWJtaXR0ZWQgbW9vZCBkYXRhIHRvIHRoZSBEQi5cclxuZnVuY3Rpb24gcG9zdERhdGEodXNlck1vb2RFbnRyeSwgdXNlck1vb2ROb3RlKXtcclxuICBsZXQgdXNlckRhdGEgPSB7XHJcbiAgICBtb29kOiB1c2VyTW9vZEVudHJ5LFxyXG4gICAgbm90ZTogdXNlck1vb2ROb3RlXHJcbiAgfVxyXG4gIHJldHVybiBmZXRjaCgnL21vb2QvYWRkJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gIH0pXHJcbn1cclxuXHJcbmxldCBwaWNrZWRNb29kID0gMDtcclxubGV0IG1vb2ROb3RlID0gJyc7XHJcbmxldCB1c2VyTW9vZCA9IFtdO1xyXG5cclxuXHJcblxyXG4vLyBHZXQgdGhlIG1lZGlhbiBtb29kIHZhbHVlIGZyb20gdGhlIHVzZXJNb29kIGFycmF5LlxyXG5jb25zdCB1c2VyTWVkaWFuTW9vZCA9IGFyciA9PiBhcnIucmVkdWNlKChhLGIpID0+IGEgKyBiLCAwKSAvIHVzZXJNb29kLmxlbmd0aDtcclxuXHJcbnNoYXJlRmVlbGluZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbnRlckZlZWxpbmdzKTtcclxuXHJcblxyXG4vLyBBc3NpZ24gY2xpY2tMaXN0ZW5lciBmb3IgZWFjaCBzbWlsZXkuXHJcbnNtaWxleXMuZm9yRWFjaChzbWlsZXkgPT4gc21pbGV5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICBzbWlsZXlzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BpY2tlZE1vb2QnKSk7XHJcbiAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdwaWNrZWRNb29kJyk7XHJcbiAgcGlja2VkTW9vZCA9IHBhcnNlSW50KHNtaWxleS5kYXRhc2V0Lm1vb2QpXHJcbn0pKTtcclxuXHJcblxyXG4vLyBTdWJtaXQgZmVlbGluZ3MgY2xpY2sgbGlzdGVuZXIsIHRvZ2dsaW5nIHRoZSBtb2RhbHMgYWZ0ZXIgc3VibWl0dGVkIGFuZCBzYXZlZCBpbiBsb2NhbCBzdG9yYWdlLlxyXG5zdWJtaXRGZWVsaWducy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgbW9vZE5vdGUgPSBKU09OLnN0cmluZ2lmeShtb29kTm90ZVRleHRhcmVhLnZhbHVlKTtcclxuICBzZXRMb2NhbFN0b3JhZ2UocGlja2VkTW9vZCwgbW9vZE5vdGUpO1xyXG4gIHBvc3REYXRhKHBpY2tlZE1vb2QsIG1vb2ROb3RlKVxyXG4gIG1vb2ROb3RlVGV4dGFyZWEudmFsdWUgPSAnJztcclxuICBwaWNrZWRNb29kID0gMDtcclxuICB0b2dnbGVNb2RhbCgpO1xyXG4gIHRvZ2dsZVN1Y2Nlc3NNZXNzYWdlKCk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICB0b2dnbGVTdWNjZXNzTWVzc2FnZSgpO1xyXG4gIH0sIDMwMDApXHJcbn0pO1xyXG5cclxuLy8gUXVlcnkgU2VsZWN0b3JzIGZvciB0aGUgbW9kYWxzLlxyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaWdnZXInKTtcclxuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XHJcbmNvbnN0IHN1Y2Nlc3NNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLW1vZGFsJyk7XHJcblxyXG5cclxuLy8gRnVuY3Rpb25zIGZvciB0b2dnbGluZyB0aGUgbW9kYWxzLlxyXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpe1xyXG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKXtcclxuICBzdWNjZXNzTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbC1zdWNjZXNzJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcclxuICBpZihldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XHJcbiAgICB0b2dnbGVNb2RhbCgpO1xyXG4gIH1cclxufVxyXG5cclxudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKTtcclxuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdpbmRvd09uQ2xpY2spO1xyXG5cclxuXHJcbi8vIFR5cGV3cml0ZXIgZnVuY3Rpb25hbGl0eVxyXG5jb25zdCBUeXBlV3JpdGVyID0gZnVuY3Rpb24odHh0RWxlbWVudCwgd29yZHMsIHdhaXQgPSAzMDAwKSB7XHJcbiAgdGhpcy50eHRFbGVtZW50ID0gdHh0RWxlbWVudFxyXG4gIHRoaXMud29yZHMgPSB3b3Jkc1xyXG4gIHRoaXMudHh0ID0gJydcclxuICB0aGlzLndvcmRJbmRleCA9IDBcclxuICB0aGlzLndhaXQgPSBwYXJzZUludCh3YWl0LCAxMClcclxuICB0aGlzLnR5cGUoKVxyXG4gIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlXHJcbn1cclxuXHJcbi8vIFR5cGUgbWV0aG9kXHJcblR5cGVXcml0ZXIucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbigpIHtcclxuICAvLyBDdXJyZW50IGluZGV4IG9mIHdvcmRcclxuICBjb25zdCBjdXJyZW50ID0gdGhpcy53b3JkSW5kZXggJSB0aGlzLndvcmRzLmxlbmd0aFxyXG4gIC8vIEdldCBmdWxsIHRleHQgb2YgY3VycmVudCB3b3JkXHJcbiAgY29uc3QgZnVsbFR4dCA9IHRoaXMud29yZHNbY3VycmVudF1cclxuICAvLyBHZXQgdGhlIGN1cnNvclxyXG4gIGxldCBjdXJzb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWhlYWRlcicpLCAnOmFmdGVyJylcclxuICBcclxuXHJcbiAgLy8gQ2hlY2sgaWYgZGVsZXRpbmdcclxuICBpZih0aGlzLmlzRGVsZXRpbmcpIHtcclxuICAgIC8vIERlbGV0ZSBhIGNoYXJhY3RlclxyXG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKVxyXG4gICAgLy8gSGlkZSB0aGUgY3Vyc29yIHdoZW4gdHlwaW5nXHJcbiAgICBjdXJzb3IgPSAnJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBBZGQgYSBjaGFyYWN0ZXJcclxuICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSlcclxuICAgIC8vIEhpZGUgdGhlIGN1cnNvciB3aGVuIHR5cGluZ1xyXG4gICAgY3Vyc29yID0gJydcclxuICB9XHJcblxyXG4gIC8vIEluc2VydCB0eHQgaW50byBlbGVtZW50XHJcbiAgdGhpcy50eHRFbGVtZW50LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInR4dFwiPiR7dGhpcy50eHR9PC9zcGFuPmBcclxuICBcclxuXHJcbiAgLy8gSW5pdGlhbCBUeXBlIHNwZWVkXHJcbiAgbGV0IHR5cGVTcGVlZCA9IDMwMFxyXG5cclxuICBpZih0aGlzLmlzRGVsZXRpbmcpIHtcclxuICAgIHR5cGVTcGVlZCAvPSAyXHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiB3b3JkIGlzIGNvbXBsZXRlXHJcbiAgaWYoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xyXG4gICAgLy8gTWFrZSBhIHBhdXNlIGF0IHRoZSBlbmQgb2YgZWFjaCB3b3JkXHJcbiAgICB0eXBlU3BlZWQgPSB0aGlzLndhaXRcclxuICAgIC8vIFNob3cgdGhlIGN1cnNvciB3aGVuIG5vdCB0eXBpbmdcclxuXHJcbiAgICAvLyBTZXQgZGVsZXRlIHRvIHRydWVcclxuICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWVcclxuICB9IGVsc2UgaWYodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSAnJykge1xyXG4gICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2VcclxuICAgIC8vIE1vdmUgb24gdG8gdGhlIG5leHQgd29yZFxyXG4gICAgdGhpcy53b3JkSW5kZXgrK1xyXG4gICAgLy8gUGF1c2UgYmVmb3JlIG5ldyB3b3JkIHN0YXJ0cyB0eXBpbmdcclxuICAgIHR5cGVTcGVlZCA9IDUwMFxyXG4gICAgXHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50eXBlKCksIHR5cGVTcGVlZClcclxufVxyXG5cclxuLy8gSW5pdCBvbiBET00gTG9hZFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdClcclxuXHJcbi8vIEluaXQgYXBwXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgY29uc3QgdHh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcicpXHJcbiAgY29uc3Qgd29yZHMgPSBKU09OLnBhcnNlKHR4dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXdvcmRzJykpXHJcbiAgY29uc3Qgd2FpdCA9IHR4dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXdhaXQnKVxyXG4gIC8vIEluaXQgVHlwZXdyaXRlclxyXG4gIG5ldyBUeXBlV3JpdGVyKHR4dEVsZW1lbnQsIHdvcmRzLCB3YWl0KVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });