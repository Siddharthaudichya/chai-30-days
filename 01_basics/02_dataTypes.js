// Lecture 5
let age = 18;
let isLoggedIn = false;
let state = null;

//Types of data types:
/* Primitive
    number => 2^53
    bigInt
    string = ""
    boolean = true/false
    null = standalone value (Value hai but empty)
    undefined => Value not assigned
    symbol => unique
*/
/* Non-Primitive
    Objects
    Arrays
    Functions
*/

// checking equal to and strictly equal to
let sage = 18; // Number
let mage = "18"; // String
// Equal to
console.log(sage == mage);
// Strictly equal to
console.log(sage === mage);

// 
console.log("---------");

// bigInt definition
let bigNum1 = BigInt(8723546324567423);
// or
let bigNum2 = 345673546735646n; // Append `n` at the end of the value

// 
console.log("---------");

// Define symbol
let x = Symbol('prajwal');
console.log(x.description);

// Checking if two variables with data type symbol and same values are equal or not
const id = Symbol("123");
const anotherID = Symbol("123");

console.log(id === anotherID);

// 
console.log("---------");

// Object
console.log(typeof null); // Object (IMP interview question)
console.log(typeof undefined); // Undefined

// 
console.log("---------");

// Non primitive data types definition

// Arrays
let villianNames = ["Kirmada", "Maayandri", "Zimbara", "Monjolika"];
console.log(villianNames[1]);
console.log(typeof villianNames);

// 
console.log("---------");

// Objects
let empInfo = {
    name: "Ajjay",
    age: 69,
    sex: "Transgender",
}
console.log(empInfo.age);
console.log(typeof empInfo);

// 
console.log("---------");

// Functions
let firstName = "Ajjay";
let lastName = "Bhaiya";

// Method 1: Defining it separately
function stuName1(fName, lName) {
    console.log(fName + " " + lName);
}

stuName1(firstName, lastName);

// Method 2: Storing it in a variable
firstName = "Kishlay";
lastName = "Chutiya";

let stuName2 = function(fName, lName) {
    return fName + " " + lName;
}

console.log(stuName2(firstName, lastName));
console.log(typeof stuName2);