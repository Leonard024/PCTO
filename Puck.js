// class Puck {
  
//   constructor(){
//     this.x = width / 2 - 350;
//     this.y = 420;
//     this.speed = moveSpeed;
//   }
  
//   canMoveLeft(){
//    if (this.x > 50 + this.speed){
//      return true;
//    } else {
//      return false;
//    }
//   }
  
//   canMoveRight(){
//    if (this.x < width - (50 + this.speed)){
//      return true;
//    } else {
//      return false;
//    }
//   }

  
//   moveLeft(){
//     this.x -= this.speed;
//   }
  
//   moveRight(){
//     this.x += this.speed;
//   }
  

//   show(){
//     image(pers, this.x, this.y, 95, 150);
//   }
  
// }
















class Puck {
  
  constructor(){
    this.x = width / 2 - 350;
    this.y = 420;
    this.speed = moveSpeed;
  }
  
  canMoveLeft(){
   if (this.x > 50 + this.speed){
     return true;
   } else {
     return false;
   }
  }
  
  canMoveRight(){
   if (this.x < width - (50 + this.speed)){
     return true;
   } else {
     return false;
   }
  }

  
  moveLeft(){
    if (!isPaused) {
      this.x -= this.speed;
    }
  }
  
  moveRight(){
    if (!isPaused) {
      this.x += this.speed;
    }
  }
  

  show(){
    image(pers, this.x, this.y, 95, 150);
  }
  
}


