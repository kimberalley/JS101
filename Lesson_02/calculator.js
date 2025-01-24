/**
 * 1. Ask the user for the first number
 * 2. Ask the user for the second number
 * 3. As the user for an operation to perform
 * 4. Perform the operation on the two numbers
 * 5. Print the result to the terminal
 */

const MESSAGES = require('./calculator_messages.json');

const LANGUAGE = 'en';

const readline = require("readline-sync");

function prompt(Message) {
  console.log(`=> ${Message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message]; 
}

prompt(messages('welcome', LANGUAGE));

prompt('What\'s the first number?');
let number01 = readline.question();

while (invalidNumber(number01)) {
  prompt(messages('invalid', LANGUAGE));
  number01 = readline.question();
}

prompt('What\'s the second number?');
let number02 = readline.question();

while (invalidNumber(number02)) {
  prompt('Hmm... that doesn\'t look like a valid number.');
  number02 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number01) + Number(number02);
    break;
  case '2':
    output = Number(number01) - Number(number02);
    break;
  case '3':
    output = Number(number01) * Number(number02);
    break;
  case '4':
    output = Number(number01) / Number(number02);
    break;
}

prompt(`The result is: ${output}`);

prompt('Would you like to perform another operation? (y/n)');
let answer = readline.question()

while (answer) {
  if (answer.trimStart()[0].toLowerCase() !== 'y')
  break;
}