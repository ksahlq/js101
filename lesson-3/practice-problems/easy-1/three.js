let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

for (let [key, value] of Object.entries(ages)) {
  if (key === 'Spot' || value === 'Spot') {
    console.log(`We found the entry: ${key}: ${value}`);
  }
  console.log(`${key}: ${value}`);
}

// alternative
console.log(ages.hasOwnProperty('Spot'));
