
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperobj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(800,690,1600,20);
	dustbinObj=new Dustbin(1200,650);
	paperobj=new Paper(1050,650);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(200);
 
  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:-145})
  }

  groundObject.display();
  dustbinObj.display();
  paperobj.display();
}

