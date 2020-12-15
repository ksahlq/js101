export function stringToInteger(string) {
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
  let value = 0;
  arrayToDigits.forEach(digit => value = ((10 * value) + digit));
  return value;
}

// further exploration
function hexadecimalToInteger(string) {
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
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };  
  let arrayToDigits = string.split('').map(char => DIGITS[char]);  
  let value = 0;
  arrayToDigits.forEach(digit => value = ((16 * value) + digit));
  return value;
}

console.log(stringToInteger('4321') === 4321);
console.log(hexadecimalToInteger('4D9f') === 19871);

