export function integerToString(number) {
  const DIGITS = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
  }
  let result = '';
  do {
    let remainder = number % 10; 
    number = Math.floor(number / 10);    
    result = DIGITS[remainder] + result;
  } while (number > 0)

  return result;
}

console.log(integerToString(4321));
console.log(integerToString(0));   
console.log(integerToString(5000));
console.log(integerToString(1234567890));      