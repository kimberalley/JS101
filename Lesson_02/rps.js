//* PSEUDOCODE
/** 1. Require readline-sync
/ 2. Require rps_messages.json file to access messages
/ 3. Create constant for the choices
/ 4. Create the prompt format function
/ 5. Create an invalid response function
/ 6. Create the issue json message function
/ 7. Issue the welcome message
/ 8. Issue the selection message
/ 9. Create a while loop that traps user until a valid response
/ 10. Create a random number generator that aligns with the choice constant index
/ 11. Issue selection prompt
*/

//* FOUNDATION
const readline = require('readline-sync');
const MESSAGES_JSON = require('./rps_messages.json');
const RPS_CHOICES = ['rock', 'paper', 'scissors'];
const PLAY_AGAIN_CHOICES = ['y', 'n'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function messages(msgTitle) {
  return MESSAGES_JSON[msgTitle];
}

function invalid(response, choicesArray) {
  return response.trimStart() === '' || (!choicesArray.includes(response.toLowerCase()));
}

//* STRUCTURE
while (true) {
  prompt(messages('welcome'));

  prompt(messages('selection'));
  let mySelection = readline.question();

  while (invalid(mySelection, RPS_CHOICES)) {
    prompt(messages('invalid'));
    mySelection = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * RPS_CHOICES.length);
  let computerSelection = RPS_CHOICES[randomIndex];

  prompt(`You selected ${mySelection}, the computer selected ${computerSelection}.`)

  if ((mySelection === 'rock' && computerSelection === 'scissors') ||
      (mySelection === 'paper' && computerSelection === 'rock') ||
      (mySelection === 'scissors' && computerSelection === 'paper')) {
        prompt(messages('youWin'));
  } else if (mySelection === computerSelection) {
    prompt(messages('tie'));
  } else {
    prompt(messages('youLose'));
  }

  prompt(messages('playAgain'));
  let again = readline.question();

  while(invalid(again, PLAY_AGAIN_CHOICES)) {
    prompt(messages('invalid'));
    again = readline.question();
  }

  if (again !== 'y') {
    break;
  }
}