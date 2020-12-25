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

function prompt(input) {
  console.log(`=> ${input}`);
}

function invalidNumber(number) {
  return Number.isNaN(number);
}

function askLoanAmount() {
  let loanAmount = parseFloat(readline.question('How much do you wish to loan?\n'));

  while (invalidNumber(loanAmount)) {
    prompt('Ehm...that is not a valid loan number');
    loanAmount = parseFloat(readline.question());
  }
  return loanAmount;
}

function askAnnualPercentageRate() {
  let apr = parseFloat(readline.question('What is the Annual Percentage Rate?\n'));
  return apr;
}

function askLoanDuration() {
  let yearDuration = parseInt(readline.question('Type in loan duration in years?\n'), 10);
  let monthDuration = parseInt(readline.question('Type in loan duration in months?\n'), 10);
  let loanDuration = (yearDuration * 12) + monthDuration;
  return loanDuration;
}


prompt(askLoanAmount());
prompt(`${askAnnualPercentageRate()}%`);
prompt(`The total loan duration in months is: ${askLoanDuration()}`);