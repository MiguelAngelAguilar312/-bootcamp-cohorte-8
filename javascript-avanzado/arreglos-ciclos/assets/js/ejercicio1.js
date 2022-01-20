/* 
    Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio.
*/

let array = new Array();
let show = document.getElementById('show');
let suma = document.getElementById('suma');
let promedio = document.getElementById('promedio');

function getArray() {
    for (let i=0; i<20; i++) {
        array[i] = parseInt(Math.random()*100);
    }

    const sum = array.reduce((total, value) => total + value, 0);

    const prom = sum / array.length;

    show.textContent = `Arreglo: ${array}`;
    suma.textContent = `Suma del arreglo: ${sum}`;
    promedio.textContent = `Promedio del arreglo ${prom}`;
}

getArray();