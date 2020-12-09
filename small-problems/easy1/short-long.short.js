function shortLongShort(string1, string2) {  
  if ((typeof string1 || string2) !== 'string') {
    return "Error: input must be a string";
  }
  else if (string1.length < string2.length) {
    return string1 + string2 + string1;
  }
  else {
    return string2 + string1 + string2;
  }
}

console.log(shortLongShort('abc', 'defgh'));    
console.log(shortLongShort('abcde', 'fgh'));    
console.log(shortLongShort('', 'xyz'));     
console.log(shortLongShort(55, 'xyz'));    
