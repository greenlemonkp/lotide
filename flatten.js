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
function flatten(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]