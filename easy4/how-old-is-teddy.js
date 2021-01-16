function randomAge() {
  let max = 120;
  let min = 20;
  let age = Math.random() * (max - min) + min;

  return Math.round(age);
}

console.log(`Teddy is ${randomAge()} years old!`);