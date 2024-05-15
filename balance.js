/**
 * Balanced Parenthesis
 * Given a string, return true if it contains balanced parentheses ().
 * isBalanced("(x + y) - (4)")	// true
 * isBalanced("(((10 ) ()) ((?)(:)))")	// true
 * isBalanced("(50)(")	// false
 * isBalanced("") //	true
 *
 * @function isBalanced
 * @param {String} str
 * @return {Boolean}
*/
const isBalanced = function (str) {

    var conterr = 0
    for (let char of str){
        if (char === '('){
            conterr++
        }
        else if(char === ')'){
            conterr--
            if (conterr < 0 ){
                return false
            }
        }
    }
    return true
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = isBalanced;
// // // // // // // // // //
