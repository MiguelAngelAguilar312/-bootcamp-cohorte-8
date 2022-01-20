/* Operaciones Aritmeticas*/
// + - / * % ()

let operacion = 3 * 5 + (10 - 5); // = 20
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4; // = -7
console.log(operacion2)

/* Operadores Relacionales */
// <, >, <=, >=, ==, ===, !=, !==
// booleano puede ser true o false

console.log( 7 < 7); //false no estamos incluyendo el numero a comparar
console.log( 7 <= 7); //true estamos incluyendo el nuemor a comparar

console.log( 7 == '7'); // true compara el valor 
console.log( 7 === '7'); // false compara valor y tipo de dato

console.log( 7 != '7'); // false
console.log( 7 !== '7'); // true

/* Incremento y decremento */
// +=, -=, *=, /=

let incremento = 5;
incremento += 5; // incremento = incremento + 5
console.log(incremento);

let incremento4 = 5;
//incremento += 5; 
incremento4 = incremento4 + 5;
console.log(incremento4);

let incremento2 = 5;
incremento2 -= 5; // incremento = incremento - 5
console.log(incremento2);

let incremento3 = 5;
incremento3 *= 5;  // incremento = incremento * 5  
console.log(incremento3);

let incremento5 = 5;
incremento5 /= 5; // incremento = incremento / 5
console.log(incremento5);


/* Operador unario */
// ++, --
// sumar uno, restar uno

let sumar = 0;
sumar++;
console.log(sumar);

let sumar1 = 0;
console.log(sumar1 + ' linea 57');
sumar1++;
console.log(sumar1 + ' linea 58');
sumar1++;
console.log(sumar1); //2
sumar1--;
sumar1--;
sumar1--;
console.log(sumar1); //-1

/* */
/*for (let i = 0; 1 < 10; i++){
    
}*/

/* 
++variabñes = preincremento - primero modifica el calor y ya despues hace uso de la variable
variable++ = postincremento - usando la variable y despues hace el incremento
*/
let num = 5;
console.log(num++);
console.log(num);

for ( let i = 0; i < 5; i++) {
    // iteracion
    // primer iteracion, se detine
    console.log('Este es el ciclo Padre')
    for (let j = 0; j < 5; j++) {
        // hace sus interaciones (repeticiones) propias
        console.log('Este es el ciclo Hijo')
    }
}