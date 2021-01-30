let statement = "The Flintstones Rock";

let string = statement.split('').filter(char => char !== ' ');

let obj = {};

string.forEach((char) => {
  if (Object.keys(obj).includes(char)) {
    obj[char] += 1;
  } else {
    obj[char] = 1;
  }
});

console.log(obj);