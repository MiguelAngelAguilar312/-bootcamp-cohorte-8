/* let $title = document.getElementById('title');
console.log(title.textContent);
title.textContent = 'Titulo escrito desde JS'; */

/*
.clase
#id
etiqueta
*/

let $title = document.querySelector('#title');
$title.textContent = 'Titulo escrito por Javascript';

let $parrafo = document.querySelector('p');
/* console.log($parrafo.textContent); */

let $parrafos = document.querySelectorAll('p');
/* console.log($parrafos[1].textContent); */

/* Crear un elemento desde el JS */

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo creado desde JS';
// document.body.append agrega un elemento dentro del body a la parte final
/* document.body.append(subtitulo); */
$title.insertAdjacentElement('afterend',subtitulo);
$title.remove();


// Remplazar contenido en el HTML con JS
let $contenido =  document.querySelector('#contenido');
/* console.log($contenido.textContent = '<br>');
console.log($contenido.innerHTML = '<br>');
console.log($contenido.outerHTML = 'hola'); */

// Insertar elemento en el HTML con el JS
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);