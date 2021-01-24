let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let newArray = [];

for (let [key, value] of Object.entries(flintstones)) {
  if (key === 'Barney') {
    newArray.push(key, value);
  }
}

console.log(newArray);