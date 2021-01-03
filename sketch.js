
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, height, 800, 20);
	paper = new Paper(200,200,25);
	bin = new Dustbin(650,650,10,80);
	bin2 = new Dustbin(550,650,10,80);
	bin3 = new DustbinImage(600,700,160,20);
	
	

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	ground.display();
	paper.display();
	bin.display();
	bin2.display();
	bin3.display();
	

	drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


