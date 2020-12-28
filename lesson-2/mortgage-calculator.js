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

  while (invalidNumber(loanAmount) || (loanAmount <= 0)) {
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
  return apr / 100;
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
  if (apr === 0 || duration === 0) {
    return 0;
  }
  return apr / duration;
}

function calculate(amount, rate, duration) {
  if (rate !== 0) {
    return amount * (rate / (1 - Math.pow((1 + rate), (-duration))));
  } else if (duration === 0) {
    return 0;
  } else {
    return amount / duration;
  }
}

function meny() {
  prompt(messages.welcome);
  let loanAmount = askLoanAmount();
  let apr = askAnnualPercentageRate();
  let loanDuration = askLoanDuration();
  let monthlyRate = monthlyInterestRate(apr, loanDuration);
  let monthlyPayment = calculate(loanAmount, monthlyRate, loanDuration);

  console.log(`Loan amount: ${loanAmount}`);
  console.log(`Annual Percentage Rate: ${apr}`);
  console.log(`Loan duration in months: ${loanDuration}`);
  console.log(`Montly interest rate: ${monthlyRate}`);
  console.log(`Montly payment on mortgage is: $${monthlyPayment.toFixed(2)}`);
}

meny();