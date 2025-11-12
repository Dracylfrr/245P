// --- Part 1: Filtered array output ---
console.log("Hello World, I'm script.js!");

const books = [
  { title: "1984", author: "George Orwell" },
  { title: "In Search of Lost Time", author: "Marcel Proust" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Moby Dick", author: "Herman Melville" }
];

// Function 1: remove Orwell
function noOrwell(list) {
  return list.filter(book => book.author !== "George Orwell");
}
console.log("Books without Orwell:", noOrwell(books));

// Function 2: remove Orwell and Melville
function noOrwellMelville(list) {
  return list.filter(
    book => book.author !== "George Orwell" && book.author !== "Herman Melville"
  );
}
console.log("Books without Orwell & Melville:", noOrwellMelville(books));

// --- Part 2: Dynamic content + style updates ---
function changeColor() {
  document.getElementById("content").style.color = "blue";
}

function updateContent() {
  document.getElementById("content").innerHTML = "Bye-Bye World!";
}

// --- Part 3: Inheritance example (uses p5.js + particle.js) ---
let p1, p2, p3;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Triangle(100, 350)
}


function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
}
