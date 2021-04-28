function isUppercase(string) {
  return string.split('').every(char => char === char.toUpperCase())
}

// alternative solution
function isUppercase(string) {
  return string.toUpperCase() === string;
}
console.log(
  isUppercase('t'),
  isUppercase('T'),
  isUppercase('Four Score'),
  isUppercase('FOUR SCORE'),
  isUppercase('4SCORE!'),
  isUppercase('')
);

