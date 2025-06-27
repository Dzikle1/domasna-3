const convert = require('./domasnoCas2.js');

console.log(" Miles to km:", convert.convertMilesToKm(10));
console.log(" Miles to km (грешка):", convert.convertMilesToKm("abc"));

console.log(" Celsius to Fahrenheit:", convert.convertCelsiusToFahrenheit(25));
console.log(" Celsius to Fahrenheit (грешка):", convert.convertCelsiusToFahrenheit(null));

console.log(" Pounds to kg:", convert.convertPoundsToKilogram(150));
console.log(" Pounds to kg (грешка):", convert.convertPoundsToKilogram(-2));

console.log(" Feet to meters:", convert.convertFeetToMetres(6));
console.log(" Feet to meters (грешка):", convert.convertFeetToMetres(undefined));
