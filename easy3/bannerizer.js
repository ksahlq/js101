const COLUMNS_LENGTH = 2;
/* 
* Understand the problem:
  - Input
    - line of text
  - Output
    - borders around the line of text
  Rules:
  - columns length does not change
  - row length changes


Test Case: 
  logInBox('To boldly go where no one has gone before.');
  +--------------------------------------------+
  |                                            |
  | To boldly go where no one has gone before. |
  |                                            |
  +--------------------------------------------+

  logInBox('');
  +--+
  |  |
  |  |
  |  |
  +--+

Data structure
 - nested arrays
  - array = [['+'][string.length + 2]]
Algorithm:
  - log out a plus sign
  - iterate through first index using the length of the string
    - log out a '-'
  - for first and last index  
 */

//let array = [['+', '|', '|', '|', '+'], ['-'], ['-'], ['+', '|', '|', '|', '+']];
function logInBox(string) {
  let row = '';


  for (let i = 0; i < COLUMNS_LENGTH; i += 1) {
    for (let j = 0; j < string.length; j += 1) {
      row[0][j] += '-';

      console.log(row);
    }
    //console.log('-');
  }
}


/* function logInBox(string) {
  let column = 0;
  let row = 0;
  let output = '+';

  while (row <= string.length + 1) {
    output += '-';
    console.log(output);
    row += 1;
  }
  console.log(output);
} */

logInBox('');