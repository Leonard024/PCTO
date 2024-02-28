class Obstacle {
  constructor() {
      this.x = width;
      this.y = 300;
      this.speed = scrollSpeed; // La velocità degli ostacoli segue la velocità di scrolling
      this.image = random([ostacolo1, ostacolo2, ostacolo3]); // Seleziona casualmente uno tra ostacolo1, ostacolo2 o ostacolo3
  }

  move() {
      this.x -= this.speed;
  }

  show() {
      image(this.image, this.x, this.y, 320, 370);
  }

  isOffScreen() {
      return this.x < -95;
  }
}

function keyPressed() {
  if (keyCode === 32) { // Barra spaziatrice
      if (pers.isStopped) {
          pers.restart();
          isPaused = false;
      }
  }
}