function staggeredCase(string) {
  let chars = string.split('');

  for (let idx = 1; idx < chars.length; idx += 2) {
    chars[idx - 1] = chars[idx - 1].toUpperCase()
    chars[idx] = chars[idx].toLowerCase();
  }
  return chars.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);