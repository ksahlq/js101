function reverseArray(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] =
      [array[rightIndex], array[leftIndex]];
    leftIndex += 1
    rightIndex -= 1;
  }
  return array;
}

let list = [1, 2, 3, 4];
console.log(
  reverseArray(list)
);