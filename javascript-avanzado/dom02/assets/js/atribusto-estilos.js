let $title = document.querySelector('#title');
let $texto = document.querySelector('.texto');
$texto.id = 'texto';
/* $texto.style = 'color: red; font.size: 24px'; */
$texto.className = 'bg-purple h3';
/* $texto.className = 'h3'; */
$texto.classList.add('text-center');
$texto.classList.remove('bg-purple');
$texto.classList.toggle('h3')
/* $texto.className =  */
/* $texto.className = 'h3' */

const body = document.querySelector('body')

function cambiarColor(){
    const color = document.getElementById('color').value
    console.log(color)
    body.style.backgroundColor = color
}