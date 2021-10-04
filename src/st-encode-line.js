import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let strArr = str.split("");
  let result = "";
  let counter = 1;
  for (let i = 1; i <= strArr.length; i++) { 
    if (strArr[i] == strArr[i-1]) {
      counter++;
    } else {
      if (counter > 1) {
      result = result + counter + strArr[i-1];
      }
      else {
        result = result + strArr[i-1];
      }
      counter = 1;
    }
  }
  return result;
}
