'use strict';

// QUERY-SELECTOR

const bookOne = document.querySelector('.js__libro1');
const bookTwo = document.querySelector('.js__libro2');

const btn = document.querySelector('.js__btn');

const result = document.querySelector('.js__result');


// EVENTOS

btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    let books = [];
    let newBooks = books.push(bookOne.value, bookTwo.value);
    console.log(newBooks);
    
    for (const newBooks of books) {
        
        result.innerHTML = `¡A mí también me encantó ${bookOne.value}!
                            ¡A mí también me encantó ${bookTwo.value}! 
                            Tenemos mucho en común, humana.`;
    }; 

}); 

