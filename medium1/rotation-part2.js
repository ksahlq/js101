function rotateRightmostDigits(number, count) {
  let digits = number.toString().split('');
  let removeIdx = digits.length - count;
  let removed = digits.splice(removeIdx, 1)[0];

  digits.push(removed);
  return Number(digits.join(''));
}

console.log(
  rotateRightmostDigits(735291, 1),
  rotateRightmostDigits(735291, 2),
  rotateRightmostDigits(735291, 3),
  rotateRightmostDigits(735291, 4),
  rotateRightmostDigits(735291, 5),
  rotateRightmostDigits(735291, 6),
);