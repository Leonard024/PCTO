function setup() {
    createCanvas(windowWidth, windowHeight); // Crea una canvas di dimensioni 600x400
    background(220); // Imposta lo sfondo
  }
  
function draw() {
    // quadrato();
    //triangolo();
    //rombo();
    //casa();
    pentagono();
}

function quadrato(){
    //QUADRATO
    let x = 400; // Posizione x casuale sulla larghezza della canvas
    let y = 200; // Posizione y casuale sull'altezza della canvas
    let diameter = 50 // Diametro casuale tra 20 e 50
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(1, x, y);
    x+=500;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(2, x, y);
    y+=500;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(3, x, y);
    x= x-500;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(4, x, y);
    // for (let i =0; i<4; i++){

    //     fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    //     noStroke(); // Rimuove il contorno del cerchio
    //     ellipse(x, y, diameter, diameter); // Disegna il cerchio
    //     if (i = 0){
    //         x+= 100;
    //     }else if (i=1){
    //         y+= 100;
    //     }else if (i=2){
    //         x-=100;
    //     }
    // } 
}
function triangolo(){
    x = 500;
    y = 200;
    diameter = 50;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(1, x, y);
    x+= 100;
    y+=200;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(2, x, y);
    x-=200;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(3, x, y);
}
function rombo(){
    x=500;
    y=200;
    diameter=50;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(1, x, y);
    y+=250;
    x+=250;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(2, x, y);
    y+=250;
    x-=250;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(3, x, y);
    y-=250;
    x-=250;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(4, x, y);
}
function casa(){
    x=500;
    y=200;
    diameter=50;
    //triangolo
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(2, x, y);
    x+= 100;
    y+=200;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(1, x, y);
    x-=200;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(3, x, y);

    //QUADRATO
    y+=200;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(4, x, y);
    x+=200;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(5, x, y);
}

function pentagono(){
    x=500;
    y=200;
    diameter=50;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(1, x, y);
    y+=200;
    x+=200;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(2, x, y);
    y+=300;
    x-=100;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(3, x, y);
    x-=200;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(4, x, y);
    y-=300;
    x-=100;
    fill(256, 12, 15); // Imposta il colore di riempimento del cerchio
    noStroke(); // Rimuove il contorno del cerchio
    ellipse(x, y, diameter, diameter); // Disegna il cerchio
    fill(255);
    // Posiziona il testo al centro del cerchio
    textAlign(CENTER, CENTER);
    textSize(20);
    // Scrivi il numero casuale all'interno del cerchio
    text(5, x, y);
}
