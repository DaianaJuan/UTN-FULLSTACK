/**
 * LOGIN:

Prompt va a solicitar al usuario un email
Validamos que el email sea un email

RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
En caso de que no volvera a solicitar
En caso de que si sea valido dira email registrado

Reglas:
Todo el logeo debe estar dentro de una funcion

login()
 */

/*************************************************************************************************************/
function login(email, password) {
    const validador = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    let emailAVerificar = prompt('Ingrese su email');
    while (!validador.test(emailAVerificar)) {
        emailAVerificar = prompt('El email ingresado es incorrecto, vuelva a intentarlo');
    }

    emailAVerificar = alert('Email registrado');
    return emailAVerificar;

    
}

let email = login();

/****************************************************************************************************************/
/*
FORMA CORRECTA O IDILICA

function validarEmail(email){
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) Al ser un booleano, no hace falta poner if, 
    directamente devuelve true o false
}

function login(){
    let usuarioEmail = prompt('Ingrese su email: ', '')
    while(!(validarEmail(usuarioEmail))){
        alert('ERROR: el email ingresado es inválido, vuelva a intentarlo.')
        usuarioEmail = prompt('Ingrese su email: ', '')
    }
    alert('Email registrado '+ usuarioEmail)
    return usuarioEmail
}

let emailRegistrado = login()

*******************************************************************************************************************/



