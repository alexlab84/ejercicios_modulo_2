'use strict';

const adalabers = [
    {
        name: 'Maria',
        age: 29,
        profession: 'Diseñadora',
    },
    {
        name: 'Lucia',
        age: 31,
        profession: 'Ingeniera química',
    },
    {
        name: 'Susana',
        age: 34,
        profession: 'Periodista',
    },
    {
        name: 'Rocio',
        age: 25,
        profession: 'Actriz',
    },
    {
        name: 'Inmaculada',
        age: 21,
        profession: 'Diseñadora',
    },
];

/* professions = Object.groupBy(adalabers, (elem) => elem.profession); */

const professiones = {
    'Diseñadora': [
        {
            name: 'Maria',
            age: 29,
            profession: 'Diseñadora',
        },
        {
            name: 'Inmaculada',
            age: 21,
            profession: 'Diseñadora',
        },
    ],
    'Ingeniera química': [
        {
            name: 'Lucia',
            age: 31,
            profession: 'Ingeniera química',
        },
    ],
    'Periodista': [
        {
            name: 'Susana',
            age: 34,
            profession: 'Periodista',
        },
    ],
    'Actriz': [
        {
            name: 'Rocio',
            age: 25,
            profession: 'Actriz',
        },
    ],
}


// Usos:
// 1. Contar ( .length )
// 2. Sumar
// 3. Media
// 4. Contar con condicion / Sumar con condicion
// 5. Record
// 6. Render 
// 7-8-9. Filtrar ( .filter() ) / Convertir ( .map() ) .find()
// 10. Agrupar

function contar(array) {
    let num = 0;

    for( const elem of array ) {
        num += 1;
    }

    return num;
}

const cuantosHay = contar(adalabers);  // const cuantosHay = adalabers.length;

function sumar(array) {
    let sum = 0;

    for( let i = 0; i < array.length; i++ ) {
        sum += array[i].age;
    }

    return sum;
}

const cuantoSumanSusEdades = sumar(adalabers);


function media(array) {
    let sum = 0;
    let count = 0;  // No hace falta, para nada

    for( let i = 0; i < array.length; i++ ) {
        count++;
        sum += array[i].age;
    }

    const avg = sum / count;

    return avg;
}

const mediaDeEdades = media(adalabers);



function mediaDeEdadSegunProfesion(array, profession) { // const array = adalabers; const profession = 'Diseñadora';
    let count = 0;
    let sum = 0;

    for( const elem of array ) {
        if( elem.profession === profession ) {
            sum += elem.age;
            count++;
        }
    }

    const avg = sum / count;

    return avg;
}

const mediaDeEdadesDeLasDiseñadoras = mediaDeEdadSegunProfesion(adalabers, 'Diseñadora');
const mediaDeEdadesDeLasQuimicas = mediaDeEdadSegunProfesion(adalabers, 'Ingeniera química');


function buscarLaMasJoven(array) {
    let menor = array[0].age;

    for( const elem of array ) {
        if( elem.age < menor ) {
            menor = elem.age;
        }
    }

    return menor;
}

function buscarLaMasMayor(array) {
    let mayor = array[0].age;

    for( const elem of array ) {
        if( elem.age > mayor ) {
            mayor = elem.age;
        }
    }

    return mayor;
}

const edadMasMayor = buscarLaMasMayor(adalabers);


function filtrarPorProfesion( array, profession ) {
    const filtrados = [];

    for( const elem of array ) {
        if( elem.profession === profession ) {
            filtrados.push(elem);
        }
    }

    return filtrados;
}

const soloPeriodistas = filtrarPorProfesion( adalabers, 'Periodista' );


/* if( diaSemana === 1 ) {
    console.log('Es lunes');
}
else if( diaSemana === 2 ) {
    console.log('Es martes');
}
else if( diaSemana === 3 ) {
    console.log('Es miercoles');
}
else if( diaSemana === 4 ) {
    console.log('Es jueves');
}
else if( diaSemana >= 6 ) {
    console.log('Es finde');
}

switch( diaSemana ) {
    case 1: 
        console.log('Es lunes');
        break;
    case 2: 
        console.log('Es martes');
        break;
    case 3: 
        console.log('Es miercoles');
        break;
} */


function countAdalabers(object) {
    return adalabers.length;
    console.log(adalabers.length);
}

const miembros = countAdalabers(adalabers);
console.log(miembros);

function averageAge(objeto) {
    let totalAge = 0;
    for (let i = 0; i < adalabers.length; i++) {
        totalAge += adalabers[i].age;
        
    }
    return totalAge / miembros
}

const media = averageAge(adalabers);
console.log(media);