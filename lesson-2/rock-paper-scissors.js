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

function displayGrandWinner(playerScore, computerScore) {
  if (playerScore === WINS) {
    prompt(`Congrats! You are the grand winner with ${WINS} wins! :D`);
    resetScore();
  } else if (computerScore === WINS) {
    prompt(`Computer became the grand winner with ${WINS} wins :(`);
    resetScore();
  } else {
    prompt(`The score for player is: ${playerScore} and the score for computer is: ${computerScore}`);
  }
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n"');
    answer = readline.question().toLowerCase();
  }
  return answer.toLowerCase() !== 'n';
}

function clearScreen() {
  console.clear();
}

let score = { player: 0, computer: 0 };

function updateScore(choice, computerChoice) {
  if (computePlayerAsWinner(choice, computerChoice)) {
    score.player += 1;
  } else if (computeComputerAsWinner(choice, computerChoice)) {
    score.computer += 1;
  }
}

function resetScore() {
  score.player = 0;
  score.computer = 0;
}

while (true) {
  prompt('Greetings! You are now playing the legendary game: Rock, Paper, Scissors, Spock, Lizard!');
  prompt('You need a total score of 5 matches in order to win. Good luck! :)');

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  updateScore(choice, computerChoice);

  displayGrandWinner(score.player, score.computer);

  if (playAgain()) {
    clearScreen();
  } else {
    break;
  }
}
