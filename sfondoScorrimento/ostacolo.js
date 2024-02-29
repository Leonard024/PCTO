class Obstacle {
  constructor() {
      this.x = width; // Posizione iniziale dell'ostacolo sull'asse x
      this.y = 400; // Posizione iniziale dell'ostacolo sull'asse y
      this.speed = scrollSpeed; // La velocità di movimento dell'ostacolo è la stessa della velocità di scorrimento
  }

  move() {
      this.x -= this.speed; // Muove l'ostacolo verso sinistra sulla mappa
  }

  show() {
      image(ostacolo, this.x, this.y, 150, 200); // Visualizza l'immagine dell'ostacolo
  }

  isOffScreen() {
      return this.x < -95; // Controlla se l'ostacolo è fuori dallo schermo
  }
}

function keyPressed() {
  if (keyCode === 32) { // Se viene premuta la barra spaziatrice
      if (pers.isStopped) { // Se il personaggio è fermo
          pers.restart(); // Riavvia il personaggio
          isPaused = false; // Imposta il gioco come non in pausa
      }
  }
}
