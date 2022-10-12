const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays')


eqArrays([1,2,3], [1,2,3]);
eqArrays(["1", "2", "3"], ["1", "2", "3"])
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
