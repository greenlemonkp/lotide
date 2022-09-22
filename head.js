//function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤢🤢🤢 Assertion failed ${actual} !== ${expected}`);
  }
};

// eslint-disable-next-line func-style
function head (arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}


//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");