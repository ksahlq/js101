const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function computePlayerAsWinner(choice, computerChoice) {
  return ((choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'rock' && computerChoice === 'lizard') ||
    (choice === 'lizard' && computerChoice === 'spock') ||
    (choice === 'spock' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'lizard') ||
    (choice === 'lizard' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'spock' && computerChoice === 'rock') ||
    (choice === 'rock' && computerChoice === 'scissors'));
}

function computeComputerAsWinner(choice, computerChoice) {
  return ((choice === 'scissors' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'spock') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'lizard') ||
    (choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'rock' && computerChoice === 'spock') ||
    (choice === 'lizard' && computerChoice === 'rock') ||
    (choice === 'lizard' && computerChoice === 'scissors') ||
    (choice === 'spock' && computerChoice === 'lizard') ||
    (choice === 'spock' && computerChoice === 'paper'));
}

function displayWinner(choice, computerChoice) {
  if (computePlayerAsWinner(choice, computerChoice)) {
    prompt('You win!');
  } else if (computeComputerAsWinner(choice, computerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  if (answer[0].toLowerCase() !== 'y') break;
}
