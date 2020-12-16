import { integerToString } from "./convert-a-number-to-a-string.js";

function signedIntegerToString(number) {
  if (Math.sign(number) === -1) {
    return `-${integerToString(-number)}`;
  } else if (Math.sign(number) === 1) {
    return `+${integerToString(number)}`;
  } else {
    return integerToString(number);
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0)); 