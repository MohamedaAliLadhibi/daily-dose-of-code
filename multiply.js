// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
    // TODO: should return the product of x * y
    var product = 0;
    for (var i = 0; i < y; i++) {
        product += x;
    }
    return product
  };
 
  var divide = function(x, y) {
    // TODO: should return the dividend of x / y
    if (y === 0) {
      throw "Division by zero is undefined";
    }
    var quotient = 0;
    while (x >= y) {
        x -= y;
        quotient++;
        }
    var result = quotient + ".";
    var decimalPlaces = 0;
    while (decimalPlaces < 3) {
        x *= 10;
        if (x < y) {
            result += "0";
        } else {
            var digit = Math.floor(x / y);
            result += digit;
            x %= y;
        }
        decimalPlaces++;
    }
    return result;
  };
 
  var modulo = function(x, y) {
    // TODO: should return the remainder of x / y*
    while (x >= y) {
      x -= y;
     }
  return x;
  };
