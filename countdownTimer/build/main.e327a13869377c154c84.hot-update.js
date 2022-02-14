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
        this.txtSeconds = new createjs.BitmapText("10", assetManager.getSpriteSheet("glyphs"));
        this.txtSeconds.letterSpacing = 1;
        this.txtSeconds.x = 10;
        this.txtSeconds.y = 10;
        stage.addChild(this.txtSeconds);
    }
    get seconds() {
        return this._seconds;
    }
    start(startingSeconds) {
        this._seconds = startingSeconds;
        this.timer = window.setInterval(() => {
            this._seconds--;
            console.log(this.seconds);
            if (this.seconds <= 0) {
                window.clearInterval(this.timer);
            }
        }, 1000);
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
/******/ 	__webpack_require__.h = () => ("99fc91144a24b98f2b54")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e327a13869377c154c84.hot-update.js.map