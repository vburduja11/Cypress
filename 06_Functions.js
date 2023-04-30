//no acces modifier, no method overloading

function add(a,b) {
    console.log("Total is : "+(a+b));// NO Return type
    
}
add (10,20);// call a function --> argument we a passing

// return type functions

function multiply(a,b) {
    return (a*b);
}
console.log(multiply(10,20));

//no overloading
add(10,20,30,200);// ignores after the second parameter
/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * they call functions as first class citizens of Javascript
 * 1: you can pass a function as an aruments to other functions
 * 2: you can return a function from function
 * 3: you can store function into variable
 */

let divide = function (a,b) {
    return a/b;
    
}

console.log(divide(30,5));

let anyFunction = divide;

console.log(anyFunction(30,5));

//pass a function as an aruments to other functions

function sum(a,b) {
    return a+b;
}

function average(a,b,fn) {
    return fn(a,b)/2;
}

let aveResult = average(10,20,sum);

console.log(aveResult);

aveResult = average(10,20,multiply);

console.log(aveResult);

