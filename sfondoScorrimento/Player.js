class Player {
  constructor() {
      this.x = 100;
      this.y = height / 2;
      this.speed = 8;
      this.currentImage = omino1;
      this.alternateImage = omino3;
      this.isStopped = false;
      this.yVelocita = 0;
      this.gravità = 0.15;
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
        this.y = constrain(this.y, 0, height - 150);

        this.y += this.yVelocita;
        this.yVelocita += this.gravità;

        this.y = constrain(this.y, 0, height - 270);
      }
  }

  stop() {
      this.isStopped = true;
  }

  restart() {
      this.isStopped = false;
  }

  jump(){
    this.yVelocita = -7;
  }
}