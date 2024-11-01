//Leandro Isasi 93081/8
//Comisión 5

let numRect = 19;
let numRect2 = 18;
let tamRect = 398;
let tamRect2 = 388;
let colores = [];
let fotoIlustracion;
let mostrarRectangulos = true;

function preload() {
  fotoIlustracion = loadImage('data/foto1.jpg');
}

function setup() {
  createCanvas(800, 400);
  image(fotoIlustracion, 0, 0, 400, 400);
  colores = ColoresIniciales();

  let area = calcularArea(tamRect, tamRect);
  print("el área del rectángulo es: " + area);
}
function calcularArea(ancho, alto) {
  return ancho * alto;
}

function ColorAleatorio() {
  return color(random(255), random(255), random(255));
}

function ColoresIniciales() {
  return [
    color(162, 171, 203),
    color(127, 148, 195),
    color(102, 128, 195),
    color(244, 95, 10),
    color(240, 140, 1),
    color(254, 167, 59),
    color(70, 180, 182),
    color(0, 161, 168),
    color(10, 135, 153),
    color(231, 25, 3),
    color(237, 67, 7),
    color(230, 91, 30),
    color(24, 180, 132),
    color(0, 166, 101),
    color(11, 137, 62),
    color(216, 64, 100),
    color(223, 73, 102),
    color(211, 109, 122),
    color(240, 90, 155),
    color(225, 85, 145),
    color(190, 120, 150),
    color(255, 0, 0)
  ];
}

function draw() {
  dibujarRectangulos();
}

function dibujarRectangulos() {
  // Primer for para los rectángulos principales
  for (let i = 0; i < numRect; i++) {
    let x = 400 + i * 11;
    let y = 0 + i * 11;
    let anchRect = tamRect - i * 22;
    let altRect = tamRect - i * 22;
    dibujarRectangulo(x, y, anchRect, altRect, colores[i], true);
  }

  // Segundo for para los rectángulos secundarios
  for (let j = 0; j < numRect2; j++) {
    let x2 = 405 + j * 11;
    let y2 = 5 + j * 11;
    let anchRect2 = tamRect2 - j * 22;
    let altRect2 = tamRect2 - j * 22;

    if (mostrarRectangulos) {
      dibujarRectangulo(x2, y2, anchRect2, altRect2, color(0), false);
    }
  }
}

function dibujarRectangulo(x, y, ancho, alto, colorRelleno, dibujarBorde) {
  if (dibujarBorde) {
    fill(colorRelleno);
    strokeWeight(4);
    stroke(255, 0, 0);
  } else {
    noFill();
    strokeWeight(1);
    stroke(0);
  }
  rect(x, y, ancho, alto);
}

function mousePressed() {
  if (mouseX >= 400 && mouseX <= 800 && mouseY >= 0 && mouseY <= 400) {
    for (let i = 0; i < numRect; i++) {
      colores[i] = ColorAleatorio(255);
    }
  }
}

function keyPressed() {
  if (key === 'b' || key === 'B') {
    mostrarRectangulos = false;
  } else if (key === 'r' || key === 'R') {
    mostrarRectangulos = true;
    colores = ColoresIniciales();
  }
}
