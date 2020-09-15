
const assertEqual = function(actual, expected) {
    
    if(actual === expected){
        console.log(true);
    }
    else{
        console.log(false);
    }
    
};
function head(arr)
{
    if(arr === undefined)
    {
        return undefined;
        
    }
    else
    {
        return arr[0];
    }
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
