function twice(input) {
  let number = input.toString();
  let array = number.split('');

  if (number.length % 2 === 0) {
    let index = 0;
    let middleIndex = number.length / 2;

    while (index < middleIndex) {
      if (number[index] === number[middleIndex]) {
        return Number(array.join(''));
      }
      index += 1;
      middleIndex -= 1;
    }
  }
  return input * 2;
}


// alternative solution
function twice_2(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));