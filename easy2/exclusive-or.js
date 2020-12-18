function xor(input1, input2) {
  if ((input1 && !input2)) {
    return true;
  } else if ((!input1 && input2)) {
    return true;
  }
  return false;
}

// alternative solution, note that !! is used to return boolean value as && or || returns the truthy value
function xor_2(value1, value2) {
  return !!((value1 && !value2) || (!value1 && value2));  
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);