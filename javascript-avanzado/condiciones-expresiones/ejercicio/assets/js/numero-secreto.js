/* Escribir un documento html el cual debe contener un input y un botón.
Escribir un programa en donde se defina un número secreto.
Se debe leer el valor que el usuario escriba en el input y darle pistas al usuario sobre si adivinó o no el número secreto.

Si el número que escribio el usaurio es igual al número secreto se debe mostrar Felicidades, adivinaste el número secreto
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 5, se debe mostrar Calienteeeeeeee
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 10, se debe mostrar Caliente
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 20, se debe mostrar Tibio
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 30, se debe mostrar Frio
Si la diferencia entre en número ingresado y el número secreto es mayor a 30, se debe mostrar Congelado */

let secretNumber = parseInt(Math.random()*99+1); // número aleatorio entre 1 y 100
console.log(secretNumber);

function getNumber() {
    let number = document.getElementById('number').value;
    let secretGuess = document.getElementById('secretGuess');
    let guess;
    let difference = Math.abs(secretNumber - number);

    if (number == secretNumber) {
        guess = "Felicidades, adivinaste el número secreto";
    }
    else if (difference <= 5){
        guess = "Calienteeeee";
    }
    else if (difference <= 10 && difference > 5){
        guess = "Caliente";
    }
    else if (difference <= 20 && difference > 10){
        guess = "Tibio";
    }
    else if (difference <= 30 && difference > 20){
        guess = "Frío";
    }
    else {
        guess = "Congelado";
    }

    secretGuess.innerHTML = `<p>${guess}</p>`; 
}