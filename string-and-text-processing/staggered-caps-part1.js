function staggeredCase(string) {
  let chars = string.split('');

  for (let idx = 1; idx < chars.length; idx += 2) {
    chars[idx - 1] = chars[idx - 1].toUpperCase()
    chars[idx] = chars[idx].toLowerCase();
  }
  return chars.join('');
}

console.log(
  staggeredCase('I Love Launch School!'),
  staggeredCase('ALL_CAPS'),
  staggeredCase('ignore 77 the 4444 numbers')
);