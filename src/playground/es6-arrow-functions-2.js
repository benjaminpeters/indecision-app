// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound 

const user = {
    name: 'Ben',
    cities: ['Toronto', 'Muskoka', 'Halifax'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,10,7,9],
    multiplyBy: 2,

    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply());