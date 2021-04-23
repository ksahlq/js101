function leadingSubstrings(string) {
  let letters = string.split('');
  let res = "";

  return letters.map(char => res += char);
}
function substrings(string) {
  let chars = string.split('');
  let result = [];

  for (let i = 0; i < chars.length; i += 1) {
    result.push(leadingSubstrings(string.slice(i)));
  }
  return result;
}

console.log(
  substrings('abcde')
);