function interleave(first, second) {
  let combinedArray = [];
  for (let i = 0; i < first.length; i += 1) {
    combinedArray.push(first[i], second[i]);
  }
  return combinedArray;
}

function interleave_2(first, second) {
  let combinedArray = [];

  first.forEach((value, index) => {
    combinedArray.push(value, second[index]);
  });
  return combinedArray
}

function interleave_3(first, second) {
  return first.map((value, index) => {
    return [value].concat(second[index]);
  }).flat();
}

function interleave_4(first, second) {
  return first.reduce((acc, curr, idx) => {
    return [...acc, curr, second[idx]];
  }, []);
}



console.log(
  interleave([1, 2, 3], ['a', 'b', 'c']),
  interleave_2([1, 2, 3], ['a', 'b', 'c']),
  interleave_3([1, 2, 3], ['a', 'b', 'c']),
  interleave_4([1, 2, 3], ['a', 'b', 'c'])
);
