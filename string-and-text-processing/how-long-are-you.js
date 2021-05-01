function wordLengths(string) {
  let result = [];

  if (string) {
    let words = string.split(' ');
    words.forEach(word => {
      result.push(word + " " + String(word.length))
    });
  }
  return result;
}

// alternative solution
const wordLengths_2 = (...args) => {
  if (args.length === 0 || args[0].length === 0) {
    return [];
  }

  return args[0].split(" ").map(function (word) {
    return `${word} ${String(word.length)}`;
  });
};

console.log(
  wordLengths('cow sheep chicken'),
  wordLengths('baseball hot dogs and apple pie'),
  wordLengths("It ain't easy, is it?"),
  wordLengths('Supercalifragilisticexpialidocious'),
  wordLengths(''),
  wordLengths()
);