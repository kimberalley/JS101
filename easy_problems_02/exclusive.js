//* PSEUDOCODE
/**
 * We only want one of two conditions to be truthy, BUT NOT BOTH
 * Create an if statement that states that if both variables are true, then return false
 */

function xor(param1, param2) {
  if (param1 && param2) {
    return false;
  } else if (param1 || param2) {
    return true;
  } else {
    return false
  }
}

console.log(xor(0, false));