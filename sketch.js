var dog1,dog2,database,foodStock,happyDog
var foodS=20

function preload()
{
  dog1=loadImage("images/dogImg.png")
  dog2=loadImage("images/dogImg1.png")
}


function setup() {
  database=firebase.database()
	createCanvas(600, 600);
  dog=createSprite(300,400,20,20)
  dog.addImage(dog1)
  dog.scale=0.2
  foodStock=database.ref("food")
  foodStock.on("value",readValue)
 
}


function draw() {  

  background(46,139,87)
  
  if(keyWentDown("UP_ARROW")){

  writeStock(foodS)
  dog.addImage(dog2)
  }else
  if(keyWentUp("UP_ARROW")){
    dog.changeImage(dog1)
  }
  

  if(foodS===0){

    textSize (20)
  fill ("red")
  stroke ("black")
  text ("Drago ate all the food",200,100)
  }
  drawSprites();
  //add styles here

  textSize (20)
  fill ("yellow")
  stroke ("black")
  text ("Food Remaining : "+ foodS,200,200)
}
function readValue(data){
foodS=data.val()

}
function writeStock(x){

  if(x<=0){
  x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
food:x

})
}



