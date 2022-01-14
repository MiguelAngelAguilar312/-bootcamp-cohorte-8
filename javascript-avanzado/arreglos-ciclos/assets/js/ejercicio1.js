/* Crear un arreglo con 20 numeros Mostrar en HTML
hacer la suma de dichos numeros y el promedio */

let numeros = [8, 9, 7, 9, 10, 6, 8, 7, 8, 8, 9, 10, 6, 5, 9, 7, 8, 8, 9, 10, 8, 9];

let sumaArreglo = 0;

for (let i = 0; i < numeros.length ; i++) {
    sumaArreglo += numeros[i]; 
};

document.write ('<br>' + 'Esta es la suma de las calificaciones del grupo ' + sumaArreglo + '<br>'); 

let promedio = sumaArreglo / numeros.length;

document.write ('<br>' + 'Este es el promedio de las calificaciones del grupo ' + promedio + '<br>');
