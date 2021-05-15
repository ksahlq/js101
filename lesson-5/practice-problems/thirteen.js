let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let oddSorted = arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
    .reduce((acc, curr) => acc + curr);
  let oddSumB = b.filter(num => num % 2 === 1)
    .reduce((acc, curr) => acc + curr);

  return oddSumA - oddSumB;
});

console.log(
  oddSorted,
);