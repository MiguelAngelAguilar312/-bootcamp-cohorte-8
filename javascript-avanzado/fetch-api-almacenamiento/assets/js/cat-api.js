let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () => {
    /* console.log('No me presiones');  */

    // Colocar a trababes de un arreglo
    fetch('https://api.thecatapi.com/v1/images/search')
        /* .then(resp => {
            console.log(resp);
        } ) */
         /* .then (function (resp) {return resp.json()}
        ) .then( data => {
            console.log (data);
        }) */
        .then (resp => resp.json()) .then( data => {
            console.log (data);
            let imagenGatito = document.createElement('img');
            imagenGatito.src = data[0].url;
            document.body.appendChild(imagenGatito);
        });

    // Colocar a trabes e un objeto 
    fetch('https://dog.ceo/api/breeds/image/random')
        /* .then(resp => {
            console.log(resp);
        } ) */
         /* .then (function (resp) {return resp.json()}
        ) .then( data => {
            console.log (data);
        }) */
        .then (resp => resp.json()) .then( data => {
            console.log (data);


            let imagenGatito = document.createElement('img');
            imagenGatito.src = data.message;
            document.body.appendChild(imagenGatito);
        });
       
});