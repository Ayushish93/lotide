
let assertEqual = require('./assertEqual');

  const findKey = (data,fun) => {             
    for(let i in data) {
       if(fun(data[i]))
        return i;
    }
  }

  const data = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }
const result = findKey(data, x => x.stars === 2);
console.log(assertEqual(result,'elBulli'));

