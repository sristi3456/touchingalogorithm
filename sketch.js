var fixedrect, movingrect;


function setup() {
 createCanvas(600,600);
  fixedrect=createSprite(300,300,70,50) ;
  movingrect=createSprite(400,200,70,50) ;

  movingrect.shapeColor="pink";
  fixedrect.shapeColor="blue";

  fixedrect.debug=true;
  movingrect.debug=true;

}

function draw() {
  background(255,255,255);  
  
  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;
  
  if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && 
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && 
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 && 
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2) 
    {
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
      }
      else{
        fixedrect.shapeColor="purple";
        movingrect.shapeColor="purple";
      }


  drawSprites();

}