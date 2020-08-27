const joinList = function(conceptList) {
  newList = conceptList[0];
  if(conceptList.length >= 1) {
  for (let i = 1; i < conceptList.length; i++) {
      newList += `,  ${conceptList[i]}`;
    } 
   } else {
      newList = '';
    }
  return newList;
}

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
