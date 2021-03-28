function negative(number) {
  let stringNumber = number.toString();

  if (stringNumber[0] === '-') {
    return number;
  } else {
    return -number;
  }
}

// further exploration
function negative_2(number) {
  return number ? 1 * number : -1 * number;
}
console.log(
  negative_2(5),
  negative_2(-3),
  negative_2(0),
);