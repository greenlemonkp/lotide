const map = function (array, callback) { //return a new array based on the results of the callback function

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

module.exports = map;
