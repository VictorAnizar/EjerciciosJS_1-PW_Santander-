
//Funcion Recursiva deppEqual 
function deepEqual(a, b) {
    //Comparacion para variables estrictas
    if (a === b) {
        return true;
    } else {
        //Descartamos las variables primitivas y solo aceptamos objetos
        if ((typeof a == 'object') && (typeof b == 'object')) {
            //Comparamos la cantidad de propiedades de los objetos
            if (Object.keys(a).length == Object.keys(b).length) {
                // Ciclo para recorrer las propiedades de los 2 objetos
                for (let indice in Object.keys(a)) {
                    //Recogemos el resultado de la comparacion de la propiedad del objeto en la llamada recursiva
                    const resultado = deepEqual(a[indice], b[indice]);
                    //Verificamos que todas las comparaciones fueron iguales, de lo contrario terminamos la ejecucion
                    if (!resultado) {
                        return false;
                    }
                }
                // Return en caso de que todas las propiedades sean iguales
                return true;
            } else {
                //Return en caso de que la cantidad de propiedades sea distinta
                return false;
            }
        } else {
            //return en caso de que las variables primitivas no sean del mismo tipo ni contengan el mismo valor
            return false;
        }
    }
}

const john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false