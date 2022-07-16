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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"dragAndDrop\": () => (/* binding */ dragAndDrop),\n/* harmony export */   \"generateBoard\": () => (/* binding */ generateBoard),\n/* harmony export */   \"makeBoats\": () => (/* binding */ makeBoats)\n/* harmony export */ });\nconst generateBoard = (board) => {\n    const thisBoard = document.querySelector(`.${board}`);\n\n    for(let i=1; i<=100; i++) {\n        const div = document.createElement('div');\n        div.classList.add('draggable');\n        let a = '';\n        if(board === 'player-board'){\n            div.classList.add('player-tile');\n            a='p'\n        }\n        else {\n            div.classList.add('comp-tile');\n            a='c'\n        };\n\n        div.setAttribute('id', `${a}${i}`);\n        thisBoard.appendChild(div);\n    }\n}\n\nfunction display() {\n        const body = document.querySelector('body');\n        const container = document.createElement('div');\n        container.setAttribute('class', 'container');\n        const header = document.createElement('div');\n        header.setAttribute('class', 'header');\n        const main = document.createElement('div');\n        main.setAttribute('class', 'main');\n\n        const title = document.createElement('h1');\n        title.innerHTML = 'BATTLESHIP';\n\n        const playerSection = document.createElement('div');\n        playerSection.setAttribute('class', 'player-section');\n        const playerBoard = document.createElement('div');\n        playerBoard.setAttribute('class', 'player-board');\n\n\n        const computerSection = document.createElement('div');\n        computerSection.setAttribute('class', 'computer-section');\n        const computerBoard = document.createElement('div');\n        computerBoard.setAttribute('class', 'computer-board');\n\n        const moveBtn = document.createElement('button');\n        moveBtn.setAttribute('id', 'move-btn');\n        moveBtn.innerHTML = 'MOVE SHIP'\n\n        header.appendChild(title);\n        header.appendChild(moveBtn);\n        playerSection.appendChild(playerBoard);\n        computerSection.appendChild(computerBoard);\n\n        main.appendChild(playerSection);\n        main.appendChild(computerSection);\n\n        container.appendChild(header);\n        container.appendChild(main);\n\n        body.appendChild(container);\n}\nconst makeBoats = (boat, array) => {\n    array.forEach(node => {\n        node.classList.add('boat');\n        node.classList.add(boat);\n        node.setAttribute('draggable', 'true');\n    });\n}\n\nconst dragAndDrop = () => {\n    const draggables = document.querySelectorAll('.draggable');\n    const playerBoard = document.querySelector('.player-board');\n\n    draggables.forEach(draggable => {\n        draggable.addEventListener('dragstart', () => {\n            draggable.classList.add('dragging');\n        })\n\n        draggable.addEventListener('dragend', () => {\n            draggable.classList.remove('dragging');\n        })\n    })\n\n    playerBoard.addEventListener('dragover', e => {\n        //removes default state of not being able to drop\n        e.preventDefault();\n        const draggable = document.querySelector('.dragging');\n        const target = e.target;\n        if(target === null) {\n            return;\n        }\n        else {\n            playerBoard.insertBefore(draggable, target);\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/display.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/display.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;