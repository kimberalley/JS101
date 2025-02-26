//**
// PSEUDOCODE
// PRE-EXECUTION
// Require readline-sync
// Create prompt function for message formatting
// Create a function that takes two words as arguments and compares the two lengths using an if statement
// EXECUTION
// Prompt input for first string; save as variable 1
// Prompt input for second string; save as variable 2 */

//* PRE-EXECUTION
const READLINE = require("readline-sync");

let prompt = msg => {
  console.log(`=> ${msg}`);
}

function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    console.log(str1 + str2 +str1);
  } else {
    console.log(str2 + str1 +str2);
  }
}

//* EXECUTION
prompt('Enter your first word:');
let word1 = READLINE.question();

prompt('Enter your second word:');
let word2 = READLINE.question();

shortLongShort(word1, word2);