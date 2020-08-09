
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(700, 270, 1400, 20);
	box1 = createSprite(1200, 190, 20, 140);
	box2 = createSprite(1000, 190, 20, 140);
	box3 = createSprite(1100, 250, 200, 20);

	paperObject = new Paper(100, 250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paperObject.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y: -85})
	}
}


