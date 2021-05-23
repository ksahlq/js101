function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]]
  }
  return previousTwo[1];
}

console.log(
  fibonacci(1),
  fibonacci(2),
  fibonacci(3),
  fibonacci(4),
  fibonacci(5),
  fibonacci(12),
  fibonacci(20)
);