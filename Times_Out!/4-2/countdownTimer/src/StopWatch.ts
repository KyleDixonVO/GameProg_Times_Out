import { AssetManager } from "./AssetManager";

export class StopWatch {

    private timer:number;
    private _seconds:number;
    private txtSeconds:createjs.BitmapText;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        // initialization
        this._seconds = 0;
        
        //construct bitmap text
        this.txtSeconds = new createjs.BitmapText("10", assetManager.getSpriteSheet("glyphs"));
        this.txtSeconds.letterSpacing = 1;
        this.txtSeconds.x = 10;
        this.txtSeconds.y = 10;
        stage.addChild(this.txtSeconds);
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
            }
        }, 1000);
    }

    // ------------------------------------------------------ event handler
    private onTimerUpdate(){
        
        this._seconds --;
        console.log(this.seconds);
    }

}