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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;1,400;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0px;\\n}\\n.container {\\n    height: 100vh;\\n    width: 100vw;\\n    display: grid;\\n\\n    grid-template-rows: 1fr 7fr;\\n}\\n.header {\\n    grid-row-start: 1;\\n    grid-row-end: 2;\\n}\\n.main {\\n    grid-row-start: 2;\\n    grid-row-end: 3;\\n    display: flex;\\n    gap: 1rem;\\n}\\n.player-section, .computer-section {\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n/* Header */\\n.header {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\nh1 {\\n    font-family: 'Montserrat', sans-serif;\\n    font-size: 3rem;\\n}\\n#move-btn {\\n    width: 10vw;\\n    height: 5vh;\\n    background-color: white;\\n    border-radius: 20px;\\n    border: 1px solid grey;\\n}\\n/* Boards */\\n.computer-board, .player-board {\\n    display: grid;\\n    grid-template-columns: repeat(10, 5vmin);\\n    grid-template-rows: repeat(10, 5vmin);\\n}\\n.tile {\\n    border: 1px solid rgb(106, 199, 246);\\n    background-color: rgb(33, 173, 220);\\n}\\n.boat {\\n    background-color: rgb(113, 112, 112);\\n}\\n/* boats */\\n.draggable {\\n    cursor: move;\\n}\\n.invis {\\n    visibility: hidden;\\n}\\n.draggable.dragging {\\n    opacity: .5;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"dragAndDrop\": () => (/* binding */ dragAndDrop),\n/* harmony export */   \"generateBoard\": () => (/* binding */ generateBoard),\n/* harmony export */   \"makeBoats\": () => (/* binding */ makeBoats)\n/* harmony export */ });\nconst generateBoard = (board) => {\n    const thisBoard = document.querySelector(`.${board}`);\n\n    for(let i=1; i<=100; i++) {\n        const div = document.createElement('div');\n        div.classList.add('draggable');\n        let a = '';\n        if(board === 'player-board'){\n            div.classList.add('player-tile');\n            a='p'\n        }\n        else {\n            div.classList.add('comp-tile');\n            a='c'\n        };\n\n        div.setAttribute('id', `${a}${i}`);\n        thisBoard.appendChild(div);\n    }\n}\n\nfunction display() {\n        const body = document.querySelector('body');\n        const container = document.createElement('div');\n        container.setAttribute('class', 'container');\n        const header = document.createElement('div');\n        header.setAttribute('class', 'header');\n        const main = document.createElement('div');\n        main.setAttribute('class', 'main');\n\n        const title = document.createElement('h1');\n        title.innerHTML = 'BATTLESHIP';\n\n        const playerSection = document.createElement('div');\n        playerSection.setAttribute('class', 'player-section');\n        const playerBoard = document.createElement('div');\n        playerBoard.setAttribute('class', 'player-board');\n\n\n        const computerSection = document.createElement('div');\n        computerSection.setAttribute('class', 'computer-section');\n        const computerBoard = document.createElement('div');\n        computerBoard.setAttribute('class', 'computer-board');\n\n        const moveBtn = document.createElement('button');\n        moveBtn.setAttribute('id', 'move-btn');\n        moveBtn.innerHTML = 'MOVE SHIP'\n\n        header.appendChild(title);\n        header.appendChild(moveBtn);\n        playerSection.appendChild(playerBoard);\n        computerSection.appendChild(computerBoard);\n\n        main.appendChild(playerSection);\n        main.appendChild(computerSection);\n\n        container.appendChild(header);\n        container.appendChild(main);\n\n        body.appendChild(container);\n}\nconst makeBoats = (boat, array) => {\n    array.forEach(node => {\n        node.classList.add('boat');\n        node.classList.add(boat);\n        node.setAttribute('draggable', 'true');\n    });\n}\n\nconst dragAndDrop = () => {\n    const draggables = document.querySelectorAll('.draggable');\n    const playerBoard = document.querySelector('.player-board');\n\n    draggables.forEach(draggable => {\n        draggable.addEventListener('dragstart', () => {\n            draggable.classList.add('dragging');\n        })\n\n        draggable.addEventListener('dragend', () => {\n            draggable.classList.remove('dragging');\n        })\n    })\n\n    playerBoard.addEventListener('dragover', e => {\n        //removes default state of not being able to drop\n        e.preventDefault();\n        const draggable = document.querySelector('.dragging');\n        const target = e.target;\n        if(target === null) {\n            return;\n        }\n        else {\n            playerBoard.insertBefore(draggable, target);\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/display.js?");

/***/ }),

/***/ "./src/eventlisteners.js":
/*!*******************************!*\
  !*** ./src/eventlisteners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"click\": () => (/* binding */ click)\n/* harmony export */ });\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n\n    \nfunction click (comp, player) {\n    const tiles = document.querySelectorAll('.tile');\n\n    tiles.forEach((tile) => tile.addEventListener('click', (e) => {\n        const target = e.target.id;\n        console.log(target);\n        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.ps.publish('player-turn', target);\n        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.ps.publish('player-turn', target);\n    }));\n}\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/eventlisteners.js?");

/***/ }),

/***/ "./src/game-end.js":
/*!*************************!*\
  !*** ./src/game-end.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameEnd\": () => (/* binding */ gameEnd)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst gameEnd = (player = 'player') => {\n    console.log(`${player} wins!`);\n    (0,_ship__WEBPACK_IMPORTED_MODULE_0__.makeShips)();\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/game-end.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\n\n\nconst Gameboard = (playerBoat) => {\n    const ComputerBoard = () => {   \n        const setLocation = (boat, arr) => {\n            const location = arr;\n            return boat.shipLocation(location, playerBoat);\n        }\n        const makeBoard = () => (0,_display_js__WEBPACK_IMPORTED_MODULE_0__.generateBoard)('computer-board');\n        \n        const receiveAttack = (hitSpot) => {\n            spotsTaken(hitSpot).compSpotsTaken();\n            let boat = _filterBoat(hitSpot); \n            const name = boat.boatName;\n            const length = boat.length;\n            if(boat.boatName === undefined) return boat;\n            \n            //send hit coordinates to isHit\n            return (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(name, length).isHit(hitSpot, playerBoat);\n        }\n\n        return {\n            setLocation,\n            receiveAttack,\n            makeBoard\n        }\n    }\n    const PlayerBoard = () => {\n        const setLocation = (boat, arr) => {\n            const location = arr;\n            return boat.shipLocation(location, playerBoat);\n        }\n        const makeBoard = () => {\n            ;(0,_display_js__WEBPACK_IMPORTED_MODULE_0__.generateBoard)('player-board');\n        }\n        const receiveAttack = (hitSpot) => {\n            spotsTaken(hitSpot).playerSpotsTaken();\n            let boat = _filterBoat(hitSpot) \n            const name = boat.boatName;\n            const length = boat.length;\n            if(boat.boatName === undefined) return boat;\n            //send hit coordinates to isHit\n            return (0,_ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship)(name, length).isHit(hitSpot, playerBoat);\n        }\n        return {\n            setLocation,\n            receiveAttack,\n            makeBoard\n        }\n    }\n\n    const spotsTaken = (spot) => {\n\n        const playerSpotsTaken = () => {\n            let playActiveSpots = [];\n            playActiveSpots.push(spot);\n            (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Players)().Computer(playActiveSpots);\n        }\n\n        const compSpotsTaken = () => {\n            let compActiveSpots = [];\n            compActiveSpots.push(spot);\n        }\n\n        return {\n            playerSpotsTaken,\n            compSpotsTaken\n        }\n    }\n\n    const _filterBoat = (hitSpot) => {\n        let playerMissedShots = [];\n        let hitBoat;\n        const boatHit = playerBoat.filter(boat => {\n            boat.coordinates.forEach(num => {\n                if(num.id === hitSpot) {\n                    hitBoat = boat;\n                }\n                else {\n                    return;\n                }\n            })\n            return hitBoat === boat;\n        });\n        \n        if(boatHit.length === 0) {\n            //record coordinates of missed shot\n            playerMissedShots.push(hitSpot);\n            return playerMissedShots;\n            //record missed shot on board\n        }\n\n        return boatHit[0];\n\n    }\n    return {\n        ComputerBoard,\n        PlayerBoard,\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n/* harmony import */ var _eventlisteners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventlisteners.js */ \"./src/eventlisteners.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\n\n\n\n\n\n\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.display)();\n\nconst gameLoop = () => {\n\n    let computerBoats = (0,_ship_js__WEBPACK_IMPORTED_MODULE_5__.makeShips)().computerBoats;\n    let playerBoats = (0,_ship_js__WEBPACK_IMPORTED_MODULE_5__.makeShips)().playerBoats;    \n\n    const gbp = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(playerBoats).PlayerBoard();\n    const gbc = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard) (computerBoats).ComputerBoard();\n\n    const subscriptions = () => {\n        _pubsub_js__WEBPACK_IMPORTED_MODULE_3__.ps.subscribe('player-turn', (0,_player_js__WEBPACK_IMPORTED_MODULE_6__.Players)(computerBoats, playerBoats).playerTurn);\n    }\n    \n    const makeBoards = () => {\n        gbp.makeBoard();\n        gbc.makeBoard();\n\n        (0,_eventlisteners_js__WEBPACK_IMPORTED_MODULE_4__.click)(computerBoats, playerBoats);\n    }\n\n    const setBoats = () => {\n\n        gbp.setLocation(playerBoats[0], [p1, p2, p3, p4, p5]);\n        gbc.setLocation(computerBoats[0], [c1, c2, c3, c4, c5]);\n    \n        gbp.setLocation(playerBoats[1], [p11, p21, p31, p41]);\n        gbc.setLocation(computerBoats[1], [c11, c21, c31, c41]);\n    \n        gbp.setLocation(playerBoats[2], [p8, p9, p10]);\n        gbc.setLocation(computerBoats[2], [c8, c9, c10]);\n    \n        gbp.setLocation(playerBoats[3], [p24, p25, p26]);\n        gbc.setLocation(computerBoats[3], [c24, c25, c26]);\n    \n        gbp.setLocation(playerBoats[4], [p37, p47]);\n        gbc.setLocation(computerBoats[4], [c37, c47]);\n\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('carrier', [p1, p2, p3, p4, p5]);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('carrier', [c1, c2, c3, c4, c5]);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('battleship', [p11, p21, p31, p41]);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('battleship', [c11, c21, c31, c41]);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('cruiser', [p8, p9, p10]);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('cruiser', [c8, c9, c10]);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('submarine', [p24, p25, p26]);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('submarine', [c24, c25, c26]);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('destroyer', [p37, p47]);\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.makeBoats)('destroyer', [c37, c47]);\n\n        (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.dragAndDrop)();\n    }\n\n    return {\n        subscriptions, \n        setBoats,\n        makeBoards\n    }\n\n}\n\n\nlet gl = gameLoop();\ngl.subscriptions();\ngl.makeBoards();\ngl.setBoats();\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Players\": () => (/* binding */ Players)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\nfunction Players(compBoats = [], playerBoats = []) {\n    let isPlayer = true;\n    const Computer = (playerActiveSpots = []) => {\n        const randomNum = () => {\n            let num = Math.floor(Math.random() * (100-1) + 1);\n            if(playerActiveSpots.indexOf(num) !== -1) {\n                randomNum();\n            }\n            return num;\n        };\n        const compAttack = (num) => {\n            return (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(playerBoats).PlayerBoard().receiveAttack(`p${num}`);\n        };\n        isPlayer = true;\n        return {\n            compAttack,\n            randomNum\n        }\n    }\n    const Player = () => {\n        const playerAttack = (target) => {\n            return (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(compBoats).ComputerBoard().receiveAttack(target);\n        };\n        isPlayer = false;\n        return {\n            playerAttack\n        }\n    }\n    const playerTurn = (target) => {\n        return isPlayer ? Player().playerAttack(target) : Computer().compAttack(Computer().randomNum()); \n    }\n    return {\n        Computer,\n        Player,\n        playerTurn\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ps\": () => (/* binding */ ps)\n/* harmony export */ });\nfunction pubSub() {\n    let subscribers = {};\n\n    const publish = (eventName, data) => {\n        if (!Array.isArray(subscribers[eventName])) {\n            return;\n          }\n          subscribers[eventName].forEach((callback) => {\n            callback(data);\n          })\n    }\n    const subscribe = (eventName, callback) => {\n        if (!Array.isArray(subscribers[eventName])) {\n            subscribers[eventName] = [];\n            }\n            subscribers[eventName].push(callback);\n            const index = subscribers[eventName].length-1;\n    \n            return {\n                unsubscribe() {\n                    subscribers[eventName].splice(index, 1);\n                }\n            }\n    }\n    return {\n        publish,\n        subscribe,\n    }\n}\nconst ps = pubSub();\n\n\n\n//# sourceURL=webpack://battleship/./src/pubsub.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship),\n/* harmony export */   \"makeShips\": () => (/* binding */ makeShips)\n/* harmony export */ });\n/* harmony import */ var _game_end_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-end.js */ \"./src/game-end.js\");\n\n\n//ship factory function. returns ship information, including if it has been sunk, where it was hit, and its location.\nfunction Ship (name, length) { \n\n    const isHit = (hit, playerArr) => {\n        let thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName)\n        thisBoat[0].hitSpot.push(hit);\n        return _isSunk(playerArr, thisBoat[0]);\n    }\n    const _isSunk = (playerArr, thisBoat) => {\n        if(thisBoat.hitSpot.length === thisBoat.length) {\n            let index = playerArr.indexOf(thisBoat);\n            thisBoat.sunk = true;\n            //remove element from boats\n            playerArr.splice(index, 1);\n\n            if(playerArr.length === 0) {\n                (0,_game_end_js__WEBPACK_IMPORTED_MODULE_0__.gameEnd)();\n            }\n        }\n        return thisBoat;\n    }\n    const shipLocation = (location = [], playerArr = []) => {\n        let thisBoat = playerArr.filter(arr => arr.boatName === boat.boatName);\n        thisBoat[0].coordinates = location;\n        return thisBoat[0];        \n    }\n\n    const boat = {\n        boatName: name,\n        coordinates: [],\n        length: length,\n        hitSpot: [],\n        sunk: false,\n        isHit,\n        shipLocation\n    }\n\n    return boat;\n}\n\nconst makeShips = () => {\n    let carrier = () => Ship('carrier', 5);\n    let battleship = () => Ship('battleship', 4);\n    let cruiser = () => Ship('cruiser', 3);\n    let submarine = () => Ship('submarine', 3);\n    let destroyer = () => Ship('destroyer', 2);\n\n    let computerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ];\n    let playerBoats = [ carrier(), battleship(), cruiser(), submarine(), destroyer() ];\n\n    return {\n        computerBoats, \n        playerBoats\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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