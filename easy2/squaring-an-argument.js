const multiply = require('./multiplying-two-numbers');

function square(input) {
  return multiply(input, input);
} 

// power to the nth type:
function nthSquare(input) {
  return multiply(input, input) * input**(-2 + input);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);
console.log(multiply('hello', 5) === 15);

console.log(nthSquare(0));
console.log(nthSquare(1));
console.log(nthSquare(4));
console.log(nthSquare(5));
console.log(nthSquare(100));