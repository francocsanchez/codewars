/*
Implement the function unique_in_order which takes as argument a sequence and returns 
a list of items without any elements with the same value next to each other and preserving 
the original order of elements.
*/

function separarString(string) {
    let arrayString = string.split('');
    let contarVocales;
    let total = arrayString.filter(word => word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u');
    return total.length;
}

//console.log(separarString('kdaldkjaslkdjas'));