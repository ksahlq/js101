/* 
Understand the problem:
  - Input:
    - array as argument
  - Output:
    - same array with it's element reversed
  Rules
    - mutate the input array, the return array should be same object

Data structure:
  - array

Algorithm:
1. loop through the entire array from last index to start 
2. set array index to array iterator
3. return array
*/

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