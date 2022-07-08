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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard),\n/* harmony export */   \"tiles\": () => (/* binding */ tiles)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nconst Gameboard = () => {\n    const ComputerBoard = () => {\n        const setLocation = (boat, ...arr) => {\n            const location = arr;\n            return boat.shipLocation(location, _index_js__WEBPACK_IMPORTED_MODULE_0__.computerBoats);\n        }\n        const receiveAttack = (hitSpot) => {\n            let compMissedShots = [];\n            let hitBoat;\n            const boatHit = _index_js__WEBPACK_IMPORTED_MODULE_0__.computerBoats.filter(boat => {\n                boat.coordinates.forEach(node => {\n                    if(node === hitSpot) {\n                        hitBoat = boat;\n                    }\n                    else {\n                        return;\n                    }\n                })\n                return hitBoat === boat;\n            });\n    \n            if(boatHit.length === 0) {\n                //record coordinates of missed shot\n                compMissedShots.push(hitSpot);\n                return compMissedShots;\n                //record missed shot on board\n            }\n            const name = boatHit[0].boatName;\n            const length = boatHit[0].length;\n            //send hit coordinates to isHit\n            return Ship(name, length).isHit(hitSpot, _index_js__WEBPACK_IMPORTED_MODULE_0__.computerBoats);\n        }\n\n        return {\n            setLocation,\n            receiveAttack,\n        }\n    }\n    const PlayerBoard = () => {\n        const setLocation = (boat, ...arr) => {\n            const location = arr;\n            return boat.shipLocation(location, _index_js__WEBPACK_IMPORTED_MODULE_0__.playerBoats);\n        }\n        const receiveAttack = (hitSpot) => {\n            let playerMissedShots = [];\n            let hitBoat;\n            const boatHit = _index_js__WEBPACK_IMPORTED_MODULE_0__.playerBoats.filter(boat => {\n                boat.coordinates.forEach(num => {\n                    if(num === hitSpot) {\n                        hitBoat = boat;\n                    }\n                    else {\n                        return;\n                    }\n                })\n                return hitBoat === boat;\n            });\n            \n            if(boatHit.length === 0) {\n                //record coordinates of missed shot\n                playerMissedShots.push(hitSpot);\n                return playerMissedShots;\n                //record missed shot on board\n            }\n\n            //send hit coordinates to isHit\n            return boatHit[0].isHit(hitSpot, _index_js__WEBPACK_IMPORTED_MODULE_0__.playerBoats);\n        }\n        return {\n            setLocation,\n            receiveAttack,\n        }\n    }\n    const generateBoard = (board) => {\n        const thisBoard = document.querySelector(`.${board}`);\n    \n        for(let i=1; i<=100; i++) {\n            const div = document.createElement('div');\n            div.setAttribute('class', 'tile');\n            let a = '';\n            if(board === 'player-board') a='p';\n            else a='c';\n\n            div.setAttribute('id', `${a}${i}`);\n            thisBoard.appendChild(div);\n        }\n    }\n    return {\n        ComputerBoard,\n        PlayerBoard,\n        generateBoard\n    }\n}\n\nGameboard().generateBoard('computer-board');\nGameboard().generateBoard('player-board');\n\nconst tiles = document.querySelectorAll('.tile');\n\ntiles.forEach((tile) => tile.addEventListener('click', (e) => {\n    const target = (e.target.id).slice(1);\n    ps.publish('player-turn', target);\n}));\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Players\": () => (/* binding */ Players),\n/* harmony export */   \"Ship\": () => (/* binding */ Ship),\n/* harmony export */   \"carrier\": () => (/* binding */ carrier),\n/* harmony export */   \"computerBoats\": () => (/* binding */ computerBoats),\n/* harmony export */   \"playerBoats\": () => (/* binding */ playerBoats)\n/* harmony export */ });\n/* harmony import */ var _subscriptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscriptions.js */ \"./src/subscriptions.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\n\nfunction Players() {\n    let isPlayer = true;\n    const Computer = () => {\n        const _randomNum = () => {\n            let num = Math.floor(Math.random() * (100-1) + 1);\n            if(occupiedSpots.indexOf(num) !== -1) {\n                _randomNum();\n            }\n            return num;\n        };\n        const compAttack = () => {\n            console.log('computer');\n            return (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().PlayerBoard().receiveAttack(_randomNum())\n        };\n        isPlayer = true;\n        return {\n            compAttack\n        }\n    }\n\n    const Player = () => {\n        const playerAttack = (target) => {\n            console.log('player', target);\n            return (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)().ComputerBoard().receiveAttack(target);\n        };\n        isPlayer = false;\n        return {\n            playerAttack\n        }\n    }\n\n    const playerTurn = (target) => {\n        return (isPlayer ? Player().playerAttack(target) : Computer().compAttack()); \n    }\n    return {\n        Computer,\n        Player,\n        playerTurn\n    }\n}\n\nfunction Ship (name, length) { \n    const isHit = (hit, playerArr) => {\n        let thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName)\n        thisBoat[0].hitSpot.push(hit);\n        occupiedSpots.push(hit);\n        console.log(thisBoat[0]);\n        return _isSunk(boat.hitSpot,playerArr, thisBoat[0]);\n    }\n    const _isSunk = (hit, playerArr, thisBoat) => {\n        if(hit.length === thisBoat.length) {\n            thisBoat.sunk = true;\n            //remove element from boats\n            playerArr.splice(index, 1);\n        }\n        return thisBoat;\n    }\n    const shipLocation = (location = [], playerArr = []) => {\n        let thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName);\n        thisBoat[0].coordinates = location;\n        return thisBoat[0];        \n    }\n\n    const boat = {\n        boatName: name,\n        coordinates: [],\n        length: length,\n        hitSpot: [],\n        sunk: false,\n        isHit,\n        shipLocation\n    }\n\n    return boat;\n}\nlet carrier = ()=> Ship('Carrier', 5);\nlet battleship = ()=> Ship('Battleship', 4);\nlet cruiser = ()=> Ship('Cruiser', 3);\nlet submarine = ()=>Ship('Submarine', 3);\nlet destroyer = ()=>Ship('Destroyer', 2);\n\nlet occupiedSpots = [];\n\n// with that, you could:\nlet computerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ];\nlet playerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ];\n\n\nconsole.log(Ship('Carrier', 5).shipLocation([p1, p2, p3, p4, p5], playerBoats));\nconsole.log(Ship('Carrier', 5).shipLocation([c1, c2, c3, c4, c5], computerBoats));\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/subscriptions.js":
/*!******************************!*\
  !*** ./src/subscriptions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ps\": () => (/* binding */ ps),\n/* harmony export */   \"pubSub\": () => (/* binding */ pubSub)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction pubSub() {\n    let subscribers = {};\n\n    const publish = (eventName, data) => {\n        if (!Array.isArray(subscribers[eventName])) {\n            return;\n          }\n          subscribers[eventName].forEach((callback) => {\n            callback(data);\n          })\n    }\n    const subscribe = (eventName, callback) => {\n        if (!Array.isArray(subscribers[eventName])) {\n            subscribers[eventName] = [];\n            }\n            subscribers[eventName].push(callback);\n            const index = subscribers[eventName].length-1;\n    \n            return {\n                unsubscribe() {\n                    subscribers[eventName].splice(index, 1);\n                }\n            }\n    }\n    return {\n        publish,\n        subscribe,\n    }\n}\nconst ps = pubSub();\n\nps.subscribe('player-turn', (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.Players)().playerTurn);\n\n\n\n//# sourceURL=webpack://battleship/./src/subscriptions.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/subscriptions.js");
/******/ 	
/******/ })()
;