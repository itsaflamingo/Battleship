/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ (() => {

eval("\n    const body = document.querySelector('body');\n    const container = document.createElement('div');\n    container.setAttribute('class', 'container');\n    const header = document.createElement('div');\n    header.setAttribute('class', 'header');\n    const main = document.createElement('div');\n    main.setAttribute('class', 'main');\n\n    const playerSection = document.createElement('div');\n    playerSection.setAttribute('class', 'player-section');\n    const playerBoard = document.createElement('div');\n    playerBoard.setAttribute('class', 'player-board');\n\n    const computerSection = document.createElement('div');\n    computerSection.setAttribute('class', 'computer-section');\n    const computerBoard = document.createElement('div');\n    computerBoard.setAttribute('class', 'computer-board');\n\n    playerSection.appendChild(playerBoard);\n    computerSection.appendChild(computerBoard);\n\n    main.appendChild(playerSection);\n    main.appendChild(computerSection);\n\n    container.appendChild(header);\n    container.appendChild(main);\n\n    body.appendChild(container);\n\n\n//# sourceURL=webpack://battleship/./src/display.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/display.js"]();
/******/ 	
/******/ })()
;