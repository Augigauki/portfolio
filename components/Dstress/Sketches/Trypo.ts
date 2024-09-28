import p5 from 'p5';

let circs: Circle[] = [];
let a = 0;

let string = 'T R Y P O';
let str = string.split(' ');

let painter: Brush;
let mouseVec: p5.Vector;

let ibm: p5.Font;
let min = 23;

let mouseIn = false;
let protection = 0;
let letters: Letter[] = [];

const trypo = (p: p5, width: number, height: number) => {
  if(typeof window === 'undefined'){
		return;
	}
  p.preload = () => {
    ibm = p.loadFont('/fonts/dstress/metathesio/Kaeru.otf');
  };

  p.setup = () => {
    p.createCanvas(width, height);
    p.colorMode(p.HSB, 360, 100, 100, 100);

    p.translate(p.width / 2, p.height / 2);
    mouseVec = p.createVector();
    painter = new Brush(p, mouseVec);

    for (let i = 0; i < str.length; i++) {
      letters.push(new Letter(p, str[i % str.length]));
    }

    for (let i = 0; i < 1000; i++) {
      let x = p.randomGaussian(p.width / 2, p.width / 7); // More toward the center
      let y = p.randomGaussian(p.height / 2, p.height / 12);

      let txtInt = p.int(p.map(x, p.width / 5, (3 * p.width) / 4.5, 0, letters.length - 1));
      txtInt = p.constrain(txtInt, 0, letters.length - 1);

      const c = new Circle(p, x, y, p.random(20, 30), letters[txtInt].str);

      let overlapping = false;
      for (let j = 0; j < circs.length; j++) {
        let o = circs[j];
        let d = p.dist(c.x, c.y, o.x, o.y);
        if (d < c.sz + 5 + o.sz + 5) {
          overlapping = true;
        }
      }

      if (!overlapping) {
        circs.push(c);
      }
      protection++;
      if (protection > 5000) {
        break;
      }
    }
  };

  p.draw = () => {
    p.background(0, 0, 0);
    p.noCursor();
    if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
      mouseIn = true;
    }

    let margin = 100; // Increase hover range here without changing painter size
    for (let i = 0; i < circs.length; i++) {
      circs[i].txtInt = p.int(p.map(circs[i].x, 0, p.width, 0, 5));
      if (mouseIn) {
        if (
          painter.pos.x + margin >= circs[i].x &&
          painter.pos.x - margin <= circs[i].x + circs[i].sz &&
          painter.pos.y + margin >= circs[i].y &&
          painter.pos.y - margin <= circs[i].y + circs[i].sz
        ) {
          circs[i].show = true;
          circs[i].txtShow = true;
          circs[i].hovered = true;
        } else {
          circs[i].txtShow = false;
          circs[i].hovered = false;
        }
      }

      if (circs[i].show) {
        if (!circs[i].edges()) {
          circs[i].display();
        }
      }
    }

    if (mouseIn) {
      painter.update(p.mouseX, p.mouseY);
      painter.display();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

class Circle {
  p: p5;
  x: number;
  y: number;
  sz: number;
  r: number;
  d: number;
  od: number;
  min: number;
  txtInt: number;
  txtShow: boolean;
  first: boolean;
  show: boolean;
  hovered: boolean;
  letter: Letter;

  constructor(p: p5, x: number, y: number, size: number, letter: string) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.sz = size;
    this.r = this.sz / 2;
    this.d = this.sz * 2;
    this.od = size * 2;
    this.min = this.sz;
    this.txtInt = 0;
    this.txtShow = false;
    this.first = false;
    this.show = true;
    this.hovered = false;

    this.letter = new Letter(p, letter);
  }

  display() {
    this.p.push();
    this.p.strokeWeight(2);
    this.p.stroke(0, 0, 100);
    this.p.fill(0, 0, 0);

    this.p.ellipse(this.x, this.y, this.d);
    this.letter.update(this.x, this.y, this.d / 1.5, this.hovered); // Pass hover state to the letter
    this.letter.show();

    this.p.pop();
  }

  edges() {
    return (
      this.sz > this.p.width - this.x ||
      this.sz > this.x ||
      this.sz > this.p.height - this.y ||
      this.sz > this.y
    );
  }
}

class Letter {
  p: p5;
  str: string;
  x: number;
  y: number;
  sz: number;
  targetSz: number;
  minSz: number;
  maxSz: number;
  opacity: number;
  targetOpacity: number;
  fadeDelay: number;
  hoverTime: number;

  constructor(p: p5, str: string) {
    this.p = p;
    this.str = str;
    this.x = 0;
    this.y = 0;
    this.sz = 0;
    this.targetSz = 0;
    this.minSz = 0;
    this.maxSz = 0;
    this.opacity = 0; // Start with 0 opacity
    this.targetOpacity = 0; // Target opacity will change when hovered
    this.fadeDelay = 20; // Delay frames before fade out
    this.hoverTime = 0; // Track the hover time for the delay
  }

  update(x: number, y: number, targetSz: number, hovered: boolean) {
    this.x = x;
    this.y = y;
    this.minSz = targetSz * 0.5; // Starting size when not hovered
    this.maxSz = targetSz * 1.5; // Maximum size when hovered

    if (hovered) {
      this.targetOpacity = 255; // Full opacity
      this.targetSz = this.maxSz; // Grow to max size
      this.hoverTime = this.p.frameCount; // Track when the hover started
    } else if (this.p.frameCount > this.hoverTime + this.fadeDelay) {
      this.targetOpacity = 0; // Start fading out after the delay
      this.targetSz = this.minSz; // Shrink to min size
    }

    // Use lerp() to smoothly transition
    this.opacity = this.p.lerp(this.opacity, this.targetOpacity, 0.1);
    this.sz = this.p.lerp(this.sz, this.targetSz, 0.1);
  }

  show() {
    if (this.opacity > 0) {
      this.p.push();
      this.p.noStroke();
      this.p.fill(0, 0, 100, this.opacity);
      this.p.textAlign(this.p.CENTER, this.p.CENTER);
      this.p.textFont(ibm);
      this.p.textSize(this.sz);
      this.p.text(this.str, this.x, this.y - 2);
      this.p.pop();
    }
  }
}

class Brush {
  p: p5;
  pos: p5.Vector;
  diam: number;
  held: boolean;

  constructor(p: p5, pos: p5.Vector) {
    this.p = p;
    this.pos = pos;
    this.diam = 100; // Keep the brush visually the same size
    this.held = false;
  }

  update(x: number, y: number) {
    this.pos.x = x;
    this.pos.y = y;
  }

  display() {
    this.p.push();
    this.p.strokeWeight(3);
    this.p.stroke(0, 0, 100, 100);
    this.p.fill(0, 0, 0, 40);
    this.p.ellipse(this.pos.x, this.pos.y, this.diam);
    this.p.pop();
  }
}

export default trypo;
