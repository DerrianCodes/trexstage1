
var trex ,trex_running;
var ground, groundimage;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")  
groundimage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
trex = createSprite(40,170,50,50);
trex.addAnimation("running",trex_running);
trex.scale = 0.5;
ground = createSprite(200,190,400,10);
ground.velocityX = -4;
ground.x = ground.width/2;
ground.addImage(groundimage)

}

function draw(){
  background(220)
if(ground.x<40){
ground.x = ground.width/2;
}
 trex.collide(ground); 
drawSprites();
}
