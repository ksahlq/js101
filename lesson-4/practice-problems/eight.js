let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};

flintstones.forEach((element, index) => {
  obj[element] = index
});

console.log(obj);