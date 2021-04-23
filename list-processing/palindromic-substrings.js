function palindromes(string) {
  let result = [];
  let value = substrings(string);

  value.forEach(element => {
    element.forEach(word => {
      if (isPalindrome(word) && word.length !== 1) return result.push(word);
    });
  });
  return result;
}

function isPalindrome(string) {
  let array = string.split('');
  let firstHalf = array.slice(0, (array.length / 2));
  let secondHalf = array.slice((array.length / 2), array.length).reverse();

  return firstHalf.every((char, idx) => char === secondHalf[idx]);
}

// imported from previous exercises 
// TODO: look into how to properly import
function substrings(string) {
  let chars = string.split('');
  let result = [];

  for (let i = 0; i < chars.length; i += 1) {
    result.push(leadingSubstrings(string.slice(i)));
  }
  return result;
}

function leadingSubstrings(string) {
  let letters = string.split('');
  let res = "";

  return letters.map(char => res += char);
}
console.log(
  palindromes('abcd'),
  palindromes('madam'),
  palindromes('hello-madam-did-madam-goodbye'),
  palindromes('knitting cassettes')
);

