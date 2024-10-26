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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domManipulator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domManipulator.js */ \"./src/modules/domManipulator.js\");\n/* harmony import */ var _modules_taskManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskManager.js */ \"./src/modules/taskManager.js\");\n/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.css */ \"./src/input.css\");\n\n\n\n\nconst rootProject = new _modules_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.Project(\"root\");\nlet currentProject = rootProject;\n\ndocument.addEventListener(\"click\", (event) => {\n    const actionElement = event.target.closest(\"[data-action]\");\n    if (actionElement) {\n        const action = actionElement.getAttribute(\"data-action\");\n        switch (action) {\n            case \"createTask\":\n                const newTask = new _modules_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.Task()\n                _modules_domManipulator_js__WEBPACK_IMPORTED_MODULE_0__.domManipulator.addTask(newTask) // Add task to the DOM\n                currentProject.addTask(newTask) // Add task to the current project\n                _modules_domManipulator_js__WEBPACK_IMPORTED_MODULE_0__.domManipulator.bindDoubleClickEvent(newTask); //Bind double click event to edit task title on double click\n                break;\n            case \"change-task-status\":\n                {\n                    const taskElement = event.target.closest(\".task\");\n                    const taskId = taskElement.id;\n                    const task = currentProject.getTaskById(taskId);\n\n                    task.completed = !task.completed;\n                    const taskTitle = taskElement.querySelector(\".task-title\");\n\n                    taskTitle.style.textDecoration = task.completed ? \"line-through\" : \"none\";\n\n                }\n                break;\n            case \"delete-task\":\n                { \n                    const taskElement = event.target.closest(\".task\");\n                    const taskId = taskElement.id;\n                    const task = currentProject.getTaskById(taskId);\n\n                    currentProject.deleteTask(taskId);\n                    _modules_domManipulator_js__WEBPACK_IMPORTED_MODULE_0__.domManipulator.removeTask(taskId);\n                    console.log(\"deleted\")\n                }\n                break;\n            case \"change-task-priority\":\n                {\n                    const taskElement = event.target.closest(\".task\");\n                    const taskId = taskElement.id;\n                    const task = currentProject.getTaskById(taskId);\n                    \n                    task.changePriority();\n                    _modules_domManipulator_js__WEBPACK_IMPORTED_MODULE_0__.domManipulator.refreshTask(task);\n                }\n        }\n    }\n})\n\n//# sourceURL=webpack://tos-to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/domManipulator.js":
/*!***************************************!*\
  !*** ./src/modules/domManipulator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domManipulator: () => (/* binding */ domManipulator)\n/* harmony export */ });\n/* harmony import */ var _assets_arrow_up_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/arrow-up.svg */ \"./src/assets/arrow-up.svg\");\n/* harmony import */ var _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/arrow-down.svg */ \"./src/assets/arrow-down.svg\");\n/* harmony import */ var _assets_arrow_up_double_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/arrow-up-double.svg */ \"./src/assets/arrow-up-double.svg\");\n/* harmony import */ var _assets_arrow_down_double_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/arrow-down-double.svg */ \"./src/assets/arrow-down-double.svg\");\n/* harmony import */ var _assets_equal_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/equal.svg */ \"./src/assets/equal.svg\");\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/delete.svg */ \"./src/assets/delete.svg\");\n\n\n\n\n\n\n\nconst domManipulator = {\n    init() {\n    },\n\n    /**\n     * Creates a task element.\n     *\n     * @param {Object} task - The task object.\n     * @param {string} task.id - The unique identifier for the task.\n     * @param {string} task.title - The title of the task.\n     * @param {string} task.dueDate - The due date of the task.\n     * @returns {HTMLElement} The created task element.\n     */\n    createTask(task) {\n        const taskElement = document.createElement('div');\n        taskElement.className = 'task';\n        taskElement.id = task.id;\n        const taskTitle = task.title;\n        const priority = task.priority;\n        const priorityIcon = () => {\n            if (priority === \"very low\") {\n                return _assets_arrow_down_double_svg__WEBPACK_IMPORTED_MODULE_3__;\n            } else if (priority === \"low\") {\n                return _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_1__;\n            } else if (priority === \"medium\") {\n                return _assets_equal_svg__WEBPACK_IMPORTED_MODULE_4__;\n            } else if (priority === \"high\") {\n                return _assets_arrow_up_svg__WEBPACK_IMPORTED_MODULE_0__;\n            } else if (priority === \"very high\") {\n                return _assets_arrow_up_double_svg__WEBPACK_IMPORTED_MODULE_2__;\n            }\n        }\n        \n        taskElement.innerHTML = `\n                <div class=\"checkbox-wrapper-31\" data-action=\"change-task-status\">\n                    <input type=\"checkbox\"/>\n                    <svg viewBox=\"0 0 35.6 35.6\">\n                        <circle class=\"background\" cx=\"17.8\" cy=\"17.8\" r=\"17.8\"></circle>\n                        <circle class=\"stroke\" cx=\"17.8\" cy=\"17.8\" r=\"14.37\"></circle>\n                        <polyline class=\"check\" points=\"11.78 18.12 15.55 22.23 25.17 12.87\"></polyline>\n                    </svg>\n                </div>\n                <div class=\"task-metadata\">\n                    <span class=\"task-title\">\n                        ${taskTitle}\n                    </span>\n                    <div class=\"due-by\">\n                        Due by: \n                        <span class=\"due-date\">\n                        ${task.dueDate}\n                        </span>\n                        <button class=\"priority button-4 icon-button\" data-action=\"change-task-priority\">\n                            <img class=\"priority\" src=\"${priorityIcon}\">\n                        </button>\n                    </div>\n                </div>\n                <button class=\"priority button-4 icon-button\" data-action=\"delete-task\">\n                    <img class=\"deleteIcon\" src=\"${_assets_delete_svg__WEBPACK_IMPORTED_MODULE_5__}\">\n                </button>\n        `;\n        return taskElement;\n    },\n    \n\n    /**\n     * Adds a task to the DOM.\n     *\n     * @param {Object} task - The task object to be added.\n     */\n    addTask(task) {\n        const taskElement = this.createTask(task);\n\n        const tasksContainerSelector = document.querySelector(\".tasks\");\n        tasksContainerSelector.appendChild(taskElement);\n    },\n\n    removeTask(taskId) {\n        const taskElement = document.getElementById(taskId);\n        taskElement.remove();\n    },\n\n    /**\n     * Refreshes a task in the DOM by deleting the previous task and replacing it with the updated task.\n     *\n     * @param {Object} task - The task object containing updated task information.\n     * @param {string} task.id - The unique identifier of the task.\n     * @returns {void}\n     */\n    refreshTask(task) {\n        const taskElementNew = this.createTask(task);\n        \n        const taskElementOld = document.getElementById(task.id);\n        const tasksContainerSelector = document.querySelector(\".tasks\");\n        tasksContainerSelector.replaceChild(taskElementNew, taskElementOld);\n    },\n\n    /**\n     * Allows the user to edit a task title by double-clicking on it.\n     * \n     * @param {Object} task - The task object containing the task details.\n     * @param {string} task.id - The unique identifier of the task.\n     * @param {string} task.title - The current title of the task.\n     * \n     * @description\n     * This method enables the task title to be editable when the user double-clicks on it.\n     * It sets the `contenteditable` attribute to `true` and focuses on the task title element.\n     * The new title is saved when the user blurs the input or presses the Enter key.\n     * \n     * @example\n     * // Assuming you have a task object with an id and title\n     * const task = { id: 'task-1', title: 'Sample Task' };\n     * doubleClickEditTask(task);\n     */\n    doubleClickEditTask(task) {\n        const taskElement = document.getElementById(task.id);\n        const taskTitleElement = taskElement.querySelector(\".task-title\");\n\n        taskTitleElement.setAttribute(\"contenteditable\", \"true\");\n        taskTitleElement.focus();\n\n        const saveTaskTitle = () => {\n            taskTitleElement.setAttribute(\"contenteditable\", \"false\");\n            const newTitle = taskTitleElement.textContent;\n            task.title = newTitle;\n            this.refreshTask(task);\n        };\n\n        taskTitleElement.addEventListener(\"blur\", saveTaskTitle);\n        taskTitleElement.addEventListener(\"keydown\", (event) => {\n            if (event.key === \"Enter\") {\n            event.preventDefault();\n            saveTaskTitle();\n            }\n        });\n        task.title = taskElement.textContent;\n    },\n\n    /**\n     * Binds a double-click event to a task element that triggers the editing of the task.\n     *\n     * @param {Object} task - The task object containing task details.\n     * @param {string} task.id - The unique identifier of the task.\n     */\n    bindDoubleClickEvent(task) {\n        const taskElement = document.getElementById(task.id);\n        const taskTitleElement = taskElement.querySelector(\".task-title\");\n\n        taskTitleElement.addEventListener(\"dblclick\", () => {\n            this.doubleClickEditTask(task);\n        });\n    }\n}\n\n\n\n//# sourceURL=webpack://tos-to-do/./src/modules/domManipulator.js?");

/***/ }),

/***/ "./src/modules/taskManager.js":
/*!************************************!*\
  !*** ./src/modules/taskManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/**\n * Represents a task with various properties such as title, due date, priority, status, and completion status.\n * \n * @class\n */\nclass Task {\n    \n    /**\n     * Creates an instance of Task.\n     * \n     * @constructor\n     * @param {string} [title=\"New Task\"] - The title of the task.\n     * @param {Date|null} [dueDate=null] - The due date of the task.\n     * @param {string} [priority=\"medium\"] - The priority level of the task.\n     * @param {string} [status=\"To Do\"] - The current status of the task.\n     * @param {boolean} [completed=false] - Indicates whether the task is completed.\n     */\n    constructor(title = \"New Task\", dueDate = null, priority = \"medium\", status = \"To Do\", completed = false) {\n        this._title = title;\n        this.dueDate = dueDate;\n        this._priority = priority;\n        this.status = status;\n        this.completed = completed;\n        this.createdAt = new Date();\n        this.id = \"id\" + Math.random().toString(16).slice(2);\n    }\n\n    /**\n     * Sets the title of the task.\n     * \n     * @param {string} title - The new title of the task.\n     */\n    set title(title) {\n        this._title = title;\n    }\n\n    /**\n     * Gets the title of the task.\n     * \n     * @returns {string} The title of the task.\n     */\n    get title() {\n        return this._title;\n    }\n\n    get priority() {    \n        return this._priority;\n    }\n\n    set priority(priority) {\n        this._priority = priority;\n    }\n\n    changePriority() {\n        const prioritiesList = [\"very low\", \"low\", \"medium\", \"high\", \"very high\"];\n        const currentPriorityIndex = prioritiesList.indexOf(this.priority);\n        const newPriorityIndex = (currentPriorityIndex + 1) % 5;\n\n        this.priority = prioritiesList[newPriorityIndex];\n    }\n}\n\n/**\n * Represents a project with a title and a list of tasks.\n */\nclass Project {\n    /**\n     * Creates a new Project.\n     * @param {string} title - The title of the project.\n     */\n    constructor(title) {\n        this.title = title;\n        this.tasks = [];\n    }\n\n    /**\n     * Adds a task to the project.\n     * @param {Object} task - The task to add.\n     */\n    addTask(task) {\n        this.tasks.push(task);\n    }\n\n    deleteTask(id) {\n        this.tasks = this.tasks.filter(task => task.id !== id);\n    }\n\n    /**\n     * \n     * @param {*} id - The ID of the task to be found and returned.\n     * @returns - a task Object.\n     */\n    getTaskById(id) {\n        for (let i = 0; i < this.tasks.length; i++) {\n            if (this.tasks[i].id === id) {\n                return this.tasks[i];\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://tos-to-do/./src/modules/taskManager.js?");

/***/ }),

/***/ "./src/assets/arrow-down-double.svg":
/*!******************************************!*\
  !*** ./src/assets/arrow-down-double.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1503928facc4c9d0ad6b.svg\";\n\n//# sourceURL=webpack://tos-to-do/./src/assets/arrow-down-double.svg?");

/***/ }),

/***/ "./src/assets/arrow-down.svg":
/*!***********************************!*\
  !*** ./src/assets/arrow-down.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba4b3f743d15db301277.svg\";\n\n//# sourceURL=webpack://tos-to-do/./src/assets/arrow-down.svg?");

/***/ }),

/***/ "./src/assets/arrow-up-double.svg":
/*!****************************************!*\
  !*** ./src/assets/arrow-up-double.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3500d5c9487024d75e8.svg\";\n\n//# sourceURL=webpack://tos-to-do/./src/assets/arrow-up-double.svg?");

/***/ }),

/***/ "./src/assets/arrow-up.svg":
/*!*********************************!*\
  !*** ./src/assets/arrow-up.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47ee22725a5173c61b00.svg\";\n\n//# sourceURL=webpack://tos-to-do/./src/assets/arrow-up.svg?");

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5dea5c232eb4bd3492a7.svg\";\n\n//# sourceURL=webpack://tos-to-do/./src/assets/delete.svg?");

/***/ }),

/***/ "./src/assets/equal.svg":
/*!******************************!*\
  !*** ./src/assets/equal.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af2f695f417a78199307.svg\";\n\n//# sourceURL=webpack://tos-to-do/./src/assets/equal.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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