function wordToDigit(string) {
  let words = string.split(' ');
  let digitString = []

  words.forEach(word => {
    switch (word) {
      case 'zero':
        digitString.push('0');
        break;
      case 'one':
        digitString.push('1');
        break;
      case 'two':
        digitString.push('2');
        break;
      case 'three':
        digitString.push('3');
        break;
      case 'four.':
        digitString.push('4.');
        break;
      case 'five':
        digitString.push('5');
        break;
      case 'six':
        digitString.push('6');
        break;
      case 'seven':
        digitString.push('7');
        break;
      case 'eight':
        digitString.push('8');
        break;
      case 'nine':
        digitString.push('9');
        break;
      default:
        digitString.push(word);
        break;
    }
  });
  return digitString.join(' ');
}

// alternative solution
const NUM_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit_2(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.'),
  wordToDigit_2('Please call me at five five five one two three four. Thanks.'),
);
