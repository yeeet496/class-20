var movingRect
var fixedRect
function setup() {
  createCanvas(800,400);
   movingRect= createSprite(400, 200, 100,50 );
   movingRect.shapeColor= "green"
   movingRect.debug= true
   fixedRect= createSprite(350,230,50,100)
   fixedRect.shapeColor= "green"
   fixedRect.debug= true
   
}

function draw() {
  background(10,10,10);  
  movingRect.x=mouseX
  movingRect.y=mouseY
  console.log("fixed "+fixedRect.y);
   console.log("moving "+movingRect.y);


  //THIS CONDITION IS FOR TOUCHING 
 if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2  &&
  movingRect.y-fixedRect.y < movingRect.width/2 + fixedRect.width/2 &&
 fixedRect.y-movingRect.y < movingRect.width/2 + fixedRect.width
 ){
movingRect.shapeColor= "red"
fixedRect.shapeColor="red"




 }

 //THIS CONDITION IS FOR NOT TOUNCHING
 else{
movingRect.shapeColor= "green"
fixedRect.shapeColor="green"
 }

  drawSprites();
}