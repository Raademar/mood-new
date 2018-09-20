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

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Query Selectors\nvar smileys = _toConsumableArray(document.querySelectorAll('.smiley'));\n\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar userMoodContainer = document.querySelector('#user-mood-container');\nvar moodNoteTextarea = document.querySelector('#mood-note');\nvar submitFeeligns = document.querySelector('#submit-feelings'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings(e) {\n  e.preventDefault();\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n    userMoodContainer.classList.remove('hide');\n  }, 200);\n}\n\n; // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for assigning the users submitted mood to local storage\n\nfunction setLocalStorage(userMoodEntry, userMoodNote) {\n  var userMoodObj = {\n    'date': curDate,\n    'usermood': userMoodEntry,\n    'note': userMoodNote\n  };\n  var userMoodArray = JSON.parse(localStorage.getItem('userentry')) || [];\n  userMoodArray.push(userMoodObj);\n  localStorage.setItem('userentry', JSON.stringify(userMoodArray));\n}\n\n; // Fucntion for passing user submitted mood data to the DB.\n\nfunction postData(data) {\n  return fetch('/mood/add', {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (response) {\n    return console.log('Success:', JSON.stringify(response));\n  }).catch(function (error) {\n    return console.error('Error:', error);\n  });\n}\n\nvar pickedMood = 0;\nvar moodNote = '';\nvar userMood = [];\nvar userData = {\n  'mood': pickedMood,\n  'note': moodNote // Get the median mood value from the userMood array.\n\n};\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', enterFeelings); // Assign clickListener for each smiley.\n\nsmileys.forEach(function (smiley) {\n  return smiley.addEventListener('click', function () {\n    smileys.forEach(function (item) {\n      return item.classList.remove('pickedMood');\n    });\n    event.currentTarget.classList.add('pickedMood');\n    pickedMood = parseInt(smiley.dataset.mood);\n  });\n}); // Submit feelings click listener, toggling the modals after submitted and saved in local storage.\n\nsubmitFeeligns.addEventListener('click', function () {\n  moodNote = JSON.stringify(moodNoteTextarea.value);\n  setLocalStorage(pickedMood, moodNote);\n  postData(userData);\n  moodNoteTextarea.value = '';\n  pickedMood = 0;\n  toggleModal();\n  toggleSuccessMessage();\n  setTimeout(function () {\n    toggleSuccessMessage();\n  }, 3000);\n}); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.toggle('show-modal');\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    toggleModal();\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9tYWluLmpzPzNjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgU2VsZWN0b3JzXHJcbmNvbnN0IHNtaWxleXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtaWxleScpXTtcclxuY29uc3QgZmVlbGluZ3NUZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LWFyZWEtZmVlbGluZ3MnKVxyXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJyk7XHJcbmNvbnN0IG1vb2RMZWFkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb29kLWxlYWQnKTtcclxuY29uc3QgdXNlck1vb2RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1tb29kLWNvbnRhaW5lcicpO1xyXG5jb25zdCBtb29kTm90ZVRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vb2Qtbm90ZScpO1xyXG5jb25zdCBzdWJtaXRGZWVsaWducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtZmVlbGluZ3MnKTtcclxuXHJcbi8vIEZ1bmN0aW9uIGZvciB0b2dnbGluZyB0aGUgbW9kYWwgPj4+IE1PVkUgTU9EQUwgSEVSRSA8PDxcclxuZnVuY3Rpb24gZW50ZXJGZWVsaW5ncyhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHNtaWxleXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyksIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZmFkZUluTGVmdCcpXHJcbiAgICB9KTtcclxuICAgIGZlZWxpbmdzVGV4dEFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgZmVlbGluZ3NUZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdmYWRlSW5MZWZ0Jyk7XHJcbiAgICB1c2VyTW9vZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgfSwgMjAwKVxyXG59O1xyXG5cclxuXHJcbi8vIEN1cnJlbnQgZGF0ZSBnZW5lcmF0b3IuXHJcbmNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApLnJlcGxhY2UoLy0vZywnLycpO1xyXG5cclxuLy8gRnVuY3Rpb24gZm9yIGFzc2lnbmluZyB0aGUgdXNlcnMgc3VibWl0dGVkIG1vb2QgdG8gbG9jYWwgc3RvcmFnZVxyXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UodXNlck1vb2RFbnRyeSwgdXNlck1vb2ROb3RlKXtcclxuICBsZXQgdXNlck1vb2RPYmogPSB7XHJcbiAgICAnZGF0ZSc6IGN1ckRhdGUsXHJcbiAgICAndXNlcm1vb2QnOiB1c2VyTW9vZEVudHJ5LFxyXG4gICAgJ25vdGUnOiB1c2VyTW9vZE5vdGVcclxuICB9XHJcbiAgbGV0IHVzZXJNb29kQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyZW50cnknKSkgfHwgW107XHJcbiAgdXNlck1vb2RBcnJheS5wdXNoKHVzZXJNb29kT2JqKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmVudHJ5JywgSlNPTi5zdHJpbmdpZnkodXNlck1vb2RBcnJheSkpO1xyXG59O1xyXG5cclxuLy8gRnVjbnRpb24gZm9yIHBhc3NpbmcgdXNlciBzdWJtaXR0ZWQgbW9vZCBkYXRhIHRvIHRoZSBEQi5cclxuZnVuY3Rpb24gcG9zdERhdGEoZGF0YSl7XHJcbiAgcmV0dXJuIGZldGNoKCcvbW9vZC9hZGQnLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICB9KVxyXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSkpXHJcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSlcclxufVxyXG5cclxubGV0IHBpY2tlZE1vb2QgPSAwO1xyXG5sZXQgbW9vZE5vdGUgPSAnJztcclxubGV0IHVzZXJNb29kID0gW107XHJcblxyXG5sZXQgdXNlckRhdGEgPSB7XHJcbiAgJ21vb2QnOiBwaWNrZWRNb29kLFxyXG4gICdub3RlJzogbW9vZE5vdGVcclxufVxyXG5cclxuLy8gR2V0IHRoZSBtZWRpYW4gbW9vZCB2YWx1ZSBmcm9tIHRoZSB1c2VyTW9vZCBhcnJheS5cclxuY29uc3QgdXNlck1lZGlhbk1vb2QgPSBhcnIgPT4gYXJyLnJlZHVjZSgoYSxiKSA9PiBhICsgYiwgMCkgLyB1c2VyTW9vZC5sZW5ndGg7XHJcblxyXG5zaGFyZUZlZWxpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW50ZXJGZWVsaW5ncyk7XHJcblxyXG5cclxuLy8gQXNzaWduIGNsaWNrTGlzdGVuZXIgZm9yIGVhY2ggc21pbGV5LlxyXG5zbWlsZXlzLmZvckVhY2goc21pbGV5ID0+IHNtaWxleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgc21pbGV5cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwaWNrZWRNb29kJykpO1xyXG4gIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgncGlja2VkTW9vZCcpO1xyXG4gIHBpY2tlZE1vb2QgPSBwYXJzZUludChzbWlsZXkuZGF0YXNldC5tb29kKVxyXG59KSk7XHJcblxyXG5cclxuLy8gU3VibWl0IGZlZWxpbmdzIGNsaWNrIGxpc3RlbmVyLCB0b2dnbGluZyB0aGUgbW9kYWxzIGFmdGVyIHN1Ym1pdHRlZCBhbmQgc2F2ZWQgaW4gbG9jYWwgc3RvcmFnZS5cclxuc3VibWl0RmVlbGlnbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gIG1vb2ROb3RlID0gSlNPTi5zdHJpbmdpZnkobW9vZE5vdGVUZXh0YXJlYS52YWx1ZSk7XHJcbiAgc2V0TG9jYWxTdG9yYWdlKHBpY2tlZE1vb2QsIG1vb2ROb3RlKTtcclxuICBwb3N0RGF0YSh1c2VyRGF0YSlcclxuICBtb29kTm90ZVRleHRhcmVhLnZhbHVlID0gJyc7XHJcbiAgcGlja2VkTW9vZCA9IDA7XHJcbiAgdG9nZ2xlTW9kYWwoKTtcclxuICB0b2dnbGVTdWNjZXNzTWVzc2FnZSgpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKTtcclxuICB9LCAzMDAwKVxyXG59KTtcclxuXHJcbi8vIFF1ZXJ5IFNlbGVjdG9ycyBmb3IgdGhlIG1vZGFscy5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyJyk7XHJcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpO1xyXG5jb25zdCBzdWNjZXNzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tb2RhbCcpO1xyXG5cclxuXHJcbi8vIEZ1bmN0aW9ucyBmb3IgdG9nZ2xpbmcgdGhlIG1vZGFscy5cclxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKXtcclxuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1vZGFsJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVN1Y2Nlc3NNZXNzYWdlKCl7XHJcbiAgc3VjY2Vzc01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwtc3VjY2VzcycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3aW5kb3dPbkNsaWNrKGV2ZW50KSB7XHJcbiAgaWYoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xyXG4gICAgdG9nZ2xlTW9kYWwoKTtcclxuICB9XHJcbn1cclxuXHJcbnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbCk7XHJcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9kYWwpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrKTtcclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/main.js\n");

/***/ })

/******/ });