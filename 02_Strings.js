let str1 = 'Java';
let str2 = 'Script';
let str3 = 'awesome';

let result;

result = " the result variable is: "+str1+str2+ " "+ str3;// like java

console.log(result);

result = `the result variable is: ${str1}${str2} ${str3}`

console.log(result);

//constant variables
const number = 35;
//TypeError: Assignment to constant variable.
//number = 45;

console.log(number);