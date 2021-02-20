function multiplicativeAverage(arr) {
  let sum = arr.reduce((acc, curr) => {
    return acc * curr;
  });
  return (sum / arr.length).toFixed(3);
}

console.log(
  multiplicativeAverage([3, 5]),
  multiplicativeAverage([2, 5, 7, 11, 13, 17])
);
