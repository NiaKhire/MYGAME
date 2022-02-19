const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ninja, ninja_run;
var bg, bgImg;
var ground;
var villan, villan_run;

function preload(){
bgImg = loadImage('images/bcg.png');
ninja_run = loadAnimation('images/ninja_run1.png','images/ninja_run2.png','images/ninja_run3.png','images/ninja_run4.png','images/ninja_run5.png','images/ninja_run6.png','images/ninja_run7.png');
//villan_run = loadAnimation('images/Run_000.png','images/Run_001.png','images/Run_002.png','images/Run_003.png','images/Run_004.png','images/Run_005.png','images/Run_006.png','images/Run_007.png','images/Run_008.png','images/Run_009.png',);
}

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  
  world = engine.world;

  bg = createSprite(500,350,1500,100);
  bg.scale = 2.1;
  bg.velocityX = -2;
  bg.addImage("background", bgImg);

  ninja = createSprite(400,850);
  ninja.addAnimation("running",ninja_run);
  ninja.scale = 1.6;
  //ninja.debug = true;

  ground = createSprite(200,height,2600,50);
  ground.velocityX = -2;
  ground.x = ground.width/2 ;
  ground.visible = false;
  
 
}

function draw (){
  background('grey');

  bg.velocityX = -2;

  if(bg.x < 400){
    bg.x = 550;
  } 


  if(keyDown("space")){
    ninja.velocityY = -10;
  }
  
  ninja.velocityY += 0.5;

  if(ground.x<0){
    ground.x = ground.width/2 ;
  }

  if(keyDown(RIGHT_ARROW)){
    ninja.velocityX = 0.2;
  }

  ground.collide(ninja);

  drawSprites();
}