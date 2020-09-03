const asserEqual = require('./assertEqual');


const findKeyByValue = function(object,value) {
  let keys = Object.keys(object);
  
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};







const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

asserEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
asserEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);