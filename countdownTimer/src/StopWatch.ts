import { AssetManager } from "./AssetManager";
import { Plane } from "./Plane";

export class StopWatch {

    private timer:number;
    private _seconds:number;
    private txtSeconds:createjs.BitmapText;
    private eventCountDownFinish:createjs.Event;
    private stage:createjs.StageGL;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        // initialization
        this._seconds = 0;
        
        //construct bitmap text
        this.txtSeconds = new createjs.BitmapText("10", assetManager.getSpriteSheet("glyphs"));
        this.txtSeconds.letterSpacing = 1;
        this.txtSeconds.x = 10;
        this.txtSeconds.y = 10;
        this.stage = stage;
        stage.addChild(this.txtSeconds);

        this.eventCountDownFinish = new createjs.Event("countDownFinish", true, false);
    }

    // ------------------------------------------------------ gets/sets
    get seconds() {
        return this._seconds;
    }

    // ------------------------------------------------------ public methods
    public start(startingSeconds:number):void {
        this._seconds = startingSeconds;

        // setup timer to run event handler every second (1000ms)
        this.timer = window.setInterval(() => {
        
            this._seconds --;
            console.log(this.seconds);

            this.txtSeconds.text = this._seconds.toString();

            if (this.seconds <= 0){
                window.clearInterval(this.timer);
                this.stage.dispatchEvent(this.eventCountDownFinish);
                console.log("event dispatched");
            }
        }, 1000);
    }

    // ------------------------------------------------------ event handler
    private onTimerUpdate(){
        
        this._seconds --;
        console.log(this.seconds);
    }

}