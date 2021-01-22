function swap(string) {
  let wordArray = string.split(' ');

  let swapSentence = wordArray.map((word) => {
    if (word.length > 1) {
      return word[word.length - 1] + word.slice(1, -1) + word[0];
    } else {
      return word;
    }
  }).join(' ');
  return swapSentence;
}

console.log(
  swap('Oh what a wonderful day it is'),
  swap('Abcde'),
  swap('a'),
);
