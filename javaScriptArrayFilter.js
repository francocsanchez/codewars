/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to 
complete the function given.
*/

function getEvenNumbers(numbersArray) {
  let par = numbersArray.filter(x => (x % 2) === 0);
  return par;
}