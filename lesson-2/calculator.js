const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function askNumbers() {
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm...that doesn't look like a valid number");
    number1 = readline.question();
  }
  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm...that doesn't look like a valid number");
    number2 = readline.question();
  }
  return [number1, number2];
}

function askOperation() {
  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }
  return operation;
}

function calculate(operation, number1, number2) {
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  return output;
}

function calculateAgain() {
  prompt('Perform another calculation?');
  let answer = readline.question();
  let numbers;
  let result;

  while (answer !== 'yes' && answer !== 'no') {
    prompt("Type 'yes' to continue, or 'no' to exit");
    answer = readline.question();
  }

  if (answer === 'yes') {
    numbers = askNumbers();
    result = calculate(askOperation(), numbers[0], numbers[1]);
  } else {
    return prompt('Exiting program');
  }
  return result;
}

prompt('Welcome to Calculator!');
let numbers = askNumbers();
let result = calculate(askOperation(), numbers[0], numbers[1]);
prompt(`The result is: ${result}`);
let result2 = calculateAgain();
prompt(`The result is: ${result2}`);