const assertEqual = function(actual, expected) {
    
    if(actual === expected){
        console.log(`✅Assertion Passed:  ${actual}   ===   ${expected}`);
    }
    else{
        console.log(`❌Assertion Failed: ${actual}  !==  ${expected}`);
    }
};
const data = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }
  const findKey = (data,fun) =>
  {
    for(let i in data) {
       if(fun(data[i]))
        return i;
    }
  }

const result = findKey(data, x => x.stars === 2);
console.log(assertEqual(result,'elBulli'));