// let bg;
// let bgLeft = 0;
// let moveSpeed = 8;
// let p;
// let pers;
// let ostacolo;
// let obstacles = [];

// function preload(){
//   bg = loadImage("./img/bg.png");
//   pers = loadImage("./img/personaggio.png");
//   ostacolo = loadImage("./img/ostacolo.png");
// }

// function setup() {
//   createCanvas(1350, bg.height);
//   rectMode(CENTER);
  
//   p = new Puck();
//   obstacles.push(new Obstacle());
// }

// function draw() {
//   background(220);
//   image(bg, bgLeft, 0);
  
//   moveBackgroundLeft();
  
//   p.show();
  
//   for (let i = obstacles.length - 1; i >= 0; i--){
//     obstacles[i].move();
//     obstacles[i].show();
    
//     if (obstacles[i].isOffScreen()){
//       obstacles.splice(i, 1);
//     }
//   }
  
//   if (obstacles.length === 0 && bgLeft - moveSpeed > -bg.width + width){
//     obstacles.push(new Obstacle());
//   }
// }

// function moveBackgroundLeft(){
//   let minBgLeft = -bg.width + width;
  
//   if (bgLeft - moveSpeed > minBgLeft){
//     bgLeft -= moveSpeed;
//   }
// }

















let bg;
let bgLeft = 0;
let moveSpeed = 8;
let p;
let pers;
let ostacolo;
let obstacles = [];
let isPaused = false;

function preload(){
  bg = loadImage("./img/bg.png");
  pers = loadImage("./img/personaggio.png");
  ostacolo = loadImage("./img/ostacolo.png");
}

function setup() {
  createCanvas(1350, bg.height);
  rectMode(CENTER);
  
  p = new Puck();
  obstacles.push(new Obstacle());
}

function draw() {
  background(220);
  image(bg, bgLeft, 0);
  
  moveBackgroundLeft();
  
  p.show();
  
  for (let i = obstacles.length - 1; i >= 0; i--){
    if (!isPaused) {
      obstacles[i].move();
    }
    obstacles[i].show();
    
    if (obstacles[i].isOffScreen()){
      obstacles.splice(i, 1);
    }
    
    if (p.x + 95 > obstacles[i].x && p.x < obstacles[i].x + 95) {
      isPaused = true;
    }
  }
  
  if (obstacles.length === 0 && bgLeft - moveSpeed > -bg.width + width){
    obstacles.push(new Obstacle());
  }
}

function moveBackgroundLeft(){
  let minBgLeft = -bg.width + width;
  
  if (bgLeft - moveSpeed > minBgLeft && !isPaused){
    bgLeft -= moveSpeed;
  }
}

function keyPressed() {
  if (keyCode === 32) {
    isPaused = false;
  }
}