let WIDTH = 500;
let HEIGHT = 500;
const game = new Game();

function draw() {
  game.draw();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

// function keyPressed() {
//   game.player.keyPressed();
// }

// add a way to have a second player
// edit player movemnet, to be able to receive:
// class Player{
// moveLeft(steps) {
// this.x -= steps
// }
// }

// keyPressed() {
//    if (this.playerNumer === 1) {

//    }
// }
