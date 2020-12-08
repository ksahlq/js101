/*
Understand the problem
  - Input
    - ask user for number
    - ask user for which math operation
  - Output
    - sum or product all numbers, inclusive input number
  - Rules
    - dependant on user input char
      - "s"
        - sum all numbers
      - "p"
        - product all numbers

Test Cases
  Please enter an integer greater than 0: 5
  Enter "s" to compute the sum, or "p" to compute the product. s

  The sum of the integers between 1 and 5 is 15.
--------------
  Please enter an integer greater than 0: 6
  Enter "s" to compute the sum, or "p" to compute the product. p

  The product of the integers between 1 and 6 is 720.

  - Edge cases 
    raise error if number is not greater than 0
    - what if number is 0?
    - what if input is null? array? object?

Data Structure
  - Numbers
  - can use math operations
  
Algorithm
  - if input is not anything greater than 0 
    - raise error
    - anything other than s or p 
      - raise error
      - else if "s" 
        - sum numbers
      - else if "p"
        - product numbers
*/

let readlineSync = require('readline-sync');
let number = parseInt(readlineSync.question('Please enter an integer greater than 0: '));
let sumOrProd = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (!(number > 0)) {
  console.log('Error: Did not put in an number greater than 0');
} else if (sumOrProd === 's') {  
    let sum = 0; 
    for (let i = 0; i <= number; i += 1) {
      sum += i;
    }
  console.log(`The sum of the integers between 1 to ${number} is ${sum}.`);
} else if (sumOrProd === 'p') {
    let product = 1;
    for (let i = 1; i <= number; i += 1) {
      product *= i;
  }
  console.log(`The product of the integers between 1 to ${number} is ${product}.`);
}
