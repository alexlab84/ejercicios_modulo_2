'use strict';
/*
const paragraph = document.querySelector('.js__paragraph');

const hiddenParagraph = document.querySelector('.js__hidden');

paragraph.addEventListener('click', (ev) => {
    hiddenParagraph.classList.remove('hidden_paragraph');
    
});

*/

const paragraph = document.querySelector('.js__paragraph');

const body = document.querySelector('body');

paragraph.addEventListener('click', function (ev) {
    body.innerHTML = body.innerHTML + '<p>Nuevo parrafo</p>';
});

document.getElementById('un_id') == document.querySelector('#un_id')