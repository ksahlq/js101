function letterPercentages(string) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  let total = 0;

  string.split('').forEach(char => {
    let isAlphabet = (/[A-Za-z]/g).test(char);

    if (char === char.toLowerCase() && isAlphabet) {
      obj.lowercase += 1;
    } else if (char === char.toUpperCase() && isAlphabet) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  });

  total = obj.lowercase + obj.uppercase + obj.neither;
  obj.lowercase = ((obj.lowercase / total) * 100).toFixed(2);
  obj.uppercase = ((obj.uppercase / total) * 100).toFixed(2);
  obj.neither = ((obj.neither / total) * 100).toFixed(2);

  return obj;
}

console.log(
  letterPercentages('abCdef 123'),
  letterPercentages('AbCd +Ef'),
  letterPercentages('123')
);