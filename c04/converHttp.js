function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return ' Не може да се дели со 0';
  }
  return a / b;
}


function power(a, b) {
  return Math.pow(a, b);
}

function squareRoot(a) {
  return Math.sqrt(a);
}


function milesToKm(miles) {
  return miles * 1.60934;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function poundsToKg(pounds) {
  return pounds * 0.453592;
}

function inchesToCm(inches) {
  return inches * 2.54;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  squareRoot,
  milesToKm,
  celsiusToFahrenheit,
  poundsToKg,
  inchesToCm
};
