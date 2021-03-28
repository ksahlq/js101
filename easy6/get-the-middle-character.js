function centerOf(string) {
  let length = string.length;

  if ((string.length - 1) % 2 === 0) {
    return string[Math.floor(length / 2)];
  } else {
    let firstHalf = string.substring(0, string.length / 2);
    let secondHalf = string.substring(string.length / 2);
    return firstHalf[firstHalf.length - 1] + secondHalf[0];
  }
}

console.log(
  centerOf('I Love JavaScript'),
  centerOf('Launch School'),
  centerOf('Launch'),
  centerOf('Launchschool'),
  centerOf('x')
);