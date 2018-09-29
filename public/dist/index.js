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

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Query Selectors\nvar smileys = _toConsumableArray(document.querySelectorAll('.smiley'));\n\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar userMoodContainer = document.querySelector('#user-mood-container');\nvar moodNoteTextarea = document.querySelector('#mood-note');\nvar submitFeeligns = document.querySelector('#submit-feelings'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n    userMoodContainer.classList.remove('hide');\n  }, 200);\n}\n\n; // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for assigning the users submitted mood to local storage\n\nfunction setLocalStorage(userMoodEntry, userMoodNote) {\n  var userMoodObj = {\n    'date': curDate,\n    'usermood': userMoodEntry,\n    'note': userMoodNote\n  };\n  var userMoodArray = JSON.parse(localStorage.getItem('userentry')) || [];\n  userMoodArray.push(userMoodObj);\n  localStorage.setItem('userentry', JSON.stringify(userMoodArray));\n}\n\n; // Function for passing user submitted mood data to the DB.\n\nfunction postData(userMoodEntry, userMoodNote) {\n  var userData = {\n    mood: userMoodEntry,\n    note: userMoodNote\n  };\n  return fetch('/mood/add', {\n    method: 'POST',\n    body: JSON.stringify(userData),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    console.log('Hyeo this far');\n  });\n}\n\nvar pickedMood = 0;\nvar moodNote = '';\nvar userMood = []; // Get the median mood value from the userMood array.\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Assign clickListener for each smiley.\n\nsmileys.forEach(function (smiley) {\n  return smiley.addEventListener('click', function () {\n    smileys.forEach(function (item) {\n      return item.classList.remove('pickedMood');\n    });\n    event.currentTarget.classList.add('pickedMood');\n    pickedMood = parseInt(smiley.dataset.mood);\n  });\n}); // Submit feelings click listener, toggling the modals after submitted and saved in local storage.\n\nsubmitFeeligns.addEventListener('click', function () {\n  moodNote = JSON.stringify(moodNoteTextarea.value);\n  setLocalStorage(pickedMood, moodNote);\n  postData(pickedMood, moodNote);\n  moodNoteTextarea.value = '';\n  pickedMood = 0;\n  toggleModal();\n  toggleSuccessMessage();\n  setTimeout(function () {\n    toggleSuccessMessage();\n  }, 3000);\n}); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick); // Typewriter functionality\n\nvar TypeWriter = function TypeWriter(txtElement, words) {\n  var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;\n  this.txtElement = txtElement;\n  this.words = words;\n  this.txt = '';\n  this.wordIndex = 0;\n  this.wait = parseInt(wait, 10);\n  this.type();\n  this.isDeleting = false;\n}; // Type method\n\n\nTypeWriter.prototype.type = function () {\n  var _this = this;\n\n  // Current index of word\n  var current = this.wordIndex % this.words.length; // Get full text of current word\n\n  var fullTxt = this.words[current]; // Check if deleting\n\n  if (this.isDeleting) {\n    // Delete a character\n    this.txt = fullTxt.substring(0, this.txt.length - 1);\n  } else {\n    // Add a character\n    this.txt = fullTxt.substring(0, this.txt.length + 1);\n  } // Insert txt into element\n\n\n  this.txtElement.innerHTML = \"<span class=\\\"txt\\\">\".concat(this.txt, \"</span>\");\n  var cursor = document.querySelector('.txt'); // Make cursor blink\n\n  function cursorBlinker() {\n    cursor.classList.toggle('hideCursor');\n  } // Initial Type speed\n\n\n  var typeSpeed = 300;\n\n  if (this.isDeleting) {\n    typeSpeed /= 2;\n  } // Check if word is complete\n\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    // Make a pause at the end of each word\n    typeSpeed = this.wait; //setInterval(cursorBlinker, 200)\n    // Set delete to true\n\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false; // Move on to the next word\n\n    this.wordIndex++; // Pause before new word starts typing\n\n    typeSpeed = 500; //setInterval(cursorBlinker, 200)\n  }\n\n  setTimeout(function () {\n    return _this.type();\n  }, typeSpeed);\n}; // Init on DOM Load\n\n\ndocument.addEventListener('DOMContentLoaded', init); // Init app\n\nfunction init() {\n  var txtElement = document.querySelector('.txt-type');\n  var words = JSON.parse(txtElement.getAttribute('data-words'));\n  var wait = txtElement.getAttribute('data-wait'); // Init Typewriter\n\n  new TypeWriter(txtElement, words, wait);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXG5jb25zdCBzbWlsZXlzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbWlsZXknKV07XG5jb25zdCBmZWVsaW5nc1RleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYXJlYS1mZWVsaW5ncycpXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJyk7XG5jb25zdCBtb29kTGVhZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9vZC1sZWFkJyk7XG5jb25zdCB1c2VyTW9vZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLW1vb2QtY29udGFpbmVyJyk7XG5jb25zdCBtb29kTm90ZVRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vb2Qtbm90ZScpO1xuY29uc3Qgc3VibWl0RmVlbGlnbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWZlZWxpbmdzJyk7XG5cbi8vIEZ1bmN0aW9uIGZvciB0b2dnbGluZyB0aGUgbW9kYWwgPj4+IE1PVkUgTU9EQUwgSEVSRSA8PDxcbmZ1bmN0aW9uIGVudGVyRmVlbGluZ3MoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBzbWlsZXlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSwgaXRlbS5jbGFzc0xpc3QuYWRkKCdmYWRlSW5MZWZ0JylcbiAgICB9KTtcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkxlZnQnKTtcbiAgICB1c2VyTW9vZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sIDIwMClcbn07XG5cblxuLy8gQ3VycmVudCBkYXRlIGdlbmVyYXRvci5cbmNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApLnJlcGxhY2UoLy0vZywnLycpO1xuXG4vLyBGdW5jdGlvbiBmb3IgYXNzaWduaW5nIHRoZSB1c2VycyBzdWJtaXR0ZWQgbW9vZCB0byBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UodXNlck1vb2RFbnRyeSwgdXNlck1vb2ROb3RlKXtcbiAgbGV0IHVzZXJNb29kT2JqID0ge1xuICAgICdkYXRlJzogY3VyRGF0ZSxcbiAgICAndXNlcm1vb2QnOiB1c2VyTW9vZEVudHJ5LFxuICAgICdub3RlJzogdXNlck1vb2ROb3RlXG4gIH1cbiAgbGV0IHVzZXJNb29kQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyZW50cnknKSkgfHwgW107XG4gIHVzZXJNb29kQXJyYXkucHVzaCh1c2VyTW9vZE9iaik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyZW50cnknLCBKU09OLnN0cmluZ2lmeSh1c2VyTW9vZEFycmF5KSk7XG59O1xuXG4vLyBGdW5jdGlvbiBmb3IgcGFzc2luZyB1c2VyIHN1Ym1pdHRlZCBtb29kIGRhdGEgdG8gdGhlIERCLlxuZnVuY3Rpb24gcG9zdERhdGEodXNlck1vb2RFbnRyeSwgdXNlck1vb2ROb3RlKXtcbiAgbGV0IHVzZXJEYXRhID0ge1xuICAgIG1vb2Q6IHVzZXJNb29kRW50cnksXG4gICAgbm90ZTogdXNlck1vb2ROb3RlXG4gIH1cbiAgcmV0dXJuIGZldGNoKCcvbW9vZC9hZGQnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pXG4gIC50aGVuKHJlcyA9PiB7XG4gICAgY29uc29sZS5sb2coJ0h5ZW8gdGhpcyBmYXInKVxuICB9KVxufVxuXG5sZXQgcGlja2VkTW9vZCA9IDA7XG5sZXQgbW9vZE5vdGUgPSAnJztcbmxldCB1c2VyTW9vZCA9IFtdO1xuXG5cblxuLy8gR2V0IHRoZSBtZWRpYW4gbW9vZCB2YWx1ZSBmcm9tIHRoZSB1c2VyTW9vZCBhcnJheS5cbmNvbnN0IHVzZXJNZWRpYW5Nb29kID0gYXJyID0+IGFyci5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApIC8gdXNlck1vb2QubGVuZ3RoO1xuXG5zaGFyZUZlZWxpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW50ZXJGZWVsaW5ncyk7XG5cblxuLy8gQXNzaWduIGNsaWNrTGlzdGVuZXIgZm9yIGVhY2ggc21pbGV5Llxuc21pbGV5cy5mb3JFYWNoKHNtaWxleSA9PiBzbWlsZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBzbWlsZXlzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3BpY2tlZE1vb2QnKSk7XG4gIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgncGlja2VkTW9vZCcpO1xuICBwaWNrZWRNb29kID0gcGFyc2VJbnQoc21pbGV5LmRhdGFzZXQubW9vZClcbn0pKTtcblxuXG4vLyBTdWJtaXQgZmVlbGluZ3MgY2xpY2sgbGlzdGVuZXIsIHRvZ2dsaW5nIHRoZSBtb2RhbHMgYWZ0ZXIgc3VibWl0dGVkIGFuZCBzYXZlZCBpbiBsb2NhbCBzdG9yYWdlLlxuc3VibWl0RmVlbGlnbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBtb29kTm90ZSA9IEpTT04uc3RyaW5naWZ5KG1vb2ROb3RlVGV4dGFyZWEudmFsdWUpO1xuICBzZXRMb2NhbFN0b3JhZ2UocGlja2VkTW9vZCwgbW9vZE5vdGUpO1xuICBwb3N0RGF0YShwaWNrZWRNb29kLCBtb29kTm90ZSlcbiAgbW9vZE5vdGVUZXh0YXJlYS52YWx1ZSA9ICcnO1xuICBwaWNrZWRNb29kID0gMDtcbiAgdG9nZ2xlTW9kYWwoKTtcbiAgdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKTtcbiAgfSwgMzAwMClcbn0pO1xuXG4vLyBRdWVyeSBTZWxlY3RvcnMgZm9yIHRoZSBtb2RhbHMuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyJyk7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbmNvbnN0IHN1Y2Nlc3NNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLW1vZGFsJyk7XG5cblxuLy8gRnVuY3Rpb25zIGZvciB0b2dnbGluZyB0aGUgbW9kYWxzLlxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKXtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbCcpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTdWNjZXNzTWVzc2FnZSgpe1xuICBzdWNjZXNzTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbC1zdWNjZXNzJyk7XG59XG5cbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcbiAgaWYoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIHRvZ2dsZU1vZGFsKCk7XG4gIH1cbn1cblxudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKTtcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9kYWwpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljayk7XG5cblxuLy8gVHlwZXdyaXRlciBmdW5jdGlvbmFsaXR5XG5jb25zdCBUeXBlV3JpdGVyID0gZnVuY3Rpb24odHh0RWxlbWVudCwgd29yZHMsIHdhaXQgPSAzMDAwKSB7XG4gIHRoaXMudHh0RWxlbWVudCA9IHR4dEVsZW1lbnRcbiAgdGhpcy53b3JkcyA9IHdvcmRzXG4gIHRoaXMudHh0ID0gJydcbiAgdGhpcy53b3JkSW5kZXggPSAwXG4gIHRoaXMud2FpdCA9IHBhcnNlSW50KHdhaXQsIDEwKVxuICB0aGlzLnR5cGUoKVxuICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZVxufVxuXG4vLyBUeXBlIG1ldGhvZFxuVHlwZVdyaXRlci5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBDdXJyZW50IGluZGV4IG9mIHdvcmRcbiAgY29uc3QgY3VycmVudCA9IHRoaXMud29yZEluZGV4ICUgdGhpcy53b3Jkcy5sZW5ndGhcbiAgLy8gR2V0IGZ1bGwgdGV4dCBvZiBjdXJyZW50IHdvcmRcbiAgY29uc3QgZnVsbFR4dCA9IHRoaXMud29yZHNbY3VycmVudF1cblxuICAvLyBDaGVjayBpZiBkZWxldGluZ1xuICBpZih0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICAvLyBEZWxldGUgYSBjaGFyYWN0ZXJcbiAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpXG4gIH0gZWxzZSB7XG4gICAgLy8gQWRkIGEgY2hhcmFjdGVyXG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKVxuICB9XG5cbiAgLy8gSW5zZXJ0IHR4dCBpbnRvIGVsZW1lbnRcbiAgdGhpcy50eHRFbGVtZW50LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInR4dFwiPiR7dGhpcy50eHR9PC9zcGFuPmBcbiAgY29uc3QgY3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR4dCcpXG4gIC8vIE1ha2UgY3Vyc29yIGJsaW5rXG4gIGZ1bmN0aW9uIGN1cnNvckJsaW5rZXIoKSB7XG4gICAgY3Vyc29yLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVDdXJzb3InKVxuICB9XG5cbiAgLy8gSW5pdGlhbCBUeXBlIHNwZWVkXG4gIGxldCB0eXBlU3BlZWQgPSAzMDBcblxuICBpZih0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICB0eXBlU3BlZWQgLz0gMlxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd29yZCBpcyBjb21wbGV0ZVxuICBpZighdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XG4gICAgLy8gTWFrZSBhIHBhdXNlIGF0IHRoZSBlbmQgb2YgZWFjaCB3b3JkXG4gICAgdHlwZVNwZWVkID0gdGhpcy53YWl0XG4gICAgLy9zZXRJbnRlcnZhbChjdXJzb3JCbGlua2VyLCAyMDApXG4gICAgLy8gU2V0IGRlbGV0ZSB0byB0cnVlXG4gICAgdGhpcy5pc0RlbGV0aW5nID0gdHJ1ZVxuICB9IGVsc2UgaWYodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSAnJykge1xuICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlXG4gICAgLy8gTW92ZSBvbiB0byB0aGUgbmV4dCB3b3JkXG4gICAgdGhpcy53b3JkSW5kZXgrK1xuICAgIC8vIFBhdXNlIGJlZm9yZSBuZXcgd29yZCBzdGFydHMgdHlwaW5nXG4gICAgdHlwZVNwZWVkID0gNTAwXG4gICAgLy9zZXRJbnRlcnZhbChjdXJzb3JCbGlua2VyLCAyMDApXG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnR5cGUoKSwgdHlwZVNwZWVkKVxufVxuXG4vLyBJbml0IG9uIERPTSBMb2FkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdClcblxuLy8gSW5pdCBhcHBcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IHR4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHh0LXR5cGUnKVxuICBjb25zdCB3b3JkcyA9IEpTT04ucGFyc2UodHh0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd29yZHMnKSlcbiAgY29uc3Qgd2FpdCA9IHR4dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXdhaXQnKVxuICAvLyBJbml0IFR5cGV3cml0ZXJcbiAgbmV3IFR5cGVXcml0ZXIodHh0RWxlbWVudCwgd29yZHMsIHdhaXQpXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });