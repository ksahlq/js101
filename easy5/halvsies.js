function halvsies(array) {
  let resultArray;
  let firstHalf;
  let secondHalf;

  if (array.length % 2 === 1) {
    firstHalf = array.slice(0, Math.ceil(array.length / 2));
    secondHalf = array.slice(Math.ceil(array.length / 2));
    resultArray = [firstHalf, secondHalf];
  } else {
    firstHalf = array.slice(0, array.length / 2)
    secondHalf = array.slice(array.length / 2);
    resultArray = [firstHalf, secondHalf];
  }
  return resultArray;
}

console.log(
  halvsies([1, 2, 3, 4]),
  halvsies([1, 5, 2, 4, 3]),
  halvsies([5]),
  halvsies([]),
);
