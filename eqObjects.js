const assertEqual = require('./assertEqual');


const eqArrays = require('./eqArrays');


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!!!
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

module.exports = eqObjects;
