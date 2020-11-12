const sortArrayByParity = function(A) {
  const odd = []; even = [];
  for(let val of A) {
    if (val % 2 === 0) {
      even.push(val)
    } else {
      odd.push(val)
    }
  }
  return [...even, ...odd]
};
console.log(sortArrayByParity([3,1,2,4]));