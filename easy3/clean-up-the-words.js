function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function cleanUp(string) {
  let cleanText = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLowerCaseLetter(string[i]) || isUpperCaseLetter(string[i])) {
      cleanText += string[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  return cleanText;
}

// alternative solution
function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

console.log(cleanUp("---what's my +*& line?"));
