let readlineSync = require('readline-sync');
let bill = parseInt(readlineSync.question('What is the bill? '));

let tipPercentage = parseInt(readlineSync.question('What is the tip percentage? '));

let tip = bill * (tipPercentage/100);
let total = bill + tip;

console.log(typeof tip);
console.log(typeof total);
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);