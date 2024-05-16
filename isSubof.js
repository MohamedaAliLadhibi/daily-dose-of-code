/**
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) return false;
  
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  
  return true;
}

Array.prototype.isSubsetOf = function(arr) {
  const inputSet = new Set(arr.map(item => JSON.stringify(item)));

  return [...new Set(this.map(item => JSON.stringify(item)))].every(element => {
    return [...inputSet].some(item => deepEqual(JSON.parse(element), JSON.parse(item)));
  });
};

// Examples with objects and arrays
var c = [{ name: 'Alice' }, { name: 'Bob' }];
console.log(c.isSubsetOf([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }])); // true

var d = [[1, 2], [3, 4]];
console.log(d.isSubsetOf([[1, 2], [3, 4], [5, 6]])); // true
;

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
//text here 
