import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  
  if (!Array.isArray(members))
    return false;
  let strArr = [];
  let result = "";
  members.forEach(e => {
    if (typeof e === "string") {
      e = e.trim().toUpperCase();
      strArr.push(e);
    }
  })
    strArr.sort();
    strArr.forEach(e => {
      result = result + e.substr(0, 1);
    })
  return result;
}
