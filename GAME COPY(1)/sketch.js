var form;
var street, level1, level1sprite;
var jackimg, jack;
var blargimg, blarg;
var soldierimg;
var bunkerimg, bunker;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);

  street=loadImage("./assets/streetfinal.jpg");
  level1=loadImage("./assets/level1.png");
  jackimg=loadImage("./assets/clipart.png");
  blargimg=loadAnimation("dino","./assets/dino.gif");
  soldierimg=loadImage("./assets/soldierF.jpg");
  bunkerimg=loadImage("./assets/sign.jpg");


  jack=createSprite(width-1122,height/2);
  //jack=createSprite(200,240);
  jack.addImage("jack",jackimg);
  //jack.addImage("jack",soldierimg);
  jack.scale=0.5;


  blarg=createSprite(width-90,height/2);
  blarg.addAnimation("dino",blargimg);

  bunker=createSprite(width-1222,height/2);

  //level1sprite=createSprite(windowWidth,windowHeight);
  //level1sprite.visible=false;

  //form = new Form();

}

function draw() {
  background(street);  

  //jack=createSprite(width-1122,height/2);
  //jack=createSprite(200,240);
  //jack.addImage("jack",jackimg);
  //jack.addImage("jack",soldierimg);
  //jack.scale=0.5;




  //move character
  if(keyDown("RIGHT_ARROW")) {
  jack.x=jack.x+20;
  }

  if(keyDown("LEFT_ARROW")) {
    jack.x=jack.x-20;
    }

  //move character
  //if(keyDown(RIGHT_ARROW)) {
    //jack.x=jack.x+20;
  //}

  //start();

  drawSprites();

 // form.display();
  


}


function windowResized() {

 resizeCanvas(windowWidth,windowHeight);

}


function jack() {

  

}

function start() {
//form.handleMousePressed();
//background.changeImage(level1);
//level1sprite.addImage("img",level1);
//level1sprite.scale=6;
//level1sprite.visible=true;
//background.visible=false;
}
