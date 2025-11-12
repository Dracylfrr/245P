// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU

// --- Base class: Particle ---
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(25);
    point(this.x, this.y);
  }
}

// --- Subclass: Box extends Particle ---
class Box extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 20;
  }

  update() {
    super.update();
    this.r += random(-8, 8);
    this.r = constrain(this.r, 5, 60);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
} 
  // --- Subclass: Triangle extends Particle ---
class Triangle extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 30;          // "radius" from center to a vertex
    this.angle = random(TWO_PI); // current rotation
    this.spin = random(-0.03, 0.03); // rotation speed
  }

  update() {
    super.update();                 // keep the Particle jitter
    this.angle += this.spin;        // rotate a bit each frame
    // (optional) pulsate size slightly
    this.r += random(-1, 1);
    this.r = constrain(this.r, 15, 60);
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(this.bright);

    // Compute vertices of an equilateral triangle centered at (0,0)
    // with one vertex pointing "up" after rotation.
    const r = this.r;
    const x1 = 0,       y1 = -r;
    const x2 = -r * 0.866, y2 = r * 0.5;   // cos(60°)=0.5, sin(60°)=0.866
    const x3 =  r * 0.866, y3 = r * 0.5;

    triangle(x1, y1, x2, y2, x3, y3);
    pop();
  }
}

