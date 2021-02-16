function union(resultArray, array2) {

  resultArray.forEach((_, index) => {
    if (!resultArray.includes(array2[index])) {
      resultArray.push(array2[index]);
    }
  });
  return resultArray;
}
console.log(
  union([1, 3, 5], [3, 6, 9])
);
