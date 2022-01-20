/*Objeto es una estructura que le da propiedas al contenido dentro de este objeto, 
tambien lo cual tiene metodos lo que genera acciones dentro de este objeto*/

let cadena1 = 'Hola';
console.log(cadena1);

let cadena2 = new String('Adios'); // Obejto String
console.log(cadena2);

/* let arreglo = new Array(1); // Obejto vacio
console.log(arreglo); */

// includes() busca una cadena en otra y regresa true o false
console.log(cadena2.toLowerCase().includes('a'));
// convierte toLowerCase a minusculas y toUpperCase a mayusculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

// cohersión y conversión
// cohersión - Javascrpit convierte en automatico a un tipo de dato en otro
console.log(cadena1.toLowerCase());
console.log(cadena1.toUpperCase());

/* Función que recibe una palabra y la regresa invertida */

let palabra = 'Hola Mundo';
let arreglo = palabra.split('');
/* console.log(arreglo); */
/* let arregloAlReves = arreglo.reverse();
console.log(arregloAlReves); */
/* console.log(arreglo.reverse()); */
console.log(arreglo.reverse().join(''));

/* function invertirPalabra(cadena){
    let arreglo = cadena.split(); // convirtiendo la cadena en un arreglo
    let arregloAlReves = arreglo.reverse(); // invirtiendo el arreglo
    arreglo.reverse();
    let cadenaInvertida = arreglo.join(); // une los elementos de un arreglo y regresa un string
    return console.log(arreglo);
    return console.log(cadenaInvertida);
} */

/* invertirPalabra('Generation'); */

function invertirPalabra() {
    let string = document.getElementById('word').value;
    let showWord = document.getElementById('show-word');
    stringReversed = string.split("").reverse().join("");
    
    showWord.innerHTML = `<p>Palabra: ${string}</p>
                            <p id="ReversedWord">Palabra invertida: ${stringReversed}</p>`

    let reversedWord = document.getElementById('ReversedWord');
    reversedWord.style.fontWeight = "bold";
}
