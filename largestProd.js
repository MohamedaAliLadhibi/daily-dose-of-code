/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function (array) {
  if (array.length < 3) {
    throw new Error("Array must have at least three elements");
  }

  // Sort the array in ascending order
  array.sort((a, b) => a - b);

  // Calculate the product of the three largest numbers
  let n = array.length;
  let product1 = array[n - 1] * array[n - 2] * array[n - 3];

  // Calculate the product of the two smallest numbers and the largest number
  let product2 = array[0] * array[1] * array[n - 1];

  // Return the maximum of the two products
  return Math.max(product1, product2);
};

// Example usage:
console.log(largestProductOfThree([2, 1, 3, 7])); // Should output 42
console.log(largestProductOfThree([-10, -10, 1, 3, 2])); // Should output 300

