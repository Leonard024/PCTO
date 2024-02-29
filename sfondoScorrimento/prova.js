let bgImg; // Immagine di sfondo
let omino1; // Prima immagine del personaggio
let omino3; // Seconda immagine del personaggio
let pers; // Personaggio
let isPaused = false; // Variabile per controllare se il gioco è in pausa
let scrollSpeed = 4; // Velocità di scorrimento dello sfondo
let bgX1 = 0; // Coordinata X del primo sfondo
let bgX2; // Coordinata X del secondo sfondo
let lastImageChange = 0; // Ultimo cambio dell'immagine del personaggio
let imageInterval = 250; // Intervallo di tempo tra i cambi di immagine del personaggio
let ostacolo; // Immagine dell'ostacolo

// Variabili per gli ostacoli
let obstacles = []; // Array per gli ostacoli
let collisionTime = 0; // Ultima collisione con un ostacolo
let collisionDelay = 5000; // Intervallo di tempo tra le collisioni in millisecondi

function preload() {
    // Caricamento delle immagini
    bgImg = loadImage('./img/sfondo.png'); // Carica l'immagine di sfondo
    omino1 = loadImage('./img/omino1.png'); // Carica la prima immagine del personaggio
    omino3 = loadImage('./img/omino3.png'); // Carica la seconda immagine del personaggio
    ostacolo = loadImage('./img/ostacolo.png'); // Carica l'immagine dell'ostacolo
}

function setup() {
    // Impostazione dell'area di disegno e creazione del personaggio
    createCanvas(windowWidth - 20, windowHeight - 20); // Crea l'area di disegno
    pers = new Player(); // Crea il personaggio
    bgX2 = width; // Imposta la coordinata X del secondo sfondo

    // Creazione degli ostacoli
    for (let i = 0; i < 1; i++) {
        obstacles.push(new Obstacle()); // Crea un nuovo ostacolo
    }
}

function draw() {
    // Disegno dello sfondo e aggiornamento del personaggio
    background(255); // Imposta il colore di sfondo
    if (!isPaused) { // Se il gioco non è in pausa
        scrolling(); // Fa scorrere lo sfondo
        pers.update(); // Aggiorna il personaggio
    } else { // Se il gioco è in pausa
      pers.show(); // Mostra il personaggio
      background(bgImg); // Mostra lo sfondo
    }
    pers.show(); // Mostra il personaggio

    // Controllo se il tasto spazio è premuto per far saltare il personaggio
    if (keyIsDown(32)){
      pers.jump(); // Fa saltare il personaggio
    }

    // Controllo dell'intervallo per cambiare l'immagine del personaggio
    if (!isPaused && millis() - lastImageChange > imageInterval) {
        pers.toggleImage(); // Cambia l'immagine del personaggio
        lastImageChange = millis(); // Aggiorna l'ultimo cambio di immagine
    }

    // Mostra e muove gli ostacoli
    for (let i = obstacles.length - 1; i >= 0; i--) {
        if (!isPaused) { // Se il gioco non è in pausa
            obstacles[i].move(); // Muove l'ostacolo
        }
        obstacles[i].show(); // Mostra l'ostacolo

        // Rimuove gli ostacoli fuori dallo schermo e ne crea di nuovi
        if (obstacles[i].isOffScreen()) { // Se l'ostacolo è fuori dallo schermo
            obstacles.splice(i, 1); // Rimuove l'ostacolo
            obstacles.push(new Obstacle()); // Crea un nuovo ostacolo
        }

        // Controllo se il personaggio è vicino a un ostacolo
        if (millis() - collisionTime > collisionDelay && pers.x + 95 > obstacles[i].x - 1 && pers.x < obstacles[i].x + 95) {
            pers.stop(); // Ferma il personaggio
            isPaused = true; // Mette il gioco in pausa
            collisionTime = millis(); // Aggiorna l'ultimo tempo di collisione
            setTimeout(function() {
                isPaused = false; // Riprende il gioco dopo un intervallo di tempo
            }, collisionDelay);
        }
    }
}

function scrolling() {
    // Funzione per lo scrolling dello sfondo
    image(bgImg, bgX1, 0, width, height); // Mostra il primo sfondo
    image(bgImg, bgX2, 0, width, height); // Mostra il secondo sfondo
    bgX1 -= scrollSpeed; // Muove il primo sfondo
    bgX2 -= scrollSpeed; // Muove il secondo sfondo
    if (bgX1 <= -width) { // Se il primo sfondo è fuori dallo schermo
        bgX1 = width; // Riposiziona il primo sfondo
    }
    if (bgX2 <= -width) { // Se il secondo sfondo è fuori dallo schermo
        bgX2 = width; // Riposiziona il secondo sfondo
    }
}
