
// eslint-disable-next-line func-style
let eqArrays = function(firstArray, secondArray) {
  
  let isEqual = firstArray.length === secondArray.length&&
  firstArray.every((value, index) => value === secondArray[index]);
  // console.log(isEqual);
}



module.exports = eqArrays;
