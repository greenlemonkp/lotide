const middle = function(array) {
//will take in an array and return the middle-most element(s) of the given array.
  const length = array.length;
  const middleIndex = Math.floor(length / 2);
 
  if (length === 1 || length === 2) {
    return [];
  }

  if (length % 2 === 0) {
    const left = array[middleIndex] - 1;
    console.log(left);
    const right = array[middleIndex];
    return [left, right];
  } else {
    
    return [array[middleIndex]];
  }
  
};
  
module.exports = middle;
