function sumOfSums(array) {
  let value = 0;
  let result = []

  array.forEach(number => {
    value += number
    result.push(value)
  });

  return result.reduce((acc, curr) => acc + curr);

}

console.log(
  sumOfSums([3, 5, 2]),
  sumOfSums([1, 5, 7, 3]),
  sumOfSums([4]),
  sumOfSums([1, 2, 3, 4, 5])
);