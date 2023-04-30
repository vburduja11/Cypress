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


//loop useing keys of the object

for (let key in course) {
    console.log(key+" : "+course[key]);
}

// we will have fixtures folder in Cypress tool, we store JSON files


// lets create an object with function, array, object in it
let myCar = {
    make : 'Dacia',
    color : 'Orange',
    year : 2022,
    engine : {
        celinders : 3,
        size : 1.0,
    },
    extras : ['AC','Cruise Control','Sound System'],
    drive : function () {
        console.log("Running on LPG");
    }
}
myCar.drive();// like in JAVA
console.log(myCar.extras[1]); // we are familiar from API testing



