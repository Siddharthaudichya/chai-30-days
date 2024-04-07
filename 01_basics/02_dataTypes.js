let age = 18;
let isLoggedIn = false;
let state = null;

//Types of data types (Primitive)
// number => 2^53
// bigInt
// string = ""
// boolean = true/false
// null = standalone value (Value hai but empty)
// undefined => Value not assigned
// symbol => unique

// checking equal to and strictly equal to
let sage = 18; // Number
let sex = "18"; // String
// Equal to
console.log(sage == sex);
// Strictly equal to
console.log(sage === sex);

// Define symbol
let x = Symbol('sex');
console.log(x.description);

// Object
console.log(typeof null); // Object (IMP interview question)
console.log(typeof undefined); // Undefined