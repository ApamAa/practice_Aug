let numberofrolls = process.argv[2];

const diceRoller = function(times) {
  let numbers = [];
  for(let i = 1; i <= times; i++) {
    numbers.push(Math.floor(1 + Math.random()* 6));
  }
 return numbers.join(' ');
}

console.log(`Rolled ${numberofrolls} dice : ${(diceRoller(numberofrolls))}`);
