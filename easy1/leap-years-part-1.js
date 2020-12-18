/* 
Understand the problem
  - Input
    - number greater than 0
  - Output
    - return boolean
  - Rules
   - leap year occurs in every year that is evenly divisible by 4
    - unless divisible by 100 - not a leap year
   - if year is evenly divisible by 100, then its not a leap year
    - unless divisble by 400

    - True:
      - evenly divisible by 4 and year % 100 === 1
      - evenly divisible by 100 and year % 400 === 1
    - False:
      - evenly divisible by 4 and year % 100 === 0
      - evenly divisible by 100 and year % 400 === 0

*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true