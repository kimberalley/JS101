//* PSEUDOCODE
/**
 * Require readline-sync
 * Create prompt function for message formatting
 * Create invalid function for empty string responses or NaN
 * Create multiple function that takes a value as an argument and identifies all the multiples of 3 and 5
 * 1. Initialize a variable that is equal to 0 (since we are adding to it)
 * 2. Create a for loop that identifies the next value that is divisible evenly by 3 or 5
 * 3. Use a mathematical assignment operator to increment the value
 * EXECUTION
 * Welcome message
 * Input
 * Save input to variable
 * Run function against variable
 * Log result to console
 */

//* PRE-EXECUTION
while (true) {
  const READLINE = require('readline-sync');

  function prompt(msg) {
    console.log(`=> ${msg}`);
  }

  function invalid(entry) {
    return entry === '' || Number.isNaN(Number(entry.trimStart()));
  }

  function multiple(input) {
    let sum = 0;
    for (let num = 1; num <= input; num += 1) {
      if (num % 3 === 0 || num % 5 === 0) {
        sum += num;
      }
    } return sum
  }

  //* EXECUTION
  prompt('Welcome to \'Multiples of 3 & 5!\'');

  prompt('Please enter a positive integer');
  let response = READLINE.question();

  while (invalid(response.trimStart())) {
    console.log('Hmm... please enter a valid integer.');
    response = READLINE.question();
  }

  console.log(`The sum of all multiples of 3 & 5 from 1 to ${response} is ${multiple(response)}.`);

  prompt('Would you like to enter another number? (y or n)');
  let again = READLINE.question();

  if(again !== 'y') {
    break;
  }
}