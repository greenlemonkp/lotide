const assertArraysEqual = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length &&
    firstArray.every((value, index) => value === secondArray[index])) {
    console.log(`👍👍👍 Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🤢🤢🤢 Assertion failed ${firstArray} !== ${secondArray}`);
  }
};

function eqArrays (firstArray, secondArray) {
  
  let isEqual = firstArray.length === secondArray.length&&
  firstArray.every((value, index) => value === secondArray[index]);
  console.log(isEqual);
}



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
 
  const results = [];
  for (let item of array) {
    results.push(callback(item))
      }
  return results;
  
}
const map1 = map(words, word => word[0]);



console.log(assertArraysEqual(map1));