'use strict';

const cestaPeras = {
    max: 1000,
    min: 1,
    actual: 0,
    inicial: 0,
    add: function (num) {
        //const add = this.inicial + num;
        
        if (this.actual + num > this.max) {
            console.log('Te has pasao');
            return;
        } else {
            this.actual = this.actual + num;
        }

         
        //return add;
    },
    remove: function (num) {

        
        if (this.actual - num < this.min) {
            console.log ('No llegas');
        } else {
            this.actual = this.actual - num;
            console.log ('Sigue su curso peril')
        }

        //this.actual -= num;
        //const actulizar = this.actual - num;

        //return this.add(this.actual) - num;
    },
    reset: function () {
        this.actual = this.inicial; 
    }
};

console.log(cestaPeras);
debugger;
console.log('cestaPeras.add(80);')
cestaPeras.add(80);

console.log(cestaPeras);

console.log('cestaPeras.add(50);')
cestaPeras.add(5000);

console.log(cestaPeras);

console.log('cestaPeras.remove(5000)');
cestaPeras.remove(5000);

console.log(cestaPeras);

/* console.log(cestaPeras.add(80)); */


console.log('cestaPeras.reset()');
cestaPeras.reset();

console.log(cestaPeras);







