let readlineSync = require('readline-sync');
console.log('Enter the length of the room in meters: ')
let length = readlineSync.prompt();
length = parseInt(length, 10);
console.log('Enter the width of the room in meter: ')
let width = readlineSync.prompt();
width = parseInt(width, 10);

const SQMETER_IN_SQFEET = 10.7639;
let area = length * width;
let areaSqft = area * SQMETER_IN_SQFEET;
console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaSqft.toFixed(2)})`);