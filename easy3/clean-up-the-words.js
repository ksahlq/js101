/* 
Understand the problem
  - Input
    - a string 
  - Output
    - return modified input string
  - Rules
    - 1. all non-alphabetic characters should be replaced with space
      2. no consecutive spaces

Algorithm
  - iterate through the string, check if it's previous index is an alphabet or if there is a space
    - if true, then return the alphabet
  - else then make current index into a space

  - iterate through the string, if the previous index is an alphabet, add space, if not remove element

  - iteratate through the string
    - if previous index is not alphabet AND current index is not alphabet, insert space
    - else remove current index
  

*/

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

console.log(cleanUp("---what's my +*& line?"));
