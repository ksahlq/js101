let readline = require('readline-sync');

function promptNoun() {
  let noun = readline.question('Enter a noun: ');
  return noun;
}

function promptVerb() {
  let verb = readline.question('Enter a verb: ');
  return verb;
}

function promptAdjective() {
  let adjective = readline.question('Enter an adjective: ');
  return adjective;
}

function promptAdverb() {
  let adverb = readline.question('Enter an adverb: ');
  return adverb;
}

function displayMadlib() {
  let noun = promptNoun();
  let verb = promptVerb();
  let adjective = promptAdjective();
  let adverb = promptAdverb();

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
  console.log(`The ${adjective} ${noun} walks ${adverb} over the lazy ${noun}.`);
  console.log(`The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`);
}


displayMadlib();