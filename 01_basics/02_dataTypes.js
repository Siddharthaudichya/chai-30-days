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

console.log("---------------");

// bigInt definition
let bigNum1 = BigInt(678136568658736587);
//or
let bigNum2 = 5873845738758989347n;    // Append 'n' at the end of the value

console.log(bigNum1);
console.log(bigNum2);

console.log("---------------");

// Define symbol
let x = Symbol('prajwal');
console.log(x.description);

// checking if two variables with two data type symbol and same values are equal or not
const id = Symbol("123");
const anotherID = Symbol("123");

console.log(id == anotherID);   //False

console.log("---------------");

// Object
console.log(typeof null); // Object (IMP interview question)
console.log(typeof undefined); // Undefined

console.log("---------------");

// Non-Primitive data types definition

// Arrays
let villiansNames = ["kirmada", "Mayandari", "Monjolika"];
console.log(villiansNames[1]);

// Objects
let empInfo = {
     name: "siddharth",
     age: 21,
     sex: "abhi tak Nahi kiya 21 saal ka ho gya"
}

console.log(empInfo.sex);

console.log("---------------");

// Functions
let FirstName = "Siddharth";
let LastName = "Audichya";

// Method 1 : Defining it Separately
function index1 (fName , lName) {
    console.log(fName+ " " +lName);
}

index1 (FirstName, LastName);

// Method 2 : Storing it in a variable
let index2 = function(fName, lName) {
    return fName+ " " + lName;
}

console.log(index2(FirstName, LastName));
