class Game {
  constructor() {
    this.player1 = new Player(150, 150);
    this.player2 = new Player(100, 100);
  }

  draw() {
    clear();
    background("cyan");
    this.player1.draw();
    this.player2.draw();
    if (keyIsDown(38)) {
      console.log("PLAYER1 WALKING UP");
      this.player1.moveUp(5);
    }
    if (keyIsDown(39)) {
      console.log("PLAYER1 WALKING RIGHT");
      this.player1.moveRight(5);
    }
    if (keyIsDown(40)) {
      console.log("PLAYER1 WALKING DOWN");
      this.player1.moveDown(5);
    }
    if (keyIsDown(37)) {
      console.log("PLAYER1 WALKING LEFT");
      this.player1.moveLeft(5);
    }
    if (keyIsDown(87)) {
      console.log(`PLAYER 2 IS APPROACHING UP`);
      this.player2.moveUp(7);
    }
    if (keyIsDown(65)) {
      console.log(`PLAYER 2 IS GOING LEFT`);
      this.player2.moveLeft(7);
    }
    if (keyIsDown(83)) {
      console.log(`PLAYER 2 IS GOING DOWN, ITS YELLING TIMBER`);
      this.player2.moveDown(7);
    }
    if (keyIsDown(68)) {
      console.log(`PLAYER 2 IS GOING RIGHT, ITS YELLING TIMBER`);
      this.player2.moveRight(17);
    }
  }
}

// w up - 87
// a left -> 65
// s down -> 83
// d right -> 68
