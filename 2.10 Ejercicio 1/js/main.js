'use strict';

function get100Numbers () {
    
    let numbers = [];
    for (let i = 1; i <= 100; i++) {
        numbers.push(i);
    }
    return numbers;
    
}


let result = get100Numbers();
console.log(result);


function getReverse100Numbers() {
    let numbers = get100Numbers();
    numbers.reverse();
    return numbers;
}

let resultado = getReverse100Numbers();
console.log(resultado);


       /* EJERCICIO 2 */


const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            array.push(arr[i]);
        }
        
    }
    return array;
}

let resultado1 = bestLostNumber(lostNumbers);
console.log(resultado1);

function anotherLostNumbers(arr) {
    let array2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            array2.push(arr[i]);
        }
        
    }
    return array2;
}

let resultado2 = anotherLostNumbers(lostNumbers);
console.log(resultado2);

let arrayConcatenado = resultado1.concat(resultado2);
console.log(arrayConcatenado);