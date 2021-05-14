let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArray = arr.map(object => {
  let incrementedObj = {};

  for (let key in object) {
    incrementedObj[key] = object[key] + 1;
  }
  return incrementedObj;
});

console.log(
  newArray
);