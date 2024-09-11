// sketches/sketch.ts
import p5 from 'p5';

let frame: Walls;
let frames: Walls[] = [];
let font: p5.Font;
let mouseIn = false;
let br: Brush;
const mob = 768;

interface Bounds {
  x: number;
  y: number;
  w: number;
  h: number;
  advance: number;
}

class Walls {
  p: p5;
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;

  constructor(p: p5, x: number, y: number, sizeX: number, sizeY: number) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
  }

  shrink() {
    const bounds = font.textBounds('CLAUSTROPHOBIA', 0, 0) as Bounds;
    if (this.p.width < mob) {
      if (this.sizeY >= -bounds.y * 7) {
        this.p.push();
        this.p.rectMode(this.p.CENTER);
        frames.push(new Walls(this.p, this.p.width / 2, this.p.height / 2, this.sizeX, this.sizeY));
        this.sizeX += -this.p.width * 0.001;
        this.sizeY += -this.p.height * 0.002;
        this.p.pop();
      }
    } else {
      if (this.sizeX >= -bounds.y * 3) {
        this.p.push();
        this.p.rectMode(this.p.CENTER);
        frames.push(new Walls(this.p, this.p.width / 2, this.p.height / 2, this.sizeX, this.sizeY));
        this.sizeX += -this.p.width * 0.001;
        this.sizeY += -this.p.height * 0.001;
        this.p.pop();
      }
    }
  }

  show() {
    this.p.push();
    this.p.rectMode(this.p.CENTER);
    this.p.noFill();
    this.p.strokeWeight(10);
    this.p.stroke(0, 0, 100);

    this.p.rect(this.x, this.y, this.sizeX, this.sizeY);
    this.p.pop();
  }
}

class Brush {
  p: p5;
  pos: p5.Vector;
  size: number;
  r: number;

  constructor(p: p5, pos: p5.Vector, size: number) {
    this.p = p;
    this.pos = pos;
    this.size = size;
    this.r = size / 2;
  }

  update(pos: p5.Vector) {
    this.pos = pos;
  }

  updateSize(size: number) {
    this.size = size;
    this.r = size / 2;
  }

  show() {
    this.p.push();
    this.p.fill(0, 0, 100);
    this.p.noStroke();
    this.p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
    this.p.pop();
  }
}

const claustro = (p: p5, width: number, height: number) => {
  p.preload = () => {
    font = p.loadFont('/fonts/dstress/MeB.ttf');
  };

  p.setup = () => {
    p.createCanvas(width, height);
    p.noCursor();
    p.colorMode(p.HSB);

    frame = new Walls(p, p.width / 2, p.height / 2, p.width - 10, p.height - 10);

    const mouseVec = p.createVector(p.width / 2, p.height / 2);
    if (p.width < mob) {
      br = new Brush(p, mouseVec, p.height * 0.07);
    } else if (p.width >= p.windowWidth * 0.4 && p.width <= p.windowWidth * 0.6) {
      br = new Brush(p, mouseVec, p.width * 0.08);
    } else {
      br = new Brush(p, mouseVec, p.width * 0.03);
    }
  };

  p.draw = () => {
    p.background(0);

    if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
      mouseIn = true;
    }

    p.push();
    p.noStroke();
    p.fill(0, 0, 100);

    let latestframe: Walls | undefined;
    for (let i = 0; i < frames.length; i++) {
      latestframe = frames[i];
    }

    if (latestframe !== undefined) {
      const xMax = p.int(latestframe.x - latestframe.sizeX / 2);
      const xMin = p.int(latestframe.x + latestframe.sizeX / 2);
      const yMax = p.int(latestframe.y - latestframe.sizeY / 2);
      const yMin = p.int(latestframe.y + latestframe.sizeY / 2);
      const m = br.r;

      let newPos: p5.Vector;
      if (p.mouseX - m > xMax && p.mouseX + m < xMin && p.mouseY - m > yMax && p.mouseY + m < yMin) {
        newPos = p.createVector(p.mouseX, p.mouseY);
        br.update(newPos);
      } else {
        newPos = p.createVector();
        // øst
        if (p.mouseX + m > xMin) {
          if (p.mouseY + m > yMin) {
            newPos.x = xMin - m;
            newPos.y = yMin - m;
          } else if (p.mouseY - m < yMax) {
            newPos.x = xMin - m;
            newPos.y = yMax + m;
          } else {
            newPos.x = xMin - m;
            newPos.y = p.mouseY;
          }
        }
        // vest
        else if (p.mouseX - m < xMax) {
          if (p.mouseY + m > yMin) {
            newPos.x = xMax + m;
            newPos.y = yMin - m;
          } else if (p.mouseY - m < yMax) {
            newPos.x = xMax + m;
            newPos.y = yMax + m;
          } else {
            newPos.x = xMax + m;
            newPos.y = p.mouseY;
          }
        }
        // sør
        else if (p.mouseY + m > yMin) {
          if (p.mouseX < xMax - m) {
            newPos.y = yMin - m;
            newPos.x = xMax + m;
          } else if (p.mouseX + m > xMin) {
            newPos.y = yMin - m;
            newPos.x = xMin - m;
          } else {
            newPos.y = yMin - m;
            newPos.x = p.mouseX;
          }
        }
        // nord
        else if (p.mouseY - m < yMax) {
          if (p.mouseX < xMax - m) {
            newPos.y = yMax + m;
            newPos.x = xMax + m;
          } else if (p.mouseX + m > xMin) {
            newPos.y = yMax + m;
            newPos.x = xMin - m;
          } else {
            newPos.y = yMax + m;
            newPos.x = p.mouseX;
          }
        }
        br.update(newPos);
      }
    }
    br.show();
    p.pop();

    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.textFont(font);
    p.textAlign(p.CENTER, p.CENTER);
    if (p.width < mob) {
      p.textSize(p.height * 0.08);
    } else if (p.width >= p.windowWidth * 0.4 && p.width <= p.windowWidth * 0.6) {
      p.textSize(p.width * 0.15);
    } else {
      p.textSize(p.width * 0.05);
    }
    p.fill(0);
    p.text('CLAUSTROPHOBIA', 0, 0);
    const textBounds = font.textBounds('CLAUSTROPHOBIA', 0, 0) as Bounds;
    p.pop();

    frame.show();
    if (mouseIn) {
      frame.shrink();
      if (p.width < mob) {
        br.updateSize(p.height * 0.04);
      } else if (p.width >= p.windowWidth * 0.4 && p.width <= p.windowWidth * 0.6) {
        br.updateSize(p.width * 0.06);
      } else {
        br.updateSize(p.width * 0.04);
      }

      for (let a = 0; a < frames.length; a++) {
        frames[a].show();
      }
    }
  };
};

export default claustro;
