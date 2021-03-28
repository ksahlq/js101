function repeater(string) {
  return string.split('').map(char => char + char).join('');
}
const DONT_DOUBLE = ['a', 'e', 'i', 'o', 'u', '0', '1', '2', '3', '4',
  '5', '6', '7', '8', '9', ',', '.', ';', '?', '!', '""', ' ', ' ()', '[]', '{}'];

function doubleConsonants(string) {
  let result = [];

  string.split('').forEach((char) => {
    if (!DONT_DOUBLE.includes(char)) {
      result.push(repeater(char));
    } else {
      result.push(char);
    }
  });
  return result.join('');
}

console.log(
  doubleConsonants('String'),
  doubleConsonants('Hello-World!'),
  doubleConsonants('July 4th!'),
  doubleConsonants(''),
);