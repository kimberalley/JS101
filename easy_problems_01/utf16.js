//* PSEUDOCODE
/**
 * Require readline-sync
 * Create prompt function for message formatting
 * Create invalid function for invalid entries
 * Create a function to do the following:
 * 1. Use split to return an array of characters in the passed string
 * 2. Use a for loop to assign a UTF-16 value for every character in the string
 * 3. Use the += operator assignment to sum up the UTF-16 value for each character
 * EXECUTION
 * Welcome message
 * While loop using invalid function 
 * Print the result
 * Ask if would like to input another string
 * While loop with break in execution if answer is "n."
 */

//* PRE-EXECUTION
const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalid(input) {
  return input === '';
}

function utf16(string) {
  let array = string.split('');
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i].charCodeAt(0); // Fix: use 0 instead of i
  }
  console.log(`The UTF-16 string value of your entry is ${sum}.`);
  debugger;
}

//* EXECUTION
while (true) {
  prompt('Welcome to UTF-16 Calculator!');

  prompt('Please enter any string.');
  let stringInput = READLINE.question();

  while (invalid(stringInput)) {
    prompt('Please enter any letter, word, or sentence.');
    stringInput = READLINE.question();
  }

  utf16(stringInput);

  prompt('Would you like to enter another string? (y/n)');
  let again = READLINE.question();

  if (again !== 'y') {
    break;
  }
}