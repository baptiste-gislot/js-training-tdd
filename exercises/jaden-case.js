'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadenCase = str => {
  let jadenStr = [];
  const arr = str.split(' ');

  for (i = 0; i < arr.length; i++) {
    let word = arr[i];
    let capitilizedWord = word[0].toUpperCase() + word.split(0)
    jadenStr.push(capitilizedWord);
  }

  return jadenStr.join(' ');
}

//* Begin of tests
const assert = require('assert');

assert.fail('You must write your own tests');
// End of tests */
