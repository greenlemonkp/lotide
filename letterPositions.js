const assertArraysEqual = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length &&
    firstArray.every((value, index) => value === secondArray[index])) {
    console.log(`👍👍👍 Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🤢🤢🤢 Assertion failed ${firstArray} !== ${secondArray}`);
  }
};

// eslint-disable-next-line func-style
function eqArrays (firstArray, secondArray) {
  
  let isEqual = firstArray.length === secondArray.length &&
  firstArray.every((value, index) => value === secondArray[index]);
  console.log(isEqual);
}

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let position = 0; position < sentence.length; position++) {
      if (sentence[position] !== ' ') {
      let newKey = sentence[position]; //iterate each element
       if(results[newKey]) { //if newKey is already present, push position into it
        results[newKey].push(position)
      } else {
        results[newKey] = [position]; //newKey is element in the string 
      }
    }
  } 
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
