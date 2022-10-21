const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  let result;
  for (let k of keys) {

    if (object[k] === value) {
      result = k;
      return result;
    }
  }
  
};

module.exports = findKeyByValue;
