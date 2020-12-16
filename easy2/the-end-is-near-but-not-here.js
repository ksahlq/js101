function penultimate(string) {  
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// further exploration
function middleWord(string) {
  let words = string.split(' ');  
  let middleIndex = ((words.length - 1) / 2).toFixed(0);

  return words[middleIndex]; 
}

function getWord(string) {  
  if (string.length % 2 === 1)  {
    return middleWord(string);
  } else {
  return penultimate(string);
  }
}


console.log(getWord('Hello, how are you today?'));
console.log(getWord('I am having a blast, thank you'));
console.log(getWord('سيف صثقف غغ'));
