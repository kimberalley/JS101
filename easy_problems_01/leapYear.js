//* PSEUDOCODE
//**
// Require readline-sync
// Create prompt function for message formatting
// Create invalid function for empty strings or NaN
// Create a function that determines whether a function is divisible by 4 & 400 return true
// If the function is divisible by 100 then return false
// EXECUTION
// Welcome message
// Input a year
// Invoke function */

//* PRE-EXECUTION
const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalid (input) {
  return input === '' || Number.isNaN(Number(input));
}

function leapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
}

//* EXECUTION
while (true) {
  prompt('Welcome to the Leap Year program!');

  prompt('Please enter a year:');
  let yearInQuestion = READLINE.question();

  while (invalid(yearInQuestion)) {
    console.log('Hmm... not a valid entry.  Please try again.');
    yearInQuestion = READLINE.question();
  }

  if (leapYear(yearInQuestion)) {
    console.log("Yes, it's a leap year!");
  } else {
    console.log("Nope, not a leap year.");
  }

  prompt('Would you like to enter another year? (y or n)');
  let again = READLINE.question();

  if (again !== 'y') {
    break;
  }
}