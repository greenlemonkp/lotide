const findKey = function(names, callback) {
  const keys = Object.keys(names);
  //const keys2 = Object.values(names)

  for (let j of keys) {
    if (callback(names[j])) {
      return j;
    }

  }
};
  

module.exports = findKey;
