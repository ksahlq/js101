import { stringToInteger } from "./convert-a-string-to-a-number.js";

function stringToSignedInteger(string) {    
  let newString = string.slice(1);  
  if (string[0] === '-') {    
    return -1 * stringToInteger(newString);    
  } else if (string[0] === '+') {
    return stringToInteger(newString);
  } 
  else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321);
console.log(stringToSignedInteger("-570") === -570);
console.log(stringToSignedInteger("+100") === 100);