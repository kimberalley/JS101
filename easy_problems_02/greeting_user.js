//* PSEUDOCODE
/**
 * //* PRE-EXECUTION
 * Require readline-sync
 * Create prompt function for message formatting
 * Create invalid function for empty strings
 * Create greeting function that takes input
 * 1. If input only has a name, then print greeting
 * 2. If input includes "!" at the end of the name, then print a yelling response
 * //* EXECUTION
 * Welcome message
 * Request input
 * While loop that traps user until valid reponse
 * Invoke greeting function
 * Prompt again message
 * While loop if !== 'yes'
 */

const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalid(input) {
  return input === '';
}

function greeting(name) {
  if (name.includes('!')) {
    console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING?!`);
  } else {
    console.log(`Hello, ${name}`);
  }
}

//* EXECUTION
while (true) {
  prompt('Welcome to The Name Game!');

  prompt('What is your name?');
  let nameInput = READLINE.question();

  while (invalid(nameInput)) {
    prompt('Hmm... I didn\'t catch that. What is your name again?');
    nameInput = READLINE.question();
  }

  greeting(nameInput);

  prompt('Would you like to enter another name? (y/n)');
  let again = READLINE.question();

  if (again.toLowerCase().trimStart() !== 'y') {
    break;
  }
}