/*
Buenos dias 6 ---- 11
Buenas tarde 12 ---- 18
Buenas noches 19 ----- 23
Dejame dormir 0 ----- 5
*/

let hora = parseInt(prompt("Ingresa la hora:"));

if (hora >= 6 && hora <= 11){
    console.log('Buenos días');
}
else if (hora >= 12 && hora <= 18){
    console.log('Buenas tardes');
}
else if (hora >= 19 && hora <= 23){
    console.log('Buenas noches');
} 
else if (hora >= 0 && hora <= 5){
    console.log('Déjame dormir');
}
else {
    console.log('Esa no es una hora >:(');
}