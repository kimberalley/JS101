//* PSEUDOCODE
/**
 * PRECON
 * Require readline-sync
 * Create prompt function for message formatting
 * Create invalid function in case an empty string or NaN is entered
 * EXECUTION
 * Welcome message
 * Question 1 - what is the bill amount?
 * While loop with invalid function
 * Question 2 - How much tip would you like to include?
 * While loop with invalid function
 * Save return value in a tip variable
 * Final message stating tip amount
 */

//* PRECON
const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

const invalid = response => {
  return response.trimStart() === '' || Number.isNaN(Number(response));
}

//* EXECUTION
prompt('Welcome to Tip Calculator!');

prompt('What is the bill amount?');
let billAmount = READLINE.question();

while (invalid(billAmount)) {
  prompt('Invalid response.  Try again.');
  billAmount = READLINE.question();
}

prompt('Enter tip percentage.');
let tipPercent = READLINE.question();

while (invalid(tipPercent)) {
  prompt('Invalid response.  Try again.');
  tipPercent = READLINE.question();
}

let tipAmount = billAmount * (tipPercent/100);

prompt(`The tip amount is $${tipAmount.toFixed(2)}.`);