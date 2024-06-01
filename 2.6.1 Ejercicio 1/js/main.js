'use strict';

function calculateBoxModel(boolean, num1, num2,num3) {
    const borderBox = num1 + num2 + num3;
    const contentBox = num1;
    if(boolean === true) {
        return `El ancho del contenido es: ${contentBox} y el ancho total de la caja es: ${borderBox}`
    } else {
        return `El ancho del contenido es: ${contentBox} y el ancho total de la caja es: ${contentBox}`
    }
    
    

}

const calculator = calculateBoxModel(true, 50, 10, 10);
console.log(calculator);

const calculator2 = calculateBoxModel(false, 50, 10, 10);
console.log(calculator2);