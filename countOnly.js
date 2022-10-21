// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) { //returns count(number) of itemsToCount in allItems
  let result = {};
  for (let items in itemsToCount) {
    // eslint-disable-next-line no-prototype-builtins, no-undef
    result[items] = 0;
    for (let name of allItems) {
      if (items === name && itemsToCount[items] === true) {
        result[items] += 1;
      }
    }
    if (result[items] <= 0) {
      result[items] = undefined;
    }
  }
  return result;
};
  


module.exports = countOnly;
