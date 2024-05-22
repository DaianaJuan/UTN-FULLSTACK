//1)Imprime los números del 1 al 10
console.log("EJERCICIO 1)");

for(let i = 1; i <= 10; i++){
    console.log(i);
};

//2)Imprime los números pares del 2 al 20
console.log("EJERCICIO 2)");

for(let i = 2; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    };
};

//3)Imprime los números impares del 1 al 19
console.log("EJERCICIO 3)");

for(let i = 1; i<= 10; i++){
    if(i % 2 !== 0){
        console.log(i);
    };
};

//4)Imprime los números del 10 al 1 en orden inverso
console.log("EJERCICIO 4)");

for(let i = 10; i >= 1; i--){
    console.log(i);
};

//5)Imprime los números del 1 al 10, pero se detiene al llegar al 5
console.log("EJERCICIO 5");

for(let i = 1; i <= 10; i++){
    console.log(i);
    if(i===5){
        break;
    };
};

//6)Imprime los números del 1 al 10, pero salta el 5
console.log("EJERCICIO 6");

for(let i = 1; i<=10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
};