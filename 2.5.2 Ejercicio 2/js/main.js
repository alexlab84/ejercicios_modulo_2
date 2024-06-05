'use strict';

const button = document.querySelector('.btn');

const body = document.querySelector('.js__body');
const rojo = '#ff5733';
const azul = '#57ff11';
const verde = '#3311ff';

function setRedColor() {
    body.classList.remove('verde');
    body.classList.remove('azul');
    body.classList.add('rojo');
}


function colorChange () {
    const color = Math.random();
    
    if( color < 0.33 ) {
        setRedColor();
    }
    else if( color < 0.66 ) {
        body.classList.remove('verde');
        body.classList.remove('rojo');
        body.classList.add('azul');
    }
    else {
        body.classList.remove('rojo');
        body.classList.remove('azul');
        body.classList.add('verde');
    }

    const red = getRandomColorComponent();
    const green = getRandomColorComponent();
    const blue = getRandomColorComponent();

    setBackgroundColor(red, green, blue);
}

function getRandomColorComponent() {
    return parseInt(Math.random()*255);
}

function setBackgroundColor(red, green, blue) {
    body.style.backgroundColor = 'rgb('+red+', '+green+', '+blue+')';
}

button.addEventListener('click', colorChange);

//pasando las variables de colores a un array y trabajando con indices(Math.floor)
