var movingrect,fixrect



function setup() {

  createCanvas(800,400);
 movingrect=createSprite(400, 200, 50, 50);
 movingrect.velocityY=-5;
 fixrect=createSprite(100, 200, 50, 50);
 fixrect.velocityY=5;
}

function draw() {
  background("black");  
  drawSprites();
  movingrect.x=mouseX;
  movingrect.y=mouseY;

 console.log(movingrect.x-fixrect.x);
 console.log(movingrect.width/2 + fixrect.width/2);
 if(movingrect.x-fixrect.x < movingrect.width/2 + fixrect.width/2 && 
  fixrect.x-movingrect.x < movingrect.width/2 + fixrect.width/2 )
  {
 movingrect.velocityX=movingrect.velocityX*(-1);
 fixrect.velocityX=fixrect.velocityX*(-1);
  }
   if(movingrect.y-fixrect.y < movingrect.height/2 + fixrect.height/2 &&
     fixrect.y-movingrect.y < movingrect.height/2 + fixrect.height/2 ){
      movingrect.velocityY=movingrect.velocityY*(-1);
      fixrect.velocityY=fixrect.velocityY*(-1);

  }

}