//In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
// 1p piece
// 2p piece
// 5p piece
// 10p piece
// 20p piece
// 50p piece
// 1 euro (100p)
// 2 euro (200p)
// It is possible to make £2 in the following way:
// 1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
// How many different ways can £2 be made using any number of coins?
// example usage of `makeChange`:
// // aka, there's only one way to make 1p. that's with a single 1p piece
// makeChange(1) === 1
// // aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
// makeChange(2) === 2
// */

var makeChange = function(total) {
    // Define the coin denominations in pence
    const coins = [1, 2, 5, 10, 20, 50, 100, 200];
    
    // Initialize an array to store the number of ways to make each amount
    const ways = Array(total + 1).fill(0);
    
    // There is one way to make 0 amount (using no coins)
    ways[0] = 1;
    
    // Update the ways array for each coin
    for (const coin of coins) {
        for (let amount = coin; amount <= total; amount++) {
            ways[amount] += ways[amount - coin];
        }
    }
    
    // The number of ways to make the specified total amount
    return ways[total];
};

// Example usage
console.log(makeChange(1));  // Output: 1
console.log(makeChange(2));  // Output: 2
console.log(makeChange(200)); // Output: Number of ways to make £2 (200p)

