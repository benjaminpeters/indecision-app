'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound 

var user = {
    name: 'Ben',
    cities: ['Toronto', 'Muskoka', 'Halifax'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 10, 7, 9],
    multiplyBy: 2,

    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return _this2.multiplyBy * num;
        });
    }
};

console.log(multiplier.multiply());
