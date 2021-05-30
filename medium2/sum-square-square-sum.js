function sumSquareDifference(number) {
  let sumSquare = 0;
  let squareSum = 0;
  for (let i = 1; i <= number; i += 1) {
    sumSquare += i;
    squareSum += i ** 2;
  }
  return sumSquare ** 2 - squareSum;
}

console.log(
  sumSquareDifference(3),
  sumSquareDifference(10),
  sumSquareDifference(1),
  sumSquareDifference(100)
);