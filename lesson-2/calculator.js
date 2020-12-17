/* Understand the problem 
  Input
    - Ask the user for the first number
    - Ask the user for the second number
    - Perform the operation on the two numbers
  - Output
    - Print the result to the terminal
*/
const readline = require('readline-sync');

console.log('Welcome to Calculator!');
console.log("What's the first number?");
let number1 = readline.question();
console.log("What's the second number?");
let number2 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') { 
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);

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