function letterCaseCount(string) {
  let counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  string.split('').forEach(char => {
    if (char.match(/[a-z]/g)) {
      counts.lowercase += 1;
    } else if (char.match(/[A-Z]/g)) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  });
  return counts
}



console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));
