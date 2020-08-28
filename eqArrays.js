const eqArray = function(arr1, arr2) {
  let farz = true;
  if(arr1.length !==  arr2.length) {
    farz = false;
  } else {
  for (let i = 0; i < arr1.length; i ++) {
    if(arr1[i] !== arr2[i]) {
      farz =false;  
      }
    }
  }
  return farz;
};

console.log(eqArray([2,3,6], [2,3,6]));