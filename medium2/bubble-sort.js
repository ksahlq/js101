function bubbleSort(array) {
  while (true) {
    let swapped = false;

    for (let idx = 1; idx < array.length; idx += 1) {
      if (array[idx - 1] <= array[idx]) continue;
      [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
      swapped = true;
    }
    if (!swapped) break;
  }
  return array;
}

console.log(
  bubbleSort([5, 3]),
  bubbleSort([6, 2, 7, 1, 4]),
  bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'])
);