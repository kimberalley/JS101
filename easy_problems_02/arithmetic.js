//* PRE-EXECUTION
const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function invalid(input) {
  return input === '' || Number.isNaN(Number(input));
}

function arithmetic(num1, num2) {
  prompt(`${num1} + ${num2} = ${num1 + num2}`);
  prompt(`${num1} - ${num2} = ${num1 - num2}`);
  prompt(`${num1} * ${num2} = ${num1 * num2}`);
  prompt(`${num1} / ${num2} = ${num1 / num2}`);
  prompt(`${num1} % ${num2} = ${num1 % num2}`);
  prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
}

//* EXECUTION
while (true) {
  prompt('Welcome to the Arithmetic Integer!');

  prompt('Please enter the first integer:');
  let input1 = READLINE.question();

  while(invalid(input1)) {
    prompt('Invalid entry. Please enter an integer:');
    input1 = READLINE.question();
  }

  prompt('Please enter a second integer:');
  let input2 = READLINE.question();

  while(invalid(input2)) {
    prompt('Invalid entry. Please enter an integer:');
    input2 = READLINE.question();
  }

  arithmetic(Number(input1), Number(input2));

  prompt('Would you like to try again? (y/n)');
  let again = READLINE.question();

  if (again !== 'y') {
    break;
  }
}