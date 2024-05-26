'use strict';

const button = document.querySelector('.js__btn');
const hidden = document.querySelector('.js__hidden');


button.addEventListener('click' , (ev) => {
    hidden.classList.toggle('hidden');
});