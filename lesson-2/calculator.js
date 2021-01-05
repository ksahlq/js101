let readline = require('readline-sync');
let messages = require('./calculator_messages.json');

function prompt(output) {
  console.log(`=> ${output}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function askNumbers() {
  prompt(messages.en.askNumber1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages.en.errorNumber);
    number1 = readline.question();
  }
  prompt(messages.en.askNumber2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages.en.errorNumber);
    number2 = readline.question();
  }
  return [number1, number2];
}

function askOperation() {
  prompt(messages.en.askOperation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages.en.errorOperation);
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
  prompt(messages.en.again);
  let answer = readline.question();
  let numbers;
  let result;

  while (answer !== 'yes' && answer !== 'no') {
    prompt(messages.en.action);
    answer = readline.question();
  }

  if (answer === 'yes') {
    numbers = askNumbers();
    result = calculate(askOperation(), numbers[0], numbers[1]);
  } else {
    return prompt(messages.en.exit);
  }
  return result;
}

prompt(messages.en.welcome);
let numbers = askNumbers();
let result = calculate(askOperation(), numbers[0], numbers[1]);
prompt(`The result is: ${result}`);
let result2 = calculateAgain();
prompt(`The result is: ${result2}`);