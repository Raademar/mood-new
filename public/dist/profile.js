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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/getMood.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/getMood.js":
/*!***************************************!*\
  !*** ./public/javascripts/getMood.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import Chart from'chart.js'\n// //const data = moods\n// let ctx = document.getElementById(\"lineChart\")\n// let moodArray = []\n// let dateArray = []\n// let noteArray = []\n// data.forEach(function(item){\n//   moodArray.push(item.usermood)\n//   dateArray.push(item.date)\n//   noteArray.push(item.note)\n// })\n// let myChart = new Chart(ctx, {\n//   type: 'line',\n//   data: {\n//       labels: dateArray,\n//       datasets: [{\n//           label: [],\n//           data: moodArray,\n//           backgroundColor: '#EC7357',\n//           borderColor: '#F3CA40',\n//           borderWidth: 1\n//       }]\n//   },\n//   options: {\n//       title: {\n//         display: true,\n//         text: ''\n//       },\n//       legend: {\n//           labels: {\n//               fontColor: '#fff'\n//           }\n//       },\n//       scales: {\n//           yAxes: [{\n//               ticks: {\n//                   beginAtZero:true\n//               },\n//           }],\n//       },\n//       elements: {\n//         line: {\n//             tension: 0, // disables bezier curves\n//         }\n//     }\n//   }\n// })\n// //module.exports = myChart\n// let pieCtx = document.getElementById(\"pieChart\")\n// // FIX THIS SO THE PIE CHART DISPLAYS PROPERLY THE SUM OF ALL THE ENTERED MOODS FROM EACH TYPE OF MOOD.\n// // const moods = moodArray\n// // for(mood in moods){\n// //   let sumMood = moods.filter(x => x === mood).length\n// //   console.log(sumMood)\n// // }\n// let pieChart = new Chart(pieCtx, {\n//   type: 'pie',\n//   data: {\n//       labels: ['Great', 'Good', 'Okey', 'Sad', 'Depressed'],\n//       datasets: [{\n//           label: [],\n//           data: moodArray,\n//           backgroundColor: [\n//             'rgba(6, 146, 6, 1)', \n//             'rgba(100, 255, 100, 1)', \n//             'rgba(255, 255, 0, 1)', \n//             'rgba(255, 135, 15, 1)', \n//             'rgba(225, 11, 11, 1)',\n//           ],\n//           borderColor: '#aaaaaa', \n//           borderWidth: 2,\n//       }]\n//   },\n//   options: {\n//       title: {\n//         display: true,\n//         text: 'Pie Chart'\n//       },\n//       hover: {\n//         mode: 'index'\n//       },\n//       scales: {\n//       },\n//       elements: {\n//         line: {\n//             tension: 0, // disables bezier curves\n//         }\n//     }\n//   }\n// })\n// //module.exports = pieChart//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvZ2V0TW9vZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9nZXRNb29kLmpzPzJiZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IENoYXJ0IGZyb20nY2hhcnQuanMnXG5cbi8vIC8vY29uc3QgZGF0YSA9IG1vb2RzXG5cbi8vIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVDaGFydFwiKVxuXG4vLyBsZXQgbW9vZEFycmF5ID0gW11cbi8vIGxldCBkYXRlQXJyYXkgPSBbXVxuLy8gbGV0IG5vdGVBcnJheSA9IFtdXG5cbi8vIGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbi8vICAgbW9vZEFycmF5LnB1c2goaXRlbS51c2VybW9vZClcbi8vICAgZGF0ZUFycmF5LnB1c2goaXRlbS5kYXRlKVxuLy8gICBub3RlQXJyYXkucHVzaChpdGVtLm5vdGUpXG4vLyB9KVxuXG4vLyBsZXQgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbi8vICAgdHlwZTogJ2xpbmUnLFxuLy8gICBkYXRhOiB7XG4vLyAgICAgICBsYWJlbHM6IGRhdGVBcnJheSxcbi8vICAgICAgIGRhdGFzZXRzOiBbe1xuLy8gICAgICAgICAgIGxhYmVsOiBbXSxcbi8vICAgICAgICAgICBkYXRhOiBtb29kQXJyYXksXG4vLyAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VDNzM1NycsXG4vLyAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRjNDQTQwJyxcbi8vICAgICAgICAgICBib3JkZXJXaWR0aDogMVxuLy8gICAgICAgfV1cbi8vICAgfSxcbi8vICAgb3B0aW9uczoge1xuLy8gICAgICAgdGl0bGU6IHtcbi8vICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbi8vICAgICAgICAgdGV4dDogJydcbi8vICAgICAgIH0sXG4vLyAgICAgICBsZWdlbmQ6IHtcbi8vICAgICAgICAgICBsYWJlbHM6IHtcbi8vICAgICAgICAgICAgICAgZm9udENvbG9yOiAnI2ZmZidcbi8vICAgICAgICAgICB9XG4vLyAgICAgICB9LFxuLy8gICAgICAgc2NhbGVzOiB7XG4vLyAgICAgICAgICAgeUF4ZXM6IFt7XG4vLyAgICAgICAgICAgICAgIHRpY2tzOiB7XG4vLyAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXG4vLyAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgfV0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgZWxlbWVudHM6IHtcbi8vICAgICAgICAgbGluZToge1xuLy8gICAgICAgICAgICAgdGVuc2lvbjogMCwgLy8gZGlzYWJsZXMgYmV6aWVyIGN1cnZlc1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9KVxuXG4vLyAvL21vZHVsZS5leHBvcnRzID0gbXlDaGFydFxuXG4vLyBsZXQgcGllQ3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWVDaGFydFwiKVxuXG4vLyAvLyBGSVggVEhJUyBTTyBUSEUgUElFIENIQVJUIERJU1BMQVlTIFBST1BFUkxZIFRIRSBTVU0gT0YgQUxMIFRIRSBFTlRFUkVEIE1PT0RTIEZST00gRUFDSCBUWVBFIE9GIE1PT0QuXG4vLyAvLyBjb25zdCBtb29kcyA9IG1vb2RBcnJheVxuLy8gLy8gZm9yKG1vb2QgaW4gbW9vZHMpe1xuLy8gLy8gICBsZXQgc3VtTW9vZCA9IG1vb2RzLmZpbHRlcih4ID0+IHggPT09IG1vb2QpLmxlbmd0aFxuLy8gLy8gICBjb25zb2xlLmxvZyhzdW1Nb29kKVxuLy8gLy8gfVxuXG4vLyBsZXQgcGllQ2hhcnQgPSBuZXcgQ2hhcnQocGllQ3R4LCB7XG4vLyAgIHR5cGU6ICdwaWUnLFxuLy8gICBkYXRhOiB7XG4vLyAgICAgICBsYWJlbHM6IFsnR3JlYXQnLCAnR29vZCcsICdPa2V5JywgJ1NhZCcsICdEZXByZXNzZWQnXSxcbi8vICAgICAgIGRhdGFzZXRzOiBbe1xuLy8gICAgICAgICAgIGxhYmVsOiBbXSxcbi8vICAgICAgICAgICBkYXRhOiBtb29kQXJyYXksXG4vLyAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4vLyAgICAgICAgICAgICAncmdiYSg2LCAxNDYsIDYsIDEpJywgXG4vLyAgICAgICAgICAgICAncmdiYSgxMDAsIDI1NSwgMTAwLCAxKScsIFxuLy8gICAgICAgICAgICAgJ3JnYmEoMjU1LCAyNTUsIDAsIDEpJywgXG4vLyAgICAgICAgICAgICAncmdiYSgyNTUsIDEzNSwgMTUsIDEpJywgXG4vLyAgICAgICAgICAgICAncmdiYSgyMjUsIDExLCAxMSwgMSknLFxuLy8gICAgICAgICAgIF0sXG4vLyAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjYWFhYWFhJywgXG4vLyAgICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4vLyAgICAgICB9XVxuLy8gICB9LFxuLy8gICBvcHRpb25zOiB7XG4vLyAgICAgICB0aXRsZToge1xuLy8gICAgICAgICBkaXNwbGF5OiB0cnVlLFxuLy8gICAgICAgICB0ZXh0OiAnUGllIENoYXJ0J1xuLy8gICAgICAgfSxcbi8vICAgICAgIGhvdmVyOiB7XG4vLyAgICAgICAgIG1vZGU6ICdpbmRleCdcbi8vICAgICAgIH0sXG4vLyAgICAgICBzY2FsZXM6IHtcbi8vICAgICAgIH0sXG4vLyAgICAgICBlbGVtZW50czoge1xuLy8gICAgICAgICBsaW5lOiB7XG4vLyAgICAgICAgICAgICB0ZW5zaW9uOiAwLCAvLyBkaXNhYmxlcyBiZXppZXIgY3VydmVzXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH0pXG5cbi8vIC8vbW9kdWxlLmV4cG9ydHMgPSBwaWVDaGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/javascripts/getMood.js\n");

/***/ })

/******/ });