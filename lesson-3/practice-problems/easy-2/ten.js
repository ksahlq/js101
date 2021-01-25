let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(
  statement1.match(/t/g).length,
  statement2.match(/t/g) ? statement2.match(/t/g).length : 0
);

