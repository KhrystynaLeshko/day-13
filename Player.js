class Player {
  constructor(startingX, startingY) {
    this.x = startingX;
    this.y = startingY;
    this.width = 50;
    this.height = 150;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }

  keyPressed() {
    switch (keyCode) {
      case 39: {
        this.x += 50;
        break;
      }
      case 38: {
        this.y -= 50;
        break;
      }
      case 40: {
        this.y += 50;
        break;
      }
      case 37: {
        this.x -= 50;
        break;
      }
    }
    if (this.x + 50 > WIDTH) {
      this.x = WIDTH - 50;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y + 150 > HEIGHT) {
      this.y = HEIGHT - 150;
    }
  }
}
