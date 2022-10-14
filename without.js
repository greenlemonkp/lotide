function without(source, itemsToRemove) {
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
