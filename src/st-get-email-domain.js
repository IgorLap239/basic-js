import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let str = email.match(/@\S*/);
  let resultArr = str[0].split("@");
  let result = resultArr[resultArr.length - 1];
  return result
}
