// sketches/Thalassio.ts
import p5 from 'p5';

let font: p5.Font;
let waves: Wave[] = [];
let stars: Star[] = [];
let letters: Mover[] = [];
let color1: p5.Color, color2: p5.Color;
let waveColor1: p5.Color, waveColor2: p5.Color, waveColor3: p5.Color;

let mouseIn = false;
let xinc: number;

if(typeof window !== 'undefined'){
	xinc = window.innerWidth / 200;
}

let str = 'T H A L A S S O';
let ltr = 'T H A L S O';
let wavePoses = 26;
let fontsize: number;
let b: Brush;
let strs: string[], ltrs: string[];

class Wave {
	p: p5;
	x: number;
	y: number;
	xoff: number;
	yoff: number;
	xinc: number;
	min: number;
	max: number;
	poses: p5.Vector[];
	c: number;
	filled: boolean;
	strkvkt: number;

	constructor(
		p: p5,
		xval: number,
		yval: number,
		yoffset: number,
		xincrement: number,
		minimum: number,
		maximum: number,
		coef: number,
		sv: number
	) {
		this.p = p;
		this.x = xval;
		this.y = yval;
		this.yoff = yoffset;
		this.xoff = 0;
		this.xinc = xincrement;
		this.min = minimum;
		this.max = maximum;
		this.poses = [];
		this.c = coef;
		this.filled = false;
		this.strkvkt = sv;
	}

	calcWave() {
		this.p.fill(0, 0, 0);
		this.p.strokeWeight(this.strkvkt);
		this.p.stroke(0, 0, 100);
		this.p.beginShape();
		this.xoff = 0;
		for (let a = 0; a <= this.p.width + 200; a += this.xinc) {
			let b = this.p.map(this.p.noise(this.xoff, this.yoff), 0, 1, this.min, this.max);
			let pos = this.p.createVector(a, b);
			if (!this.filled) {
				this.poses.push(pos);
			}
			this.p.vertex(a, b);
			this.xoff += this.x;
		}
		this.filled = true;
		this.yoff += this.y;
		this.p.vertex(this.p.width, this.p.height + 100);
		this.p.vertex(0, this.p.height);
		this.p.endShape();
	}
}

class Mover {
	p: p5;
	x: number;
	y: number;
	m: number;
	d: number;
	above: boolean;
	l: string;
	ySpeed: number;
	sink: boolean;
	size: number;
	bounds: { x: number; y: number; w: number; h: number };
	bottom: boolean;
	f: p5.Color;

	constructor(p: p5, x: number, y: number, m: number, str: string, sz: number) {
		this.p = p;
		this.x = x;
		this.y = y;
		this.ySpeed = 0;
		this.m = m;
		this.d = m * 10;
		this.above = true;
		this.bottom = false;
		this.l = str;
		this.sink = true;
		this.size = sz;
		this.f = p.color(0);
		this.bounds = { x: 0, y: 0, w: 0, h: 0 };
	}

	update() {
		if (this.above) {
			this.ySpeed = this.p.width * 0.001;
		} else {
			this.ySpeed = this.p.width * 0.00015;
		}
		//this.ySpeed = this.above ? this.p.width * 0.001 : this.p.width * 0.0001;

		if (this.sink) {
			this.y += (this.ySpeed * this.m) / 3;
		} else {
			this.y -= this.ySpeed * this.m;
		}
	}

	display() {
		if (this.bottom) {
			this.p.push();
			this.p.textAlign(this.p.CENTER, this.p.CENTER);
			this.p.textFont(font);
			this.p.textSize(this.size);
			this.p.noStroke();
			this.p.fill(0, 0, 0);
			this.p.text(this.l, this.x, this.y);
			this.bounds = {
				x: this.x - this.p.textWidth(this.l) / 2,
				y: this.y - this.size / 2,
				w: this.p.textWidth(this.l),
				h: this.size,
			};
			this.p.pop();
		} else {
			this.p.push();
			this.p.textAlign(this.p.CENTER, this.p.CENTER);
			this.p.textFont(font);
			this.p.textSize(this.size);
			this.p.noStroke();
			this.p.fill(0, 0, 100);
			this.p.text(this.l, this.x, this.y);
			this.bounds = {
				x: this.x - this.p.textWidth(this.l) / 2,
				y: this.y - this.size / 2,
				w: this.p.textWidth(this.l),
				h: this.size,
			};
			this.p.pop();
		}
	}

	checkEdges() {
		if (this.y > this.p.height - this.bounds.y / 22) {
			this.y = this.p.height - this.bounds.y / 22;
			this.f = this.p.color(0, 0, 0);
			this.bottom = true;
		}
	}
}

class Brush {
	p: p5;
	pos: p5.Vector;
	diam: number;

	constructor(p: p5, pos: p5.Vector) {
		this.p = p;
		this.pos = pos;
		this.diam = 50;
	}

	update(x: number, y: number) {
		this.pos.x = x;
		this.pos.y = y;
	}

	display() {
		this.p.push();
		this.p.noFill();
		this.p.strokeWeight(3);
		this.p.stroke(0, 0, 100);
		this.p.ellipse(this.pos.x, this.pos.y, this.diam);
		this.p.pop();
	}
}

class Star {
	p: p5;
	x: number;
	y: number;
	diam: number;

	constructor(p: p5, x: number, y: number, diam: number) {
		this.p = p;
		this.x = x;
		this.y = y;
		this.diam = diam;
	}

	show() {
		this.p.noStroke();
		this.p.fill(0, 0, 100);
		this.p.ellipse(this.x, this.y, this.diam);
	}

	update() {
		this.x += 0.2;
		if (this.x >= this.p.width + 10) {
			this.x = 0;
		}
		this.y -= 0.2;
		if (this.y <= -10) {
			this.y = 350;
		}
	}
}

const thalasso = (p: p5, width: number, height: number) => {
	if(typeof window === 'undefined'){
		return;
	}
	p.preload = () => {
		font = p.loadFont('/fonts/dstress/macab.otf');
	};

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		letters = [];
		stars = [];
		waves = [];
		p.setup();
	};

	p.setup = () => {
		p.createCanvas(width, height);
		p.colorMode(p.HSB);
		let mouseVec = p.createVector(0, 0);
		b = new Brush(p, mouseVec);

		if (p.width < 768) {
			waves.push(new Wave(p, 0.09, 0.015, 10, xinc, p.height / 8, p.height / 7, 0.1, 1));
			waves.push(new Wave(p, 0.06, 0.01, 2, xinc, p.height / 7, p.height / 6, 0.1, 2));
			waves.push(new Wave(p, 0.02, 0.009, 1, xinc, p.height / 4, p.height / 6, 0.1, 4));
		} else {
			waves.push(new Wave(p, 0.09, 0.001, 10, xinc, p.height / 11, p.height / 7, 0.1, 1.5));
			waves.push(new Wave(p, 0.06, 0.002, 2, xinc, p.height / 7, p.height / 6, 0.1, 3));
			waves.push(new Wave(p, 0.02, 0.003, 1, xinc, p.height / 4, p.height / 6, 0.1, 4.4));
		}

		for (let i = 0; i < 100; i++) {
			let diam = p.random(3, 7);
			stars.push(new Star(p, p.random(p.width), p.random(0, 350), diam));
		}

		let spacing = p.width < 768 ? 35 : 70;
		let spacMpl = 4;
		let leftStart = p.width / 2 - spacing * spacMpl;

		strs = str.split(' ');
		ltrs = ltr.split(' ');
		fontsize = p.width < 768 ? p.width * 0.07 : p.width * 0.04;

		for (let i = 0; i < strs.length; i++) {
			letters.push(new Mover(p, leftStart + i * spacing, 0, p.random(8, 14), strs[i], fontsize));
		}
	};

	p.draw = () => {
		p.background(0, 0, 0);
		p.noCursor();

		for (let i = 0; i < stars.length; i++) {
			stars[i].show();
			stars[i].update();
		}

		if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
			mouseIn = true;
		}

		for (let i = 0; i < waves.length; i++) {
			waves[i].calcWave();
		}

		if (mouseIn) {
			b.update(p.mouseX, p.mouseY);
			b.display();
            
			for (let a = 0; a < letters.length; a++) {
				letters[a].update();
				letters[a].display();
			}
		}

		for (let a = 0; a < letters.length; a++) {
			letters[a].above = true;

			if (letters[a].y >= waves[2].poses[a].y) {
				letters[a].above = false;
				let r = letters[a].d / 2;
				let d = b.diam / 2;

				if (!letters[a].bottom) {
					if (
						b.pos.x + d >= letters[a].bounds.x &&
						b.pos.x - r <= letters[a].bounds.x + letters[a].bounds.w &&
						b.pos.y + d >= letters[a].bounds.y &&
						b.pos.y - d <= letters[a].bounds.y + letters[a].bounds.h
					) {
						letters[a].sink = false;
					} else {
						letters[a].sink = true;
					}
				}
			} else {
                letters[a].above = true;
                letters[a].sink = true;
            }
            let dynSize = p.map(letters[a].y, 0, height, fontsize, 12);
            letters[a].size = dynSize;
			letters[a].checkEdges();
		}
	};
};

export default thalasso;
