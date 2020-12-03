const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground1;
var ground2;
var ground3;

var ball; 

var slingshot;

var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;

// Blocks for tower number 2
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var engine,world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  
  ground1 = new Ground(400,width/2,800,20);
  ground2 = new Ground(400,305,200,10);
  ground3 = new Ground(650,150,200,10);


  ball = Bodies.circle(200,200,20)
  World.add(world,ball);


  slingshot = new Slingshot(ball.body,{x:200, y:200});


  box1 = new Box(400,290,30,30);
  box2 = new Box(430,290,30,30);
  box3 = new Box(370,290,30,30);
  box4 = new Box(340,290,30,30);
  box5 = new Box(460,290,30,30);
  box6 = new Box(430,260,30,30);
  box7 = new Box(370,260,30,30);
  box8 = new Box(400,260,30,30);
  box9 = new Box(400,230,30,30);
  
  // Tower number 2

  box10 = new Box(650,120,30,30);
  box11 = new Box(620,120,30,30);
  box12 = new Box(680,120,30,30);
  box13 = new Box(710,120,30,30);
  box14 = new Box(590,120,30,30);
  box15 = new Box(650,90,30,30);
  box16 = new Box(680,90,30,30);
  box17 = new Box(620,90,30,30);
  box18 = new Box(650,60,30,30);




}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  
 ground1.display();
 ground2.display();
 ground3.display();

 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();

 // Tower number 2

 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();

 slingshot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}