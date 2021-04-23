function leadingSubstrings(string) {
  let subStrings = [];
  let letters = string.split('');
  let index = 0;
  let res = "";

  do {
    res += letters[index];
    subStrings.push(res);
    index += 1;

  } while (index < string.length);
  return subStrings;
}

// alternative solution
function leadingSubstrings(string) {
  let letters = string.split('');
  let res = "";

  return letters.map(char => res += char);
}

console.log(
  leadingSubstrings('abc'),
  leadingSubstrings('a'),
  leadingSubstrings('xyzzy')
);