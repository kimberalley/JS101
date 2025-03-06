//* PSEUDOCODE
/**
 * //*PRE-EXECUTION
 * Require readline-sync
 * Create prompt function for message formatting
 * Create invalid function for invalid entry
 * Create function that takes two numbers as parameters
 * 1. Return num1 * num2
 * //* EXECUTION
 * Welcome message
 * Intake input
 * While loop that traps until valid response
 * Invoke two numbers function
 * Prompt message issuing result
 * Prompt again message
 * If again, then loop in while loop
 */

//* PRE-EXECUTION
const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalid(input) {
  return input === '' || Number.isNaN(Number(input));
}

function twoNumbers(num1, num2) {
  return num1 * num2;
}

//* EXECUTION
while (true) {
  prompt('Welcome to the Multiplier!');

  prompt('Please enter the first number:');
  let firstNum = READLINE.question();

  while (invalid(firstNum)) {
    prompt('Please enter a valid number:');
    firstNum = READLINE.question();
  }

  prompt('Please enter the second number:');
  let secondNum = READLINE.question();

  while (invalid(secondNum)) {
    prompt('Please enter a valid number:');
    secondNum = READLINE.question();
  }

  let result = twoNumbers(firstNum, secondNum);

  prompt(`The result is ${result}.`);

  prompt('Would you like to try again? (y/n)');
  let again = READLINE.question();

  if (again !== 'y') {
    break;
  }
}