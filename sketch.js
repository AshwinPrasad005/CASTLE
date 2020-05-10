var ground,world,engine;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.World;
const Render = Matter.World;

function setup() {
  createCanvas(600,600);

  ground = createSprite(200,375,400,50);
  
  var box1 = new Rectangle(200,300,50,100);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  box1.display();

}