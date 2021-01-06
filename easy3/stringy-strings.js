function stringy(size) {
  let array = [];

  for (let i = 0; i < size; i += 1) {
    array.push('1');
  }
  for (let i = 1; i < size; i += 2) {
    array[i] = '0';
  }
  return array.join('');
}

//alternative solution 
function stringy_2(size) {
  let result = "";

  for (let i = 0; i < size; i += 1) {
    let number = ((i % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
}

console.log(
  stringy_2(6),
  stringy_2(9),
  stringy_2(4),
  stringy_2(7),
);