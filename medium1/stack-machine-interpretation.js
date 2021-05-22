function minilang(input) {
  let stack = [];
  let register = 0;
  let operations = input.split(' ')

  operations.forEach(command => {
    switch (command) {
      case '1':
        register = 1;
        break;
      case '2':
        register = 2;
        break;
      case '3':
        register = 3;
        break;
      case '4':
        register = 4;
        break;
      case '5':
        register = 5;
        break;
      case '6':
        register = 6;
        break;
      case '7':
        register = 7;
        break;
      case '8':
        register = 8;
        break;
      case '9':
        register = 9;
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register /= stack.pop();
        break;
      case 'REMAINDER':
        register %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        break;
    }
  });
}

/* minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
minilang('6 PUSH'); */