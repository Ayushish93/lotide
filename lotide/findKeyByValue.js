// const assertEqual = function(actual, expected) {
    
//     if(actual === expected){
//         console.log(`✅ Assertion Passed:  ${actual}  " === "  ${expected}`);
//     }
//     else{
//         console.log(`❌ Assertion Failed: ${actual}  !==  ${expected}`);
//     }
// };
const findKeyByValue = function(userOb, valOfKey)
{
    
    for(let i of Object.keys(userOb))        // using for of loop with Objects.keys() method
    {
       
        if(userOb[i] === valOfKey)
        {
            return i;
        }
    }

}



// const bestTVShowsByGenre = { 
//     sci_fi: "The Expanse",
//     comedy: "Brooklyn Nine-Nine",
//     drama:  "The Wire"
//   };
  
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;

