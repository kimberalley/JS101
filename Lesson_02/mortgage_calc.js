/**
 * 1. Create and load the JSON file for messages
 * 2. Load readline-sync
 * 3. Create function to format messages to begin with '=>'
 * 4. Create function invoking message from JSON file
 * 5. Create function for invalid number
 * 6. Issue Welcome message
 * 7. Question 1: What is the loan amount?
 * 8. Question 2: What is the Annual Percentage Rate (APR)?
 * 9. Question 3: What is the loan duration?
 * 10. Create function to calculate the monthly payment for the loan
 * 11. Log statement "Your monthly loan payment is $XXXX"
 */


const MESSAGES = require('./mortgage_messages.json');

const readline = require("readline-sync");

function prompt(question) {
  console.log(`=> ${question}`);
}

function JSON(message) {
  return MESSAGES[message];
}

function invalid(input) {
  return input.trimStart() === '' || Number.isNaN(Number(input));
}

prompt(JSON("welcome"));

prompt(JSON("loan"));
let loanAmt = readline.question();

while (invalid(loanAmt)) {
  prompt("Invalid Entry");
  loanAmt = readline.question();
}

prompt(JSON("APR"));
let interest = (readline.question())

while (invalid(interest)) {
  prompt("Invalid Entry");
  interest = (readline.question())
}

prompt(JSON("term"));
let loanTerm = readline.question();

while (invalid(loanTerm)) {
  prompt("Invalid Entry");
  loanTerm = readline.question();
}

let monthPmt = loanAmt * ((interest / 100 / 12) / (1 - Math.pow((1 + (interest / 100 / 12)), (-loanTerm))));

prompt(`Your monthly payment is $${monthPmt.toFixed(2)}.`);

prompt(JSON("goodbye"));