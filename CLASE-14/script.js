/* 
    Quiero un programa que dado un nombre me muestre una alerta con el nombre 300 veces (300 alertas en total)
*/


//Dry
//let nombre = 'pepe'


/* 
alert(nombre)
alert(nombre)
alert(nombre)
*/

//FOR se usa cuando queremos repetir algo x cantidad de veces

/* 


SINTAXIS:
for(let iterador = valor_inicial; limite (mientas mi iterador sea menor o igual a 3); actualizacion )
*/

/* 
for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    console.log('me ejecuto' + i)
} 
*/



/* 
mostrar por alerta el conteo del 1 al 10 (se deben ejecutar 10 alertas)

for(let iterador = 1; iterador<=10; iterador = iterador +1){
    alert (iterador)
} */


/* 
Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes un alerta que muestre la sumatoria de los 3 numeros

dime un numero> 3
dime un numero> 4
dime un numero> 3
>>alert> 10


let sumatoria = 0
let cantidad_de_repeticion = prompt('Ingresa cuantos numeros vas a sumar')
while(!cantidad_de_repeticion || isNaN(cantidad_de_repeticion)){
    cantidad_de_repeticion = prompt('ERROR: vuelve a ingresar el numero')
}
for(let iterador = 1; iterador <= cantidad_de_repeticion; iterador = iterador + 1){
    let numero = prompt('ingrese un numero')
    while(!numero || isNaN(numero)){
        numero = prompt('ERROR: vuelve a ingresar el numero')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero

}

alert('Resultado: ' + sumatoria)
*/

/*  
Solicitar al usuario la cantidad de personas en la clase (numero)
Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
(
    Si la cantidad de personas de clase es 5, van solicitar 5 nombre
)
Luego de solicitar los nombres mostrarlos en este formato:

'
Lista de alumnos: 
-juan
-pepe
-maria
-carla
-julieta
'
*/
num = parseInt(prompt("Ingrese la cantidad de alumnos"));
while(!num || isNaN(num) || num <= 0){
    num = parseInt(prompt("ERROR, ingrese un número válido"))
}
let lista = "";
for(let i = 1; i<=num; i++){
    nombre = prompt("Ingrese el nombre del "+i+"° alumno");
    lista = lista + '\n-' + nombre;
}

alert("Lista:" + lista);

/* alert('lista: \n-pepe\n-juan') */




/*for(let i = 1; i <= 10; i++){
    //alert(i);
};*/

/* 
Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes un alerta que muestre la sumatoria de los 
3 numeros
dime un numero> 3
dime un numero> 4
dime un numero> 3
>>alert> 10
*/
/*
let suma = 0;
for(let i = 1; i <= 3; i++){
    let num = parseInt(prompt("Ingresar un número "+i)); //siempre poner parseInt/parseFloat para transformar el 
    //string en número
    suma += num;
}
alert("La suma de los tres números ingresados es: "+suma);

-------let num = prompt("Ingresar un número "+1)
-------num = Number(num)

casos que no tomo numero:
null
""
"algun string"
while(!numero || isNan(numero)){
    numero = prompt('ERROR, vuelva a ingresar el número')
}
*/