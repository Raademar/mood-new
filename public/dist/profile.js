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

eval("fetch('/profile').then(function (response) {\n  return response;\n}).then(function (myJson) {\n  console.log(myJson, 'nothing?');\n}); // import Chart from'chart.js'\n// //const data = moods\n// let ctx = document.getElementById(\"lineChart\")\n// let moodArray = []\n// let dateArray = []\n// let noteArray = []\n// data.forEach(function(item){\n//   moodArray.push(item.usermood)\n//   dateArray.push(item.date)\n//   noteArray.push(item.note)\n// })\n// let myChart = new Chart(ctx, {\n//   type: 'line',\n//   data: {\n//       labels: dateArray,\n//       datasets: [{\n//           label: [],\n//           data: moodArray,\n//           backgroundColor: '#EC7357',\n//           borderColor: '#F3CA40',\n//           borderWidth: 1\n//       }]\n//   },\n//   options: {\n//       title: {\n//         display: true,\n//         text: ''\n//       },\n//       legend: {\n//           labels: {\n//               fontColor: '#fff'\n//           }\n//       },\n//       scales: {\n//           yAxes: [{\n//               ticks: {\n//                   beginAtZero:true\n//               },\n//           }],\n//       },\n//       elements: {\n//         line: {\n//             tension: 0, // disables bezier curves\n//         }\n//     }\n//   }\n// })\n// //module.exports = myChart\n// let pieCtx = document.getElementById(\"pieChart\")\n// // FIX THIS SO THE PIE CHART DISPLAYS PROPERLY THE SUM OF ALL THE ENTERED MOODS FROM EACH TYPE OF MOOD.\n// // const moods = moodArray\n// // for(mood in moods){\n// //   let sumMood = moods.filter(x => x === mood).length\n// //   console.log(sumMood)\n// // }\n// let pieChart = new Chart(pieCtx, {\n//   type: 'pie',\n//   data: {\n//       labels: ['Great', 'Good', 'Okey', 'Sad', 'Depressed'],\n//       datasets: [{\n//           label: [],\n//           data: moodArray,\n//           backgroundColor: [\n//             'rgba(6, 146, 6, 1)', \n//             'rgba(100, 255, 100, 1)', \n//             'rgba(255, 255, 0, 1)', \n//             'rgba(255, 135, 15, 1)', \n//             'rgba(225, 11, 11, 1)',\n//           ],\n//           borderColor: '#aaaaaa', \n//           borderWidth: 2,\n//       }]\n//   },\n//   options: {\n//       title: {\n//         display: true,\n//         text: 'Pie Chart'\n//       },\n//       hover: {\n//         mode: 'index'\n//       },\n//       scales: {\n//       },\n//       elements: {\n//         line: {\n//             tension: 0, // disables bezier curves\n//         }\n//     }\n//   }\n// })\n// //module.exports = pieChart//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdHMvZ2V0TW9vZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qYXZhc2NyaXB0cy9nZXRNb29kLmpzPzJiZDYiXSwic291cmNlc0NvbnRlbnQiOlsiZmV0Y2goJy9wcm9maWxlJylcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24obXlKc29uKSB7XG4gICAgY29uc29sZS5sb2cobXlKc29uLCAnbm90aGluZz8nKVxuICB9KVxuXG4vLyBpbXBvcnQgQ2hhcnQgZnJvbSdjaGFydC5qcydcblxuLy8gLy9jb25zdCBkYXRhID0gbW9vZHNcblxuLy8gbGV0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZUNoYXJ0XCIpXG5cbi8vIGxldCBtb29kQXJyYXkgPSBbXVxuLy8gbGV0IGRhdGVBcnJheSA9IFtdXG4vLyBsZXQgbm90ZUFycmF5ID0gW11cblxuLy8gZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuLy8gICBtb29kQXJyYXkucHVzaChpdGVtLnVzZXJtb29kKVxuLy8gICBkYXRlQXJyYXkucHVzaChpdGVtLmRhdGUpXG4vLyAgIG5vdGVBcnJheS5wdXNoKGl0ZW0ubm90ZSlcbi8vIH0pXG5cbi8vIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuLy8gICB0eXBlOiAnbGluZScsXG4vLyAgIGRhdGE6IHtcbi8vICAgICAgIGxhYmVsczogZGF0ZUFycmF5LFxuLy8gICAgICAgZGF0YXNldHM6IFt7XG4vLyAgICAgICAgICAgbGFiZWw6IFtdLFxuLy8gICAgICAgICAgIGRhdGE6IG1vb2RBcnJheSxcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUM3MzU3Jyxcbi8vICAgICAgICAgICBib3JkZXJDb2xvcjogJyNGM0NBNDAnLFxuLy8gICAgICAgICAgIGJvcmRlcldpZHRoOiAxXG4vLyAgICAgICB9XVxuLy8gICB9LFxuLy8gICBvcHRpb25zOiB7XG4vLyAgICAgICB0aXRsZToge1xuLy8gICAgICAgICBkaXNwbGF5OiB0cnVlLFxuLy8gICAgICAgICB0ZXh0OiAnJ1xuLy8gICAgICAgfSxcbi8vICAgICAgIGxlZ2VuZDoge1xuLy8gICAgICAgICAgIGxhYmVsczoge1xuLy8gICAgICAgICAgICAgICBmb250Q29sb3I6ICcjZmZmJ1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgIH0sXG4vLyAgICAgICBzY2FsZXM6IHtcbi8vICAgICAgICAgICB5QXhlczogW3tcbi8vICAgICAgICAgICAgICAgdGlja3M6IHtcbi8vICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcbi8vICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICB9XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBlbGVtZW50czoge1xuLy8gICAgICAgICBsaW5lOiB7XG4vLyAgICAgICAgICAgICB0ZW5zaW9uOiAwLCAvLyBkaXNhYmxlcyBiZXppZXIgY3VydmVzXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH0pXG5cbi8vIC8vbW9kdWxlLmV4cG9ydHMgPSBteUNoYXJ0XG5cbi8vIGxldCBwaWVDdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpZUNoYXJ0XCIpXG5cbi8vIC8vIEZJWCBUSElTIFNPIFRIRSBQSUUgQ0hBUlQgRElTUExBWVMgUFJPUEVSTFkgVEhFIFNVTSBPRiBBTEwgVEhFIEVOVEVSRUQgTU9PRFMgRlJPTSBFQUNIIFRZUEUgT0YgTU9PRC5cbi8vIC8vIGNvbnN0IG1vb2RzID0gbW9vZEFycmF5XG4vLyAvLyBmb3IobW9vZCBpbiBtb29kcyl7XG4vLyAvLyAgIGxldCBzdW1Nb29kID0gbW9vZHMuZmlsdGVyKHggPT4geCA9PT0gbW9vZCkubGVuZ3RoXG4vLyAvLyAgIGNvbnNvbGUubG9nKHN1bU1vb2QpXG4vLyAvLyB9XG5cbi8vIGxldCBwaWVDaGFydCA9IG5ldyBDaGFydChwaWVDdHgsIHtcbi8vICAgdHlwZTogJ3BpZScsXG4vLyAgIGRhdGE6IHtcbi8vICAgICAgIGxhYmVsczogWydHcmVhdCcsICdHb29kJywgJ09rZXknLCAnU2FkJywgJ0RlcHJlc3NlZCddLFxuLy8gICAgICAgZGF0YXNldHM6IFt7XG4vLyAgICAgICAgICAgbGFiZWw6IFtdLFxuLy8gICAgICAgICAgIGRhdGE6IG1vb2RBcnJheSxcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbi8vICAgICAgICAgICAgICdyZ2JhKDYsIDE0NiwgNiwgMSknLCBcbi8vICAgICAgICAgICAgICdyZ2JhKDEwMCwgMjU1LCAxMDAsIDEpJywgXG4vLyAgICAgICAgICAgICAncmdiYSgyNTUsIDI1NSwgMCwgMSknLCBcbi8vICAgICAgICAgICAgICdyZ2JhKDI1NSwgMTM1LCAxNSwgMSknLCBcbi8vICAgICAgICAgICAgICdyZ2JhKDIyNSwgMTEsIDExLCAxKScsXG4vLyAgICAgICAgICAgXSxcbi8vICAgICAgICAgICBib3JkZXJDb2xvcjogJyNhYWFhYWEnLCBcbi8vICAgICAgICAgICBib3JkZXJXaWR0aDogMixcbi8vICAgICAgIH1dXG4vLyAgIH0sXG4vLyAgIG9wdGlvbnM6IHtcbi8vICAgICAgIHRpdGxlOiB7XG4vLyAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4vLyAgICAgICAgIHRleHQ6ICdQaWUgQ2hhcnQnXG4vLyAgICAgICB9LFxuLy8gICAgICAgaG92ZXI6IHtcbi8vICAgICAgICAgbW9kZTogJ2luZGV4J1xuLy8gICAgICAgfSxcbi8vICAgICAgIHNjYWxlczoge1xuLy8gICAgICAgfSxcbi8vICAgICAgIGVsZW1lbnRzOiB7XG4vLyAgICAgICAgIGxpbmU6IHtcbi8vICAgICAgICAgICAgIHRlbnNpb246IDAsIC8vIGRpc2FibGVzIGJlemllciBjdXJ2ZXNcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfSlcblxuLy8gLy9tb2R1bGUuZXhwb3J0cyA9IHBpZUNoYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/javascripts/getMood.js\n");

/***/ })

/******/ });