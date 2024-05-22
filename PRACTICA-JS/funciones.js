//7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
console.log("EJERCICIO 7)");
/*
function decirNombre(nombre){
    return alert("Hola "+ nombre);
}

decirNombre("Barletta");
*/

//8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la 
//función dentro de una alerta
console.log("EJERCICIO 8)");
/*
function saludar(nombre){
    return ("Hola "+nombre)
};

alert(saludar("Dai"));
*/

//9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
console.log("EJERCICIO 9)");

function sumar(a,b){
    console.log("El resultado de la suma es: "+(a+b));
};

sumar(44,32);

//10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
console.log("EJERCICIO 10)");

function restar(a,b){
    console.log("El resultado de la resta es: "+ (a-b));
};

restar(44,32);

//11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” 
//invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación 
//no válida devolver null 
console.log("EJERCICIO 11)");
/*
function sumar(a,b){
    return a + b
}

function restar(a,b){
    return a - b
}

function calcular(operacion, a,b){

    if(operacion === "+"){
        return ("El resultado de la suma es: "+ sumar(a,b));
    }
    else if(operacion === "-"){
        return ("El resultado de la resta es: "+ restar(a,b));
    }
    else{
        return null;
    }
}

console.log(calcular(operacion = prompt("Ingrese + para sumar y - para restar"),a = parseFloat(prompt("Ingrese el primer número")),b = parseFloat(prompt("Ingrese el segundo número"))));
*/


//12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola
console.log("EJERCICIO 12)");
/*
function contarHasta(numero){
    for(let i = 1; i<=numero; i++){
        console.log(i); 
    }
}

contarHasta(parseInt(prompt("Ingrese el número hasta el que desee contar")));
*/


//13)Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras 
//el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los 
//valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho 
//esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto 
//de sí, el programa nos dirá por alerta “El programa ha finalizado”.
console.log("EJERCICIO 13)");

/*
function calcular(operacion, a, b) {
    if (operacion === "suma") {
        return a + b;
    } else if (operacion === "resta") {
        return a - b;
    } else if (operacion === "multiplicacion") {
        return a * b;
    } else if (operacion === "division") {
        if (b === 0) {
            return "No se puede dividir por 0";
        } else {
            return a / b;
        }
    } else {
        return "Operación no válida";
    }
}

let pregunta;

do {
    pregunta = prompt("¿Desea usar la calculadora? SI/NO").toUpperCase();

    if (pregunta === "SI") {
        let a = parseFloat(prompt("Ingrese el primer número"));
        let b = parseFloat(prompt("Ingrese el segundo número"));
        
        while (isNaN(a) || isNaN(b)) {
            alert("ERROR! Por favor ingrese números válidos.");
            a = parseFloat(prompt("Ingrese el primer número"));
            b = parseFloat(prompt("Ingrese el segundo número"));
        }

        let operacion = prompt("Ingrese el nombre de la operación que desea realizar. (suma/resta/division/multiplicacion)").toLowerCase();

        while (operacion !== "suma" && operacion !== "resta" && operacion !== "multiplicacion" && operacion !== "division") {
            operacion = prompt("Por favor, ingrese una operación válida (suma/resta/division/multiplicacion)").toLowerCase();
        }

        let resultado = calcular(operacion, a, b);
        alert("El resultado de la " + operacion + " es: " + resultado);
    }

} while (pregunta === "SI");

alert("El programa ha finalizado");
*/

//14) Hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..no shacer  un programa que 
//permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.e ingresan 
//valores por teclado.
console.log("EJERCICIO 14)");
/*
for (let i = 1; i <= 25; i++) {
    console.log(i * 11);
};
*/
/*
let par = 0;
let impar = 0; 
let ceros = 0;
for(let i = 1; i<=5; i++){
    let num = parseInt(prompt("Ingrese el "+i+"° número"))
    while(!num || isNaN(num)){
        num = parseInt(prompt("ERROR! Vuelva a ingresar el "+i+"° número"))
    };
    if(num % 2 === 0){
        par++;
    }
    else if(num === 0){
        ceros++
    }
    else{
        impar++;
    }
}
console.log("Cantidad de números pares: "+par);
console.log("Cantidad de número impares: "+impar);
console.log("Numeros que no son pares ni impares "+ceros);
*/

//16) Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura 
//promedio de las personas. 
console.log("EJERCICIO 16)");
/*
let acum = 0;

for(let i = 1; i <= 5; i++){
    let altura = parseFloat(prompt("Ingrese la altura de la "+i+"° persona"));
    while(!altura || isNaN(altura)){
        altura = parseFloat(prompt("Error! Ingrese la altura de la "+i+"° persona"));
    }
    acum = acum + altura;
}

let promedio = acum / 5;
console.log("El promedio de las alturas ingresadas es: "+ promedio);
*/

//17)Se cuenta con la siguiente información:
	//Las edades de 5 estudiantes del turno mañana.
	//Las edades de 6 estudiantes del turno tarde.
	//Las edades de 11 estudiantes del turno noche.
//Las edades de cada estudiante deben ingresarse por teclado.
//a)	Obtener el promedio de las edades de cada turno (tres promedios).
//b)	Imprimir dichos promedios (promedio de cada turno).
//c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
console.log("EJERCICIO 17)");

/*

//TURNO TARDE
let acumTarde = 0;
for(let i = 1; i<=6; i++){
    let edadTarde = parseFloat(prompt("Ingrese la edad del "+i+"° alumno del TURNO TARDE"))
    while(!edadTarde || isNaN(edadTarde) || edadTarde < 0){
        edadTarde = parseFloat(prompt("ERROR!! Ingrese la edad del "+i+"° alumno del TURNO TARDE"))
    }
    acumTarde = acumTarde + edadTarde
}
let promedioTarde = acumTarde/6;

//TURNO MAÑANA
let acumMañana = 0;
for(let i = 1; i<=5; i++){
    let edadMañana = parseFloat(prompt("Ingrese la edad del "+i+"° alumno del TURNO MAÑANA"))
    while(!edadMañana || isNaN(edadMañana) || edadMañana < 0){
        edadMañana = parseFloat(prompt("ERROR!! Ingrese la edad del "+i+"° alumno del TURNO MAÑANA"))
    }
    acumMañana = acumMañana + edadMañana
}
let promedioMañana = acumMañana/5;

//TURNO NOCHE
let acumNoche = 0;
for(let i = 1; i<=11; i++){
    let edadNoche = parseFloat(prompt("Ingrese la edad del "+i+"° alumno del TURNO NOCHE"))
    while(!edadNoche || isNaN(edadNoche) || edadNoche < 0){
        edadNoche = parseFloat(prompt("ERROR!! Ingrese la edad del "+i+"° alumno del TURNO NOCHE"))
    }
    acumNoche = acumNoche + edadNoche
}
let promedioNoche = acumNoche/11;

//b)	Imprimir dichos promedios (promedio de cada turno).
console.log("El promedio de edad de los alumnos del TURNO MAÑANA es: "+promedioMañana);
console.log("El promedio de edad de los alumnos del TURNO TARDE es: "+promedioTarde);
console.log("El promedio de edad de los alumnos del TURNO NOCHE es: "+promedioNoche);

//c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
if((promedioMañana > promedioTarde) && (promedioMañana > promedioNoche)){
    console.log("El TURNO MAÑANA tiene un promedio mayor de edad");
}else if((promedioTarde > promedioMañana) && (promedioTarde > promedioNoche)){
    console.log("El TURNO TARDE tiene un promedio mayor de edad");
}else{
    console.log("El TURNO NOCHE tiene un promedio mayor de edad");
};

*/

//18)Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
//a)	La cantidad de valores negativos ingresados.
//b)	La cantidad de valores positivos ingresados.
//c)	La cantidad de múltiplos de 15.
//d)	El valor acumulado de los números ingresados que son pares.
console.log("EJERCICIO 18)");
/*
let negativos = 0;
let positivos = 0;
let pares = 0;
let multiplos = 0;

for(let i = 1; i<=10; i++){
    let num = parseInt(prompt("Ingrese el "+i+"° valor entero"));
    while(!num || isNaN(num)){
        num = parseInt(prompt("Error... Vuelva a ingresar el "+i+"° valor entero"));
    };
    if(num < 0){
        negativos++;
    }
    else if(num > 0){
        positivos++;
    }

    if(num % 2 === 0){
        pares += num;
    }
    
    if(num % 15 === 0){
        multiplos++;
    };
};

console.log("Cantidad de valores negativos ingresados: "+negativos);
console.log("Cantidad de valores positivos ingresados: "+positivos);
console.log("Cantidad de múltiplos de 15: "+multiplos);
console.log("valor acumulado de los números ingresados que son pares: "+pares);
*/

//19)hacer un programa que lea los lados de 4 triángulos, e informar:
//a)	De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno 
//b)	Cantidad de triángulos de cada tipo.
//c)	Tipo de triángulo del que hay menor cantidad.
console.log("EJERCICIO 19)"); 

//equilatero: tres lados iguales
//isósceles: dos lados iguales
//escaleno: todos diferentes

/*
function leerLados(a,b,c){
    let triangulo
    if(a === b && b === c){
        triangulo = "EQUILATERO";
        return triangulo
    }
    else if((a === b && b !== c) || (b === c && c !== a)){
        triangulo = "ISÓSCELES"
        return triangulo
    }
    else{
        triangulo = "ESCALENO"
        return triangulo
    }
}

let resultado;
let contEquilatero = 0;
let contEscaleno = 0;
let contIsosceles = 0;

for(let i = 1; i<=4; i++){
    a = parseFloat(prompt("Ingrese el valor del lado 'a' del triángulo "+i))
    while(!a || isNaN(a)){
        a = parseFloat(prompt("ERROR!!! Ingrese el valor del lado 'a' del triángulo "+i))
    };
    b = parseFloat(prompt("Ingrese el valor del lado 'b' del triángulo "+i))
    while(!b || isNaN(b)){
        b = parseFloat(prompt("ERROR!!! Ingrese el valor del lado 'b' del triángulo "+i))
    };
    c = parseFloat(prompt("Ingrese el valor del lado 'c' del triángulo "+i))
    while(!c || isNaN(c)){
        c = parseFloat(prompt("ERROR!!! Ingrese el valor del lado 'c' del triángulo "+i))
    };
    
    resultado = leerLados(a,b,c)
    console.log("El triángulo "+i+" es: "+resultado)

    if(resultado === "EQUILATERO"){
        contEquilatero += 1
    }
    else if(resultado === "ISÓSCELES"){
        contIsosceles += 1
    }
    else if(resultado === "ESCALENO"){
        contEscaleno += 1
    }
}

console.log("Cantidad de triángulos EQUILATERO: "+contEquilatero);
console.log("Cantidad de triángulos ISOSCELES: "+contIsosceles);
console.log("Cantidad de triángulos ESCALENO: "+contEscaleno);

if(contEquilatero < contEscaleno && contEquilatero < contIsosceles){
    console.log("Hay menor cantidad de triángulos EQUILATERO")
}
else if(contEscaleno < contEquilatero && contEscaleno < contIsosceles){
    console.log("Hay menor cantidad de triángulos ESCALENO")
}
else if(contIsosceles < contEquilatero && contIsosceles < contEscaleno){
    console.log("Hay menor cantidad de triángulos ISOSCELES")
}
*/

//20)hacer  una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde 
//el menor hasta el mayor de uno en uno.
//Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
//4 5 6 7 8 9 10
console.log("EJERCICIO 20)");
/*
function cargarNumeros(){
    let a = parseInt(prompt("Ingrese el primer número"))
    while(!a || isNaN(a)){
        a = parseInt(prompt("ERROR! Ingrese un número válido"))
    }
    let b = parseInt(prompt("Ingrese el segundo número, debe ser mayor al primero"))
    while(b<=a || !b || isNaN(b)){
        b = parseInt(prompt("ERROR! Ingrese un número válido"))
    }
    return {a,b}
}
/*
function recorrer(a,b){ 
    for(let i = a; i<=b; i++){
        console.log (i)
    }
}
*/
//SIN SALTOS DE LINEA
/*
function recorrer(a, b) {
    let resultado = "";
    for (let i = a; i <= b; i++) {
        resultado += i + " ";
    }
    console.log("Los números en el rango son: " + resultado.trim());
}

//La función trim() se usa para eliminar cualquier espacio extra al final.

let { a, b } = cargarNumeros();
recorrer(a, b);

*/

//21)Hacer  una función que reciba tres enteros y retorne el promedio.
console.log("EJERCICIO 21)");
/*
function retornarPromedio(a,b,c){
    let promedio = (a+b+c)/3
    return promedio
}

a = parseInt(prompt("Ingrese el primer número"))
while(!a || isNaN(a)){
    a = parseInt(prompt("ERROR! Ingrese el primer número entero"))
}
b = parseInt(prompt("Ingrese el segundo número"))
while(!b || isNaN(b)){
    b = parseInt(prompt("ERROR! Ingrese el segundo número entero"))
}
c = parseInt(prompt("Ingrese el tercer número"))
while(!c || isNaN(c)){
    c = parseInt(prompt("ERROR! Ingrese el tercer número entero"))
}

console.log("El promedio de los números ingresados es: " + retornarPromedio(a,b,c));
*/

//22)Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
console.log("EJERCICIO 22)")
/*
function sumar(){
    let suma = 0;
    for(let i = 1; i<= 5; i++){
        num = parseFloat(prompt("Ingrese el "+i+"° número"))
        while(!num||isNaN(num)){
            num = parseFloat(prompt("Error!! Ingrese el "+i+"° número"))
        }
        suma = suma + num;
    }
}

alert("El resultado de la suma es: "+sumar());
*/

//23)hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de 
//exclamación al inicio y al final !¡
console.log("EJERCICIO 23)");
/*
function enviarPalabra(){
    let palabra = prompt("Ingrese una palabra")
    return palabra
}

alert("!"+ enviarPalabra() + "¡");
*/

//24)Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un 
//apellido y devuelva un string con la unión de ambos valores
console.log("EJERCICIO 24)");
/*
function obtenerNombreCompleto(nombre,apellido){

    let resultado = nombre + " " + apellido
    return resultado

}

alert(obtenerNombreCompleto("Daiana","Juan"));
*/

//25)Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y 
//devuelva la conversión a segundos de dicha cantidad de horas
console.log("EJERCICIO 25)");
/*
function convertirHorasEnSegundos(horas){
    let resultado = horas * 3600
    return resultado
}

let horas = parseFloat(prompt("Ingresa la cantidad de horas"))
while(!horas || isNaN(horas)){
    let horas = parseFloat(prompt("Ingresa la cantidad de horas"))
}

alert(horas + " hs, equivale a "+ convertirHorasEnSegundos(horas)+" segundos");
*/

//26)Definí una función generarEmail que reciba como argumentos dos string usuario y 
//dominio y el un string email con el formato usuario@dominio.com
console.log("EJERCICIO 26)");
/*
function generarEmail(usuario,dominio){
    let email = usuario+"@"+dominio;
    return email;
};

alert(generarEmail("daianazajuan","gmail.com"));
*/

//27)Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje:
//Ingresá una cantidad de grados Celsius
//Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados 
//Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es: {resultado}
console.log("EJERCICIO 27)");
/*
function convertir(celsius){
    resultado= 32+(celsius*(9/5));
    return resultado;
};

let celsius = parseInt(prompt("Ingresá una cantidad de grados Celsius"));
while(!celsius || isNaN(celsius)){
    let celsius = parseInt(prompt("Error!! volvé a ingresar una cantidad de grados Celsius"));
};
alert("La conversión de "+celsius+" grados Celsius a Fahrenheit es: "+convertir(celsius));
*/

//28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
//Ingresá la distancia del recorrido
//Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en 
//distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia 
//{distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} 
//hora/s y en auto {resultadoEnAuto} hora/s
//Las velocidades de los medio de transporte son:
//a pie : 5 km/ hs
//bicicleta : 10 km/ hs
//auto : 50 km/hs
console.log("EJERCICIO 28)");
/*
function calcular(distancia){
    let resultadoEnBicicleta = distancia/10;
    let resultadoAPie = distancia/5;
    let resultadoEnAuto = distancia/50;

    return console.log("Para la distancia "+distancia+" km en bicicleta el tiempo de viaje es " +resultadoEnBicicleta+" hora/s, a pie "+resultadoAPie+" hora/s y en auto "+resultadoEnAuto+" hora/s");
}

let distancia = parseFloat(prompt("Ingresá la distancia del recorrido"));
while(!distancia||isNaN(distancia)||distancia<0){
    let distancia = parseFloat(prompt("Error! Ingresá la distancia del recorrido"))
};

calcular(distancia);
*/

//29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano 
//tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. 
//Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

//datos con los cuales deben ser enviados a la función

//puedeVerPelicula(12, false)
//false
//puedeVerPelicula(12, true)
//true
//puedeVerPelicula(16, false)
//true
//puedeVerPelicula(18, true)
//true
console.log("EJERCICIO 29)");

function puedeVerPelicula(edad,tieneAutorizacion){
    if (edad >= 15 || tieneAutorizacion) {
        return true
    } 
    else{
        return false
    }
}

console.log(puedeVerPelicula(12, false));
console.log(puedeVerPelicula(12, true));
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true));

//30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
//datos con los cuales deben ser enviados a la función:

//esVocal('a')
//true
//esVocal('n')
//false
//esVocal('e')
//true
/*
function esVocal(letra){
    if(letra === 'a'||letra === 'e'||letra === 'i'||letra === 'o'||letra === 'u'){
        return true
    }
    else{
        return false
    }
}

letra = prompt("Ingrese una vocal").toLowerCase();
alert(esVocal(letra));
*/