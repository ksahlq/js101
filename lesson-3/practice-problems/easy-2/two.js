let numbers = [1, 2, 3, 4, 5];
numbers.slice().reverse();
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let a = numbers.slice().sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(a);

let reversed = [];
numbers.forEach((num, index, arr) => {
  reversed.push(arr[arr.length - 1 - index]);
});

console.log(reversed);