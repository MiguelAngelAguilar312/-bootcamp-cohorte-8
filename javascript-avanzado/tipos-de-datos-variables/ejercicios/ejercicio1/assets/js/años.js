const anio = 2022;

function getEdad() {
    let edad = document.getElementById("edad");
    console.log(edad.value);
    if (isNaN(edad.value)) {
        document.getElementById("respuesta").
        innerHTML = "Eso no es un numero";
    }
    else if (anio - edad.value > 1900) {
        anioDeNacimiento = anio - edad.value;
        document.getElementById("respuesta").
        innerHTML = "Tu naciste el año de " +  anioDeNacimiento ;
    }
    else {
        document.getElementById("respuesta").
        innerHTML = "No puedes tener esas edad";
    }
}