let readline = require('readline-sync');

function retireAge() {
  let age = parseInt(readline.question('What is your age? '), 10);
  let queryAge = parseInt(readline.question('At what age would you like to retire? '), 10);

  let remainingYears = queryAge - age;
  let currentYear = new Date().getFullYear();
  let retireYear = currentYear + remainingYears;

  console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
  console.log(`You have only ${remainingYears} years of work to go!`);
}

retireAge();