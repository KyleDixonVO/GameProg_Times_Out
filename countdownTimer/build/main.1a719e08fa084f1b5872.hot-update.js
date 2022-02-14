"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Plane_1 = __webpack_require__(/*! ./Plane */ "./src/Plane.ts");
const StopWatch_1 = __webpack_require__(/*! ./StopWatch */ "./src/StopWatch.ts");
let stage;
let canvas;
let assetManager;
let background;
let plane;
let stopwatch;
function onReady(e) {
    console.log(">> adding sprites to game");
    background = assetManager.getSprite("sprites", "other/background", 0, 0);
    stage.addChild(background);
    stage.on("eventCountDownFinish", onCountDownFinish, null, true);
    plane = new Plane_1.Plane(stage, assetManager);
    plane.speed = 4;
    plane.direction = Plane_1.Plane.RIGHT;
    plane.startMe();
    stopwatch = new StopWatch_1.StopWatch(stage, assetManager);
    stopwatch.start(10);
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    plane.update();
    stage.update();
}
function onCountDownFinish(e) {
    plane.killMe();
}
function main() {
    console.log(">> initializing");
    canvas = document.getElementById("game-canvas");
    canvas.width = Constants_1.STAGE_WIDTH;
    canvas.height = Constants_1.STAGE_HEIGHT;
    stage = new createjs.StageGL(canvas, { antialias: true });
    stage.enableMouseOver(10);
    assetManager = new AssetManager_1.AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    assetManager.loadAssets(Constants_1.ASSET_MANIFEST);
}
main();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f85f7b06bd47246d0799")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1a719e08fa084f1b5872.hot-update.js.map