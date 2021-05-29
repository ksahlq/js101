function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featureNum = toOddMultipleOf7(number);

  do {
    if (allUnique(number)) {
      return featureNum;
    }

    featureNum += 14;
  } while (featureNum <= MAX_FEATURED);
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}


function allUnique(number) {
  let digits = number.toString().split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }
    seen[digits[idx]] = true;

  }
  return true;
}

console.log(
  featured(12),
  featured(20),
  featured(21),
  featured(997),
  featured(1029),
  featured(999999),
  featured(999999987),
  featured(9876543186),
  featured(9876543200),
  featured(9876543201)
);