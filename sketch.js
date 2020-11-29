
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var billfrontImage,billbackImage,billleftImage,billrightImage;
var defaultbill;
var bill;
var bgimage;
var edges;

function preload()
{
	bgimage = loadImage("images/bg.jpg");
	defaultbill = loadAnimation("images/19.png","images/19.png","images/19.png","images/19.png");
	billbackImage = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png");
	billleftImage = loadAnimation("images/10.png","images/11.png","images/12.png","images/13.png","images/14.png","images/15.png","images/16.png","images/17.png","images/18.png");
	billfrontImage = loadAnimation("images/19.png","images/20.png","images/21.png","images/22.png","images/23.png","images/24.png","images/25.png","images/26.png","images/27.png");
	billrightImage = loadAnimation("images/28.png","images/29.png","images/30.png","images/31.png","images/32.png","images/33.png","images/34.png","images/35.png","images/36.png");
}

function setup() {
	createCanvas(900,500); 

	edges = createEdgeSprites();

	bill = createSprite(300,180);
	bill.addAnimation("Jai Ancy Mam",defaultbill);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimage);

  if(keyDown("UP")){
	  bill.changeAnimation("HI JAI",billbackImage);
	  bill.y = bill.y-6;
  }

  if(keyDown("DOWN")){
	//bill.addAnimation("JAI Ancy Mam",billbackImage);
	bill.y = bill.y+6;
}

if(keyDown("LEFT")){
	//bill.addAnimation(billbackImage);
	bill.x = bill.x-6;
}

if(keyDown("RIGHT")){
	//bill.addAnimation(billbackImage);
	bill.x = bill.x+6;
}

bill.collide(edges);
  
  drawSprites();
}



