function isOdd(number) {    
  return Math.abs(number % 2) === 1;   
}

console.log(isOdd(2)); 
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));