/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Car: () => (/* binding */ Car)\n/* harmony export */ });\nclass Car{\r\n    constructor(id, make, model, year){\r\n        this.id = id;\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n// TODO\r\n\r\n\r\nlet form = document.querySelector(\"#submitForm\");\r\nlet makeInput = document.querySelector(\"#makeInput\");\r\nlet modelInput = document.querySelector(\"#modelInput\");\r\nlet yearInput = document.querySelector(\"#yearInput\");\r\nlet pMake = document.querySelector(\"#car-make\");\r\nlet pModel = document.querySelector(\"#car-model\");\r\nlet pYear = document.querySelector(\"#car-year\");\r\nlet removeBtn = document.querySelector(\".removeBtn\");\r\nlet wishlistUl = document.querySelector(\"#wishlistUl\");\r\nlet currentWishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__.WishList();\r\n\r\nfunction showCarDetails(car){\r\n    pMake.textContent = car.make;\r\n    pModel.textContent = car.model;\r\n    pYear.textContent = car.year;\r\n    removeBtn.disabled = false;\r\n    removeBtn.setAttribute(\"data-carId\", car.id);\r\n    console.log(car.id);\r\n}\r\n\r\nfunction updateDOMList(){\r\n    wishlistUl.innerHTML = \"\";\r\n    currentWishlist.list.forEach((car) => {\r\n        let currentLi = document.createElement(\"li\");\r\n        currentLi.textContent = `${car.make}, ${car.model}`\r\n        currentLi.addEventListener(\"click\", () => showCarDetails(car));\r\n        wishlistUl.appendChild(currentLi);\r\n    });\r\n}\r\n\r\n\r\nfunction addCar(event){\r\n    event.preventDefault();\r\n    let make = makeInput.value;\r\n    let model = modelInput.value;\r\n    let year = yearInput.value;\r\n    currentWishlist.add(make, model, year);\r\n    updateDOMList();\r\n}\r\n\r\nfunction removeCar(){\r\n    let carId = Number(removeBtn.getAttribute(\"data-carId\"));\r\n    currentWishlist.remove(carId);\r\n    updateDOMList();\r\n    pMake.textContent = \"\";\r\n    pModel.textContent = \"\";\r\n    pYear.textContent = \"\";\r\n    removeBtn.disabled = true;\r\n}\r\n\r\nform.addEventListener(\"submit\", addCar);\r\n\r\nremoveBtn.addEventListener(\"click\", removeCar);\r\n\r\nconsole.log(currentWishlist);\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WishList: () => (/* binding */ WishList)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\nclass WishList{\r\n    constructor(){\r\n        this.list = [];\r\n        this.nextID = 0;\r\n    }\r\n    add(make, model, year){\r\n        let carInstance = new _car__WEBPACK_IMPORTED_MODULE_0__.Car(++this.nextID, make, model, year);\r\n        this.list.push(carInstance);\r\n    }\r\n    remove(carId){\r\n        this.list = this.list.filter((car) => car.id != carId);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;