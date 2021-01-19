function runningTotal(array) {
  let newArray = [];
  let previous = 0;

  array.forEach((number) => {
    let sum = previous + number;
    previous = sum;
    newArray.push(sum);
  });
  return newArray;
}

// alternative solutions
function runningTotal_2(array) {
  let newArray = [];

  array.reduce((accumulator, currentValue) => {
    newArray.push(accumulator + currentValue);
    return accumulator + currentValue;
  }, 0);
  return newArray;
}

function runningTotal_3(array) {
  let sum = 0;

  return array.map((number) => {
    sum += number;
    return sum;
  });
}

console.log(
  runningTotal([2, 5, 13]),
  runningTotal([14, 11, 7, 15, 20]),
  runningTotal([3]),
  runningTotal([]),
);