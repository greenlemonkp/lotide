const middle = function(array) {

  const length = array.length;
  const middleIndex = Math.floor(length / 2);
 
  if (length === 0 || length === 1) {
    return [];
  }

  if (length % 2 === 0) {
    const left = array[middleIndex] - 1;
    const right = array[middleIndex];
    return [left, right];
  } else {
    
    return [array[middleIndex]];
  }
  
};
  
//TEST CODE
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]