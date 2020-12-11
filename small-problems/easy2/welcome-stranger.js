function greetings(array, object) {
  let name = array.join(' ');
  let values = Object.values(object);
  let title = values.join(' ');
  return `Hello, ${name}! Nice to have a ${title} around.`;
}

// alternative solution
let greetings_2  = (array, object) => {
  return `Hello, ${array.join(' ')}! Nice to have a ${object.title} ${object.occupation} around.`;
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));
console.log(greetings_2(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));