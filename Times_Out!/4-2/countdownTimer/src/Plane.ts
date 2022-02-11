import { AssetManager } from "./AssetManager";
import { STAGE_WIDTH, STAGE_HEIGHT } from "./Constants";

export class Plane {
    // class constants for readability 
    public static UP:number = 1;
    public static DOWN:number = 2;
    public static LEFT:number = 3;
    public static RIGHT:number = 4;

    // custom event
    private eventStageExit:createjs.Event;

    // private property variables
    private _speed:number;
    private _direction:number;
    private _moving:boolean;
    private stage:createjs.StageGL;

    // the Plane's sprite object
    private _sprite:createjs.Sprite;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        // initialization of properties
        this._speed = 4;
        this._direction = Plane.UP;
        this._moving = false;
        this.stage = stage;

        this._sprite = assetManager.getSprite("sprites", "plane/alive", 300, 300);

        // construct custom event object for object moving off stage
        this.eventStageExit = new createjs.Event("stageExit", true, false);

        stage.addChild(this._sprite);
    }

    // ------------------------------------------------ gets/sets
    get sprite() {
        return this._sprite;
    }

    set speed(value:number) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }

    get moving() {
        return this._moving;   
    }

    set direction(value:number) {
        this._direction = value;
        // adjusting rotation and scaleX based on direction
        if (this._direction == Plane.UP) {
            this._sprite.rotation = 0;
        } else if (this._direction == Plane.DOWN) {
            this._sprite.rotation = 180;
        } else if (this._direction == Plane.LEFT) {
            this._sprite.rotation = 270;
        } else if (this._direction == Plane.RIGHT) {
            this._sprite.rotation = 90;
        }
    }
    get direction() {
        return this._direction;
    }

    // --------------------------------------------------- public methods
    public startMe():void {
        this._sprite.play();
        this._moving = true;
    }

    public stopMe():void {
        this._sprite.stop();
        this._moving = false;
    }

    public positionMe(x:number, y:number):void {
        this._sprite.x = x;
        this._sprite.y = y;
    }

    public update():void {
        if (this._moving) {

            // reference sprite object for cleaner code below
            let sprite:createjs.Sprite = this._sprite;

            // get current height of sprite on this frame
            let height:number = sprite.getBounds().height;

            if (this._direction == Plane.UP) {
                // moving up
                sprite.y = sprite.y - this._speed;
                if (sprite.y < -(height / 2)) {
                    sprite.y = STAGE_HEIGHT + (height / 2);
                    sprite.dispatchEvent(this.eventStageExit);
                }
            } else if (this._direction == Plane.DOWN) {
                // moving down
                this._sprite.y = this._sprite.y + this._speed;
                if (this._sprite.y > (STAGE_HEIGHT + (height / 2))) {
                    this._sprite.y = -(height / 2);
                    sprite.dispatchEvent(this.eventStageExit);
                }
            } else if (this._direction == Plane.LEFT) {
                // moving left
                this._sprite.x = this._sprite.x - this._speed;
                if (this._sprite.x < -(height / 2)) {
                    this._sprite.x = STAGE_WIDTH + (height / 2)
                    sprite.dispatchEvent(this.eventStageExit);;
                }
            } else if (this._direction == Plane.RIGHT) {
                // moving right
                this._sprite.x = this._sprite.x + this._speed;
                if (this._sprite.x > (STAGE_WIDTH + (height / 2))) {
                    this._sprite.x = -(height / 2);
                    sprite.dispatchEvent(this.eventStageExit);
                }
            }
        }
    }
}