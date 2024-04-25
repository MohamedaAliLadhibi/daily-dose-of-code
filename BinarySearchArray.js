/**
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 *
 * @function binarySearchArray
 * @param {Array<Any>} array
 * @param {Array<Any>} target
 * @return {Number}
 */

const  binarySearchArray = function (array, target) {
    const back = 0
    const front = array.length -1
    
    for (let i = 0; i < array.length; i++) {
        const midd = Math.floor((front + back)/2 )
        if (array[midd]=== target){
            return  midd
        }
        else if( array[midd]> target){
            front = midd -1
        }
        else{
            back = midd +1  
        }
    }
    return undefined
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = binarySearchArray;
// // // // // // // // // //
