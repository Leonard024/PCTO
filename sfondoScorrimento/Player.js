class Player {
  constructor() {
      this.x = 100;
      this.y = height / 2;
      this.speed = 8;
      this.currentImage = omino1;
      this.alternateImage = omino3;
      this.isStopped = false;
  }

  toggleImage() {
      let temp = this.currentImage;
      this.currentImage = this.alternateImage;
      this.alternateImage = temp;
  }

  show() {
      image(this.currentImage, this.x, this.y, 110, 200);
  }

  update() {
      if (!this.isStopped) {
          if (keyIsDown(UP_ARROW)) {
              this.y -= this.speed;
          }
          if (keyIsDown(DOWN_ARROW)) {
              this.y += this.speed;
          }
          this.y = constrain(this.y, 0, height - 150);
      }
  }

  stop() {
      this.isStopped = true;
  }

  restart() {
      this.isStopped = false;
  }
}