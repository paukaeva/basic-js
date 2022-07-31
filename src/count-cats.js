const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(mat) {
  let ears = [];
  let rowCounter = mat.length 
  let columnCounter = (mat[0] || []).length 
  if (columnCounter.length > 0) return 0
  for (let i = 0; i < columnCounter; i++) {
  	for (let t = 0; t < rowCounter; t++) {
    	if (mat[t][i] === '^^') {
      	ears.push(i);
      }
    }
  }  
  return ears.length
}

module.exports = {
  countCats
};
