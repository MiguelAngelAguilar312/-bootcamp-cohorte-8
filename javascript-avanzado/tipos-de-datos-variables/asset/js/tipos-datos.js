let nombre = 'Miguel Angel Aguilar';
let edad = 28;
let tienesTrabajo = true;
let variableNull = null;
let variableUndefined;

console.log(typeof(nombre)); //string o cadena
console.log(typeof(edad)); //number
console.log(typeof(tienesTrabajo)); //boolenao
console.log(typeof(variableNull)); //object
console.log(typeof(variableUndefined)); //undefined

console.log(variableNull == variableUndefined); //true
console.log(variableNull === variableUndefined); //false

console.log('1' == 1); //true sabemos nosotros que esto no es correctto, lo correcto es falso ya que un string y un number no son iguales
console.log('1' === 1); //false

console.log(0 == false); //true
console.log(0 === false); //false

console.log(typeof(10 + 10)); //number
console.log(typeof('10' + 10)); //string

console.log(typeof('1' == 1)); //booleano
console.log(typeof('1' === 1)); //booleano 
console.log(typeof(0 == false)); //booleano
console.log(typeof(0 === false)); //booleano

console.log(typeof(parseInt('11'))); //parseInt te va a sebir cuando quieras cambir un texto a numero
console.log(parseInt('8523695185265'));
console.log('---------------------------');
console.log(typeof('-------------------------')); //string
console.log(parseInt('hola')); //Not a Number

let numero = 10;
console.log(numero.toString()); //toString sirve para convertir un numero a string