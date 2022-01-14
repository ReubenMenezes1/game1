const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg, hero, heroImg, king, kingImg, guards, guard1,guard2,guard3,  guardImg;
function preload() {
  bg = loadImage("assets/bg.jpg");
  heroImg = loadImage("assets/hero.png");
  kingImg = loadImage("assets/king.png");
  guardImg = loadImage("assets/guards.png");
}

function setup() {
  createCanvas(1500, 775);
  hero = new Hero(heroImg,1400,575,0.25,100);
  // hero = createSprite(1400, 575);

  // hero.addImage(heroImg);
  // hero.scale = 0.25;
  king = createSprite(125, 525);

  king.addImage(kingImg);
  king.scale = 0.3;
  guards = new Group();
  guard1 = createSprite(300, 600);
  guard1.addImage(guardImg);
  guard1.scale = 0.5;
  guards.add(guard1)
  guard2 = createSprite(400, 600);
  guard2.addImage(guardImg);
  guard2.scale = 0.5;
  guards.add(guard2)
  guard3 = createSprite(500, 600);
  guard3.addImage(guardImg);
  guard3.scale = 0.5;
  guards.add(guard3)
}

function draw() {
  background(bg);
  if (keyDown("RIGHT_ARROW")) {
    hero.x += 10;
    if(hero.x > 1400){
      hero.x = 1300;
    }
  }
  else if(keyDown("LEFT_ARROW")){
    hero.x -=10;
    if(hero.x <100){
      hero.x = 300;
    }
  }

  if(hero.x - guards.x < (hero.x - guards.x)/2){
    hero.x = 1200;

  }
  drawSprites();
}

