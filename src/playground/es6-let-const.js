var nameVar = 'Ben';
console.log('nameVar', nameVar);

let nameLet = 'Benny';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = "Hal";
    return petName;
}

// Block scoping

const fullName = 'Benjamin P';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);