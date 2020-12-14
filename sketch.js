//creating bullet and wall
var bullet , wall ; 

//creating speed , thickness and weight
var speed , weight , thickness; 

function setup() {
  createCanvas(1200,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(50, 200 , 10 , 20);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness , height/2);
  wall.shapeColor = color(80,80,80)
  thickness = random(22,83)
  
}

function draw() {
  background(255,255,255); 
  
  //function has collided to check the strength of walls
function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x + lbullet.width; wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false;
}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed / (thickness * thickness * thickness);

  if (damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if (damage<10){
    wall.shapeColor=color(0,255,0);
  }
  
}
drawSprites();
}