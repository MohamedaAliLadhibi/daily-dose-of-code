/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 * @function deepEquals
 * @param {Object<any>} apple - first object to compare
 * @param {Object<any>} orange - second object to compare with the first object
*  @return {boolean}
 */
var deepEquals = function(apple, orange) {
    const appleK = Object.keys(apple)
    const orangeK = Object.keys(orange)
    
    if(appleK !== orangeK){return false}
    for (var key of keysApple) {
        if(!deepEquals(apple[key],orange[key])){
            return false
        }
    }
return true

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = deepEquals;
// // // // // // // // // // 
