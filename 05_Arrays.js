/**
 * There is no collections in JS. In JS we only have Arrays and Map
 * NOT Fixed size
 * 1: [] --> creates Array
 * 2: {} --> creates an Object
 * 
 */
let scores = new Array();// creates an empty array
let numbers = new Array(10)// creates an array size 10
let emptyArray = [];// crates an empty array
let myNumbers=new Array(1,2,3,5,8,13);
let colors = ['red','green','blue'];

console.log(scores);
console.log(numbers);
console.log(emptyArray);
console.log(myNumbers);
console.log(colors);


//print second element in array

console.log(colors[1]);//index based

// add element to an Array
colors.push("white");
console.log(colors);

// add element to the begining of the Array
colors.unshift("orange");
console.log(colors);


console.log(colors.pop());//giving the last element and removing at the same time: white
console.log(colors);


//the size of the array
console.log(colors.length);
for (let i = 0; i < colors.length; i++) {
   console.log(colors[i])
    
}

// loop with values of Array
for(let value of colors){
   console.log(value);
}

colors.forEach(element => {
   console.log(element);
});

// can we add multiple type data? YES

let soupOfData =[5,'oscar',true,undefined];// you can also put Map,Object, Functions
//inside Array
soupOfData.forEach(element=>{
   console.log(typeof element)
});


