// Lecture 5
let age = 18;
let isLoggedIn = false;
let state = null;

/*
Types of data types (Primitive)
number => 2^53
bigInt
string = ""
boolean = true/false
null = standalone value (Value hai but empty)
undefined => Value not assigned
symbol => unique  
*/

/*
non primitive data types
Arrays 
functions(methods)
object
*/

// checking equal to and strictly equal to
let sage = 18; // Number
let mage = "18"; // String
// Equal to
console.log(sage == mage);
// Strictly equal to
console.log(sage === mage);

// Define symbol
let x = Symbol('prajwal');
console.log(x.description);

// Object
console.log(typeof null); // Object (IMP interview question)
console.log(typeof undefined); // Undefined