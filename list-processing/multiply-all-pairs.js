function multiplyAllPairs(first, second) {
  let products = [];

  for (let i = 0; i < first.length; i += 1) {
    second.forEach((value) => {
      products.push(first[i] * value);
    });
  }

  return sortNumbers(products);;
}

function sortNumbers(array) {
  return array.sort((a, b) => a - b)
}

console.log(
  multiplyAllPairs([2, 4], [4, 3, 1, 2])
);