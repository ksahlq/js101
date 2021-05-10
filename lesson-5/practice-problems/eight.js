let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const sentence = Object.values(obj);
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

sentence.forEach(words => {
  words.forEach(word => {
    let letters = word.split('');
    letters.forEach(letter => {
      if (VOWELS.includes(letter)) {
        console.log(letter);
      }
    });
  })
});