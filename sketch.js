var shooter,brick,brick2,brick3,brick4,brick5,brick6,ground;

function setup() {
  createCanvas(1200,600);
 shooter= createSprite(200,200,20,20);
 shooter.shapeColor="yellow";

 ground=createSprite(580,300,190,20);
 ground.shapeColor="white"

 brick=createSprite(520,260,30,60);
 brick.shapeColor="red";

 brick2=createSprite(580,260,30,60);
 brick2.shapeColor="red";

 brick3=createSprite(640,260,30,60);
 brick3.shapeColor="red";

 brick4=createSprite(547,200,30,60);
 brick4.shapeColor="blue";

 brick5=createSprite(610,200,30,60);
 brick5.shapeColor="blue";

 brick6=createSprite(580,140,30,60);
 brick6.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  drawSprites();
}