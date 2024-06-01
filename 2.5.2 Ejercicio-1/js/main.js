'use strict';

/*         function handleClick() {
            //Codigo a ejecutar cuando hacemos click
            console.log('¡Has hecho click en el boton!');
        }

        const myButton = document.querySelector('.js__btn');
        myButton.addEventListener('click', handleClick); //Aqui no le ponemos los parentesis */

const btn = document.querySelector('.js__btn');

const counter = document.querySelector('.counter');

function increaseNumber() {
    return counter.innerHTML++;
}

btn.addEventListener('click', increaseNumber);