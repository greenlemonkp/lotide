const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  for (let k of keys) {

    if (object[k] === value) {
      
      return k;
    }
  }
  
};

module.exports = findKeyByValue;
