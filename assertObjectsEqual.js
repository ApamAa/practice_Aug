const eqObjects = require ('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual,expected)) {
    
        console.log(`⚡️⚡️ Assertion Failed: ${actual} !==  ${expected}`);
    }else {
        console.log(`✅✅ Assertion Passed: ${actual} ===  ${expected}`);
    }
  };
  module.exports = assertObjectsEqual

  const obj = {a: '1', b: 2};
  const obj2 = {b: 2, a: '1'};
  
  assertObjectsEqual(obj,obj2);
  module.exports = assertObjectsEqual;