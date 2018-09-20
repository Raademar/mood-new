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

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Query Selectors\nvar smileys = _toConsumableArray(document.querySelectorAll('.smiley'));\n\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar userMoodContainer = document.querySelector('#user-mood-container');\nvar moodNoteTextarea = document.querySelector('#mood-note');\nvar submitFeeligns = document.querySelector('#submit-feelings'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n    userMoodContainer.classList.remove('hide');\n  }, 200);\n}\n\n; // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for assigning the users submitted mood to local storage\n\nfunction setLocalStorage(userMoodEntry, userMoodNote) {\n  var userMoodObj = {\n    'date': curDate,\n    'usermood': userMoodEntry,\n    'note': userMoodNote\n  };\n  var userMoodArray = JSON.parse(localStorage.getItem('userentry')) || [];\n  userMoodArray.push(userMoodObj);\n  localStorage.setItem('userentry', JSON.stringify(userMoodArray));\n}\n\n; // THIS IS NOT WORKING, COME UP WITH NEW SOLUTION\n// async function insertIntoDB(userMoodEntry, userMoodNote){\n//   const r = await db.collection('userentries').insertOne({date: curDate ,mood: userMoodEntry, note: userMoodNote});\n//   assert.equal(1, r.insertedCount);\n// };\n\nvar pickedMood = 0;\nvar moodNote = '';\nvar userMood = []; // Get the median mood value from the userMood array.\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Assign clickListener for each smiley.\n\nsmileys.forEach(function (smiley) {\n  return smiley.addEventListener('click', function () {\n    smileys.forEach(function (item) {\n      return item.classList.remove('pickedMood');\n    });\n    event.currentTarget.classList.add('pickedMood');\n    pickedMood = parseInt(smiley.dataset.mood);\n  });\n}); // Submit feelings click listener, toggling the modals after submitted and saved in local storage.\n\nsubmitFeeligns.addEventListener('click', function () {\n  moodNote = JSON.stringify(moodNoteTextarea.value);\n  setLocalStorage(pickedMood, moodNote); // insertIntoDB(pickedMood, moodNote);\n\n  moodNoteTextarea.value = '';\n  pickedMood = 0;\n  toggleModal();\n  toggleSuccessMessage();\n  setTimeout(function () {\n    toggleSuccessMessage();\n  }, 3000);\n}); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXG5jb25zdCBzbWlsZXlzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbWlsZXknKV07XG5jb25zdCBmZWVsaW5nc1RleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYXJlYS1mZWVsaW5ncycpXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJyk7XG5jb25zdCBtb29kTGVhZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9vZC1sZWFkJyk7XG5jb25zdCB1c2VyTW9vZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLW1vb2QtY29udGFpbmVyJyk7XG5jb25zdCBtb29kTm90ZVRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vb2Qtbm90ZScpO1xuY29uc3Qgc3VibWl0RmVlbGlnbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWZlZWxpbmdzJyk7XG5cbi8vIEZ1bmN0aW9uIGZvciB0b2dnbGluZyB0aGUgbW9kYWwgPj4+IE1PVkUgTU9EQUwgSEVSRSA8PDxcbmZ1bmN0aW9uIGVudGVyRmVlbGluZ3MoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBzbWlsZXlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSwgaXRlbS5jbGFzc0xpc3QuYWRkKCdmYWRlSW5MZWZ0JylcbiAgICB9KTtcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkxlZnQnKTtcbiAgICB1c2VyTW9vZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sIDIwMClcbn07XG5cblxuLy8gQ3VycmVudCBkYXRlIGdlbmVyYXRvci5cbmNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApLnJlcGxhY2UoLy0vZywnLycpO1xuXG4vLyBGdW5jdGlvbiBmb3IgYXNzaWduaW5nIHRoZSB1c2VycyBzdWJtaXR0ZWQgbW9vZCB0byBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UodXNlck1vb2RFbnRyeSwgdXNlck1vb2ROb3RlKXtcbiAgbGV0IHVzZXJNb29kT2JqID0ge1xuICAgICdkYXRlJzogY3VyRGF0ZSxcbiAgICAndXNlcm1vb2QnOiB1c2VyTW9vZEVudHJ5LFxuICAgICdub3RlJzogdXNlck1vb2ROb3RlXG4gIH1cbiAgbGV0IHVzZXJNb29kQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyZW50cnknKSkgfHwgW107XG4gIHVzZXJNb29kQXJyYXkucHVzaCh1c2VyTW9vZE9iaik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyZW50cnknLCBKU09OLnN0cmluZ2lmeSh1c2VyTW9vZEFycmF5KSk7XG59O1xuXG4vLyBUSElTIElTIE5PVCBXT1JLSU5HLCBDT01FIFVQIFdJVEggTkVXIFNPTFVUSU9OXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGluc2VydEludG9EQih1c2VyTW9vZEVudHJ5LCB1c2VyTW9vZE5vdGUpe1xuLy8gICBjb25zdCByID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcmVudHJpZXMnKS5pbnNlcnRPbmUoe2RhdGU6IGN1ckRhdGUgLG1vb2Q6IHVzZXJNb29kRW50cnksIG5vdGU6IHVzZXJNb29kTm90ZX0pO1xuLy8gICBhc3NlcnQuZXF1YWwoMSwgci5pbnNlcnRlZENvdW50KTtcbi8vIH07XG5cbmxldCBwaWNrZWRNb29kID0gMDtcbmxldCBtb29kTm90ZSA9ICcnO1xubGV0IHVzZXJNb29kID0gW107XG5cbi8vIEdldCB0aGUgbWVkaWFuIG1vb2QgdmFsdWUgZnJvbSB0aGUgdXNlck1vb2QgYXJyYXkuXG5jb25zdCB1c2VyTWVkaWFuTW9vZCA9IGFyciA9PiBhcnIucmVkdWNlKChhLGIpID0+IGEgKyBiLCAwKSAvIHVzZXJNb29kLmxlbmd0aDtcblxuc2hhcmVGZWVsaW5ncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVudGVyRmVlbGluZ3MpO1xuXG5cbi8vIEFzc2lnbiBjbGlja0xpc3RlbmVyIGZvciBlYWNoIHNtaWxleS5cbnNtaWxleXMuZm9yRWFjaChzbWlsZXkgPT4gc21pbGV5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgc21pbGV5cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwaWNrZWRNb29kJykpO1xuICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BpY2tlZE1vb2QnKTtcbiAgcGlja2VkTW9vZCA9IHBhcnNlSW50KHNtaWxleS5kYXRhc2V0Lm1vb2QpXG59KSk7XG5cblxuLy8gU3VibWl0IGZlZWxpbmdzIGNsaWNrIGxpc3RlbmVyLCB0b2dnbGluZyB0aGUgbW9kYWxzIGFmdGVyIHN1Ym1pdHRlZCBhbmQgc2F2ZWQgaW4gbG9jYWwgc3RvcmFnZS5cbnN1Ym1pdEZlZWxpZ25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgbW9vZE5vdGUgPSBKU09OLnN0cmluZ2lmeShtb29kTm90ZVRleHRhcmVhLnZhbHVlKTtcbiAgc2V0TG9jYWxTdG9yYWdlKHBpY2tlZE1vb2QsIG1vb2ROb3RlKTtcbiAgLy8gaW5zZXJ0SW50b0RCKHBpY2tlZE1vb2QsIG1vb2ROb3RlKTtcbiAgbW9vZE5vdGVUZXh0YXJlYS52YWx1ZSA9ICcnO1xuICBwaWNrZWRNb29kID0gMDtcbiAgdG9nZ2xlTW9kYWwoKTtcbiAgdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKTtcbiAgfSwgMzAwMClcbn0pO1xuXG4vLyBRdWVyeSBTZWxlY3RvcnMgZm9yIHRoZSBtb2RhbHMuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyJyk7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbmNvbnN0IHN1Y2Nlc3NNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLW1vZGFsJyk7XG5cblxuLy8gRnVuY3Rpb25zIGZvciB0b2dnbGluZyB0aGUgbW9kYWxzLlxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKXtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbCcpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTdWNjZXNzTWVzc2FnZSgpe1xuICBzdWNjZXNzTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tb2RhbC1zdWNjZXNzJyk7XG59XG5cbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcbiAgaWYoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIHRvZ2dsZU1vZGFsKCk7XG4gIH1cbn1cblxudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGFsKTtcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9kYWwpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljayk7XG5cblxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });