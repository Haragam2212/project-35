//Create variables here
var dog,happyDog,foodS,foodStock;
var database;
var button1,button2,fedTime,lastFed;
var foodStock,lastFed;

function preload()
{
  //load images here
  img1=loadImage("images/dogImg.png");
  img2=loadImage("images/dogImg1.png");
  img3=loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250);
  dog.addImage(img1);
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
   background(46,139,87);
   fedTime=database.ref('feedTime');
   fedTime.on("value",function(data){
     lastFed=data.val();
   })
  drawSprites();
  
  //add styles here
  textSize(20);
  fill("black");
  stroke(5);
  text("Note: Press UP_ARROW key to feed the dog",50,100);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    food:x
  })
}