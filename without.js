// eslint-disable-next-line func-style
function without(source, itemsToRemove) { //will return a subset of a given array, removing unwanted elements
  let result = [];

  for (let i = 0; i < source.length; i++) {
    result.push(source[i]);

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (itemsToRemove[j] === source[i]) {
        result.pop();
      }

    }

  }
  return result;
}

module.exports = without;
