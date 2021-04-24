function buyFruit(array) {
  let fruitArray = [];
  let count = 0;

  for (let i = 0; i < array.length; i += 1) {
    count = array[i][1];
    for (let j = 0; j < count; j += 1) {
      fruitArray.push(array[i][0]);
    }
  }
  return fruitArray;
}

console.log(
  buyFruit([['apple', 3], ['orange', 1], ['banana', 2]])
);