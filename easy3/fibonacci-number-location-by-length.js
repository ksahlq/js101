function fibonnaci(n) {
  if (n < 2) {
    return n;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

function findFibonacciIndexByLength(length) {
  let index = 1;

  while (true) {
    let value = fibonnaci(index);
    if (value.toString().length === length) {
      return index;
    }
    index += 1;
  }
}

// faster method
function findFibonacciIndexByLength_2(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;
  let maxSafeNumber = Number.MAX_SAFE_INTEGER;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
    if (fibonacci >= maxSafeNumber) {
      console.log('You have reached MAX SAFE INTEGER');
      break;
    }
  } while (String(fibonacci).length < length);

  return index;
}

console.log(
  findFibonacciIndexByLength(2),
  findFibonacciIndexByLength(10),
  // beware this one takes a long to time to finish, 
  // use the other method ...Length_2()
  findFibonacciIndexByLength_2(16)
);