function greetings(array, object) {
  let name = array.join(' ');
  let values = Object.values(object);
  let title = values.join(' ');
  return `Hello, ${name}! Nice to have a ${title} around.`;
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));