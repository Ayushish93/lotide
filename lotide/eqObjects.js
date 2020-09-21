const assertEqual = function(actual, expected) {
    
    if(actual === expected){
        console.log(`✅ Assertion Passed:  ${actual}   ===  ${expected}`);
    }
    else{
        console.log(`❌ Assertion Failed: ${actual}  !==  ${expected}`);
    }
};
function eqArrays(actual, expected) {         // checking if two are are identicle
    
    for (let i = 0; i < actual.length; i++) {
        
        if(actual[i] !== expected[i]) {
            return false;
        }
    }
    return true;
}
// implementing function to compare objects
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


const ab = { a: "1", b: "2" }; 
 const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,ba),false); // => false
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 1], c: "1" };
//console.log(eqObjects(cd, dc));// => true

//eqObjects(cd, cd2); // => false
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, dc),false); // => false
