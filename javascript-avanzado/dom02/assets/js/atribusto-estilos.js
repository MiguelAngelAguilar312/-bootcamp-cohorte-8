let $title = document.querySelector('#title');
let $texto = document.querySelector('.texto');
$texto.id = 'texto';
/* $texto.style = 'color: red; font.size: 24px'; */
$texto.className = 'bg-purple h3';
/* $texto.className = 'h3'; */
$texto.classList.add('text-center');
$texto.classList.remove('bg-purple');