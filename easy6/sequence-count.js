function sequence(count, init) {
  let result = [];
  let value = init;

  for (let i = 1; i <= count; i += 1) {
    result.push(value);
    value += init;
  }
  return result;
}

console.log(
  sequence(5, 1),
  sequence(4, -7),
  sequence(3, 0),
  sequence(0, 1000000),
);