// Lecture 4
const accountId = 63764;   //const variable value never changes.
let accountEmail = "siddharth";
var accountPass = "12345";
var accountCity = "Bhopal";
let accountState;

// Identifiers: They are the names of functions, variable, types and labels
// Literals: Values of constant variables are called literals. They represent that values are final and cannot be changed. 
// Keywords: Reserved word in any programming language

//accountId = 356636;    value cannot be changed of constant
// console.log(accountId);  

accountEmail = "asdjfj";     // you cannot define same variable again but change the value

//  console.log(accountEmail);  
var accountPass = "aushfh";   //I var we can redefine the variable and reasign the value
// console.log(accountPass);  

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);

// prefer not to use var.
// because of issue in block scope and functional scope.

// function scope = when a variable is declared inside a function, it is only accessible within that funtion and cannot be used outside that function.
// Block scope = A variable when declared inside if , for, switch, loop, while , are accessible within that particular condition or loop.

// var is a functional scope.
// let and const are block scope.
//gheheh