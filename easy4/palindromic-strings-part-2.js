function isRealPalindrome(string) {
  let alphanumeric = string.toLowerCase().match(/[a-z0-9]/g);
  let input = alphanumeric.join('');
  let reverse = alphanumeric.reverse().join('');

  return input === reverse;
}

console.log(
  isRealPalindrome('madam'),
  isRealPalindrome('Madam'),
  isRealPalindrome("Madam, I'm Adam"),
  isRealPalindrome('356653'),
  isRealPalindrome('356a653'),
  isRealPalindrome('123ab321'),
);