const { writeData, appendData, readData } = require('./app.js');

// 1. pisuvaj pocetni podatoci
writeData('John Doe');

// 2. citaj posle pisuvaj
console.log('Read 1:\n' + readData());

// 3. Append poveke podatici
appendData('John Doe, 25 year');

// 4. citaj posle append
console.log('Read 2:\n' + readData());
