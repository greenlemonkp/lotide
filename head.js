// eslint-disable-next-line func-style
const head = function (arr) { //returns first item in the array or returns undefined if not array or undefined
  if (arr.length === 0 || arr === undefined) {
    return undefined;
  }
  return arr[0];
};

console.log((head([5,6,7]), 5));
console.log((head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(undefined);
module.exports = head;
