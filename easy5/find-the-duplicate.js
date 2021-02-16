/* 
Understand the problem
  - Input:
    - an array of integers
  - Output:
    - an integer value which indicates the dublicate value
  - Rules:
    - Exactly one value is duplicate

Data structure:
  - array

Algorithm
1. iterate through the input array
2. for each value in array, make a comparison with the rest of the values in the array, excluding the current value.
  a. if true, return value and stop searching
  b. else continue

"2. for each value in array, make a comparison with all values in the array"

 */

function findDup(searchArray) {
  searchArray.forEach(value => {
    if (searchArray.includes(value)) {
      console.log(value);
      return value;
    }
  });
}

console.log(
  findDup([1, 5, 3, 1]),
  findDup([18, 9, 36, 96, 31, 19, 54, 75, 42, 15,
    38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
    14, 61, 90, 81, 8, 63, 95, 99, 30, 65,
    78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
    89, 10, 84, 1, 47, 68, 12, 33, 86, 60,
    41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
    55, 79, 80, 21, 39, 72, 13, 50, 6, 70,
    85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
    40, 23, 71, 62, 73, 32, 43, 24, 4, 56,
    7, 34, 57, 74, 45, 11, 88, 67, 5, 58])
);