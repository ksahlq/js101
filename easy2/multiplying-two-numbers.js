let multiply = function multiply(number1, number2) {
  if (typeof (number1 || number2) !== 'number') {
    console.log('Error, use numbers as inputs');
  } else  {
    return number1 * number2;
  }  
};
module.exports = multiply;

console.log(multiply(5, 3) === 15);
console.log(multiply(0, 0) === undefined);
console.log(multiply('a', 3) === 15);