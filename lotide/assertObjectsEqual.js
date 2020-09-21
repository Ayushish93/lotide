const eqObjects = function(object1, object2) {
    let key1 = Object.keys(object1);         // getting keys
    let key2 = Object.keys(object2);
    if(key1.length !== key2.length) {          // checking object length
        return false;
    }
    
        for(let i of  key1)
        {
            if(Array.isArray(object1[i]) === true && Array.isArray(object2[i]) === true) {    // checking if key is object
                
                   let isarr = eqArrays(object1[i],object2[i]);        // calling eqArrays to compare arrays
                   console.log(isarr);
                   if(isarr === false) {
                         return false;
                   }
            }
            else if(object1[i] !== object2[i]) {      
                    return false;
            }
            
        }
        return true;
    
    
};

const assertObjectsEqual = function(obj1, obj2) {
    // Implement me!
    const inspect = require('util').inspect;     // importing liabrarie
    const check = eqObjects(obj1,obj2);
    if(check === true) {
        console.log(`✅Assertion Passed:  ${inspect(obj1)} ===  ${inspect(obj2)}`);
    }
    else {
        console.log(`❌Assertion Failed:  ${inspect(obj1)}  !==  ${inspect(obj2)}`);
    }
  };
  const ab = { a: "1", b: "2" }; 
  const ba = { b: "2", a: "11" };
  console.log(assertObjectsEqual(ab,ba));
  