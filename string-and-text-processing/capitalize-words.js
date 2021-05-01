function wordCap(string) {
  return string.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

console.log(
  wordCap('four score and seven'),
  wordCap('the javaScript language'),
  wordCap('this is a "quoted" word')
);