'use strict';

const cestaPeras = {
    max: 1000,
    min: 1,
    actual: 0,
    inicial: 0,
    add: function (num) {
        const add = this.inicial + num;
        this.actual = this.inicial + num; 
        return add;
    },
    remove: function (num) {
        return this.add(this.actual) - num;
    },
    reset: function () {
        return this.inicial;
    }
};


console.log(cestaPeras.add(80));
console.log(cestaPeras.remove(10));
console.log(cestaPeras.reset());







