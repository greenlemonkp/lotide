const findKey = function(names, callback) { //scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined
  const keys = Object.keys(names);
  

  for (let j of keys) {
    if (callback(names[j])) {
      return j;
    }

  }
};
  

module.exports = findKey;
