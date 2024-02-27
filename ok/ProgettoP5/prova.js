let bgImg;
let omino1;
let omino3;
let pers;
let isPaused = false;
let scrollSpeed = 5; // Velocità di scrolling
let bgX1 = 0; // Posizione x della prima copia dello sfondo
let bgX2; // Posizione x della seconda copia dello sfondo

let lastImageChange = 0; // Variable to store the time of the last image change
let imageInterval = 250; // Interval between image changes (0.25 second)



let ostacolo1;
let ostacolo2;
let ostacolo3;

let ost;

function preload(){
 
    bgImg = loadImage('./img/sfondo.png');
    omino1 = loadImage('./img/omino1.png');
    omino3 = loadImage('./img/omino3.png');
    ostacolo1=loadImage('./img/ostacolo1.png');
   
}

function setup()
{  
    createCanvas(windowWidth, windowHeight);
    pers=new Player();
    ost=new Obstacle();
    bgX2 = width; // Inizializza la posizione x della seconda copia dello sfondo
   
}

function draw()
{
   scrolling();
   pers.show();
   ost.move();
   ost.show();
    // Check if it's time to change the character image
   if (!isPaused && millis() - lastImageChange > imageInterval)
   {
        pers.toggleImage(); // Toggle between character images
        lastImageChange = millis(); // Update the time of the last image change
   }

}
function scrolling() {
    // Sfondo
    image(bgImg, bgX1, 0, width, height);
    image(bgImg, bgX2, 0, width, height);
  
    // Sposta le posizioni x delle due copie dello sfondo
    bgX1 -= scrollSpeed;
    bgX2 -= scrollSpeed;
  
    // Se una copia dello sfondo si sposta completamente fuori dal canvas,
    // riporta la sua posizione all'inizio dell'altro lato del canvas
    if (bgX1 <= -width) {
      bgX1 = width;
    }
    if (bgX2 <= -width) {
      bgX2 = width;
    }
  }
  