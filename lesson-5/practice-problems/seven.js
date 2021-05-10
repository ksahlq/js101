let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

// [2, [5, 8]]
// arr => [4, [3, 8]] 