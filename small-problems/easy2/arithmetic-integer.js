let readlineSync = require('readline-sync');
let number1 = parseInt(readlineSync.question('==> Enter the first number:\n'),10);
let number2 = parseInt(readlineSync.question('==> Enter the second number:\n'),10);

if (number1 && number2 !== 0) {
  console.log(`==> ${number1} + ${number2} = ${number1 + number2}`);
  console.log(`==> ${number1} - ${number2} = ${number1 - number2}`);
  console.log(`==> ${number1} * ${number2} = ${number1 * number2}`);
  console.log(`==> ${number1} / ${number2} = ${(number1 / number2).toFixed(0)}`);
  console.log(`==> ${number1} % ${number2} = ${number1 % number2}`);
  console.log(`==> ${number1} ** ${number2} = ${BigInt(number1 ** number2)}`);
} else {
  console.log('Error, number must be greater than 0');
}

