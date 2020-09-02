const asserEqual = require('./assertEqual');
const countLetters = function(allLetters) {
  let result = {};
  for(let count of allLetters) {
    if(result[count]) {
      result[count] += 1; 
    } else {
      result[count] = 1;
    }
  }
  return result;
} 

const text = "apamaJamshidi";
const results = countLetters(text);
asserEqual(results["a"], 4);
asserEqual(results["f"], undefined);
asserEqual(results["m"], 2);
console.log(countLetters('apamajamshidifarzandeiraj'))