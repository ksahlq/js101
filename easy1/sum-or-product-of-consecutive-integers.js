let readlineSync = require('readline-sync');
let number = parseInt(readlineSync.question('Please enter an integer greater than 0: '), 10);
let sumOrProd = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (!(number > 0)) {
  console.log('Error: Did not put in a number greater than 0');
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

// If input is an array of integers
let numbers = [1, 2, 3, 4, 5, 6];

function sumOfArray(array) {
  let total = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0); 
  return total;
}

function productOfArray(array) {
  let total = array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
  return total;
}

console.log(sumOfArray(numbers));
console.log(productOfArray(numbers));