function isPalindrome(string) {
  let reversed = string.split('').reverse().join('');

  return string === reversed;
}

console.log(
  isPalindrome('madam'),
  isPalindrome('Madam'),
  isPalindrome("madam i'm adam"),
  isPalindrome('356653'),
);