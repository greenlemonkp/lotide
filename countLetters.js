// eslint-disable-next-line func-style
function countLetters(str) {
  let newStr = str;
  let count = {};
  
  for (let i = 0; i < newStr.length; i++) {
    let ch = newStr[i];
    if (count[ch] > 0) {
      count[ch] ++;
    
    } else {

      count[ch] = 1;
    }
  }
  delete count[' '];
  return count;
}

console.log(countLetters("lighthouse in the house"))