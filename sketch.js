var bullet,wall
var speed,weight
var thickness
function setup() {
  createCanvas(1600,400);
   bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2)
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
 bullet.velocityX=speed;
 deformation=0.5*speed*speed*speed/22500
 
}
function draw() {
  background(255,255,255);
  if(deformation>180){
  bullet.shapecolour="green"}
  if(deformation<180){
    bullet.shapecolour="red"}
    if(deformation80=180){
      bullet.shapecolour="yellow"}
  drawSprites();
}