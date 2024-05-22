//OBJETOS

//Modelo key valiu
let usuario = {
    edad: 90,
    nombre: 'Pedro',
    dinero: 7000
}
console.log(usuario.dinero);
/* 
Crear un objeto llamado producto que tenga 
precio, nombre, descripcion y marca
 */
let producto = {
    precio: 100000,
    nombre: 'Parlante',
    descripcion: 'Parlante Bluetooth Sumergible Philips Tas4807 20w Ip67 12hs Color Negro',
    marca: 'Philips'
}
/*vamos a crear un objeto llamado persona, que tenga nombre, edad y mejorAmigo
mejorAmigo debe ser otro objeto que solo tenga nombre y edad*/
const persona = {
    nombre: 'Marcos',
    edad: 30,
    mejorAmigo: {
        nombre: 'Pedro',
        edad: 35,
    }
}
persona.dni = '30345876'
persona.mejorAmigo.nombre = 'Pepe'
persona.numeroCelular = '+1123084548'

console.log(persona)


//PARA OBJETOS USAMOS CONST, NO LET
const auto = {
    nombre: 'Jeep',
    anio: 2018,
    color: 'Rojo',
    precio: 10000000
}

auto.precio = 500000
auto.color = 'Amarillo'
auto.rueda = 'Grande'

console.log(auto);