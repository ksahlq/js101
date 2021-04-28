const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function removeVowels(arrayOfStrings) {
  let result = [];

  arrayOfStrings.forEach(string => {
    let word = string.split('');
    let noVowels = [];

    word.forEach(letter => {
      if (!VOWELS.includes(letter.toLowerCase())) {
        noVowels.push(letter);
      }
    });
    result.push(noVowels.join(''));
  });
  return result;
}

// alternative solution 
function removeVowels_2(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

console.log(
  removeVowels(['abcdefghijklmnopqrstuvwxyz']),
  removeVowels(['green', 'YELLOW', 'black', 'white']),
  removeVowels(['ABC', 'AEIOU', 'XYZ'])
);