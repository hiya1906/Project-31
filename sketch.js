const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var divisions = [];
var divisionHeight = 300;
var plinkos = [];
var particles = [];


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  for(var k = 0; k<=width;k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j = 40; j<= width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }



  ground = new Ground(240,795,480,10);
}

function draw() {
  background("black");  
  ground.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for(var j = 0 ; j < particles.length; j++){
    particles[j].display();
  }
  
  drawSprites();
}
