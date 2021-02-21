
function digitList(number) {
  let digits = number;
  let leastSignificant;
  let result = [];

  while (digits >= 1) {
    leastSignificant = digits % 10;
    result.unshift(leastSignificant);
    digits = Math.floor(digits / 10);
  }
  return result;
}

// further exploration
function digitList_2(number) {
  let result = String(number).split("");

  return result.map((value) => {
    return parseInt(value);
  })
}

console.log(
  digitList(12345),
  digitList(7),
  digitList(375290),
  digitList(444)
);