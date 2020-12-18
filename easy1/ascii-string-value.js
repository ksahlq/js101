function asciiValue(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {    
    sum += string.charCodeAt(i);
  } 
  return sum; 
}

console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''))
