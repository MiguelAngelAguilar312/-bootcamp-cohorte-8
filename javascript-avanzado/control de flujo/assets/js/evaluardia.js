/*
Domingo === 0
Lunes === 1
Martes === 2
Miercoles === 3
Jueves === 4
Viernes === 5
Sabado === 6
*/

let dia = 4;

/*
if(dia === 0){
    console.log('Domingo');
}
else if(dia === 1){
    console.log('Lunes');
} 
else if(dia === 2){
    console.log('Martes');
} 
else if(dia === 3){
    console.log('Miercoles');
} 
else if(dia === 4){
    console.log('Jueves');
} 
else if(dia === 5){
    console.log('Viernes');
} 
else if(dia === 6){
    console.log('Sabado');
} 
else{
    console.log('Eses no es un dia')
}
*/

/* Switch - case */

/*
switch(variables a evaluar){
    case valor:
        -codigo a ejecutar-
    break;
    case valor:
        -codigo a ejecutar-
    break;
    default:
        - codigo a ejecutar si sale las opciones -
    break;
}*/

switch (dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('No es un dia valido');
        break;
}

let cuponDescuento = 'Oro';
let descuento;

switch(cuponDescuento){
    case 'Bronce':
        descuento = 5;
    break;
    case 'Plata':
        descuento = 10;
    break;
    case 'Oro':
        descuento = 15;
    break;
    default:
        console.log('Cupon erróneo');
    break;
}

console.log(descuento);
