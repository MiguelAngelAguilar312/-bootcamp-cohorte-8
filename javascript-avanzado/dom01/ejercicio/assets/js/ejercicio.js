/* Crea un documento HTML, este contendra un titulo
que diga hola, nombre y un boton qye diga cambiar nobre.
Cuando el boton  se presione aparecera un promt en donde el 
usuario pueda cambiar o colocar su nombre, despues el titulo
cambiara a Hola +  el nobe del usuario. */

let titulo = document.getElementById('titulo');

function cambiarNombre(){
    let nombre = prompt('Escribe tu nombre, por favor.');
    if (nombre != null){
        titulo.textContent = `Hola ${nombre}`;
    }
    else{
        titulo.textContent = 'Hola Usuario';
    }
}