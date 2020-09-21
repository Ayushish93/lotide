

const middle = function(arr)
{
    middleElement = [];
    let numberOfItems = arr.length;
    let mid = Math.floor(numberOfItems/2);
    if(numberOfItems <= 2)
        return middleElement;
    else {    
    
        if(numberOfItems % 2 === 0) {
            middleElement.push(arr[mid-1], arr[mid]);
        
        }
        else if(numberOfItems % 2 !== 0) {
            middleElement.push(arr[mid]);
        }
        else if(numberOfItems <= 2) {
            middleElement.push(" ");
        }
        return middleElement;
    }
    
}
module.exports = middle;

