let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase(str) {
  let char = str.split('');

  let swapped = char.map((letter) => {
    if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  }).join('');
  return swapped;
}

console.log(
  swapCase(munstersDescription)
);
