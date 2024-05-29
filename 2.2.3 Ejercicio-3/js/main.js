'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const list = document.querySelector('.list');
const paragraph = document.querySelector('.js__paragraph');
const button = document.querySelector('.js__btn');


button.addEventListener('click', (ev) => {
    list.innerHTML = '<li class="uno">Inception</li><li class="dos">The butterfly effect</li><li>Eternal sunshine of the spotless mind</li><li>Blue velvet</li><li>Split</li>';
});
/* const listaPeliculas = document.querySelector('li'); */

/* const uno = document.querySelector('.uno'); */

list.addEventListener('click', (ev) => {
    /* console.log('currentTarget', ev.currentTarget);
    console.log('target', ev.target);
    console.log(ev.target.innerHTML); */
    const valor = ev.target.innerHTML;
    paragraph.innerHTML = 'La peli seleccionada es: ' + valor;
    
});
