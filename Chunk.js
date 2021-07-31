'use strict'

console.log("                    Chunk:")

function chunk(array, size) {

    // Tamaño del arreglo
    let tamanio_arr = array.length;

    //si el numero de "mini aarreglos es mayor al tamaño del arreglo" se retorna 
    if (size > tamanio_arr) {
        return "El numero de rebanadas no puede ser mayor al tamaño del arreglo que es " + tamanio_arr;
    }


    //creamos el numero de arreglos
    var nuevo_array = [];





    //asignamos los arreglos al nuevo array
    for (let i = 0; i < tamanio_arr; i += size) {
        let pedazo = array.slice(i, i + size);
        nuevo_array.push(pedazo);
    }

    return nuevo_array;
};


const data = [1, 2, 3, 4, 5, 6, 7, 8];
//                                                                                   ----Tamaño / rebanadas = arreglos a crear
console.log('Test 1:',chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]    ---- 8/1 = 8

console.log('Test 2:',chunk(data, 2)); // [ [1, 2], [3, 4], [5, 6], [7, 8] ]            ---- 8/2 = 4 -> 4

console.log('Test 3:',chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]              ---- 8/3 = 2.6 -> 3

console.log('Test 4:',chunk(data, 4)); // [[1, 2, 3, 4,], [5, 6, 7, 8]]               ---- 8/4 = 2 -> 2

console.log('Test 5:',chunk(data, 5)); // [ [1, 2, 3, 4, 5], [6, 7, 8] ]                ---- 8/5 = 1.6 -> 2

console.log('Test 6:',chunk(data, 6)); // [ [1, 2, 3, 4, 5, 6], [7, 8] ]                ---- 8/6 = 1.3 -> 2

console.log('Test 7:',chunk(data, 7)); // [[1, 2, 3, 4, 5, 6, 7], [8]]                ---- 8/7 = 1.1 -> 2

console.log('Test 8:',chunk(data, 8)); // [[1, 2, 3, 4, 5, 6, 7, 8]]                  ---- 8/8 = 1 -> 1
