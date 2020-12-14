/* Understand the problem
  - Input
    - one string argument
  - Output
    - integer 
  - Rules
    - Convert string argument to integer.
  
Test Case
  - 
Data Structure
  - 

Algorithm
  - iterate through each char in string, find its value and put that 
  */

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };  
  let arrayToDigits = string.split('').map(char => DIGITS[char]);
  value = 0;
  arrayToDigits.forEach(digit => value = ((10 * value) + digit));
  return value;
}


console.log(stringToInteger("4321"));

