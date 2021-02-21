function average(array) {
  let sum = array.reduce((acc, curr) => {
    return acc + curr;
  });
  return Math.floor(sum / array.length);
}

function average_2(array) {
  let sum = 0;
  array.forEach((value) => {
    sum += value;
  });
  return Math.floor(sum / array.length);
}

console.log(
  average([1, 5, 87, 45, 8, 8]),
  average([9, 47, 23, 95, 16, 52])
);