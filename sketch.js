var bgImg;
var cat1, catAni;
var dog1, dogAni;
var bird, birdImg;
var rabbit, rabbitAni;
var fish, fishAni;
var shopkeeper,shopkeeperImage;
// var beginX = 1300.0; // Initial x-coordinate
// var beginY = 300.0; // Initial y-coordinate
// var endX = 1300.0; // Final x-coordinate
// var endY = 300.0; // Final y-coordinate
// var distX; // X-axis distance to move
// var distY; // Y-axis distance to move
// var exponent = 4; // Determines the curve
var x = 0.0; // Current x-coordinate
var y = 0.0; // Current y-coordinate
// var step = 0.01; // Size of each step along the path
// var pct = 0.0; // Percentage traveled (0.0 to 1.0)
var edges;
var ct = 1;
var ct1, ct2, ct3, ct3;
var gameState = "start";


function preload(){
  bgImg=loadImage("Pet_Shop_2020.png")
  catAni=loadAnimation("Cat_1.png","Cat_2.png")
  shopkeeperImage=loadAnimation("Png/Shopkeeper.png");
  shopkeeperImage1=loadAnimation("Png/Shopkeeper.png","Png/Shopkeeper2.png","Png/Shopkeeper3.png", "Png/Shopkeeper4.png", "Png/Shopkeeper5.png");
  dogAni=loadAnimation("Png/dog_1.png","Png/dog_2.png")
  birdImg=loadImage("Png/b1.png");
  rabbitAni=loadAnimation("Png/r1.png","Png/r2.png");
  fishAni=loadAnimation("Png/fish1.png","Png/fish2.png");
  c1Img=loadAnimation("Png/c1.png");
  c1Img2=loadAnimation("Png/c1walk.png");
  c2Img=loadAnimation("Png/c2st.png");
  c2Img2=loadAnimation("Png/c2w1.png");
  c3Img=loadAnimation("Png/c3.png");
  c3Img2=loadAnimation("Png/c3walking.png");
  c4Img=loadAnimation("Png/c4.png");
  c4Img2=loadAnimation("Png/c4walking.png");
  c5Img=loadAnimation("Png/c5.png");
  c5Img2=loadAnimation("Png/c5walking.png");

  //,"Png/c2w2.png"
  //c2Img3=loadImage("Png/c2w2.png");
}

function setup() {
  createCanvas(1500,800);
  cat1=createSprite(180,580, 60, 30);
  cat1.addAnimation("running",catAni);
  cat1.scale=0.5;

  dog1=createSprite(420,520,60,30)
  dog1.addAnimation("running",dogAni);
  dog1.scale=0.5;

  bird=createSprite(1100,100,10,10);
  bird.addImage(birdImg);
  bird.scale=0.2;

  rabbit=createSprite(1050,350,10,10);
  rabbit.addAnimation("jumping",rabbitAni);
  rabbit.scale=0.2;

  fish=createSprite(315,275,10,10);
  fish.addAnimation("swimming",fishAni);
  fish.scale=0.2;

  shopkeeper=createSprite(600,500,10,10);
  shopkeeper.addAnimation("walking",shopkeeperImage);
  shopkeeper.scale=1.5;

  customer1=createSprite(800,200,10,10);
  customer1.addAnimation("Cwalking",c1Img);
  customer1.scale=.35;
  customer1.visible=false;
  //customer1.setVelocity(-5,4);
  //customer1.velocityY=4;

  customer2=createSprite(700,250,10,10);
  customer2.addAnimation("C2walking",c2Img);
  customer2.scale=.5;
  customer2.visible=false;

  customer3=createSprite(800,200,10,10);
  customer3.addAnimation("C3walking",c3Img);
  customer3.scale=.35;
  customer3.visible=false;
  //customer1.setVelocity(-5,4);
  //customer1.velocityY=4;

  customer4=createSprite(700,250,10,10);
  customer4.addAnimation("C4walking",c4Img);
  customer4.scale=.5;
  customer4.visible=false;

  customer5=createSprite(700,250,10,10);
  customer5.addAnimation("C5walking",c5Img);
  customer5.scale=.35;
  customer5.visible=false;
 
  
}

function draw() {
  background(bgImg); 
  
 
if (keyDown ("space")){
  gameState="play";
}

if (gameState==="play"){
  
  if (frameCount % 50 == 0) {

    //ct=Math.round(random(1,5));
    var ct1=Math.round(random(1,5));
   if(ct===1){
    customer1.x=800;
    customer1.y=200;
    switch(ct1)
    {
      case 1: 
        customer1.visible=true;
        customer1.setVelocity(-5,4);
        //ct++;
        break;

      case 2:
        customer1.visible=true;
        customer1.setVelocity(-3,2);
        //ct++;
        break;

        case 3: 
        customer1.visible=true;
        customer1.setVelocity(-8,2);
        //ct++;
        break;

       case 4:
        customer1.visible=true;
        customer1.setVelocity(5,3);
        //ct++;
        break;

        case 5: 
        customer1.visible=true;
        customer1.setVelocity(8,-1);
        //ct++;
        break;
     
      default: break;
    }
    
    if(customer1.isTouching(cat1)){
      //ct++;
      customer1.setVelocity(5,-3);
      customer1.addAnimation("Cwalking",c1Img2);
      cat1.visible=false;
    }
  else if(customer1.isTouching(dog1)){
      //ct++;
      customer1.setVelocity(3,-4);
      customer1.addAnimation("Cwalking",c1Img2);
      dog1.visible=false;
    }
    else if(customer1.isTouching(fish)){
      //ct++;
      customer1.setVelocity(8,-2);
      customer1.addAnimation("Cwalking",c1Img2);
      fish.visible=false;
    }
    else if(customer1.isTouching(rabbit)){
      //ct++;
      customer1.setVelocity(-5,-3);
      customer1.addAnimation("Cwalking",c1Img2);
      rabbit.visible=false;
    }
    else if(customer1.isTouching(bird)){
      //ct++;
      customer1.setVelocity(-8,-3);
      customer1.addAnimation("Cwalking",c1Img2);
      bird.visible=false;
    }

    if (customer1.y<=50){
      customer1.visible=false;  
    }
    ct++;
  }
  else if(ct===2){
    customer2.x=700;
    customer2.y=250;
    switch(ct1)
    {
      case 1: 
        customer2.visible=true;
        customer2.setVelocity(-5,4);
        //ct++;
        break;

      case 2:
        customer2.visible=true;
        customer2.setVelocity(-3,2);
        //ct++;
        break;

        case 3: 
        customer2.visible=true;
        customer2.setVelocity(-8,2);
        //ct++;
        break;

       case 4:
        customer2.visible=true;
        customer2.setVelocity(5,3);
        //ct++;
        break;

        case 5: 
        customer2.visible=true;
        customer2.setVelocity(8,-1);
        //ct++;
        break;
     
      default: break;
    }

    if(customer2.isTouching(cat1)){
      //ct++;
      customer2.setVelocity(5,-3);
      customer2.addAnimation("Cwalking",c2Img2);
      cat1.visible=false;
    }
  else if(customer2.isTouching(dog1)){
      //ct++;
      customer2.setVelocity(3,-4);
      customer2.addAnimation("Cwalking",c2Img2);
      dog1.visible=false;
    }
    else if(customer2.isTouching(fish)){
      //ct++;
      customer2.setVelocity(8,-2);
      customer2.addAnimation("Cwalking",c2Img2);
      fish.visible=false;
    }
    else if(customer2.isTouching(rabbit)){
      //ct++;
      customer2.setVelocity(-5,-3);
      customer2.addAnimation("Cwalking",c2Img2);
      rabbit.visible=false;
    }
    else if(customer2.isTouching(bird)){
      //ct++;
      customer2.setVelocity(-8,-3);
      customer2.addAnimation("Cwalking",c2Img2);
      bird.visible=false;
    }

    if (customer2.y<=50){
      customer2.visible=false;  
    }
  
    ct++;
  }

  else  if(ct===3){
    customer3.x=800;
    customer3.y=200;
    switch(ct1)
    {
      case 1: 
        customer3.visible=true;
        customer3.setVelocity(-5,4);
        //ct++;
        break;

      case 2:
        customer3.visible=true;
        customer3.setVelocity(-3,2);
        //ct++;
        break;

        case 3: 
        customer3.visible=true;
        customer3.setVelocity(-8,2);
        //ct++;
        break;

       case 4:
        customer3.visible=true;
        customer3.setVelocity(5,3);
        //ct++;
        break;

        case 5: 
        customer3.visible=true;
        customer3.setVelocity(8,-1);
        //ct++;
        break;
     
      default: break;
    }

    if(customer3.isTouching(cat1)){
      //ct++;
      customer3.setVelocity(5,-3);
      customer3.addAnimation("Cwalking",c3Img2);
      cat1.visible=false;
    }
  else if(customer3.isTouching(dog1)){
      //ct++;
      customer3.setVelocity(3,-4);
      customer3.addAnimation("Cwalking",c3Img2);
      dog1.visible=false;
    }
    else if(customer3.isTouching(fish)){
      //ct++;
      customer3.setVelocity(8,-2);
      customer3.addAnimation("Cwalking",c3Img2);
      fish.visible=false;
    }
    else if(customer3.isTouching(rabbit)){
      //ct++;
      customer3.setVelocity(-5,-3);
      customer3.addAnimation("Cwalking",c3Img2);
      rabbit.visible=false;
    }
    else if(customer1.isTouching(bird)){
      //ct++;
      customer3.setVelocity(-8,-3);
      customer3.addAnimation("Cwalking",c3Img2);
      bird.visible=false;
    }

    if (customer3.y<=50){
      customer3.visible=false;  
    }
    ct++;
    
  }

  else  if(ct===4){
    customer4.x=700;
    customer4.y=250;
    switch(ct1)
    {
      case 1: 
        customer4.visible=true;
        customer4.setVelocity(-5,4);
        //ct++;
        break;

      case 2:
        customer4.visible=true;
        customer4.setVelocity(-3,2);
        //ct++;
        break;

        case 3: 
        customer4.visible=true;
        customer4.setVelocity(-8,2);
        //ct++;
        break;

       case 4:
        customer4.visible=true;
        customer4.setVelocity(5,3);
        //ct++;
        break;

        case 5: 
        customer4.visible=true;
        customer4.setVelocity(8,-1);
        //ct++;
        break;
     
      default: break;
    }
    
    if(customer4.isTouching(cat1)){
      //ct++;
      customer4.setVelocity(5,-3);
      customer4.addAnimation("Cwalking",c4Img2);
      cat1.visible=false;
    }
  else if(customer1.isTouching(dog1)){
      //ct++;
      customer4.setVelocity(3,-4);
      customer4.addAnimation("Cwalking",c4Img2);
      dog1.visible=false;
    }
    else if(customer4.isTouching(fish)){
      //ct++;
      customer4.setVelocity(8,-2);
      customer4.addAnimation("Cwalking",c4Img2);
      fish.visible=false;
    }
    else if(customer4.isTouching(rabbit)){
      //ct++;
      customer4.setVelocity(-5,-3);
      customer4.addAnimation("Cwalking",c4Img2);
      rabbit.visible=false;
    }
    else if(customer4.isTouching(bird)){
      //ct++;
      customer4.setVelocity(-8,-3);
      customer4.addAnimation("Cwalking",c4Img2);
      bird.visible=false;
    }

    if (customer4.y<=50){
      customer4.visible=false;  
    }
    ct++;
  }

  else  if(ct===5){
    customer1.x=700;
    customer1.y=250;
    switch(ct1)
    {
      case 1: 
        customer5.visible=true;
        customer5.setVelocity(-5,4);
        //ct++;
        break;

      case 2:
        customer5.visible=true;
        customer5.setVelocity(-3,2);
        //ct++;
        break;

        case 3: 
        customer5.visible=true;
        customer5.setVelocity(-8,2);
        //ct++;
        break;

       case 4:
        customer5.visible=true;
        customer5.setVelocity(5,3);
        //ct++;
        break;

        case 5: 
        customer5.visible=true;
        customer5.setVelocity(8,-1);
        //ct++;
        break;
     
      default: break;
    }

    if(customer5.isTouching(cat1)){
      //ct++;
      customer5.setVelocity(5,-3);
      customer5.addAnimation("Cwalking",c5Img2);
      cat1.visible=false;
    }
  else if(customer5.isTouching(dog1)){
      //ct++;
      customer5.setVelocity(3,-4);
      customer5.addAnimation("Cwalking",c5Img2);
      dog1.visible=false;
    }
    else if(customer5.isTouching(fish)){
      //ct++;
      customer5.setVelocity(8,-2);
      customer5.addAnimation("Cwalking",c5Img2);
      fish.visible=false;
    }
    else if(customer5.isTouching(rabbit)){
      //ct++;
      customer5.setVelocity(-5,-3);
      customer5.addAnimation("Cwalking",c5Img2);
      rabbit.visible=false;
    }
    else if(customer5.isTouching(bird)){
      //ct++;
      customer5.setVelocity(-8,-3);
      customer5.addAnimation("Cwalking",c5Img2);
      bird.visible=false;
    }

    if (customer5.y<=50){
      customer5.visible=false;  
    }
    
    ct=1;
  }
  
}
}
  
  shopkeeper.x=mouseX;
  shopkeeper.y=mouseY;

  edges= createEdgeSprites();
  shopkeeper.collide(edges);


  drawSprites();
}

function mouseMoved(){
shopkeeper.addAnimation("walking",shopkeeperImage1);
}
//   pct = 0.0;
//   beginX = x;
//   beginY = y;
//   endX = mouseX;
//   endY = mouseY;
//   distX = endX - beginX;
//   distY = endY - beginY;
//  if(shopkeeper.x<mouseX){
//  shopkeeper.mirrorX(shopkeeper.mirrorX() * -1);
//  }
//  else{
//    shopkeeper.mirrorX(shopkeeper.mirrorX() * +1);
//  }


  
 
//  }