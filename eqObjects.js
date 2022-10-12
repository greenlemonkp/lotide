const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤢🤢🤢 Assertion failed ${actual} !== ${expected}`);
  }
};

function eqArrays (firstArray, secondArray) {
  
  const isEqual = firstArray.length === secondArray.length &&
  firstArray.every((value, index) => value === secondArray[index]);
  return isEqual;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  
  if (key1.length !== key2.length) {
    return false;
  }
  
  for (let k of key1) {
    if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
      const isArrayValuesEqual =  eqArrays(object1[k], object2[k])

      if (! isArrayValuesEqual) return false;
      continue
    } 
    if (object1[k] !== object2[k]) {
      console.log('hi', k);
      
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false