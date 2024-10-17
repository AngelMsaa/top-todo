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

/***/ "./src/input.css":
/*!***********************!*\
  !*** ./src/input.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tos-to-do/./src/input.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domManipulator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domManipulator.js */ \"./src/modules/domManipulator.js\");\n/* harmony import */ var _modules_taskManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskManager.js */ \"./src/modules/taskManager.js\");\n/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.css */ \"./src/input.css\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://tos-to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/domManipulator.js":
/*!***************************************!*\
  !*** ./src/modules/domManipulator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domManipulator: () => (/* binding */ domManipulator)\n/* harmony export */ });\nconst domManipulator = {\r\n    init() {\r\n        const content = document.getElementById(\"content\");\r\n    },\r\n\r\n    updateTasks() {\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://tos-to-do/./src/modules/domManipulator.js?");

/***/ }),

/***/ "./src/modules/taskManager.js":
/*!************************************!*\
  !*** ./src/modules/taskManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project),\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\n/* harmony import */ var _domManipulator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator.js */ \"./src/modules/domManipulator.js\");\n// Purpose: Contains the class for a todo item.\r\n\r\n\r\n\r\nclass task {\r\n    constructor(title, description, dueDate, priority) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.status = \"To Do\";\r\n        this.completed = false;\r\n        this.createdAt = new Date();\r\n    }\r\n}\r\n\r\nclass project {\r\n    constructor(title) {\r\n        this.title = title;\r\n        this.tasks = [];\r\n    }\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n}\n\n//# sourceURL=webpack://tos-to-do/./src/modules/taskManager.js?");

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