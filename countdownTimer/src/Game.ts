// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST } from "./Constants";
import { AssetManager } from "./AssetManager";
import { Plane } from "./Plane";
import { StopWatch } from "./StopWatch";

// game variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
// assetmanager object
let assetManager:AssetManager;

// game objects
let background:createjs.Sprite;
let plane:Plane;
let stopwatch:StopWatch;

// --------------------------------------------------- event handlers
function onReady(e:createjs.Event):void {
    console.log(">> adding sprites to game");

    // construct game object sprites
    background = assetManager.getSprite("sprites","other/background",0,0);
    stage.addChild(background);
    stage.on("countDownFinish", onCountDownFinish, null, true)

    plane = new Plane(stage, assetManager);
    plane.speed = 4;
    plane.direction = Plane.RIGHT;
    plane.startMe();

    stopwatch = new StopWatch(stage, assetManager);
    stopwatch.start(10);

    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);     
    console.log(">> game ready");
}

function onTick(e:createjs.Event):void {
    // TESTING FPS
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // This is your game loop :)
    plane.update();
    
    // update the stage!
    stage.update();
}

function onCountDownFinish(){
    plane.killMe();
}
// --------------------------------------------------- main method
function main():void {
    console.log(">> initializing");

    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });
    // setting monitoring of mouseovers to be 10 times a second instead of 20 (default) for lighter on the processor
    stage.enableMouseOver(10);

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);
}

main();