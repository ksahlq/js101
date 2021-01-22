function wordSizes(words) {
  let onlyLetters = words.replace(/[^a-z\s]/gi, '');

  let wordsArray = onlyLetters.split(' ');
  let count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;

    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}

console.log(
  wordSizes('Four score and seven.'),
  wordSizes('Hey diddle diddle, the cat and the fiddle!'),
  wordSizes("What's up doc?"),
  wordSizes(''),
);