//* PSEUDOCODE
/**
 * Require readline-sync
 * Create prompt function for message formatting
 * Create invalid function for invalid entries
 * Create function for leap years on and after 1752
 * 1. if statement that validates if year is divisible by 400; return true
 * 2  else if statement that validates if year is divisibly by 100; return false
 * 3. else if statement that validates if year is divisible by 4; returns true
 * Create function for leap years prior to 1752
 * 1. if statement that validates if year is divisible by 4; returns true
 * EXECUTION
 * Welcome message
 * Readline-sync asking for the year
 * if statement, that takes the input and determines if less than 1752 or >= 1752
 * If the former, use function 2
 * If the latter, use function 1
 * Ask if want to check another year
 * Trap in while loop
 */

//* PRE-EXECUTION
while (true) {
  const READLINE = require('readline-sync');

  function prompt(msg) {
    console.log(`=> ${msg}`);
  }

  function invalid(input) {
    return input === '' || Number.isNaN(Number(input.trimStart()));
  }

  const after1752 = inputAfter => {
    if (inputAfter % 400 === 0) {
      return true;
    } else if (inputAfter % 100 === 0) {
      return false;
    } else if (inputAfter % 4 === 0) {
      return true;
    }
  }

  const before1752 = inputBefore => {
    if (inputBefore % 4 === 0) {
      return true;
    }
  }

  const beforeOrAfter = year => {
    if (year < 1752) {
      return before1752(year);
    } else {
      return after1752(year);
    }
  }

  //* EXECUTION
  prompt('Welcome to Leap Year Finder!');

  prompt('Please enter a year:');
  let entry = READLINE.question();

  while (invalid(entry)) {
    console.log('Hmm... please enter a valid year.');
    entry = READLINE.question();
  }

  if (beforeOrAfter(entry)) {
    console.log(`Yes! The year ${entry} is/was a leap year!`);
  } else {
    console.log('Nope, not a leap year.');
  }

  prompt('Want to check another year? (y or n)');
  let again = READLINE.question();

  if (again !== 'y') {
    break;
  }
}