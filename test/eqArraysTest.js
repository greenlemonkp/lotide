const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


console.log(eqArrays([1,2,3], [1,2,3]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
