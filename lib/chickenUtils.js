'use strict'

const instructions = ['axe', 'chicken', 'add', 'fox', 'rooster', 'compare', 'pick', 'peck', 'fr', 'BBQ']

/**
 * Given the number of chickens on the line, returns the corresponding 
 * @param {Number} chickenCount   The number of chickens present on that line
 */
function getInstruction (chickenCount) {
  // Return the nice name of the corresponding instruction
  if (chickenCount < 10) return instructions[chickenCount]

  // The special "n" chicken instruction
  return `chickens + ${chickenCount - 10}`
}

module.exports = {
  getInstruction
}
