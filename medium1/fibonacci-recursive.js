function fibonacci(number) {
  if (number <= 2) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(
  fibonacci(0),
  fibonacci(1),
  fibonacci(2),
  fibonacci(3),
  fibonacci(4),
  fibonacci(5),
  fibonacci(12),
  fibonacci(20)
);