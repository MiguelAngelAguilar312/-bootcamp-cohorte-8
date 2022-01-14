let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123];

/*numeros.forEach(elemento, => {
    document.write(elemento + ', ');
});*/

/*numeros.forEach( function (elemento, indice) {
    document.write(elemento + '-' + indice + '</br>');
});*/

numeros.forEach( function (elemento) {
    document.write(elemento + ', ');
});


//-------------------------------------------------------------------------------------------

let numeros2 = numeros.map( function(elemento) {
    return elemento * 1.15;
})

document.write('<br>' +  numeros2  + '<br>');

//-------------------------------------------------------------------------------------------

/*let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemento) { 
    return elemento;
});

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');*/

//--------------------------------------------------------------------

/* Includes */

document.write( '<br>' + numeros.includes('hola') + '<br>');

//---------------------------------------------------------------------

/* Filter */

let numerosPares = numeros.filter((elemento) => {
    /*if( elemento % 2 == 0) {
        return true;
    } else {
        return false
    }*/
    
    //console.log(elemento % 2 == 0);

    //return elemento % 2 == 0;

    if(elemento > 10) {
        return true;
    }
});

document.write('<br>' + numerosPares + '<br>');

let frutas = ['Mango', 'Uva', 'Piña', 'Mandarina', 'Manzana', 'Aguacate', 'Sandia', 'Melon', 'Kiwi', 'Platano'];

let frutasFiltro = frutas.filter((fruta) => {
    /*if(fruta.includes('z') == true ) {
        return true;
    }*/

    /* Mango toLowerCase mango.include('m'); */
    /* mango toUperCase Mango.include('M') */

    return fruta.toLowerCase().includes('m');

});

document.write('<br>' + frutasFiltro + '<br>');