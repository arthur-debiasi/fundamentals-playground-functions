// Desafio 1
function compareTrue(firstValue, secondValue) {
  let resultado1 = false;
  if (firstValue === true && secondValue === true) {
    resultado1 = true;
  }
  return resultado1;
}

// Desafio 2
function calcArea(base, height) {
  let resultado2 = (base * height) / 2;
  return resultado2;
}

// Desafio 3
function splitSentence(string) {
  let resultado3 = string.split(' ');
  return resultado3;
}

// Desafio 4
function concatName(array) {
  let resultado4 = '';
  resultado4 = `${array[(array.length) - 1]}, ${array[0]}`;
  return resultado4;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
