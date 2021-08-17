/*Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives. */

function invert(array) {
    var numbers = array.map((elemt)=>{
        return elemt * -1
    })
    return numbers
 }

