 var  dog, happyDog, database, foods, foodStock
var dogimg
function preload()
{
  dogimg=loadImage('images/dogImg.png')  
  happyDog=loadImage('images/dogImg1.png')
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage(dogimg);
  dog.scale=.5
  database=firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readfood);
}


function draw() {  
  background(46, 139, 87);
 if(keyWentDown(UP_ARROW)){
   foods=foods-1;
   writefood(foods);
   dog.addImage(happyDog);
 }
  drawSprites();
  fill(255);
  textSize(20);
  text("Milk bottles left : "+ foods,300,50);
  }

function readfood(data){
 foods=data.val();
}

function writefood(leftBottle){
 database.ref("/").update({
   food:leftBottle
 });
}
