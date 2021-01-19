const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
//var particles = [];
var divisions = [];
var plinkos = [];
var score  = 0 ;
var particle;
var count =0;
var engine, world, ground;
var turn =0;
var gameState = "start"
function setup() {
  createCanvas(480,700);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
  ground = new Ground(240,660,480,20)

  for (var i= 0, startX=0; startX <= 480; i = i + 1, startX = startX + 70){
      divisions.push(new Division(startX, 500, 10,300));
  }
 // ground2 = new Ground(240,50,480,40)
 for (var i= 0, startX=30; startX <= 480; i = i + 1, startX = startX + 70){
  plinkos.push(new Plinko(startX,250));
}
for (var i= 0, startX=20; startX <= 480; i = i + 1, startX = startX + 50){
  plinkos.push(new Plinko(startX,180));
}

for (var i= 0, startX=0; startX <= 480; i = i + 1, startX = startX + 40){
  plinkos.push(new Plinko(startX,110));
}


}

function draw() {
  background("black");  

  ground.display();
  textSize(20)
  fill("white")
  text("SCORE: " + score, 50,50);
  //drawSprites();
  //ground2.display()
 
  Engine.update(engine)

  push()
  strokeWeight(5)
  stroke ("yellow")
  line(0,300,480,300);
  pop()

  for(var i=20; i <=250; i = i+ 70){
    textSize(20)
    fill("white")
    text("500",i, 370)
  }

  for(var i=300; i <=350; i = i+ 70){
    textSize(20)
    fill("white")
    text("100",i, 370)
  }

  for(var i=370; i <=500; i = i+ 70){
    textSize(20)
    fill("white")
    text("200",i, 370)
  }
 

  for (var i= 0; i < divisions.length; i =i + 1){
    divisions[i].display();
  }

  for (var i= 0; i < plinkos.length; i =i + 1){
    plinkos[i].display()
  }

  if(gameState === "end"){
    textSize(20)
    fill("white")
    text("Game OVER", 200,220);
  }

  if(particle != null)
  {
    particle.display();

    if(particle.body.position.y > 640){
        if(particle.body.position.x < 280){
          score =score + 500;
          particle = null;
          if(count >= 5)
            gameState = "end";
        }
       else if(particle.body.position.x > 250 && particle.body.position.x < 350){
          score =score + 100;
          particle = null;
          if(count >= 5)
            gameState = "end";
        }
       else  if(particle.body.position.x >351 && particle.body.position.x < 900){
          score =score + 200;
          particle = null;
          if(count >= 5)
            gameState = "end";
        }
    }
  }
 
  
}

function mousePressed(){

  if(gameState === "start"){
    count++;
    particle = new Particle(mouseX, 10, 10, 10)
  }
}