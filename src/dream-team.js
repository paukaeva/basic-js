const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
  
  const arrOfStrings = members.filter(el => {
		return typeof el === 'string'
  })

  
  if (arrOfStrings.length === 0) return false
  
	const result = arrOfStrings.map(word => {
  	return word.trim()[0]
  })
  
  return result.sort().join('').toUpperCase()
}

module.exports = {
  createDreamTeam
};
