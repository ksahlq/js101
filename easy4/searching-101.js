let readline = require('readline-sync');

function findSixthNumber() {
  let inputs = [];

  let number1 = readline.question('Enter the 1st number: ');
  inputs.push(number1);
  let number2 = readline.question('Enter the 2nd number: ');
  inputs.push(number2);
  let number3 = readline.question('Enter the 3rd number: ');
  inputs.push(number3);
  let number4 = readline.question('Enter the 4th number: ');
  inputs.push(number4);
  let number5 = readline.question('Enter the 5th number: ');
  inputs.push(number5);
  let lastNumber = readline.question('Enter the last number: ');

  return [lastNumber, inputs];
}

function displayNumber(number, array) {
  if (array.includes(number)) {
    console.log(`The number ${number} appears in ${array}.`)
  } else {
    console.log(`The number ${number} does not appear in ${array}.`)
  }
}

let values = findSixthNumber();
displayNumber(values[0], values[1]);


