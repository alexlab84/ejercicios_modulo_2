'use strict';

const nameInput = document.querySelector('.js__nameInput');
const button = document.querySelector('.btn');
const saludo = document.querySelector('.saludo');

button.addEventListener ('click' , (ev) => {
    const name = nameInput.value;

    const greeting = 'Hola ' + name + '!';

    saludo.innerHTML = greeting;
});