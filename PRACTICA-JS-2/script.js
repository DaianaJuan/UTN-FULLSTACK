/*
1) Dado un array de números, escribir una función que calcule la suma de todos los números del array.
*/
console.log('EJERCICIO 1)')

const numeros = [2,6,44,1,67,3,9];

let suma = 0;
for(let i = 0; i<numeros.length;i++){
    numeros[i]
    suma += numeros[i];
}
console.log("La suma de los números de array es "+suma);

/*
2) Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.
*/
//Cuando llega al yate, donde la espera un grupo de amigos, nota que algo va mal.
console.log('EJERCICIO 2)')

const palabras = ['Jess, de camino al puerto,','se encuentra con un mal presagio.','Cuando llega al yate,','donde la espera un grupo de amigos,','nota que algo va mal.'];

function concatenarString(cadenaDePalabras){ 
    return cadenaDePalabras.join(' ');
    
}

let resultado = concatenarString(palabras);
console.log(resultado);

/**-------------------------------------------------
 * Explicación
Parámetro Rest ...frases:

function concatenarVariosStrings(...frases) permite pasar cualquier cantidad de arrays a la función.
Aplanar los Arrays:

let todasLasCadenas = [].concat(...frases); aplanará y combinará todos los arrays en un solo array.
[].concat(...frases) usa el operador de propagación (...) para expandir los elementos de cada array y concat para unirlos en un solo array.
Unir Elementos del Array en una Cadena:

return todasLasCadenas.join(' '); convierte el array a una cadena, separando los elementos con un espacio (' ').

 * ------------------------------------------------- */
console.log('EJERCICIO EXTRA')

const cadenaUno = ['Sus temores se acrecientan'];
const cadenaDos = ['cuando se desencadena una tormenta'];
const cadenaTres = ['que obliga al grupo a abandonar el yate para subir a otro barco,'];
const cadenaCuatro = ['en el que Jess tiene la sensación de haber estado antes.'];
const cadenaCinco = ['El barco desierto parece, pero no están solos.']

function concatenarVariosStrings(...frases) {
    // Combina todos los arrays en uno solo
    let todasLasCadenas = [].concat(...frases);
    // Une todos los elementos del array en una sola cadena
    return todasLasCadenas.join(' ');
}

// Concatenar las cadenas usando la función
let resultadoDos = concatenarVariosStrings(cadenaUno, cadenaDos, cadenaTres, cadenaCuatro,cadenaCinco);
console.log(resultadoDos);

/**
 * 3)Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.
 */
console.log('EJERCICIO 3)')

const nums = [2,7,85,32,9,102,54];

const numerosMyoresDeDiez = nums.filter(function(nums){
    return nums > 10;
});

console.log('Números mayores a diez: '+ numerosMyoresDeDiez);

/**
 * 4)Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.
 */
console.log('EJERCICIO 4)')

