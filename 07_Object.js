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
console.log(person);//{ firstName: 'Vadim', lastName: 'Burduja', age: 30 }

//delete a propertie
delete person.age;
console.log(person);//{ firstName: 'Vadim', lastName: 'Burduja' }

//check propertie if it exist
console.log('street' in adress);//true

// you can put arays inside objects
let course = {
    name:'JS',
    url : 'www.cydeo.com',
    subbjects : ['Objects','Arrays','Functions','Live Server']
}
console.log(course);
