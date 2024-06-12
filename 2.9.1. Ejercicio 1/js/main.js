'use strict';

/* for (let i = 1; i <= 10; i++) {
    debugger;
    console.log(`Voy por la vuelta ${i}`)
    
} */

/* let acc = 0;

for (let i = 0; i < 10; i++) {
    debugger;
    acc += 2;
    console.log(`El resultado es: ${acc}`);

} */


let numbers = [8, 2, 4, 10, 6];

//let acc = 0;

/* for (let i = 0; i < numbers.length; i++) {
    debugger;
    let media = acc += numbers[i] / numbers.length;
    console.log(media);
    
} */

/* numbers.push(12);
console.log(numbers); 

numbers =  [8, 2, 4, 10, 6, 12];

console.log(numbers); */


/* let acc = 0;

for (let i = 0; i < numbers.length; i++) {
    debugger;
    let media = acc += numbers[i] / 6;
    console.log(media);
    
} */



function average(array) {
    let acc = 0;
    for (let i = 0; i < array.length; i++) {
        debugger;
        let media = acc += array[i] / array.length ;
        console.log(media);
    }
}

//average([5, 10, 8, 6, 14, 12]);

average([144, 108, 206, 300, 88, 10, 96, 78, 50, 100]);