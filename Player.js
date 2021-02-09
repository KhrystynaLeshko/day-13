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

  moveLeft(steps) {
    this.x -= steps;
    if (this.x < 0) {
      this.x = 0;
    }
  }

  moveRight(steps) {
    this.x += steps;
    if (this.x + this.width > WIDTH) {
      this.x = WIDTH - this.width;
    }
  }
  moveUp(steps) {
    this.y -= steps;
    if (this.y < 0) {
      this.y = 0;
    }
  }
  moveDown(steps) {
    this.y += steps;
    if (this.y + this.height > HEIGHT) {
      this.y = HEIGHT - this.height;
    }
  }

  keyPressed() {
    if (this.x + 50 > WIDTH) {
      this.x = WIDTH - 50;
    }
    if (this.x < 0) {
      this.x = 0;
    }

    switch (keyCode) {
      case 39: {
        //   this.x += 50;
        this.moveRight(50);
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
  }
}
