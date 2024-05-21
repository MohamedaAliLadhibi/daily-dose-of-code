/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 * @function toFraction
 * @param {Number} number
 * @return {String}
 */

const findCommonFactor = (a, b) => (b === 0 ? a : findCommonFactor(b, a % b));

const toFraction = function (number) {

};


