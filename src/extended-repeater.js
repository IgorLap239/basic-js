import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let newStr = "";
  if (str == null ) {
    newStr = "null";
  } else if (str == undefined) {
    newStr = "undefined";
  } else {
      newStr = str;
  }
  let addStr = "";
  let resStr = "";
  let counter = 1;
  let sepStr = "+";
  let addCount = 1;
  let addSep = "|";
  for (let key in options) {
    if (key === "repeatTimes") {
      counter = options[key];
    }
    if (key == "separator") {
      sepStr = options[key];
    }
    if (key == "addition") {
      if (options[key] == null ) {
        addStr = "null";
      } else if (options[key] == undefined) {
        addStr = "undefined";
      } else {
        addStr = options[key];
      }
    }
    if (key == "additionRepeatTimes") {
      addCount = options[key];
    }
    if (key == "additionSeparator") {
      addSep = options[key];
    }
  }
  let resAddArr = [];
  resAddArr.push(addStr);
  resAddArr.push(addSep);
  
  let resAddStr = resAddArr.join("").repeat(addCount);
  resAddStr = resAddStr.substr(0, resAddStr.length - addSep.length);

  let resStrArr = [];
  resStrArr.push(newStr);
  resStrArr.push(resAddStr);
  resStrArr.push(sepStr);

  resStr = resStrArr.join("").repeat(counter);
  resStr = resStr.substr(0, resStr.length - sepStr.length);
  return resStr;
}
