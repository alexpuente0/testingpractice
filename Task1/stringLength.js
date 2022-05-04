const stringLength = (string) => {
if (string.length <= 10 || string.length >= 1){
  return string.length
} else if (
  string.length < 1) {
throw new Error('No word entered') 
  } else {
throw new Error('Word is longer than 10 characters')  }
}

module.exports = stringLength;