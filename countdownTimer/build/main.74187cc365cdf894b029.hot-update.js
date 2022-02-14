"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/StopWatch.ts":
/*!**************************!*\
  !*** ./src/StopWatch.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StopWatch = void 0;
class StopWatch {
    constructor(stage, assetManager) {
        this._seconds = 0;
    }
    get seconds() {
        return this._seconds;
    }
    start(startingSeconds) {
        this._seconds = startingSeconds;
        this.timer = window.setInterval(this.onTimerUpdate, 1000);
    }
    onTimerUpdate() {
        this._seconds--;
        console.log(this.seconds);
    }
}
exports.StopWatch = StopWatch;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eee7399597e60f73f219")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.74187cc365cdf894b029.hot-update.js.map