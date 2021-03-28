function reverseNumber(number) {
  return Number(number.toString().split('').reverse().join(''));
}

console.log(
  reverseNumber(12345),
  reverseNumber(12213),
  reverseNumber(456),
  reverseNumber(12000),
  reverseNumber(1),
);