/** PSEUDOCODE
 * Install readline-sync to same drive as code file
 * Initialize readline-sync 
 * Create prompt formatting function
 * Create an invalid response function that re-asks the question if
 * one of two criteria are true: 1) empty string or 2)NaN
 * Create function that asks for the input value
 * Trap user in a while loop if invalid response
 */

//* FOUNDATION
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

const invalid = (num) => {
  return (num.trimStart() === '' || Number.isNaN(Number(num)))
}

//* STRUCTURE
prompt('Enter an integer:');
let entry = readline.question();

while (invalid(entry)) {
  prompt('Invalid entry. Try again.');
  entry = readline.question();
}

co