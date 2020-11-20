//Create variables here
var dog, happyDog , database, foodS,foodStock;
function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happydogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  dog = createSprite(250,250, 50,50 );
  dog.scale = 0.15;
  dog.addImage(dogImage);
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139,87);
  
  
  if(keyWentDown(UP_ARROW))
  {
     writeStock(foodS);
     dog.addImage(happydogImage)

  }
  
  drawSprites();
  
  textSize(13);
  fill(255)
  text("Food: " + foodS, 50,50  )

}


function writeStock(x){
  if( x <= 0 )
  {
    x = 0
  }
  else
  {
    x=x-1
  }
  database.ref("/").update({

    Food :  x,

  })
}

function readStock(data)
{
   foodS = data.val();
}




