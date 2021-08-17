/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
*/

function abbrevName(name) {
    let arrName = name.split(' ');
    let nameWord = arrName[0].split('');
    let lastNameWord = arrName[1].split('');
    return nameWord[0].toUpperCase() + '.' + lastNameWord[0].toUpperCase();
}

console.log(abbrevName('sam Harris'));