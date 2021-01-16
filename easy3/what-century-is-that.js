function computeCentury(year) {
  let string = String(year);
  let startOfNewCentury = string[string.length - 1];

  if ((year / 100) < 1) {
    return 1;
  } else if (((year / 100) !== 0) && (startOfNewCentury >= '1')) {
    return Math.floor((Math.round(year) / 100) + 1);
  } else {
    return Math.floor(Math.round(year) / 100);
  }
}

function ruleException(century) {
  let rule = century.slice(-2);

  if (rule > 10 && rule < 14) {
    return true;
  }
}

function century(year) {
  let century = computeCentury(year).toString();

  if (ruleException(century)) {
    return century + 'th';
  } else {
    switch (century[century.length - 1]) {
      case '1':
        return century + 'st';
      case '2':
        return century + 'nd';
      case '3':
        return century + 'rd';
      default:
        return century + 'th';
    }
  }
}

console.log(
  computeCentury(2000),
  computeCentury(2001),
  computeCentury(1965),
  computeCentury(256),
  computeCentury(5),
  computeCentury(10103),
  computeCentury(1052),
  computeCentury(1127),
  computeCentury(11201),
);

console.log(
  century(2000),
  century(2001),
  century(1965),
  century(256),
  century(5),
  century(10103),
  century(1052),
  century(1127),
  century(11201),
);