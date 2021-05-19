function getInput(input) {
  if (!Array.isArray(input)) return undefined;
  else if (input.length === 0) return input;
  else return rotateArray(input);
}

function rotateArray(array) {
  let rotated = array.slice();
  let firstElement = rotated.shift();

  rotated.push(firstElement);
  return rotated;
}

let array = [1, 2, 3, 4];

console.log(
  getInput([7, 3, 5, 2, 9, 1]),
  getInput(['a', 'b', 'c']),
  getInput(['a']),
  getInput([1, 'a', 3, 'c']),
  getInput([{ a: 2 }, [1, 2], 3]),
  getInput([]),
  getInput(),
  getInput(1),
  getInput(array),
  array
);