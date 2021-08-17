/*
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.
*/

function createPhoneNumber(numbers) {
    let numberPhone = '('
        + numbers[0] + numbers[1] + numbers[2]
        + ') ' + numbers[3] + numbers[4] + numbers[5] + '-'
        + numbers[6] + numbers[7] + numbers[8] + numbers[9];
    return numberPhone;
}

/*
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);
}

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

*/