function multiplyList(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    result.push(arr1[i] * arr2[i]);
  }
  return result;
}

function multiplyList_2(arr1, arr2) {
  return arr1.map((value, index) => {
    return value * arr2[index];
  });
}

console.log(
  multiplyList([3, 5, 7], [9, 10, 11]),
  multiplyList_2([3, 5, 7], [9, 10, 11])
);