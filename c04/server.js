const http = require ('http');
const url = require('url');
const calc = require('./converHttp');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); 
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  
  if (path === '/add') {
    const result = calc.add(Number(query.a), Number(query.b));
    res.end(`Собирање: ${result}`);
  } else if (path === '/subtract') {
    const result = calc.subtract(Number(query.a), Number(query.b));
    res.end(`Одземање: ${result}`);
  } else if (path === '/multiply') {
    const result = calc.multiply(Number(query.a), Number(query.b));
    res.end(`Множење: ${result}`);
  } else if (path === '/divide') {
    const result = calc.divide(Number(query.a), Number(query.b));
    res.end(`Делење: ${result}`);
  } else if (path === '/power') {
    const result = calc.power(Number(query.a), Number(query.b));
    res.end(`Степен: ${result}`);
  } else if (path === '/sqrt') {
    const result = calc.squareRoot(Number(query.a));
    res.end(`Квадратен корен: ${result}`);
  
  
  } else if (path === '/miles-to-km') {
    const result = calc.milesToKm(Number(query.value));
    res.end(`Мили во километри: ${result}`);
  } else if (path === '/celsius-to-fahrenheit') {
    const result = calc.celsiusToFahrenheit(Number(query.value));
    res.end(`Целзиус во Фаренхајт: ${result}`);
  } else if (path === '/pounds-to-kg') {
    const result = calc.poundsToKg(Number(query.value));
    res.end(`Фунти во килограми: ${result}`);
  } else if (path === '/inches-to-cm') {
    const result = calc.inchesToCm(Number(query.value));
    res.end(`Инчи во сантиметри: ${result}`);
  
  } else {
    res.statusCode = 404;
    res.end(' Рутата не постои.');
  }
});

server.listen(3000, () => {
  console.log(' Серверот работи на http://localhost:3000');
});

