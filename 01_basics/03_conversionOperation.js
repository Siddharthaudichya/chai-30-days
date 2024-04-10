// Lecture 6
// For Number
let score1 = "78";

console.log(score1 + 78); // 7878
console.log(typeof(score1)); // string

score1 = Number(score1);

console.log(score1 + 78); // 156
console.log(typeof(score1)); // number


// 
console.log("---------------");

// NaN(Not a Number) 
let score2 = "33abc";

// Convert `converted1` into Number data type
let converted1 = Number(score2);

// Check the value of `converted`
console.log(converted1); // NaN
// Check the data type of `converted`
console.log(typeof(converted1)); // number


// 
console.log("---------------");

// null and undefined
let score3 = null; // works same if value is `undefined`

// Data type of `score3` that is null is object
console.log(typeof(score3)); // object for null and undefined for undefined value

// Type conversion to Number
let converted2 = Number(score3);

// Data type of `converted2` is number
console.log(typeof(converted2)); // number
// Check the value of `coverted2`
console.log(converted2); // 0


// 
console.log("---------------");

// For Boolean
// For True and False value it prints 1 for true and 0 for false
// 1/0 => True/False
// ""/"Kiku" => False/True
// For any integer - {0} => True

// For String
let score4 = 12;
console.log(typeof score4);

// Number converted to String
let converted3 = String(score4);

// Check the type of `converted3`
console.log(typeof converted3); // string
// Check the value of `converted3` by adding 12 if its actually an string
// If it is string the value added with `converted3` will be concatenated
console.log(converted3 + 12); //1212

// 
console.log("---------------");

// Lecture 7
// Extra knowledge
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
// In below two cases: String conversion is given priority
console.log("1" + 2 + 2); // 122, in this first element is string so rest of the elements are converted into string
console.log(1 + 2 + "2"); // 32, in this first element is number so it adds all the numbers until it finds a string and then it is converted into string

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;


// Post and Pre Increment (Works same in decrement operator)
let counter = 100;

let output = 2 + ++counter;
console.log(output); // 103

// output = 0;
counter = 100;

output = 2 + counter++
console.log(output); // 102