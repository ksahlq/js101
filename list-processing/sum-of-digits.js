function sum(number) {
  let digits = number.toString().split('');

  return digits.reduce((acc, curr) => {
    return Number(acc) + Number(curr);
  });
}

console.log(
  sum(23),
  sum(496),
  sum(123456789)
);