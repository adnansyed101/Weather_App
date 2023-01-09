/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/showValues.js":
/*!***************************!*\
  !*** ./src/showValues.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function showValues(data) {
  const location = document.querySelector(".location"),
    temparature = document.querySelector(".temparature"),
    feelsLike = document.querySelector(".feels-like"),
    humidity = document.querySelector(".humidity"),
    pressure = document.querySelector(".pressure"),
    tempMax = document.querySelector(".temp-max"),
    tempMin = document.querySelector(".temp-min");

  location.innerText = data.name;
  temparature.innerText = data.main.temp;
  feelsLike.innerText = data.main.feels_like;
  humidity.innerText = data.main.humidity;
  pressure.innerText = data.main.pressure;
  tempMax.innerText = data.main.temp_max;
  tempMin.innerText = data.main.temp_min;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showValues);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showValues */ "./src/showValues.js");


const locationForm = document.querySelector(".location-form"),
  locationInput = document.querySelector(".location-input"),
  farenheitBtn = document.querySelector(".farenheit-btn"),
  celsiusBtn = document.querySelector(".celsius-btn");

async function getWeatherData(unit = "metric", location = "London") {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ba3fd58b2047f0937b2622c8627f6b68&units=${unit}`
    );
    const weatherData = await response.json();

    (0,_showValues__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData);
  } catch (err) {
    if (err) {
      alert("Please enter a correct location");
      getWeatherData();
    }
  }
}

getWeatherData();

locationForm.addEventListener("submit", (e) => {
  getWeatherData("metric", locationInput.value);
  e.preventDefault();
});

celsiusBtn.addEventListener("click", () => {
  getWeatherData("metric", checkInput());
});

farenheitBtn.addEventListener("click", () => {
  getWeatherData("imperial", checkInput());
});

function checkInput() {
  if (locationInput.value === "") {
    return "London";
  } else {
    return locationInput.value;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2xCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFNBQVMsZ0RBQWdELEtBQUs7QUFDekg7QUFDQTs7QUFFQSxJQUFJLHVEQUFVO0FBQ2QsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zaG93VmFsdWVzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNob3dWYWx1ZXMoZGF0YSkge1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIiksXG4gICAgdGVtcGFyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBhcmF0dXJlXCIpLFxuICAgIGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHMtbGlrZVwiKSxcbiAgICBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIiksXG4gICAgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlXCIpLFxuICAgIHRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtbWF4XCIpLFxuICAgIHRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtbWluXCIpO1xuXG4gIGxvY2F0aW9uLmlubmVyVGV4dCA9IGRhdGEubmFtZTtcbiAgdGVtcGFyYXR1cmUuaW5uZXJUZXh0ID0gZGF0YS5tYWluLnRlbXA7XG4gIGZlZWxzTGlrZS5pbm5lclRleHQgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgaHVtaWRpdHkuaW5uZXJUZXh0ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xuICBwcmVzc3VyZS5pbm5lclRleHQgPSBkYXRhLm1haW4ucHJlc3N1cmU7XG4gIHRlbXBNYXguaW5uZXJUZXh0ID0gZGF0YS5tYWluLnRlbXBfbWF4O1xuICB0ZW1wTWluLmlubmVyVGV4dCA9IGRhdGEubWFpbi50ZW1wX21pbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd1ZhbHVlcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNob3dWYWx1ZXMgZnJvbSBcIi4vc2hvd1ZhbHVlc1wiO1xuXG5jb25zdCBsb2NhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWZvcm1cIiksXG4gIGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWlucHV0XCIpLFxuICBmYXJlbmhlaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhcmVuaGVpdC1idG5cIiksXG4gIGNlbHNpdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbHNpdXMtYnRuXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSh1bml0ID0gXCJtZXRyaWNcIiwgbG9jYXRpb24gPSBcIkxvbmRvblwiKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPWJhM2ZkNThiMjA0N2YwOTM3YjI2MjJjODYyN2Y2YjY4JnVuaXRzPSR7dW5pdH1gXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHNob3dWYWx1ZXMod2VhdGhlckRhdGEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIGNvcnJlY3QgbG9jYXRpb25cIik7XG4gICAgICBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIH1cbiAgfVxufVxuXG5nZXRXZWF0aGVyRGF0YSgpO1xuXG5sb2NhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBnZXRXZWF0aGVyRGF0YShcIm1ldHJpY1wiLCBsb2NhdGlvbklucHV0LnZhbHVlKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbmNlbHNpdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZ2V0V2VhdGhlckRhdGEoXCJtZXRyaWNcIiwgY2hlY2tJbnB1dCgpKTtcbn0pO1xuXG5mYXJlbmhlaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZ2V0V2VhdGhlckRhdGEoXCJpbXBlcmlhbFwiLCBjaGVja0lucHV0KCkpO1xufSk7XG5cbmZ1bmN0aW9uIGNoZWNrSW5wdXQoKSB7XG4gIGlmIChsb2NhdGlvbklucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIFwiTG9uZG9uXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxvY2F0aW9uSW5wdXQudmFsdWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==