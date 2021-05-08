let arr = ['10', '11', '9', '7', '8'];

console.log(
  arr.sort((a, b) => Number(b) - Number(a))
);