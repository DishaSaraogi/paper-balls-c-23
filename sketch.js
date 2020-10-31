
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  box1,box2,box3;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new box(665,650,20,100);
	box2 = new box(775,650,20,100);
	box3 = new box(665,690,200,20);
    ground=new box(450,690,900,20)

	paperObject=new paper(200,450,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paperObject.display();
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100});
  
	}
}


