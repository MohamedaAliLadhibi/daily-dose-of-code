/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */




    var spiralTraversal = function(matrix){
      const res = []
      while (matrix.length > 0) {
        results.push(matrix.shift())
        if (matrix.length > 0) {
          for (let i = 0; i < matrix.length; i++) {
            const val = matrix[i].pop();
            if (val !== undefined) {
              results.push(val);
            }
          }
        }
        if (matrix.length > 0) {
          for (let i = matrix.length - 1; i > 0; i--) {
            const val = matrix[i].shift();
            if (val !== undefined) {
              results.push(val);
            }
          }
        }
        
      }
    return res
      // TODO: Implement me!
    };