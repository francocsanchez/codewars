/*
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
*/

function countSheeps(arrayOfSheep) {
    let sheeps = arrayOfSheep.filter(s => s === true);
    return sheeps.length;
}

/*
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
*/