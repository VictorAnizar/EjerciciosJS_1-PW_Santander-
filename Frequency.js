'use strict'

console.log("                    Frequency:")

function frequency(string) {
    // //eliminamos los espacios exteriores del string
    // string = string.trim();
    // //pasamos el string a minusculas
    string = string.toLowerCase();

    var  object_account = {};
    for (let char in string) {
        if (string[char] in object_account) {
            object_account[string[char]] ++;
        } else {
            object_account[string[char]] = 1;
        }
    }
    return object_account;
}


console.log('Test 1:', frequency('cccbbbaaa'));
// // {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'));
// // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}    
console.log('Test 3:', frequency('john.doe@domain.com'));

console.log('Test 4:', frequency('Ethien y Erandi son lo maximo (Hola caro)'));
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}

// Reto 1 usando expresiones regulares
function freqency(phrase) {
    let counting = {}

    phrase.replace(/\S/g, function(w) {
        counting[w] = (isNaN(counting[w]) ? 1 : counting[w] + 1);
    });

    return counting
}

console.log('Test 1:', freqency('   cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', freqency('WWWWwww.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', freqency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}


