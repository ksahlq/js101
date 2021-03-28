function swapName(fullname) {
  return fullname.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));
console.log(swapName('Donald Trump'));
console.log(swapName('Emmerson Mnangagwa'));