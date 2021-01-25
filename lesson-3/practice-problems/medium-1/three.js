function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factors_2(number) {
  let factors = []

  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0) {
      factors.push(number / i);
    }
  }
  return factors;
}

console.log(
  factors(10),
  factors_2(10),
  factors(5),
  factors_2(5)
);

