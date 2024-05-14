/**
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items..
 *
 *
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/
var evenOccurrence = function(arr) {
    for (let i = 0; i < arr.length; i++) {
      var currentEle = arr[i]
      var FIn = arr.indexOf(currentEle)
      var LIn = arr.lastIndexOf(currentEle)
      if (FIn % 2=== 0 && FIn=== LIn) {
        return currentEle
      }
    }
    return undefined
  };
  