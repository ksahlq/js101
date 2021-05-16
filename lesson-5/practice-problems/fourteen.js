let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorsAndSizes = Object.values(obj).map(fruitsOrVegetables => {
  if (fruitsOrVegetables.type === 'fruit') {
    return fruitsOrVegetables.colors.map(color => color[0].toUpperCase() + color.slice(1));
  } else {
    return fruitsOrVegetables.size.toUpperCase();
  }
});

console.log(
  colorsAndSizes
);