const assertEqual = require('./assertEqual');

const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  let result;
  for (let k of keys) {

    if (object[k] === value) {
      result = k;
    }
  }
  return result;
};

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);//

module.exports = findKeyByValue;
