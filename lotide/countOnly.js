// const assertEqual = function(actual, expected) {
    
//     if(actual === expected){
//         console.log(`✅Assertion Passed:  ${actual}   ===   ${expected}`);
//     }
//     else{
//         console.log(`❌ Assertion Failed: ${actual}  !==  ${expected}`);
//     }
// };
const countOnly = function(allItems, itemsToCount) {
    let returnOb = {};   // creating empty object to store result
    for(let items in itemsToCount)
    {
        if(itemsToCount[items] === true)        // checking if key is equal to 0
        {
            returnOb[items] = 0;                 // add key to returnobj
            for(let i = 0; i < allItems.length;i++)       // looping to array allItems
            {
                if(allItems[i] === items)          // checking if key is in array
                {
                    returnOb[items] += 1;        // incrementing key value by 1;
                }
                
            }
        }
    }
    for(let i in returnOb)      // deleting key that have 0  
    {
        if(returnOb[i] === 0)
            delete returnOb[i];
    }
    return returnOb;
    
}


// const firstNames = [
//     "Karl",
//     "Salima",
//     "Agouhanna",
//     "Fang",
//     "Kavith",
//     "Jason",
//     "Salima",
//     "Fang",
//     "Joe"
//   ];
  
//   const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  //console.log(result1);
//   assertEqual(result1['Jason'], 1);
//   assertEqual(result1["Karima"], undefined);
//   assertEqual(result1["Fang"], 2);
//   assertEqual(result1["Agouhanna"], undefined);



module.exports = countOnly;