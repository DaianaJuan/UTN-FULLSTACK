### CALCULADORA

Funcionalidades:

CALCULADORA
-tener soporte para las sig operacion: +, -
    -'+'
    -'-'

HISTORIAL:
-historial

LOGIN:
-crear usuario (esta se ejecuta al entrar a la caluladora)
    -email => debe estar validado


Utilidades:
-validacion
-opcion de CANCELAR

INGRESO DE DATOS:
-prompt

EGRESO DE DATOS:
-alert



LOGIN:

Prompt va a solicitar al usuario un email
Validamos que el email sea un email

RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
En caso de que no volvera a solicitar
En caso de que si sea valido dira email registrado

Reglas:
Todo el logeo debe estar dentro de una funcion

CODIGO MATÍAS--------------------------------------------------------------------------------------------------

login()

function validarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}
function validarPassword(password) {
    return (  Boolean(password) && password.length > 6 && password != password.toLowerCase() )
}




function obtenerDato (data){

    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}


const DATOS = {
    EMAIL: {
        mensaje: "Bienvenido, por favor ingrese su email: ",
        error: "Error, por favor ingrese un email valido: ",
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: "Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ",
        error: "Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ", 
        validacion: validarPassword
    }
}



function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}


const historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 20,
        b: 2,
        resultado: 22
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
]

function renderizarHistorial (historialRecibido){

    let listaStrHistorial = ''
    for (const item of historialRecibido){

        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
    }
    return listaStrHistorial
    
} 



function agregarAlHistorial(elementoHistorial) {
    historial.push(elementoHistorial)
}

function obtenerHistorial() {
    return historial
}


agregarAlHistorial({
    accion: 'PEPE',
    operacion: '-',
    a: 1,
    b: 2,
    resultado: -1
})
console.log(renderizarHistorial(historial))



/* 
console.log(renderizarHistorial(historial)) */

/* let datoImportante = 'el mate se toma amargo' */
/* 
localStorage.setItem('array', {}) */

/* localStorage.removeItem('array') */

/* localStorage.clear() */

/* JSON:  JAVASCRIPT OBJECT NOTATION
JSON es la variable global que usamos para acceder a los metodos .parse(), .stringify()

Las reglas de JSON


Si quiero escribir un array uso []
Si quiero escribir un objeto uso {}
Si quiero escribir un string uso "" (no valen '' o ``)
Si quiero escribir null undefined o numeros los sigo usando como antes
SI ESCRIBEN OBJETOS O ARRAYS la ultima coma no va
Caso incorrecto
{
    "nombre": "pepe",
    "edad": 70, //esta coma da error
}
Caso correcto:
{
    "nombre": "pepe",
    "edad": 70
}
*/

//Este string es transformable a objeto de JS
/* let string = '{"username": "pepe"}' *///este string esta escrito en formato JSON


//Transforma al formato objeto de JS
/* let stringComoObjeto = JSON.parse(string)
console.log(stringComoObjeto) */

//Transforma a formato text/string
/* JSON.stringify() */

let objeto = {
    nombre: 'pepe',
    edad: 70
}
/* let objetoEnString = JSON.stringify(objeto) */

/* console.log(objetoEnString) *///'{"nombre": "pepe", "edad": 70}


/* 
Transformar el array historial a string con notacion JSON y mostrarlo por alert


AUTOCORRECCION:
La alerta no debe mostrar [object Object]
*/

/* const objetoEnString = JSON.stringify(historial) */

/* 
En la funcion de agregar al historial vamos a hacer el push que veniamos haciendo
pero ademas vamos a guardar el historial en el localStorage con la key 'historial'
*/



function renderizarHistorial (historialRecibido){

    let listaStrHistorial = ''
    for (const item of historialRecibido){

        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
    }
    return listaStrHistorial
    
} 



function agregarAlHistorial(elementoHistorial){
    const historial = obtenerHistorial() //historial previo o []
    historial.push(elementoHistorial)
    const historialStr = JSON.stringify(historial)
    localStorage.setItem('historial', historialStr)
}

function obtenerHistorial() {
    let historialString = localStorage.getItem('historial');
    return JSON.parse(historialString)
}


/* Verificando que un usuario que entra por primera vez tenga un historial */
if(obtenerHistorial() === null){
    /* Si no hay historial, se guarde el historial como array vacio */
    localStorage.setItem('historial', JSON.stringify([]))
}