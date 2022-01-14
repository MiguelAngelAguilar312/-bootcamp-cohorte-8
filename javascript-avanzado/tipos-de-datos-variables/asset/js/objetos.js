/*let miObjeto = {
    // pares de clave valor
    nombre: 'Miguel Angel'

};*/

let nombre = 'Miguel Angel Aguilar';
let edad = 28;
let direccion = 'Iztapalapa,CDMX';
let numero = 5556581111;

console.log(nombre);

let persona = {
    nombre: 'Miguel Angel Aguilar',
    edad: 28,
    direccion: 'Iztapalapa,CDMX',
    numero: 5556581111
};

let persona1 = {
    nombre: {
        apellidoPaterno: 'Angel',
        apellidoMaterno: 'Aguilar',
        nombre: 'Miguel',
    },    
    edad: 28,
    direccion: {
        ciudad: 'Iztapalapa',
        estado: 'CDMX',
    }, 
    numero:[
        5556581111,
        5553951111
    ] 
};

/* Arreglos vs objetos
Almacenar informacio */

console.log(persona);
console.log(persona.nombre);

console.log(persona1);
console.log(persona1.nombre.apellidoMaterno);
console.log(persona1.direccion.estado);
console.log(persona1.numero[0]);

// Ejercicio

let cuerposEmergencia = {
    pc:{
        pc1: 'Miguel Hidalgo',
        pc2: 'Coyoacan',
        pc3: 'Iztapalapa',
    },
    ambulancias: {
        ambulancias1: 'Cruz roja',
        ambulancias2: 'ERUM',
        ambulancias3: 'CREM',
    },
    numerosEmergencia: [
        911,
        065,
        066
    ],
}

console.log(cuerposEmergencia);
console.log(cuerposEmergencia.pc.pc3);
console.log(cuerposEmergencia.ambulancias.ambulancias1);
console.log(cuerposEmergencia.numerosEmergencia[0]);