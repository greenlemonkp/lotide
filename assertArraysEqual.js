const assertArraysEqual = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length &&
    firstArray.every((value, index) => value === secondArray[index])) {
    console.log(`👍👍👍 Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🤢🤢🤢 Assertion failed ${firstArray} !== ${secondArray}`);
  }
};


module.exports = assertArraysEqual;
