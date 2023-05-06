/**2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true] */

function ejercicio2(array1, array2) {
    let coincidentes = [];
    for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
        coincidentes.push(array1[i]);
    }
    }
    return coincidentes;
}


var array1 = [4, 3, true, 'manzana'];
var array2 = ['pera', 3, false, true, 3, true];
console.log(ejercicio2(array1, array2));