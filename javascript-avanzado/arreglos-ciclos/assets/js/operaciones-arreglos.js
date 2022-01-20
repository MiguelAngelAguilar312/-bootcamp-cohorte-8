let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123];

                        // i, index, array
numeros.forEach(function(elemento, indice, arreglo) {
    /* document.write(el + ', '); */
    document.write(elemento + '-' + indice + '<br>');
    /* document.write(arreglo); */
})

let frutas = ['mango', 'uva', 'piña'];
// apunta a la misma dirección de memoria
let frutas2 = frutas;

document.write('<br>' + frutas);
document.write('<br>' + frutas2 + '<br>');

// se anexa el valor a ambos arreglos
frutas2.push('pera');
document.write('<br>' + frutas);
document.write('<br>' + frutas2 + '<br>');

document.write('<br>');
let frutas3 = ['mango', 'uva', 'piña'];
// Copiar el arreglo en uno nuevo
let frutas4 = frutas3.map(function(elemento) {
    return elemento;
});

document.write('<br>' + frutas3);
document.write('<br>' + frutas4 + '<br>');

// se anexa el valor solo al segundo arreglo
frutas4.push('pera');
document.write('<br>' + frutas3);
document.write('<br>' + frutas4 + '<br>');

/* .includes() -------------------- */
document.write('<br><h3>.includes()</h3>');
document.write(`numeros ${numeros.includes('hola') ? "sí" : "no"} incluye "hola"`);
document.write(`<br>numeros ${+ numeros.includes(328) ? "sí" : "no"} incluye 328<br>`);

/* Funcionamiento:
let numerosPares = numeros.filter(num => {
    if (num % 2 === 0) {
        return true; // agregar elemento al arreglo
    }
    else {
        return false; // no agregar elemento al arreglo
    }
}); 
*/

frutas = ['Mango', 'uva', 'piña', 'mandarina', 'manzana', 'aguacate'];

let numerosPares = numeros.filter(num => num % 2 === 0);
document.write('<br>Números pares: ' + numerosPares + '<br>');

let frutasFilto = frutas.filter(fruta => fruta.toLowerCase().includes('i'));
document.write('<br>Frutas que incluyen "i": ' + frutasFilto);
let frutasFilto2 = frutas.filter(fruta => fruta.includes('M' || 'm'));
document.write('<br>Frutas que incluyen "m": ' + frutasFilto2);

/* .sort() -------------------- */
document.write('<br><h3>.sort()</h3>');
let otrosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write(otrosNumeros.sort() + '<br>');
document.write('<br>Sin parámetros, .sort() ordena los elementos de acuerdo con su primer item: ' + numeros.sort());
document.write('<br>Ordenar los elementos de menor a mayor: ' + numeros.sort((a,b) => {return a-b}));
document.write('<br>Ordenar los elementos de mayor a menor: ' + numeros.sort((a,b) => {return b-a}));

/* Reverse invierte el orden de los elementos de un arreglo */
document.write('<br>' + numeros.reverse() + '<br>');

/* .find() -------------------- */
/* 
    Parecido al filter. Busca un elemento que cumple una condición
    o uno específico. Sólo devuelve un elemento, el primero que encuentre
 */
    document.write('<br><h3>.find()</h3>');
let frutaEncontrada = frutas.find(el => el.includes('ma'));
document.write(frutaEncontrada + '<br>');