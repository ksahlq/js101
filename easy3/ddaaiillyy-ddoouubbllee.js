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

function crunch_2(string) {
  let char = string.split('');
  let newString = "";
  char.forEach((element, index) => {
    if (element !== string[index + 1]) {
      newString += element;
    }
  });
  return newString;
}

console.log(
  crunch('ddaaiillyy ddoouubbllee'),
  crunch('4444abcabccba'),
  crunch('ggggggggggggggg'),
  crunch('a'),
  crunch(''),
);

console.log(
  crunch_2('ddaaiillyy ddoouubbllee'),
  crunch_2('4444abcabccba'),
  crunch_2('ggggggggggggggg'),
  crunch_2('a'),
  crunch_2('')
);