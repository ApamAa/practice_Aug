const min = function(numbers) {
  let mini = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < mini) {
      mini = numbers[i];
    }
  }
  return mini; 
};

console.log(min([-1,6,1,8]));