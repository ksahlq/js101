const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];
const WINS = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

function computePlayerAsWinner(choice, computerChoice) {
  return ((choice === 'sc' && computerChoice === 'p') ||
    (choice === 'p' && computerChoice === 'r') ||
    (choice === 'r' && computerChoice === 'l') ||
    (choice === 'l' && computerChoice === 'sp') ||
    (choice === 'sp' && computerChoice === 'sc') ||
    (choice === 'sc' && computerChoice === 'l') ||
    (choice === 'l' && computerChoice === 'p') ||
    (choice === 'p' && computerChoice === 'sp') ||
    (choice === 'sp' && computerChoice === 'r') ||
    (choice === 'r' && computerChoice === 'sc'));
}

function computeComputerAsWinner(choice, computerChoice) {
  return ((choice === 'sc' && computerChoice === 'r') ||
    (choice === 'sc' && computerChoice === 'sp') ||
    (choice === 'p' && computerChoice === 'sc') ||
    (choice === 'p' && computerChoice === 'l') ||
    (choice === 'r' && computerChoice === 'p') ||
    (choice === 'r' && computerChoice === 'sp') ||
    (choice === 'l' && computerChoice === 'r') ||
    (choice === 'l' && computerChoice === 'sc') ||
    (choice === 'sp' && computerChoice === 'l') ||
    (choice === 'sp' && computerChoice === 'p'));
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

function computeWinner(choice, computerChoice) {
  if (computePlayerAsWinner(choice, computerChoice)) {
    return 'p';
  } else if (computeComputerAsWinner(choice, computerChoice)) {
    return 'c';
  } else {
    return 'd';
  }
}

function displayGrandWinner(playerScore, computerScore) {
  if (playerScore === WINS) {
    prompt(`Congrats! You are the grand winner with ${WINS} wins! :D`);
  } else if (computerScore === WINS) {
    prompt(`Computer became the grand winner with ${WINS} wins :(`);
  } else {
    prompt(`The score for player is: ${playerScore} and the score for computer is ${computerScore}`);
  }
}

let playerScore = 0;
let computerScore = 0;

function updateScore(input) {
  if (input === 'p') {
    playerScore += 1;
  } else if (input === 'c') {
    computerScore += 1;
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  let playerOrComputer = computeWinner(choice, computerChoice);
  // TODO: solve issue with score not being reset after 5 wins
  updateScore(playerOrComputer);

  displayGrandWinner(playerScore, computerScore);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  if (answer[0].toLowerCase() !== 'y') break;
}
