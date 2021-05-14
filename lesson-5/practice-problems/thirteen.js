let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let oddSorted = arr.sort((a, b) => {
  return a - b;
});

console.log(
  oddSorted
);