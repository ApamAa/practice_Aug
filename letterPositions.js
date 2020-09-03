const assertArraysEqual = require('./assertArraysEqual');



const letterPositions = function(sentence) {
  let results = {};
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== ' ') {
      if(results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
}
// const letterPositions = function(sentence) {
//   const results = {};
//   for (let i = 0; i < sentence.length; i++) {
//     let character = sentence[i];
//     if (character !== " ") {
//       if (results[character]) {
//         results[character].push(i);
//       } else {
//         results[character] = [i];
//       }
//     }
//   }
//   return results;
// };
console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);


assertArraysEqual(letterPositions("hello").e, [1]);
