let frame;
let frames = [];
let bounds;

let mouseIn = false;
let br;

let mob = 768;

function preload() {
	font = loadFont('assets/MeB.ttf');
}

function setup() {
	//createCanvas(1000, 1000);
	createCanvas(window.innerWidth, window.innerHeight);

	noCursor();
	colorMode(HSB);

	frame = new walls(width / 2, height / 2, width - 10, height - 10);

	let mouseVec = createVector(width / 2, height / 2);
	if (width < mob) {
		br = new brush(mouseVec, height * 0.07);
	} else if (width >= window.innerWidth * 0.4 || width <= window.innerWidth * 0.6) {
		br = new brush(mouseVec, width * 0.08);
	} else {
		br = new brush(mouseVec, width * 0.03);
	}
}

function draw() {
	background(0);

	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
		mouseIn = true;
	}

	push();
	noStroke();
	fill(0, 0, 100);

	let latestframe;
	for (let i = 0; i < frames.length; i++) {
		latestframe = frames[i];
	}

	if (latestframe != undefined) {
		let xMax = int(latestframe.x - latestframe.sizeX / 2);
		let xMin = int(latestframe.x + latestframe.sizeX / 2);
		let yMax = int(latestframe.y - latestframe.sizeY / 2);
		let yMin = int(latestframe.y + latestframe.sizeY / 2);
		let m = br.r;

		if (mouseX - m > xMax && mouseX + m < xMin && mouseY - m > yMax && mouseY + m < yMin) {
			newPos = createVector(mouseX, mouseY);

			br.update(newPos);
		} else {
			let newPos = createVector();
			// øst
			if (mouseX + m > xMin) {
				if (mouseY + m > yMin) {
					newPos.x = xMin - m;
					newPos.y = yMin - m;
				} else if (mouseY - m < yMax) {
					newPos.x = xMin - m;
					newPos.y = yMax + m;
				} else {
					newPos.x = xMin - m;
					newPos.y = mouseY;
				}
			}
			// vest
			else if (mouseX - m < xMax) {
				if (mouseY + m > yMin) {
					newPos.x = xMax + m;
					newPos.y = yMin - m;
				} else if (mouseY - m < yMax) {
					newPos.x = xMax + m;
					newPos.y = yMax + m;
				} else {
					newPos.x = xMax + m;
					newPos.y = mouseY;
				}
			}
			// sør
			else if (mouseY + m > yMin) {
				if (mouseX < xMax - m) {
					newPos.y = yMin - m;
					newPos.x = xMax + m;
				} else if (mouseX + m > xMin) {
					newPos.y = yMin - m;
					newPos.x = xMin - m;
				} else {
					newPos.y = yMin - m;
					newPos.x = mouseX;
				}
			}
			// nord
			else if (mouseY - m < yMax) {
				if (mouseX < xMax - m) {
					newPos.y = yMax + m;
					newPos.x = xMax + m;
				} else if (mouseX + m > xMin) {
					newPos.y = yMax + m;
					newPos.x = xMin - m;
				} else {
					newPos.y = yMax + m;
					newPos.x = mouseX;
				}
			}
			br.update(newPos);
		}
	}
	br.show();
	pop();

	push();
	translate(width / 2, height / 2);
	textFont(font);
	textAlign(CENTER, CENTER);
	if (width < mob) {
		textSize(height * 0.08);
	} else if (width >= window.innerWidth * 0.4 || width <= window.innerWidth * 0.6) {
		textSize(width * 0.15);
	} else {
		textSize(width * 0.05);
	}
	fill(0);
	text('CLAUSTROPHOBIA', 0, 0);
	bounds = font.textBounds('CLAUSTROPHOBIA', 0, 0);
	pop();

	frame.show();
	if (mouseIn) {
		frame.shrink();
		if (width < mob) {
			br.updateSize(height * 0.04);
		} else if (width >= window.innerWidth * 0.4 || width <= window.innerWidth * 0.6) {
			br.updateSize(width * 0.06);
		} else {
			br.updateSize(width * 0.04);
		}

		for (let a = 0; a < frames.length; a++) {
			frames[a].show();
		}
	}
}

class walls {
	constructor(x, y, sizeX, sizeY) {
		this.x = x;
		this.y = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
	}

	shrink() {
		if (width < mob) {
			if (this.sizeY >= -bounds.y * 7) {
				push();
				rectMode(CENTER);
				frames.push(new walls(width / 2, height / 2, this.sizeX, this.sizeY));
				this.sizeX += -width * 0.001;
				this.sizeY += -height * 0.002;
				pop();
			}
		} else {
			if (this.sizeX >= -bounds.y * 3) {
				push();
				rectMode(CENTER);
				frames.push(new walls(width / 2, height / 2, this.sizeX, this.sizeY));
				this.sizeX += -width * 0.001;
				this.sizeY += -height * 0.001;
				pop();
			}
		}
	}

	show() {
		push();
		rectMode(CENTER);
		noFill();
		strokeWeight(10);
		stroke(0, 0, 100);

		rect(this.x, this.y, this.sizeX, this.sizeY);
		pop();
	}
}

class brush {
	constructor(pos, size) {
		this.pos = pos;
		this.size = size;
		this.r = size / 2;
	}

	update(pos) {
		this.pos = pos;
	}

	updateSize(size) {
		this.size = size;
		this.r = size / 2;
	}

	show() {
		push();
		fill(0, 0, 100);
		noStroke();
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
		pop();
	}
}
