//function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤢🤢🤢 Assertion failed ${actual} !== ${expected}`);
  }
};

function eqArrays (firstArray, secondArray) {
  
  let isEqual = firstArray.length === secondArray.length&&
  firstArray.every((value, index) => value === secondArray[index]);
  console.log(isEqual);
}

eqArrays([1,2,3], [1,2,3]);
eqArrays(["1", "2", "3"], ["1", "2", "3"])
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS


