const eqArrays = function(firstArr, secondArr) {
  let farz = true;
  if(firstArr.length !==  secondArr.length) {
    farz = false;
  } else {
  for (let i = 0; i < firstArr.length; i ++) {
    if(firstArr[i] !== secondArr[i]) {
      farz =false;  
      }
    }
  }
  return farz;
};


module.exports = eqArrays;