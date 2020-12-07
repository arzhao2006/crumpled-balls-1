const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 10);

  ground = new Ground(400, 680, 800, 20);
  
  sprite1 = new Dustbin(550, 620, 20, 100);
  sprite2 = new Dustbin(610, 660, 100, 20);
  sprite3 = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {

  background(100);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  sprite1.display();
  sprite2.display();
  sprite3.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:14, y: -14})
  }
}