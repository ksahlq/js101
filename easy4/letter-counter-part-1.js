/*
Understand the problem
  - Input
    - a string of zero or more spaces words.
  - Output
    - an object
      - key = length of word.
      - value = amount of words that have that length

Algorithm:
  - split sentence into words array,
    - iterate through and save length of each word

 */

function wordSizes(words) {
  let wordsArray = words.split(' ');
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
  wordSizes('Four score and seven.'),                         // { "3": 1, "4": 1, "5": 1, "6": 1 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!'),  // { "3": 5, "6": 1, "7": 2 }
  wordSizes("What's up doc?"),                              // { "2": 1, "4": 1, "6": 1 }
  wordSizes(''),                                            // {}
);