//Escribe un condicional que verifique si una variable llamada "tieneHijos" es "true". 
//Si es "true", imprime "Tienes hijos" en la consola. Si es "false", imprime "No tienes hijos" en la consola.
console.log("EJERCICIO 1)");

let tieneHijos = true;

if(!tieneHijos){
    console.log("No tienes hijos")
}
else{
    console.log("Tienes hijos")
};

//Escribe un condicional que verifique si una variable llamada "genero" es "hombre" o "mujer". Si es "hombre", 
//imprime "Eres hombre" en la consola. Si es "mujer", imprime "Eres mujer" en la consola.
console.log("EJERCICIO 2)");

let genero = "MUJER"

if(genero.toLowerCase() === "hombre"){
    console.log("Eres hombre")
}
else if(genero.toLowerCase() === "mujer"){
    console.log("Eres mujer")
};

//que el usuario realice la carga de un dato por teclado dicho dato será el lado de un cuadrado ,para luego  
//mostrar por pantalla el perímetro del mismo .
console.log("EJERCICIO 3)")

let lado = prompt("Ingrese el valor del lado del cuadrado en cm para calcular su perímetro")
let perimetro = lado * 4
alert("El peímetro del cuadrado es: "+perimetro+" cm");

//hacer un programa donde se ingresan cuatro números, calcular e informar la suma de los dos primeros 
//y la multiplicación del tercero y el cuarto.
console.log("EJERCICIO 4)")

let cont = 0
let suma = 0
let multiplicacion = 1

while(cont < 4){
    let num = parseFloat(prompt("Ingrese un número"))
    cont = cont + 1
    if(cont <= 2){
        suma = suma + num;
    }
    else if(cont <= 4){  
        multiplicacion = multiplicacion * num
    }
};

console.log("La suma de los dos primeros números ingresados es: "+suma);
console.log("La multiplicación de los últimos dos números ingresados es: "+multiplicacion);

//Se ingresa  un valor entero, mostrar un mensaje que indique si el número es positivo, cero o negativo.
console.log("EJERCICIO 5)")

let numEntero = parseInt(prompt("Ingrese un número entero"))

if(numEntero === 0){
    alert("El número "+numEntero+" ingresado es: CERO")
}
else if(numEntero < 0){
    alert("El número "+numEntero+" ingresado es: NEGATIVO")
}
else{
    alert("El número "+numEntero+" ingresado es: POSITIVO")
};

//Escribe una expresión que use el operador "&&" (and lógico) para verificar si una variable llamada "edad" 
//es mayor o igual a 18 y si una variable llamada "tienePermiso" es "true". Si ambas condiciones se cumplen, imprime 
//"Puedes conducir" en la consola. Si alguna de las dos condiciones no se cumple, imprime "No puedes conducir" en la 
//consola.

console.log("EJERCICIO 6)")

let edad = 32
let tienePermiso = false

if((edad >= 18) && (tienePermiso === true)){
    console.log("Puedes conducir")
}
else{
    console.log("No puedes conducir")
};
