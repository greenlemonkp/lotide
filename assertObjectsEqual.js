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
      
      return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
     if (eqObjects(actual, expected)) {
      console.log(`👍👍👍 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🤢🤢🤢 Assertion failed ${inspect(actual)} !== ${inspect(expected)}`);
    }

  };

  
  

// assertObjectsEqual({ a: '1', b: 2 },  { b: 2, a: '1' })

module.exports = assertObjectsEqual;



