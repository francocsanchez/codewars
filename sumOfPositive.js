/*You get an array of numbers, return the sum of all of the positives ones.*/

function positiveSum(arr) {
  let positiveNumber= [];
  for(let i=0; i < arr.length ; i++){
      let index = arr[i];
      if(index > 0){
          positiveNumber.push(index);
        }   
    }
    let result = positiveNumber.reduce((acu,elmt)=>{
        return acu + elmt;
    },0)
    return result;
}

console.log(positiveSum([1,-4,7,12]));