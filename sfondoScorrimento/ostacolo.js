class Obstacle {
  constructor() {
      this.x = width;
      this.y = 400;
      this.speed = scrollSpeed; // La velocità degli ostacoli segue la velocità di scrolling
  }

  move() {
      this.x -= this.speed;
  }

  show() {
      image(ostacolo, this.x, this.y, 150, 200);
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