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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alterShipSection\": () => (/* binding */ alterShipSection),\n/* harmony export */   \"computerDisplay\": () => (/* binding */ computerDisplay),\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"dragAndDrop\": () => (/* binding */ dragAndDrop),\n/* harmony export */   \"generateBoard\": () => (/* binding */ generateBoard),\n/* harmony export */   \"makeBoats\": () => (/* binding */ makeBoats)\n/* harmony export */ });\nconst generateBoard = (board) => {\n    const thisBoard = document.querySelector(`.${board}`)\n\n    for(let i=1; i<=100; i++) {\n        const div = document.createElement('div')\n        div.classList.add('draggable')\n        let a = ''\n        if(board === 'player-board'){\n            div.classList.add('player-tile')\n            a='p'\n        }\n        else {\n            div.classList.add('comp-tile')\n            a='c'\n        }\n\n        div.setAttribute('id', `${a}${i}`)\n        thisBoard.appendChild(div)\n    }\n}\nfunction display() {\n        const body = document.querySelector('body')\n        const container = document.createElement('div')\n        container.setAttribute('class', 'container')\n        const header = document.createElement('div')\n        header.setAttribute('class', 'header')\n        const main = document.createElement('div')\n        main.setAttribute('class', 'main')\n\n        const title = document.createElement('h1')\n        title.innerHTML = 'BATTLESHIP'\n\n        const playerSection = document.createElement('div')\n        playerSection.setAttribute('class', 'player-section')\n        const playerBoard = document.createElement('div')\n        playerBoard.setAttribute('class', 'player-board')\n\n\n        const computerSection = document.createElement('div')\n        computerSection.setAttribute('class', 'computer-section')\n        const computerBoard = document.createElement('div')\n        computerBoard.setAttribute('class', 'computer-board')\n\n        const moveBtn = document.createElement('button')\n        moveBtn.setAttribute('id', 'move-btn')\n        moveBtn.innerHTML = 'MOVE SHIP'\n        \n        const shipSection = document.createElement('div')\n        shipSection.setAttribute('class', 'ship-section')\n\n        const ships = document.createElement('div')\n        ships.setAttribute('class', 'ships')\n\n        const carrier = document.createElement('div')\n        carrier.setAttribute('class', 'ship')\n        carrier.classList.add('draggable')\n        carrier.classList.add('carrier')\n        carrier.setAttribute('draggable', 'true')\n\n        const battleship = document.createElement('div')\n        battleship.setAttribute('class', 'ship') \n        battleship.classList.add('draggable')\n        battleship.classList.add('battleship')\n        battleship.setAttribute('draggable', 'true')\n        \n        const cruiser = document.createElement('div')\n        cruiser.setAttribute('class', 'ship')\n        cruiser.classList.add('draggable')\n        cruiser.classList.add('cruiser')\n        cruiser.setAttribute('draggable', 'true')\n\n        const submarine = document.createElement('div')\n        submarine.setAttribute('class', 'ship')\n        submarine.classList.add('draggable')\n        submarine.classList.add('submarine')\n        submarine.setAttribute('draggable', 'true')\n\n        const destroyer = document.createElement('div')\n        destroyer.setAttribute('class', 'ship')\n        destroyer.classList.add('draggable')\n        destroyer.classList.add('destroyer')\n        destroyer.setAttribute('draggable', 'true')\n\n        const axis = document.createElement('button');\n        axis.setAttribute('class', 'axis')\n        axis.innerHTML = 'X'\n\n        ships.appendChild(carrier)\n        ships.appendChild(battleship)\n        ships.appendChild(cruiser)\n        ships.appendChild(submarine)\n        ships.appendChild(destroyer)\n        shipSection.appendChild(ships)\n        shipSection.appendChild(axis)\n       \n\n        header.appendChild(title)\n        header.appendChild(moveBtn)\n        playerSection.appendChild(playerBoard)\n        playerSection.appendChild(shipSection)\n        computerSection.appendChild(computerBoard)\n\n        main.appendChild(playerSection)\n        main.appendChild(computerSection)\n\n        container.appendChild(header)\n        container.appendChild(main)\n\n        body.appendChild(container)\n}\nconst makeBoats = (boat, array) => {\n    array.forEach(node => {\n            node.classList.add('boat')\n            node.classList.add('draggable')\n            node.setAttribute('draggable', 'true')\n        node.classList.add(boat)\n    })\n}\nconst computerDisplay = () => {\n    const compBoard = document.querySelector('.computer-board')\n\n    const randomCompDisp = (length) => {\n        let array = []\n        const randomNum = Math.floor(Math.random() * (100-1) + 1)\n\n        for(let i=randomNum; i<randomNum+length; i++) {\n            const node = document.getElementById(`c${i}`)\n            const nodeId = node.id\n            let endRow = parseInt(nodeId.slice(1, 2))\n            if(nodeId.length > 2) {\n                endRow = (endRow+1)*10\n            }\n            //if space is occupied by boat\n            if(node.classList.length > 2) {\n                return randomCompDisp(length)\n            }\n            //if boat will overlap\n            if(array.length === 0 && ((randomNum + length) > endRow  || randomNum % 10 === 0)) {\n                return randomCompDisp(length)\n            }\n\n            array.push(node)\n        }\n        return array\n    }\n    const preventClick = () => {\n        compBoard.classList.add('no-click');\n    }\n\n    return {\n        randomCompDisp,\n        preventClick\n    }\n}\nconst dragAndDrop = () => {\n    const draggables = document.querySelectorAll('.draggable')\n    const playerBoard = document.querySelector('.player-board')\n\n    draggables.forEach(draggable => {\n        draggable.addEventListener('dragstart', () => {\n            //add dragging class to entire boat\n            draggable.classList.add('dragging')\n        })\n        draggable.addEventListener('dragend', (e) => {\n            //remove dragging class from entire boat\n            draggable.classList.remove('dragging')\n            playerBoard.replaceChild(draggable, e.target.nextSibling)\n        })\n    })\n\n    playerBoard.addEventListener('dragover', e => {\n        //removes default state of not being able to drop\n        e.preventDefault()\n        const draggable = document.querySelector('.dragging')\n        const target = e.target\n\n        if(target === null) return\n        \n        draggable.setAttribute('id', target.id)\n        playerBoard.insertBefore(draggable, target)\n    })\n}\nconst alterShipSection = () => {\n\n    const changeAxis = () => {\n        const ships = document.querySelectorAll('.ships > .ship')\n        const button = document.querySelector('.axis')\n\n        ships.forEach(ship => {\n            ship.classList.toggle('vertical')\n            if(ship.classList.contains('vertical')) {\n                button.innerHTML = 'Y'\n            }\n            else {\n                button.innerHTML = 'X'\n            }\n        })\n\n        if(ships.length === 0) _isFinished()\n    }\n\n    const _isFinished = () => {\n        const shipSection = document.querySelector('.ship-section')\n        computerDisplay().preventClick()\n        shipSection.classList.add('.hide')\n    }\n    \n    return {\n        changeAxis\n    }\n    \n}\n\n\n\n//# sourceURL=webpack://battleship/./src/display.js?");

/***/ }),

/***/ "./src/eventlisteners.js":
/*!*******************************!*\
  !*** ./src/eventlisteners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"click\": () => (/* binding */ click)\n/* harmony export */ });\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\n\n    \nfunction click (comp, player) {\n    const compTiles = document.querySelectorAll('.comp-tile')\n    const axis = document.querySelector('.axis')\n    const c = (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.computerDisplay)();\n    const a = (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.alterShipSection)();\n\n    compTiles.forEach((tile) => tile.addEventListener('click', e => {\n        const target = e.target.id;\n        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.ps.publish('player-turn', target)\n        c.preventClick()\n        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.ps.publish('player-turn', target)\n    }))\n    axis.addEventListener('click', () => {\n        a.changeAxis()\n    })\n}\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/eventlisteners.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ps\": () => (/* binding */ ps)\n/* harmony export */ });\nfunction pubSub() {\n    let subscribers = {};\n\n    const publish = (eventName, data) => {\n        if (!Array.isArray(subscribers[eventName])) {\n            return;\n          }\n          subscribers[eventName].forEach((callback) => {\n            callback(data);\n          })\n    }\n    const subscribe = (eventName, callback) => {\n        if (!Array.isArray(subscribers[eventName])) {\n            subscribers[eventName] = [];\n            }\n            subscribers[eventName].push(callback);\n            const index = subscribers[eventName].length-1;\n    \n            return {\n                unsubscribe() {\n                    subscribers[eventName].splice(index, 1);\n                }\n            }\n    }\n    return {\n        publish,\n        subscribe,\n    }\n}\nconst ps = pubSub();\n\n\n\n//# sourceURL=webpack://battleship/./src/pubsub.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/eventlisteners.js");
/******/ 	
/******/ })()
;