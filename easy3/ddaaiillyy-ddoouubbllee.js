function crunch(string) {
  let index = 0;
  let crunchText = "";

  while (index <= string.length - 1) {
    if (string[index] !== string[index + 1]) {
      crunchText += string[index];
    }
    index += 1;
  }
  return crunchText;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));