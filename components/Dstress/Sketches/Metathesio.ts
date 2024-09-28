// sketches/Metathesio.ts
import p5 from 'p5';

let font1: p5.Font, font2: p5.Font, font3: p5.Font, font4: p5.Font, font5: p5.Font, font6: p5.Font, baseFont: p5.Font;
let str = 'm e t a t h e s i o';
let str2 = 'm e t a h s i o';
let str_arr: Letter[] = [];
let font_arr: p5.Font[] = [];
let mouseIn = false;

interface Bounds {
	x: number;
	y: number;
	w: number;
	h: number;
	advance: number;
}

class Letter {
	p: p5;
	str: string;
	ostr: string;
	x: number;
	y: number;
	font: p5.Font;
	ofont: p5.Font;
	change: boolean;
	bounds: Bounds;
	textChanged: boolean;
	farge: number;
	size: number;

	constructor(
		p: p5,
		Lstr: string,
		Ostr: string,
		Lx: number,
		Ly: number,
		Lfont: p5.Font,
		Ofont: p5.Font,
		txtChng: boolean
	) {
		this.p = p;
		this.str = Lstr;
		this.ostr = Ostr;
		this.x = Lx;
		this.y = Ly;
		this.font = Lfont;
		this.ofont = Ofont;
		this.change = false;
		this.size = 16;
		/* this.bounds = this.font.textBounds(this.str, this.x, this.y) as Bounds; */
		if (this.font) {
			this.bounds = {
			  x: this.x - this.p.textWidth(this.str) / 2,
			  y: this.y - this.size / 2,
			  w: this.p.textWidth(this.str),
			  h: this.size,
			  advance: this.p.textWidth(this.str)
			};
		  } else {
			this.bounds = { x: 0, y: 0, w: 0, h: 0, advance: this.p.textWidth(this.str) }; // Provide default values until the font is loaded
		  }
		this.textChanged = txtChng;
		this.farge = 200;
	}

	updateFont() {
		const txtRnd = this.p.int(this.p.random(0, 5));
		this.font = font_arr[txtRnd];
	}

	updateStr() {
        // Alternate between the two strings: `str` and `str2`
        const strs = this.change ? str2.split(" ") : str.split(" ");
        this.str = strs[this.p.int(this.p.random(0, strs.length))];
      }

	updateFarge() {
		this.farge = this.p.int(this.p.random(1, 359));
	}

	display() {
		this.p.push();
		this.p.textAlign(this.p.CENTER, this.p.CENTER);
		this.p.textFont(this.change ? this.font : baseFont);
		this.p.textSize(this.size);
		this.p.fill(this.farge, 0, 100);
		this.p.text(this.change ? this.str : this.str, this.x, this.y);
		/* this.bounds = this.p.textBounds(this.change ? this.str : this.ostr, this.x, this.y, this.size) as Bounds; */
        this.bounds = {
            x: this.x - this.p.textWidth(this.change ? this.str : this.ostr) / 2,
            y: this.y - this.size / 2,
            w: this.p.textWidth(this.change ? this.str : this.ostr),
            h: this.size,
            advance: this.p.textWidth(this.change ? this.str : this.ostr)
          };
          
		this.p.pop();
	}
}

class Brush {
	p: p5;
	pos: p5.Vector;
	diam: number;

	constructor(p: p5, pos: p5.Vector) {
		this.p = p;
		this.pos = pos;
		this.diam = p.windowWidth < 768 ? 60 : 60;
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

const metathesio = (p: p5, width: number, height: number) => {
	if(typeof window === 'undefined'){
		return;
	}
	let painter: Brush;
	let mouseVec: p5.Vector;

	p.preload = () => {
		font1 = p.loadFont('/fonts/dstress/metathesio/agate.otf');
		font2 = p.loadFont('/fonts/dstress/metathesio/CirM.ttf');
		font3 = p.loadFont('/fonts/dstress/metathesio/NeueM.otf');
		font4 = p.loadFont('/fonts/dstress/metathesio/argnt.ttf');
		font5 = p.loadFont('/fonts/dstress/metathesio/avaraitalic.otf');
		font6 = p.loadFont('/fonts/dstress/metathesio/Kaeru.otf');
		baseFont = p.loadFont('/fonts/dstress/metathesio/arial.ttf');
	};

	p.setup = () => {
		p.pixelDensity(1);
		p.createCanvas(width, height);
		font_arr = [font1, font2, font3, font4, font5, font6];
		mouseVec = p.createVector(0, 0);
		painter = new Brush(p, mouseVec);

		const textMargin = p.width / 2 - 70 * 4.5;
		const strs = str.split(' ');
		const strs2 = str2.split(' ');

		for (let i = 0; i < strs.length; i++) {
			for (let i2 = 0; i2 < 9; i2++) {
				const x = textMargin + i * 70;
				const y = p.height / 2 - 80 * 4 + i2 * 80;
				str_arr.push(new Letter(p, strs[i], strs2[i], x, y, font_arr[2], font_arr[2], false));
			}
		}

		p.colorMode(p.HSB);
		p.background(0);
	};

	p.draw = () => {
		p.background(0, 0, 0);
		p.noCursor();

        p.cursor(p.ARROW);

		if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
			mouseIn = true;
		}
		if (mouseIn) {
			painter.update(p.mouseX, p.mouseY);
			painter.display();
		}

		const margin = painter.diam / 2;

		for (let i = 0; i < str_arr.length; i++) {
			str_arr[i].display();
			if (
				painter.pos.x + margin >= str_arr[i].bounds.x &&
				painter.pos.x - margin <= str_arr[i].bounds.x + str_arr[i].bounds.w &&
				painter.pos.y + margin >= str_arr[i].bounds.y &&
				painter.pos.y - margin <= str_arr[i].bounds.y + str_arr[i].bounds.h
			) {
				str_arr[i].change = true;
				str_arr[i].updateFont();
				str_arr[i].updateStr();
				str_arr[i].updateFarge();
				str_arr[i].size = p.windowWidth < 768 ? p.windowWidth * 0.12 : p.windowWidth * 0.02;
			} else {
				str_arr[i].size = p.windowWidth < 768 ? p.windowWidth * 0.06 : p.windowWidth * 0.015;
			}
		}
	};

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
		str_arr = [];
		p.setup();
	};
};

export default metathesio;
