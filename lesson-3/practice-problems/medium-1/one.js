const TIMES = 10;
let string = "The Flintstones Rock!";

for (let i = 1; i <= TIMES; i += 1) {
  console.log(string);
  string = " " + string;
}

