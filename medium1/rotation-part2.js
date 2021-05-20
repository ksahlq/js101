function rotateRightmostDigits(number, count) {
  let digits = number.toString().split('');
  let remove = digits.length - count;
  let removedElement = digits.splice(remove, 1)[0];

  digits.push(removedElement);
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