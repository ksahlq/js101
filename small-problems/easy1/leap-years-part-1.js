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
      - evenly divisible by 4 and year % 100 !== 0
      - evenly divisible by 400
    - False;
      - divisible by 100
      -

Test Cases

  isLeapYear(2016);      // true
  isLeapYear(2015);      // false
  isLeapYear(2100);      // false
  isLeapYear(2400);      // true
  isLeapYear(240000);    // true
  isLeapYear(240001);    // false
  isLeapYear(2000);      // true
  isLeapYear(1900);      // false
  isLeapYear(1752);      // true
  isLeapYear(1700);      // false
  isLeapYear(1);         // false
  isLeapYear(100);       // false
  isLeapYear(400);       // true

Data structure
 - Number
 - math operations
Algorithm 
  true:
    -  if year % 4 has no remainder && year % 100 has no remainder
  -
  false:
    - if year % 100 has no remainder && year % 400 has no remainder
*/

function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0){
    return true;
  } else if (year % 400 === 0) {
    return true;
  }  
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));