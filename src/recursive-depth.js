import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let callCounter = 1;
    let counter = 1;
    if (arr.length == 0)
      return counter;
    const recursiveCounter = (e) => {
      e.forEach(el => {
        if (Array.isArray(el)) {
          callCounter++;
          recursiveCounter(el);
          if (callCounter > counter)
            counter++;
        }
      })
    } 
    
    arr.forEach(e => {
      if (Array.isArray(e)) {
        callCounter++;
        recursiveCounter(e);
        if (callCounter > counter)
            counter++;
        callCounter = 1;
      }
    });
    if (counter > 31)
      return 31;
    return counter; 
  }
}
