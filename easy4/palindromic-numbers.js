function isPalindrome(string) {
  let reversed = string.split('').reverse().join('');

  return string === reversed;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number))
}

console.log(
  isPalindromicNumber(34543),
  isPalindromicNumber(123210),
  isPalindromicNumber(22),
  isPalindromicNumber(5),
  isPalindromicNumber(0005000),
);
