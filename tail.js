// eslint-disable-next-line func-style
function tail(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      //if the 'i' equals to first element, then ignore
      continue;
    } else {
      //if not on first element, retrurn remaining elements in the array
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = tail;
