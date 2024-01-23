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

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactsDisplay: () => (/* binding */ contactsDisplay)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\r\n\r\nconst contentElement = document.getElementById('content');\r\n\r\nfunction contactsDisplay(){\r\n    contentElement.textContent = '';\r\n\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();\r\n\r\n    let documentSquare = document.createElement('div');\r\n    let panelLeft = document.createElement('div');\r\n    let panelRight = document.createElement('div');\r\n    let plImage = document.createElement('img');\r\n    let plText = document.createElement('p');\r\n    let prForm = document.createElement('form');\r\n    let prInputName = document.createElement('input');\r\n    let prLabelName = document.createElement('label');\r\n    let prInputEmail = document.createElement('input');\r\n    let prLabelEmail = document.createElement('label');\r\n    let prInputNumber = document.createElement('input');\r\n    let prLabelNumber = document.createElement('label');\r\n    let panelSubmit = document.createElement('input');\r\n\r\n    documentSquare.id = 'docSquare';\r\n    panelLeft.id = 'panelLeft';\r\n    panelRight.id = 'panelRight';\r\n    prForm.id = 'formContact';\r\n    plImage.id = 'pugPhoneImage';\r\n    plText.id = 'pugText'\r\n\r\n    //appending panels and to mainbox\r\n    contentElement.appendChild(documentSquare);\r\n    documentSquare.appendChild(panelLeft);\r\n    documentSquare.appendChild(panelRight);\r\n    \r\n    panelLeft.appendChild(plImage);\r\n    panelLeft.appendChild(plText);\r\n\r\n    panelRight.appendChild(prForm);\r\n    prForm.appendChild(prLabelName);\r\n    prForm.appendChild(prInputName);\r\n    prForm.appendChild(prLabelEmail);\r\n    prForm.appendChild(prInputEmail);\r\n    prForm.appendChild(prLabelNumber);\r\n    prForm.appendChild(prInputNumber);\r\n    prForm.appendChild(panelSubmit);\r\n\r\n    prInputName.type = \"text\";\r\n    prInputName.name = \"name\";\r\n    prLabelName.textContent = \"Name: \"\r\n\r\n    prInputEmail.type = \"email\";\r\n    prInputEmail.name = \"email\";\r\n    prLabelEmail.textContent = \"Email: \"\r\n\r\n    prInputNumber.type = \"tel\";\r\n    prInputNumber.name = \"phone\";\r\n    prLabelNumber.textContent = \"Phone #: \"\r\n\r\n    panelSubmit.type = \"submit\"\r\n    panelSubmit.name = \"sbtn\"\r\n\r\n    plText.textContent = \"Pawsitively Here for You: Unleash the Support for Your Furry Friends!\"\r\n    plImage.src = \"/assets/images/pug on phone.png\"\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contactTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoad */ \"./src/initialPageLoad.js\");\n\r\n\r\n(0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialPageLoad.js":
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\r\n\r\nconst contentElement = document.getElementById('content');\r\n\r\nfunction initialPageLoad () {\r\n    contentElement.textContent = '';\r\n\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavBar)()\r\n\r\n    let homePageSquare = document.createElement('div');\r\n    let homePageImage = document.createElement('div');\r\n    let homePageText = document.createElement('div');\r\n    \r\n    homePageSquare.id = 'hpSquare';\r\n    homePageImage.id = 'hpImage';\r\n    homePageText.id = 'hpText';\r\n\r\n    homePageText.innerText = \"Welcome to Rocky's Nom Nom Noms! \\n \\n Indulge your furry friend with the most delectable treats crafted just for pups like yours and mine.\";\r\n\r\n\r\n    contentElement.appendChild(homePageSquare);\r\n    homePageSquare.appendChild(homePageImage);\r\n    homePageSquare.appendChild(homePageText);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/initialPageLoad.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuTabs: () => (/* binding */ menuTabs)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\r\n\r\nconst contentElement = document.getElementById('content');\r\n\r\nfunction menuTabs (){\r\n    contentElement.textContent = '';\r\n\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavBar)()\r\n\r\n    let menuSquareBox = document.createElement('div');\r\n    let menuTitle = document.createElement('h1');\r\n    let menuSlogan = document.createElement('h3');\r\n    let menuList = document.createElement('ul');\r\n    let menuItemOne = document.createElement('div');\r\n    let menuItemTwo = document.createElement('div');\r\n    let menuItemThree = document.createElement('div');\r\n    let menuItemFour = document.createElement('div');\r\n    let menuItemFive = document.createElement('div');\r\n    let menuItemSix = document.createElement('div');\r\n    let menuItemSeven = document.createElement('div');\r\n\r\n\r\n    contentElement.appendChild(menuSquareBox);\r\n    menuSquareBox.appendChild(menuTitle);\r\n    menuSquareBox.appendChild(menuSlogan);\r\n    menuSquareBox.appendChild(menuList);\r\n    menuList.appendChild(menuItemOne);\r\n    menuList.appendChild(menuItemTwo);\r\n    menuList.appendChild(menuItemThree);\r\n    menuList.appendChild(menuItemFour);\r\n    menuList.appendChild(menuItemFive);\r\n    menuList.appendChild(menuItemSix);\r\n    menuList.appendChild(menuItemSeven);\r\n\r\n    menuSquareBox.id = 'menuSquareBox';\r\n    menuList.id = 'menuList';\r\n\r\n    menuTitle.innerText = \"Rockys Specials!\";\r\n    menuSlogan.innerText = 'Crafting Culinary Canine Joy, One Bite at a Time!';\r\n\r\n    menuItemOne.innerText = 'Bacon(3 Strips) ----------------------------------- $6';\r\n    menuItemTwo.innerText = 'Beefy Bites ---------------------------------------- $7';\r\n    menuItemThree.innerText = 'Chewy Chums ------------------------------------- $5';\r\n    menuItemFour.innerText = 'Duck Delight -------------------------------------- $4';\r\n    menuItemFive.innerText = 'Lamb Licks ---------------------------------------- $4';\r\n    menuItemSix.innerText = 'Puppy Pleasers ------------------------------------ $2';\r\n    menuItemSeven.innerText = 'Yum Yums ----------------------------------------- $3';\r\n    \r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menuTab.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNavBar: () => (/* binding */ createNavBar)\n/* harmony export */ });\n/* harmony import */ var _initialPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoad */ \"./src/initialPageLoad.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab.js\");\n/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactTab */ \"./src/contactTab.js\");\n\r\n\r\n\r\n\r\nconst contentElement = document.getElementById('content');\r\n\r\nfunction createNavBar() {\r\n    //Defining intial elements\r\n    let navBar = document.createElement('div');\r\n    let navList = document.createElement('ul');\r\n    let navHome = document.createElement('a');\r\n    let navMenu = document.createElement('a');\r\n    let navContact = document.createElement('a');\r\n\r\n    navHome.id = \"navHome\";\r\n    navMenu.id = \"navMenu\";\r\n    navContact.id = \"navContact\";\r\n\r\n    navHome.onclick = _initialPageLoad__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad;\r\n    navMenu.onclick = _menuTab__WEBPACK_IMPORTED_MODULE_1__.menuTabs;\r\n    navContact.onclick = _contactTab__WEBPACK_IMPORTED_MODULE_2__.contactsDisplay;\r\n\r\n    //adding classes and id to navbar/elements\r\n    navBar.id = 'navBarMain';\r\n    navList.classList.add('navTabs');\r\n\r\n    //appending elements to main content div\r\n    contentElement.appendChild(navBar);\r\n    navBar.appendChild(navList);\r\n    navList.appendChild(navHome);\r\n    navList.appendChild(navMenu);\r\n    navList.appendChild(navContact);\r\n\r\n    //adding text to tab elements\r\n    navHome.innerText = 'Home';\r\n    navMenu.innerText = 'Menu';\r\n    navContact.innerText = 'Contacts';\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

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