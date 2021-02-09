class Game {
  constructor() {
    this.player = new Player(150, 150);
  }

  draw() {
    clear();
    background("cyan");
    this.player.draw();
    //   if (keyIsDown(38)) {
    //     console.log("WALKING UP");
    //     y -= 5;
    //   }
    //   if (keyIsDown(39)) {
    //     console.log("WALKING RIGHT");
    //     x += 5;
    //   }
    //   if (keyIsDown(40)) {
    //     console.log("WALKING DOWN");
    //     y += 5;
    //   }
    //   if (keyIsDown(37)) {
    //     console.log("WALKING LEFT");
    //     x -= 5;
    //   }
  }
}
