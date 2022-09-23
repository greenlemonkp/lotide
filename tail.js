const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤢🤢🤢 Assertion failed ${actual} !== ${expected}`);
  }
};

// eslint-disable-next-line func-style
function tail(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      //if the 'i' equals to first element, then ignore
      continue;
    } else {
      //if not on first element, retrurn remaining elements in the array
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];

console.log(tail(words));
