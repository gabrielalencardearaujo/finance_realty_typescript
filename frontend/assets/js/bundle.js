/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/mod.ts":
/*!***********************!*\
  !*** ./src/ts/mod.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.souUmModulo = void 0;
function souUmModulo() {
    return 'O modulo esta aqui, retornei os estudos.';
}
exports.souUmModulo = souUmModulo;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const mod_1 = __webpack_require__(/*! ./mod */ "./src/ts/mod.ts");
console.log('Hello World');
console.log((0, mod_1.souUmModulo)());
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    console.log('cheguei aqui');
    console.log(e.target);
});
function teste1(name) {
    console.log(this);
    console.log(name);
    console.log('Chamando a funcao usando .call()');
}
teste1.call(new Date(), 'Gabriel');
console.log(4 + 4);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map