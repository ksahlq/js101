function isBalanced(string) {
  let letters = string.split('');
  let result = false;

  if (letters.includes('(')) {
    for (let i = letters.indexOf('('); i < letters.length; i += 1) {
      if (letters[i] === ')') return result = true;
    }
  } else {
    return result = true;
  }
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

