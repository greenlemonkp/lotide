const eqObjects = require('./eqObjects');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤢🤢🤢 Assertion failed ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

module.exports = assertObjectsEqual;



