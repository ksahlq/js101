const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

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

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

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
prompt(`The result is: ${output}`);


/*
Given a function with two parameters
  - add first argument with second
  - return sum

START
# call function with two numbers argument

SET sum = READ number1 + READ number2
READ sum
END

Given a array of strings
iterate through the array starting with the 2nd element
  - for each element, concatenate with its previous element

START
# given an array of string named "words"
SET startIndex = 1
FOR startIndex <= length of words
  SET sentence = words [startIndex - 1] + words [startIndex+1]
PRINT sentence
END

Given an array of integers
iterate through every other element in array

START
# given an array of integers names "numbers"

SET index = 0
SET newArray = empty array
WHILE index < numbers length
  - SET newArray push numbers[index]
  index + = 2
*/