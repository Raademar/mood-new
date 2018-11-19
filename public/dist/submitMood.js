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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/submitMood.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/submitMood.js":
/*!******************************************!*\
  !*** ./public/javascripts/submitMood.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar smileys = _toConsumableArray(document.querySelectorAll('.smiley'));\n\nvar shareFeelings = document.querySelector('#enter-mood-picker');\nvar feelingsTextArea = document.querySelector('#text-area-feelings');\nvar moodNoteTextarea = document.querySelector('#mood-note');\nvar submitFeeligns = document.querySelector('#submit-feelings');\nvar moodLeadText = document.querySelector('#mood-lead');\nvar loginButton = document.querySelector('#login-btn'); // Current date generator.\n\nvar curDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/'); // Function for toggling the modal >>> MOVE MODAL HERE <<<\n\nfunction enterFeelings() {\n  setInterval(function () {\n    smileys.forEach(function (item) {\n      item.classList.remove('hide'), item.classList.add('fadeInLeft');\n    });\n    feelingsTextArea.classList.remove('hide');\n    feelingsTextArea.classList.add('fadeInLeft');\n  }, 200);\n} // Function for assigning the users submitted mood to local storage\n\n\nfunction setLocalStorage(userMoodEntry, userMoodNote) {\n  var userMoodObj = {\n    'date': curDate,\n    'usermood': userMoodEntry,\n    'note': userMoodNote\n  };\n  var userMoodArray = JSON.parse(localStorage.getItem('userentry')) || [];\n  userMoodArray.push(userMoodObj);\n  localStorage.setItem('userentry', JSON.stringify(userMoodArray));\n} // Function for passing user submitted mood data to the DB.\n\n\nfunction postData(userMoodEntry, userMoodNote) {\n  var userData = {\n    mood: userMoodEntry,\n    note: userMoodNote\n  };\n  return fetch('/mood/add', {\n    method: 'POST',\n    body: JSON.stringify(userData),\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  });\n}\n\nvar pickedMood = 0;\nvar moodNote = '';\nvar userMood = []; // Get the median mood value from the userMood array.\n\nvar userMedianMood = function userMedianMood(arr) {\n  return arr.reduce(function (a, b) {\n    return a + b;\n  }, 0) / userMood.length;\n};\n\nshareFeelings.addEventListener('click', function () {\n  enterFeelings();\n}); // Assign clickListener for each smiley.\n\nsmileys.forEach(function (smiley) {\n  return smiley.addEventListener('click', function () {\n    smileys.forEach(function (item) {\n      return item.classList.remove('pickedMood');\n    });\n    event.currentTarget.classList.add('pickedMood');\n    pickedMood = parseInt(smiley.dataset.mood);\n  });\n}); // Submit feelings click listener, toggling the modals after submitted and saved in local storage.\n\nsubmitFeeligns.addEventListener('click', function () {\n  moodNote = JSON.stringify(moodNoteTextarea.value);\n  postData(pickedMood, moodNote);\n  moodNoteTextarea.value = '';\n  pickedMood = 0;\n  modal.classList.remove('show-modal');\n  toggleSuccessMessage();\n  setTimeout(function () {\n    toggleSuccessMessage();\n  }, 3000);\n}); // Query Selectors for the modals.\n\nvar modal = document.querySelector('.modal');\nvar trigger = document.querySelector('.trigger');\nvar closeButton = document.querySelector('.close-button');\nvar successModal = document.querySelector('.success-modal'); // Functions for toggling the modals.\n\nfunction toggleModal() {\n  modal.classList.add('show-modal');\n  console.log(modal);\n}\n\nfunction toggleSuccessMessage() {\n  successModal.classList.toggle('show-modal-success');\n}\n\nfunction windowOnClick(event) {\n  if (event.target === modal) {\n    modal.classList.remove('show-modal');\n  }\n}\n\ntrigger.addEventListener('click', toggleModal);\ncloseButton.addEventListener('click', toggleModal);\nwindow.addEventListener('click', windowOnClick);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvc3VibWl0TW9vZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9zdWJtaXRNb29kLmpzPzRiNTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc21pbGV5cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc21pbGV5JyldXG5jb25zdCBzaGFyZUZlZWxpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VudGVyLW1vb2QtcGlja2VyJylcbmNvbnN0IGZlZWxpbmdzVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1hcmVhLWZlZWxpbmdzJylcbmNvbnN0IG1vb2ROb3RlVGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9vZC1ub3RlJylcbmNvbnN0IHN1Ym1pdEZlZWxpZ25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1mZWVsaW5ncycpXG5jb25zdCBtb29kTGVhZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9vZC1sZWFkJylcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWJ0bicpXG5cblxuLy8gQ3VycmVudCBkYXRlIGdlbmVyYXRvci5cbmNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsMTApLnJlcGxhY2UoLy0vZywnLycpO1xuXG4vLyBGdW5jdGlvbiBmb3IgdG9nZ2xpbmcgdGhlIG1vZGFsID4+PiBNT1ZFIE1PREFMIEhFUkUgPDw8XG5mdW5jdGlvbiBlbnRlckZlZWxpbmdzKCkge1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgc21pbGV5cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyksIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZmFkZUluTGVmdCcpXG4gICAgfSk7XG4gICAgZmVlbGluZ3NUZXh0QXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgICBmZWVsaW5nc1RleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkxlZnQnKVxuICB9LCAyMDApXG59XG5cbi8vIEZ1bmN0aW9uIGZvciBhc3NpZ25pbmcgdGhlIHVzZXJzIHN1Ym1pdHRlZCBtb29kIHRvIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZSh1c2VyTW9vZEVudHJ5LCB1c2VyTW9vZE5vdGUpe1xuICBsZXQgdXNlck1vb2RPYmogPSB7XG4gICAgJ2RhdGUnOiBjdXJEYXRlLFxuICAgICd1c2VybW9vZCc6IHVzZXJNb29kRW50cnksXG4gICAgJ25vdGUnOiB1c2VyTW9vZE5vdGVcbiAgfVxuICBsZXQgdXNlck1vb2RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJlbnRyeScpKSB8fCBbXVxuICB1c2VyTW9vZEFycmF5LnB1c2godXNlck1vb2RPYmopXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyZW50cnknLCBKU09OLnN0cmluZ2lmeSh1c2VyTW9vZEFycmF5KSlcbn1cblxuLy8gRnVuY3Rpb24gZm9yIHBhc3NpbmcgdXNlciBzdWJtaXR0ZWQgbW9vZCBkYXRhIHRvIHRoZSBEQi5cbmZ1bmN0aW9uIHBvc3REYXRhKHVzZXJNb29kRW50cnksIHVzZXJNb29kTm90ZSl7XG4gIGxldCB1c2VyRGF0YSA9IHtcbiAgICBtb29kOiB1c2VyTW9vZEVudHJ5LFxuICAgIG5vdGU6IHVzZXJNb29kTm90ZVxuICB9XG4gIHJldHVybiBmZXRjaCgnL21vb2QvYWRkJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KVxufVxuXG5sZXQgcGlja2VkTW9vZCA9IDBcbmxldCBtb29kTm90ZSA9ICcnXG5sZXQgdXNlck1vb2QgPSBbXVxuXG4vLyBHZXQgdGhlIG1lZGlhbiBtb29kIHZhbHVlIGZyb20gdGhlIHVzZXJNb29kIGFycmF5LlxuY29uc3QgdXNlck1lZGlhbk1vb2QgPSBhcnIgPT4gYXJyLnJlZHVjZSgoYSxiKSA9PiBhICsgYiwgMCkgLyB1c2VyTW9vZC5sZW5ndGhcblxuc2hhcmVGZWVsaW5ncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZW50ZXJGZWVsaW5ncygpXG59KVxuXG4vLyBBc3NpZ24gY2xpY2tMaXN0ZW5lciBmb3IgZWFjaCBzbWlsZXkuXG5zbWlsZXlzLmZvckVhY2goc21pbGV5ID0+IHNtaWxleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIHNtaWxleXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGlja2VkTW9vZCcpKVxuICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BpY2tlZE1vb2QnKVxuICBwaWNrZWRNb29kID0gcGFyc2VJbnQoc21pbGV5LmRhdGFzZXQubW9vZClcbn0pKVxuXG4vLyBTdWJtaXQgZmVlbGluZ3MgY2xpY2sgbGlzdGVuZXIsIHRvZ2dsaW5nIHRoZSBtb2RhbHMgYWZ0ZXIgc3VibWl0dGVkIGFuZCBzYXZlZCBpbiBsb2NhbCBzdG9yYWdlLlxuc3VibWl0RmVlbGlnbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBtb29kTm90ZSA9IEpTT04uc3RyaW5naWZ5KG1vb2ROb3RlVGV4dGFyZWEudmFsdWUpXG4gIHBvc3REYXRhKHBpY2tlZE1vb2QsIG1vb2ROb3RlKVxuICBtb29kTm90ZVRleHRhcmVhLnZhbHVlID0gJydcbiAgcGlja2VkTW9vZCA9IDBcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1tb2RhbCcpXG4gIHRvZ2dsZVN1Y2Nlc3NNZXNzYWdlKClcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKVxuICB9LCAzMDAwKVxufSlcblxuLy8gUXVlcnkgU2VsZWN0b3JzIGZvciB0aGUgbW9kYWxzLlxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyJylcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpXG5jb25zdCBzdWNjZXNzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tb2RhbCcpXG5cbi8vIEZ1bmN0aW9ucyBmb3IgdG9nZ2xpbmcgdGhlIG1vZGFscy5cbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCl7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3ctbW9kYWwnKVxuICBjb25zb2xlLmxvZyhtb2RhbClcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU3VjY2Vzc01lc3NhZ2UoKXtcbiAgc3VjY2Vzc01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbW9kYWwtc3VjY2VzcycpXG59XG5cbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcbiAgaWYoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKVxuICB9XG59XG5cbnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbClcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9kYWwpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrKSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/javascripts/submitMood.js\n");

/***/ })

/******/ });