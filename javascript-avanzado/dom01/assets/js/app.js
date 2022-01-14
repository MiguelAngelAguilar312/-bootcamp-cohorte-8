let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto esta escrito desde Javascript'


let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/*parrafos[0].textContent = 'Parrafos escritos desde Javascript';
parrafos[1].textContent = 'Esto esta escrito con Javascript';*/

/*for(let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = 'Parrafo ' + i + ' esta escrito por javascrpit'
}*/

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation() {
    console.log(email.value);
    console.log(password.value);
}
