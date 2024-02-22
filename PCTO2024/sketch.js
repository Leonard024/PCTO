// In class Example
// Training a hand pose classification model
// https://github.com/ml5js/Intro-ML-Arts-IMA-F21

// HandPose Model and video
let handpose;
let video;

// Just using two finger points
let thumbX, thumbY;
let indexX, indexY;
let prevIndexX, prevIndexY;

let drawingCanvas; // Canvas per il disegno

let resultP;

let brain;

function modelLoaded() {
  console.log("handpose ready");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Start the video and hide it
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  
  // Load the model
  handpose = ml5.handpose(video, modelLoaded);
  
  // Listen to new 'predict' events
  handpose.on("predict", gotPose);
  
  // Crea una seconda canvas per il disegno
  drawingCanvas = createGraphics(windowWidth, windowHeight);

  // Create an ml5 neural network
  let options = {
    task: "classification",
    debug: true
  }
  brain = ml5.neuralNetwork(options);
}


function gotPose(results) {
  
  // If there is a hand
  if (results.length > 0) {
    thumbX = 0.5 * results[0].annotations.thumb[3][0];
    thumbY = 0.5 * results[0].annotations.thumb[3][1];
    indexX = 0.5 * results[0].annotations.indexFinger[3][0];
    indexY = 0.5 * results[0].annotations.indexFinger[3][1];
  
  }
}

function draw() {
  
  // Draw what is going on
  background(255);
  //togliere effetto specchio
  scale(-1, 1);
  translate(-width, 0);
  image(video, 0, 0);
  // fill(255, 0, 0);  //rosso
  // stroke(255);
  // circle(thumbX, thumbY, 16);
  fill(0, 0, 255);  //blu
  stroke(255);
  circle(indexX, indexY, 16);
  
  // Disegna il tracciamento del dito sulla canvas di disegno
  drawingCanvas.stroke(0); // Colore nero
  drawingCanvas.strokeWeight(2); // Spessore della linea
  if (prevIndexX !== undefined && prevIndexY !== undefined) {
   
    scale(3);
    drawingCanvas.line(prevIndexX+130, prevIndexY+15, indexX+130, indexY+15);
  }

  // Aggiorna le posizioni precedenti del dito
  prevIndexX = indexX;
  prevIndexY = indexY;

  // Mostra la canvas di disegno sulla canvas principale
  image(drawingCanvas, 0, 0, windowWidth, windowHeight);

  // Use keypresses to collect data
  // 49 is keycode for '1'
  if (keyIsDown(49)) {
    console.log('close');
    let inputs = [indexX, indexY, thumbX, thumbY];
    let target = ['closed'];
    brain.addData(inputs, target);
  // 50 is keycode for '2'
  } else if (keyIsDown(50)) {
    console.log('open');
    let inputs = [indexX, indexY, thumbX, thumbY];
    let target = ['open'];
    brain.addData(inputs, target);  
  }
}

function keyPressed() {
  // Train the model when space bar is pressed
  if (key == ' ') {
    brain.normalizeData();
    brain.train({epochs: 15}, finishedTraining);
  } else if (key == 'd') {
    brain.saveData('dan-open-close-data');
  }
}

// Start classification when model is finished training
function finishedTraining() {
  console.log('finished');
  let inputs = [indexX, indexY, thumbX, thumbY];
  brain.classify(inputs, gotResults);
}


// Just log the results of classification
function gotResults(error, results) {
  // console.log(results[0].label);
  resultP.html(results[0].label);
  let inputs = [indexX, indexY, thumbX, thumbY];
  brain.classify(inputs, gotResults);  
}







