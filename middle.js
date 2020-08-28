const assertArraysEqual = require('./assertArraysEqual');


const middle = function(Arr) {
  let midIndex =Math.floor([Arr.length/2]);
  let middArray = [];
  if(Arr.length <= 2) {
    return middArray;
  } else {
    if(Arr.length % 2 !== 0) {
      middArray =Arr[midIndex];
    } else {
    
      middArray = [Arr[midIndex-1],Arr[midIndex]]

      }
    
  }
  return middArray;
}

assertArraysEqual(middle([1,2]), []);
