class Obstacle {
    constructor(){
      this.x = width;
      this.y = 420;
      this.speed = moveSpeed;
  
    }
    
    move(){
      this.x -= this.speed;
    }
    
    show(){
      image(ostacolo1, this.x, this.y, 95, 150);
    }
    
    isOffScreen(){
      return this.x < -95;
    }
  }