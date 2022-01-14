class Hero {
  constructor(img, x, y, scale, health) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.health = health;
  }

 display(){
     this.hero = createSprite(this.x,this.y);
 }
}
