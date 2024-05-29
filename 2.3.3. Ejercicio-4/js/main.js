'use strict';

const age = document.querySelector('.dog_age');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    
    if (age.value === '1') {
        result.innerHTML = 'Tu perro tiene 15 años humanos';
    } else if (age.value === '2') {
        result.innerHTML = 'Tu perro tiene 24 años humanos';
    } else if (age.value >= '3') { 
        const mayorDeTres = 24 + (age.value -2) *5;
        result.innerHTML = 'Tu perro tiene ' + mayorDeTres + ' años humanos';

    } else {
        result.innerHTML = 'El numero no es correcto';
    }
});