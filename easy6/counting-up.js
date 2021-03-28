function sequence(inputNumber) {
  let newArray = [];

  for (let i = 1; i <= inputNumber; i += 1) {
    newArray.push(i);
  }
  return newArray;
}

console.log(
  sequence(5),
  sequence(3),
  sequence(1),
);