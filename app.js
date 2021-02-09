let WIDTH = 500;
let HEIGHT = 500;
const game = new Game();

function draw() {
  game.draw();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function keyPressed() {
  game.player.keyPressed();
}
