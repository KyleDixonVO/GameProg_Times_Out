"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Plane.ts":
/*!**********************!*\
  !*** ./src/Plane.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plane = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Plane {
    constructor(stage, assetManager) {
        this._speed = 4;
        this._direction = Plane.UP;
        this._moving = false;
        this.stage = stage;
        this._sprite = assetManager.getSprite("sprites", "plane/alive", 100, 300);
        this.eventStageExit = new createjs.Event("stageExit", true, false);
        stage.addChild(this._sprite);
    }
    get sprite() {
        return this._sprite;
    }
    set speed(value) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }
    get moving() {
        return this._moving;
    }
    set direction(value) {
        this._direction = value;
        if (this._direction == Plane.UP) {
            this._sprite.rotation = 0;
        }
        else if (this._direction == Plane.DOWN) {
            this._sprite.rotation = 180;
        }
        else if (this._direction == Plane.LEFT) {
            this._sprite.rotation = 270;
        }
        else if (this._direction == Plane.RIGHT) {
            this._sprite.rotation = 90;
        }
    }
    get direction() {
        return this._direction;
    }
    startMe() {
        this._sprite.play();
        this._moving = true;
    }
    stopMe() {
        this._sprite.stop();
        this._moving = false;
    }
    positionMe(x, y) {
        this._sprite.x = x;
        this._sprite.y = y;
    }
    update() {
        if (this._moving) {
            let sprite = this._sprite;
            let height = sprite.getBounds().height;
            if (this._direction == Plane.UP) {
                sprite.y = sprite.y - this._speed;
                if (sprite.y < -(height / 2)) {
                    sprite.y = Constants_1.STAGE_HEIGHT + (height / 2);
                    sprite.dispatchEvent(this.eventStageExit);
                }
            }
            else if (this._direction == Plane.DOWN) {
                this._sprite.y = this._sprite.y + this._speed;
                if (this._sprite.y > (Constants_1.STAGE_HEIGHT + (height / 2))) {
                    this._sprite.y = -(height / 2);
                    sprite.dispatchEvent(this.eventStageExit);
                }
            }
            else if (this._direction == Plane.LEFT) {
                this._sprite.x = this._sprite.x - this._speed;
                if (this._sprite.x < -(height / 2)) {
                    this._sprite.x = Constants_1.STAGE_WIDTH + (height / 2);
                    sprite.dispatchEvent(this.eventStageExit);
                }
            }
            else if (this._direction == Plane.RIGHT) {
                this._sprite.x = this._sprite.x + this._speed;
                if (this._sprite.x > (Constants_1.STAGE_WIDTH + (height / 2))) {
                    this._sprite.x = -(height / 2);
                    sprite.dispatchEvent(this.eventStageExit);
                }
            }
        }
    }
    onAnimationEnd(e) {
        this.stage.removeChild(e.target);
    }
    killMe() {
        console.log("Kill Me Called");
        this.sprite.gotoAndPlay("plane/dead");
        this.sprite.on("animationend", this.onAnimationEnd, this, true);
    }
}
exports.Plane = Plane;
Plane.UP = 1;
Plane.DOWN = 2;
Plane.LEFT = 3;
Plane.RIGHT = 4;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("19f6c8b2cda249a21da2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4a403912be97c3a7c9e3.hot-update.js.map