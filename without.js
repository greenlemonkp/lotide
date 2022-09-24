const assertArraysEqual = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length &&
    firstArray.every((value, index) => value === secondArray[index])) {
    console.log(` Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(` Assertion failed ${firstArray} !== ${secondArray}`);
  }
};

// eslint-disable-next-line func-style
function eqArrays(firstArray, secondArray) {
  
  let isEqual = firstArray.length === secondArray.length &&
  firstArray.every((value, index) => value === secondArray[index]);
  console.log(isEqual);
}

// eslint-disable-next-line func-style
function without(source, itemsToRemove) {
  let result = [];

  for (let i = 0; i < source.length; i++) {
    result.push(source[i]);

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (itemsToRemove[j] === source[i]) {
        result.pop();
      }
      
    }

  }
  return result;
}
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);