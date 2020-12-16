function oddities(array) {
  let oddElements = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i % 2 === 0) {
      oddElements.push(array[i]);
    } 
  }
  return oddElements;
}

// further exploration
function oddities_2(array) {
  return array.filter((element, index) => index % 2 === 1);
}

console.log(oddities_2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities_2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities_2(["abc", "def"])); // logs ['abc']
console.log(oddities_2([123])); // logs [123]
console.log(oddities_2([])); // logs []