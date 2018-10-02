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

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Query Selectors\nvar smileys = _toConsumableArray(document.querySelectorAll('.smiley'));\n\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar userMoodContainer = document.querySelector('#user-mood-container');\nvar moodNoteTextarea = document.querySelector('#mood-note');\nvar submitFeeligns = document.querySelector('#submit-feelings'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n    userMoodContainer.classList.remove('hide');\n  }, 200);\n}\n\n; // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for assigning the users submitted mood to local storage\n\nfunction setLocalStorage(userMoodEntry, userMoodNote) {\n  var userMoodObj = {\n    'date': curDate,\n    'usermood': userMoodEntry,\n    'note': userMoodNote\n  };\n  var userMoodArray = JSON.parse(localStorage.getItem('userentry')) || [];\n  userMoodArray.push(userMoodObj);\n  localStorage.setItem('userentry', JSON.stringify(userMoodArray));\n}\n\n; // Function for passing user submitted mood data to the DB.\n\nfunction postData(userMoodEntry, userMoodNote) {\n  var userData = {\n    mood: userMoodEntry,\n    note: userMoodNote\n  };\n  return fetch('/mood/add', {\n    method: 'POST',\n    body: JSON.stringify(userData),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  });\n}\n\nvar pickedMood = 0;\nvar moodNote = '';\nvar userMood = []; // Get the median mood value from the userMood array.\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Assign clickListener for each smiley.\n\nsmileys.forEach(function (smiley) {\n  return smiley.addEventListener('click', function () {\n    smileys.forEach(function (item) {\n      return item.classList.remove('pickedMood');\n    });\n    event.currentTarget.classList.add('pickedMood');\n    pickedMood = parseInt(smiley.dataset.mood);\n  });\n}); // Submit feelings click listener, toggling the modals after submitted and saved in local storage.\n\nsubmitFeeligns.addEventListener('click', function () {\n  moodNote = JSON.stringify(moodNoteTextarea.value);\n  setLocalStorage(pickedMood, moodNote);\n  postData(pickedMood, moodNote);\n  moodNoteTextarea.value = '';\n  pickedMood = 0;\n  toggleModal();\n  toggleSuccessMessage();\n  setTimeout(function () {\n    toggleSuccessMessage();\n  }, 3000);\n}); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick); // Typewriter functionality\n\nvar TypeWriter = function TypeWriter(txtElement, words) {\n  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n  this.txtElement = txtElement;\n  this.words = words;\n  this.txt = '';\n  this.wordIndex = 0;\n  this.wait = parseInt(wait, 10);\n  this.type();\n  this.isDeleting = false;\n}; // Type method\n\n\nTypeWriter.prototype.type = function () {\n  var _this = this;\n\n  // Current index of word\n  var current = this.wordIndex % this.words.length; // Get full text of current word\n\n  var fullTxt = this.words[current]; // Get the cursor\n\n  var cursor = window.getComputedStyle(document.getElementById('main-header'), ':after'); // Check if deleting\n\n  if (this.isDeleting) {\n    // Delete a character\n    this.txt = fullTxt.substring(0, this.txt.length - 1); // Hide the cursor when typing\n\n    cursor = '';\n  } else {\n    // Add a character\n    this.txt = fullTxt.substring(0, this.txt.length + 1); // Hide the cursor when typing\n\n    cursor = '';\n  } // Insert txt into element\n\n\n  this.txtElement.innerHTML = \"<span class=\\\"txt\\\">\".concat(this.txt, \"</span>\"); // Initial Type speed\n\n  var typeSpeed = 300;\n\n  if (this.isDeleting) {\n    typeSpeed /= 2;\n  } // Check if word is complete\n\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    // Make a pause at the end of each word\n    typeSpeed = this.wait; // Show the cursor when not typing\n    // Set delete to true\n\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false; // Move on to the next word\n\n    this.wordIndex++; // Pause before new word starts typing\n\n    typeSpeed = 500;\n  }\n\n  setTimeout(function () {\n    return _this.type();\n  }, typeSpeed);\n}; // Init on DOM Load\n\n\ndocument.addEventListener('DOMContentLoaded', init); // Init app\n\nfunction init() {\n  var txtElement = document.querySelector('.main-header');\n  var words = JSON.parse(txtElement.getAttribute('data-words'));\n  var wait = txtElement.getAttribute('data-wait'); // Init Typewriter\n\n  new TypeWriter(txtElement, words, wait);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXG5jb25zdCBzbWlsZXlzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbWlsZXknKV07XG5jb25zdCBmZWVsaW5nc1RleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYXJlYS1mZWVsaW5ncycpXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJyk7XG5jb25zdCBtb29kTGVhZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9vZC1sZWFkJyk7XG5jb25zdCB1c2VyTW9vZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLW1vb2QtY29udGFpbmVyJyk7XG5jb25zdCBtb29kTm90ZVRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vb2Qtbm90ZScpO1xuY29uc3Qgc3VibWl0RmVlbGlnbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWZlZWxpbmdzJyk7XG5cbi8vIEZ1bmN0aW9uIGZvciB0b2dnbGluZyB0aGUgbW9kYWwgPj4+IE1PVkUgTU9EQUwgSEVSRSA8PDxcbmZ1bmN0aW9uIGVudGVyRmVlbGluZ3MoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBzbWlsZXlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSwgaXRlbS5jbGFzc0xpc3QuYWRkKCdmYWRlSW5MZWZ0JylcbiAgICB9KTtcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkxlZnQnKTtcbiAgICB1c2VyTW9vZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sIDIwMClcbn07XG5cblxuLy8gQ3VycmVudCBkYXRlIGdlbmVyYXRvci5cbmNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApLnJlcGxhY2UoLy0vZywnLycpO1xuXG4vLyBGdW5jdGlvbiBmb3IgYXNzaWduaW5nIHRoZSB1c2VycyBzdWJtaXR0ZWQgbW9vZCB0byBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UodXNlck1vb2RFbnRyeSwgdXNlck1vb2ROb3RlKXtcbiAgbGV0IHVzZXJNb29kT2JqID0ge1xuICAgICdkYXRlJzogY3VyRGF0ZSxcbiAgICAndXNlcm1vb2QnOiB1c2VyTW9vZEVudHJ5LFxuICAgICdub3RlJzogdXNlck1vb2ROb3RlXG4gIH1cbiAgbGV0IHVzZXJNb29kQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyZW50cnknKSkgfHwgW107XG4gIHVzZXJNb29kQXJyYXkucHVzaCh1c2VyTW9vZE9iaik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyZW50cnknLCBKU09OLnN0cmluZ2lmeSh1c2VyTW9vZEFycmF5KSk7XG59O1xuXG4vLyBGdW5jdGlvbiBmb3IgcGFzc2luZyB1c2VyIHN1Ym1pdHRlZCBtb29kIGRhdGEgdG8gdGhlIERCLlxuZnVuY3Rpb24gcG9zdERhdGEodXNlck1vb2RFbnRyeSwgdXNlck1vb2ROb3RlKXtcbiAgbGV0IHVzZXJEYXRhID0ge1xuICAgIG1vb2Q6IHVzZXJNb29kRW50cnksXG4gICAgbm90ZTogdXNlck1vb2ROb3RlXG4gIH1cbiAgcmV0dXJuIGZldGNoKCcvbW9vZC9hZGQnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pXG59XG5cbmxldCBwaWNrZWRNb29kID0gMDtcbmxldCBtb29kTm90ZSA9ICcnO1xubGV0IHVzZXJNb29kID0gW107XG5cblxuXG4vLyBHZXQgdGhlIG1lZGlhbiBtb29kIHZhbHVlIGZyb20gdGhlIHVzZXJNb29kIGFycmF5LlxuY29uc3QgdXNlck1lZGlhbk1vb2QgPSBhcnIgPT4gYXJyLnJlZHVjZSgoYSxiKSA9PiBhICsgYiwgMCkgLyB1c2VyTW9vZC5sZW5ndGg7XG5cbnNoYXJlRmVlbGluZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbnRlckZlZWxpbmdzKTtcblxuXG4vLyBBc3NpZ24gY2xpY2tMaXN0ZW5lciBmb3IgZWFjaCBzbWlsZXkuXG5zbWlsZXlzLmZvckVhY2goc21pbGV5ID0+IHNtaWxleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIHNtaWxleXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGlja2VkTW9vZCcpKTtcbiAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdwaWNrZWRNb29kJyk7XG4gIHBpY2tlZE1vb2QgPSBwYXJzZUludChzbWlsZXkuZGF0YXNldC5tb29kKVxufSkpO1xuXG5cbi8vIFN1Ym1pdCBmZWVsaW5ncyBjbGljayBsaXN0ZW5lciwgdG9nZ2xpbmcgdGhlIG1vZGFscyBhZnRlciBzdWJtaXR0ZWQgYW5kIHNhdmVkIGluIGxvY2FsIHN0b3JhZ2UuXG5zdWJtaXRGZWVsaWducy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIG1vb2ROb3RlID0gSlNPTi5zdHJpbmdpZnkobW9vZE5vdGVUZXh0YXJlYS52YWx1ZSk7XG4gIHNldExvY2FsU3RvcmFnZShwaWNrZWRNb29kLCBtb29kTm90ZSk7XG4gIHBvc3REYXRhKHBpY2tlZE1vb2QsIG1vb2ROb3RlKVxuICBtb29kTm90ZVRleHRhcmVhLnZhbHVlID0gJyc7XG4gIHBpY2tlZE1vb2QgPSAwO1xuICB0b2dnbGVNb2RhbCgpO1xuICB0b2dnbGVTdWNjZXNzTWVzc2FnZSgpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0b2dnbGVTdWNjZXNzTWVzc2FnZSgpO1xuICB9LCAzMDAwKVxufSk7XG5cbi8vIFF1ZXJ5IFNlbGVjdG9ycyBmb3IgdGhlIG1vZGFscy5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaWdnZXInKTtcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpO1xuY29uc3Qgc3VjY2Vzc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MtbW9kYWwnKTtcblxuXG4vLyBGdW5jdGlvbnMgZm9yIHRvZ2dsaW5nIHRoZSBtb2RhbHMuXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpe1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vZGFsJyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVN1Y2Nlc3NNZXNzYWdlKCl7XG4gIHN1Y2Nlc3NNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vZGFsLXN1Y2Nlc3MnKTtcbn1cblxuZnVuY3Rpb24gd2luZG93T25DbGljayhldmVudCkge1xuICBpZihldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgdG9nZ2xlTW9kYWwoKTtcbiAgfVxufVxuXG50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9kYWwpO1xuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrKTtcblxuXG4vLyBUeXBld3JpdGVyIGZ1bmN0aW9uYWxpdHlcbmNvbnN0IFR5cGVXcml0ZXIgPSBmdW5jdGlvbih0eHRFbGVtZW50LCB3b3Jkcywgd2FpdCA9IDMwMDApIHtcbiAgdGhpcy50eHRFbGVtZW50ID0gdHh0RWxlbWVudFxuICB0aGlzLndvcmRzID0gd29yZHNcbiAgdGhpcy50eHQgPSAnJ1xuICB0aGlzLndvcmRJbmRleCA9IDBcbiAgdGhpcy53YWl0ID0gcGFyc2VJbnQod2FpdCwgMTApXG4gIHRoaXMudHlwZSgpXG4gIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlXG59XG5cbi8vIFR5cGUgbWV0aG9kXG5UeXBlV3JpdGVyLnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24oKSB7XG4gIC8vIEN1cnJlbnQgaW5kZXggb2Ygd29yZFxuICBjb25zdCBjdXJyZW50ID0gdGhpcy53b3JkSW5kZXggJSB0aGlzLndvcmRzLmxlbmd0aFxuICAvLyBHZXQgZnVsbCB0ZXh0IG9mIGN1cnJlbnQgd29yZFxuICBjb25zdCBmdWxsVHh0ID0gdGhpcy53b3Jkc1tjdXJyZW50XVxuICAvLyBHZXQgdGhlIGN1cnNvclxuICBsZXQgY3Vyc29yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4taGVhZGVyJyksICc6YWZ0ZXInKVxuICBcblxuICAvLyBDaGVjayBpZiBkZWxldGluZ1xuICBpZih0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICAvLyBEZWxldGUgYSBjaGFyYWN0ZXJcbiAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpXG4gICAgLy8gSGlkZSB0aGUgY3Vyc29yIHdoZW4gdHlwaW5nXG4gICAgY3Vyc29yID0gJydcbiAgfSBlbHNlIHtcbiAgICAvLyBBZGQgYSBjaGFyYWN0ZXJcbiAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpXG4gICAgLy8gSGlkZSB0aGUgY3Vyc29yIHdoZW4gdHlwaW5nXG4gICAgY3Vyc29yID0gJydcbiAgfVxuXG4gIC8vIEluc2VydCB0eHQgaW50byBlbGVtZW50XG4gIHRoaXMudHh0RWxlbWVudC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJ0eHRcIj4ke3RoaXMudHh0fTwvc3Bhbj5gXG4gIFxuXG4gIC8vIEluaXRpYWwgVHlwZSBzcGVlZFxuICBsZXQgdHlwZVNwZWVkID0gMzAwXG5cbiAgaWYodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgdHlwZVNwZWVkIC89IDJcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHdvcmQgaXMgY29tcGxldGVcbiAgaWYoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xuICAgIC8vIE1ha2UgYSBwYXVzZSBhdCB0aGUgZW5kIG9mIGVhY2ggd29yZFxuICAgIHR5cGVTcGVlZCA9IHRoaXMud2FpdFxuICAgIC8vIFNob3cgdGhlIGN1cnNvciB3aGVuIG5vdCB0eXBpbmdcblxuICAgIC8vIFNldCBkZWxldGUgdG8gdHJ1ZVxuICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWVcbiAgfSBlbHNlIGlmKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gJycpIHtcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZVxuICAgIC8vIE1vdmUgb24gdG8gdGhlIG5leHQgd29yZFxuICAgIHRoaXMud29yZEluZGV4KytcbiAgICAvLyBQYXVzZSBiZWZvcmUgbmV3IHdvcmQgc3RhcnRzIHR5cGluZ1xuICAgIHR5cGVTcGVlZCA9IDUwMFxuICAgIFxuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50eXBlKCksIHR5cGVTcGVlZClcbn1cblxuLy8gSW5pdCBvbiBET00gTG9hZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpXG5cbi8vIEluaXQgYXBwXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCB0eHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyJylcbiAgY29uc3Qgd29yZHMgPSBKU09OLnBhcnNlKHR4dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXdvcmRzJykpXG4gIGNvbnN0IHdhaXQgPSB0eHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS13YWl0JylcbiAgLy8gSW5pdCBUeXBld3JpdGVyXG4gIG5ldyBUeXBlV3JpdGVyKHR4dEVsZW1lbnQsIHdvcmRzLCB3YWl0KVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });