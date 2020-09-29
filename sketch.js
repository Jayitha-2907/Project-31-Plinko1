const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

var bar1, bar2, bar3, bar4, bar5, bar6;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

   ground = new Ground(240, 800, 480, 10);

   bar1 = new Ground(40, 790, 70, 10);
   bar2 = new Ground(120, 790, 70, 10);
   bar3 = new Ground(200, 790, 70, 10);
   bar4 = new Ground(280, 790, 70, 10);
   bar5 = new Ground(360, 790, 70, 10);
   bar6 = new Ground(440, 790, 70, 10);

     

  for(var k = 0; k <= width; k = k + 80){

    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


//1
  for (var j = 20; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,150));
  }

  //2
  for (var j = 5; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,250));
  }

   //3
   for (var j = 20; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,350));
  }

  //4
   for (var j = 5; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,450));
  }




}



function draw() {
  background(0);  
  Engine.update(engine);

  fill("brown");
  ground.display();

  fill("white");
  bar1.display();

  fill("white");
  bar2.display();

  fill("white");
  bar3.display();

  fill("white");
  bar4.display();

  fill("white");
  bar5.display();

  fill("white");
  bar6.display();


  //falling of particles
  if(frameCount%40===0){

    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  //particles
  for(var t = 0; t < particles.length; t++){
    particles[t].display();
  } 


  //plinkos
  for (var j = 0; j < plinkos.length; j++) {
     
    plinkos[j].display();
    
  }


   //divisions
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  } 



  drawSprites();
}