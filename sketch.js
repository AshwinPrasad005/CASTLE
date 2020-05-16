var ground,world,engine,box1;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.World;

function setup() {
  var canvas = createCanvas(600,600);

  background("orange");

  ground = createSprite(200,375,400,50);

  engine = Engine.create();
  world = engine.world;

  box1 = new Rectangle(200,300,50,100);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  box1.display();

}