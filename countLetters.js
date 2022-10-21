// eslint-disable-next-line func-style
function countLetters(str) { //counts number of letters in the string
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

module.exports = countLetters;
