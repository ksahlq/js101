function rotateRightmostDigits(number, count) {
  let digits = number.toString().split('');
  let removeIdx = digits.length - count;
  let removed = digits.splice(removeIdx, 1)[0];

  digits.push(removed);
  return Number(digits.join(''));
}

function maxRotation(number) {
  let numberOfRotations = number.toString().split('').length;
  let result;
  let rotate;

  while (numberOfRotations > 0) {
    rotate = rotateRightmostDigits(number, numberOfRotations);
    number = rotate;
    result = rotateRightmostDigits(number, numberOfRotations);
    numberOfRotations -= 1;
  }
  return result;
}

console.log(
  maxRotation(735291),
  maxRotation(3),
  maxRotation(35),
  maxRotation(105),
  maxRotation(8703529146)
);