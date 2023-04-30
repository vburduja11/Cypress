let person = {
    firstName : "Vadim",
    lastName : "Burduja"
};

console.log(typeof person);
console.log(person);
console.log(person.lastName);


let adress = {
    'building' : 5555,
    street : 'Keowee',
    state : 'Kentuky'
}
console.log(adress);
console.log(adress['building']);
console.log(adress['street']);

// add new property to object
person.age = 30;
console.log(person);

