let numbers = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let numbers3 = [1, 2, 3, 4];
let length = numbers.length;

for (let i = 0; i < length; i += 1) {
  numbers.pop();
  numbers2.shift();
  numbers3.splice(i)
}


console.log(
  numbers,
  numbers2,
  numbers3
)