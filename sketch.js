
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1, d1, d2, d3;

function preload()
{
	
}

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	Engine.run(engine);

	ground1 = new ground(600,height,1200,20);
	d1 = new dustbin(600, 680, 200, 20);
	d2 = new dustbin(500, 615, 20, 150);
	d3 = new dustbin(700, 615, 20, 150);
	ball = new paper(100, 600, 20);
}


function draw() {

  	rectMode(CENTER);
  	ellipseMode(RADIUS)
  	background(0);
  	drawSprites();
  
  	ground1.display();
  	d1.display();
  	d2.display();
  	d3.display();
  	ball.display();
 
	if(keyDown("UP_ARROW")) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 400, y: -400});
	}

}

