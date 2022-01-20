/* Codigo Sincrono */

let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/* Codigo Asincrono */

let variableAsincrona;

setTimeout( () => {
    variableAsincrona = 10 * 3;    
}, 2000);

console.log(variableAsincrona);