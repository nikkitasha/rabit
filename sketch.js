var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var leaves, leavesImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
 
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  

  SpawnApples();
  drawSprites();
}
function SpawnApples(){
  apple = createSprite(random(0,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale= 0.07;
  apple.velocityY= 4
  
  
}