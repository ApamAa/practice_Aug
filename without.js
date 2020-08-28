const assertArraysEqual = require('./assertArraysEqual');

const without = function(source,itemsToRemove){
  let output = [];
  
      for (var i =0; i< source.length;i++){
          let isunique = true;
          for (var j =0 ; j < itemsToRemove.length; j ++){
              if (source[i] === itemsToRemove[j])
              isunique = false;
          }
          if (isunique){
              output.push(source[i]);
          }
      }
  return output;
  };

  assertArraysEqual(without([1, 2, 3], [1]),[2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1",'2']); 
module.exports = without;