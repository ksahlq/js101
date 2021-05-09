let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

let totalAge = 0;
const males = Object.values(munsters).filter(person => person.gender === 'male');

males.forEach(male => {
  return totalAge += male.age;
});

console.log(
  males,
  totalAge
);