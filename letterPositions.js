const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      let newKey = sentence[i]; //iterate each element
      if (results[newKey]) { //if newKey is already present, push position into it
        results[newKey].push(i);
      } else {
        results[newKey] = [i]; //newKey is element in the string
      }
    }
  }
  return results;
};

module.exports = letterPositions;

