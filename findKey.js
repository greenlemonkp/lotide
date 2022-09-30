const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤢🤢🤢 Assertion failed ${actual} !== ${expected}`);
  }
};

const findKey = function(names, callback) {
  const keys = Object.keys(names);
  //const keys2 = Object.values(names)

  for (let j of keys) {
    if (callback(names[j])) {
      return j;
    }

  }
};
  


  
//test code
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"