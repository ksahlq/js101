let nanArray = [NaN];

console.log(
  nanArray[0] === NaN,
  Number.isNaN(nanArray[0])
);