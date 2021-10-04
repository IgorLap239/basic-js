import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let abcArr1 = new Array(26).fill(0);
  let abcArr2 = new Array(26).fill(0);
 
  let counter = 0,
      i = 0;
 
  for (i = 0; i < s1.length; i++) {
    abcArr1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  for (i = 0; i < s2.length; i++)
    abcArr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  for (i = 0; i < 26; i++)
    counter += (Math.min(abcArr1[i], abcArr2[i]));
  return counter;
}

