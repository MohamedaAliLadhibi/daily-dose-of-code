/**
 * 
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().* 
 * 
 * 
 * example usage:
 * var anagrams = allAnagrams('abc');  
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 *
 * @function allAnagrams
 * @param {String} string
 * @return {Array<String>}
 */
var allAnagrams = function(string) {
  // Your code here.
  var result = []
  for (let i = 0; i < string.length; i++) {
    for(let j = 0; i<string.length; j++){
      for(let k =0; k<string.length; k++){
        result.push(string)
      //or we make another function to create ll anagams b recursion 

      }
    }
  }
  return result
};
