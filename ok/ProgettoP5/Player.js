class Player {
    constructor(){
      this.x=505;
      this.y = 420;
      this.speed = 8;
      this.currentImage = omino1; 
      this.alternateImage = omino3;
    }
    
    toggleImage(){
        // Swap between current image and alternate image
        let temp = this.currentImage;
        this.currentImage = this.alternateImage;
        this.alternateImage = temp;
      }
    show(){
        image(this.currentImage, this.x, this.y, 95, 150);
    }
    
  }