function repeater(string) {
  let result = [];
  let words = string.split('');
  words.forEach(char => {
    result.push(char.repeat(2));
  });
  return result.join('');
}

//alternative solution
function repeater_2(string) {
  return string.split("").map(char => char + char).join("");
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));