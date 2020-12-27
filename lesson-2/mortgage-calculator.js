/*
Understand the problem:
  - Input:
    - the loan amount
    - the Annual Percentage Rate (APR)
    - the loan duration
  - Output:
    - monthly payment using two decimals

Test Case:
  $123.00
  $371.00

Data structure:
  - number
  - math operations
*/

/*
TODO:
Calculate:
  * monthly interest rate
  * loan duration in months
*/
let readline = require('readline-sync');
let messages = require('./mortgage-calculator-messages.json');

function prompt(input) {
  console.log(`=> ${input}`);
}

function invalidNumber(number) {
  return Number.isNaN(number);
}

function askLoanAmount() {
  prompt(messages.queryLoanAmount);
  let loanAmount = parseFloat(readline.question());

  while (invalidNumber(loanAmount)) {
    prompt(messages.invalidLoan);
    loanAmount = parseFloat(readline.question());
  }
  return loanAmount;
}

function askAnnualPercentageRate() {
  prompt(messages.queryRate);
  let apr = parseFloat(readline.question());

  while (invalidNumber(apr)) {
    prompt(messages.invalidRate);
    apr = parseFloat(readline.question());
  }
  return apr;
}

function askLoanDuration() {
  prompt(messages.queryYears);
  let yearDuration = parseInt(readline.question(), 10);

  while (invalidNumber(yearDuration)) {
    prompt(messages.invalidDuration);
    yearDuration = parseInt(readline.question(), 10);
  }
  prompt(messages.queryMonths);
  let monthDuration = parseInt(readline.question(), 10);

  while (invalidNumber(monthDuration)) {
    prompt(messages.invalidDuration);
    monthDuration = parseInt(readline.question(), 10);
  }

  let loanDuration = (yearDuration * 12) + monthDuration;
  return loanDuration;
}

function monthlyInterestRate(apr, duration) {
  return apr / duration;
}

// TODO: perform this after all input has been done and
function noInterestLoan() {
  return askLoanAmount() / askLoanDuration();
}
askLoanAmount();
/* console.log(`${askAnnualPercentageRate()}%`);
console.log(`The total loan duration in months is: ${askLoanDuration()}`); */
let apr = askAnnualPercentageRate();
let loanDuration = askLoanDuration();
console.log(`Monthly interest rate: ${monthlyInterestRate(apr, loanDuration)}`);