let readSync = require('readline-sync')

function greetUser() {
  let name =  readSync.question('What is your name? ');
  if (name[name.length - 1] === '!') {    ;
    return `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`;
  } else {
    return `Hello ${name}.`;  
  }  
}

console.log(greetUser());

