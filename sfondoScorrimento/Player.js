class Player {
  constructor() {
      this.x = 100; // Posizione iniziale sull'asse X
      this.y = height / 2; // Posizione iniziale sull'asse Y
      this.speed = 8; // Velocità del giocatore
      this.currentImage = omino1; // Immagine corrente del giocatore
      this.alternateImage = omino3; // Immagine alternativa del giocatore
      this.isStopped = false; // Stato del giocatore, fermo o in movimento
      this.yVelocita = 0; // Velocità sull'asse Y
      this.gravità = 0.15; // Forza di gravità applicata al giocatore
      this.staSaltando = false; // Stato del salto del giocatore
  }

  toggleImage() {
      let temp = this.currentImage; // Salva l'immagine corrente in una variabile temporanea
      this.currentImage = this.alternateImage; // Imposta l'immagine corrente come l'immagine alternativa
      this.alternateImage = temp; // Imposta l'immagine alternativa come l'immagine corrente
  }

  show() {
      image(this.currentImage, this.x, this.y, 150, 220); // Mostra l'immagine corrente del giocatore
  }

  update() {
      if (!this.isStopped) { // Se il giocatore non è fermo
        this.y = constrain(this.y, 0, height - 150); // Limita la posizione Y del giocatore

        this.y += this.yVelocita; // Aggiorna la posizione Y del giocatore in base alla velocità
        this.yVelocita += this.gravità; // Aggiorna la velocità Y del giocatore in base alla gravità

        this.y = constrain(this.y, 0, height - 270); // Limita la posizione Y del giocatore

        if (this.y >= height - 270) { // Se il giocatore ha raggiunto il limite inferiore
          this.staSaltando = false; // Imposta lo stato del salto a falso
        }
      }
  }

  stop() {
      this.isStopped = true; // Ferma il giocatore
  }

  restart() {
      this.isStopped = false; // Riavvia il giocatore
  }

  jump(){
    if (!this.staSaltando) { // Se il giocatore non sta saltando
      this.yVelocita = -7; // Imposta la velocità Y per il salto
      this.staSaltando = true; // Imposta lo stato del salto a vero
    }
  }
}
