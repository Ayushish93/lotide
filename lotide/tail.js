const assertEqual = function(actual, expected) {
    
    for(var i=0; i < actual.length; i++) {
        if(actual[i] !== expected[i])
        {
            
            return false;
        }
    }
    
};
function tail(arr)
{
    var resarr =[];
    
     for(var i = 1 ; i < arr.length; i++)
     {
        resarr.push(arr[i]);
    }
    
    return resarr;
    
}
const result = tail(["Hello","Lighthouse", "Labs"]);

console.log(assertEqual(result, ["Lighthouse", "Labs"])); 

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

