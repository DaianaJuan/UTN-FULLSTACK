const notasTrimestre = [9, 10, 6]

notasTrimestre[1] = 4

console.log("El segundo trimestre te sacaste "+notasTrimestre[1]);

console.log(notasTrimestre.length)
/*
const nombres = [
    'Pepe',
    'Marta',
    'Patricia',
    'Marcos',
    'Lucas',
    'Carlos'
]

nombres[5] = 'Charly'

//METODOS  //nombres.pop()
//.pop -Elimina el último elemento
//.shift -Elimina el primer elemento
//.push -Agrega al final
//.unshift -Agrega al inicio
//.indexOf -Busca el elemento, si lo encuentra devuelve la posicion, si no lo encuentra, devuelve -1 (solo en string) 
    //nombres.indexOf('María')
//.splice() (posicion, cuantos elemento elimino, nuevo elemento)


let eliminado = nombres.shift()
console.log(nombres)
*/
const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]

function eliminarNombre(nombre){
    const posicion = nombres.indexOf(nombre)
    nombres.splice(posicion, 1)
}

eliminarNombre('maria')
eliminarNombre('juan')
console.log(nombres)


