// Numbers

// Old method to initialize numbers
const num1 = 400;
console.log(num1);

// Object method to initialize numbers
const balance = new Number(110.38523452);

// Outputs object
console.log(balance);

// Displaying value of number declared as object
console.log(balance.valueOf());


// Some methods of Numbers

// toString(): Convert number to String and output its length
console.log(balance.toString().length);

// toFixed(number of digits): Get a specified number of digits after decimal and also rounds off
console.log(balance.toFixed(3)); // Returns a string // 110.385

// toPrecision(number of digits): Returns number of significant digits and also rounds off
console.log(balance.toPrecision(4)); // Returns a string // 110.4
// toPrecision(5): 110.39
// num = 1103.6745
// num.toPrecision(3): // 1.10e+3
// num = 1106.6745
// num.toPrecision(3): // 1.11e+3

// toLocaleString(region): Converts the number into regional format
const num2 = 10000000;
console.log(num2.toLocaleString('en-IN')); // If no parameter is passed then it converts into American format by default otherwise 
// it converts into specified format given in the parameter

// 
console.log("------------");

// Maths

// Some Maths function

// abs(number): Returns Absolute value
console.log(Math.abs(-4)); // 4

// round(number): Rounds off to the nearest integer
console.log((Math.round(4.6))); // 5

// ceil(number): Returns the ceiling integer (Max value of a decimal number)
console.log(Math.ceil(4.6)); // 5

// floor(number): Returns the floor integer (Min value of a decimal number)
console.log(Math.floor(4.9)); // 4

// min(num1, num2, num3, ....): Returns minimum number between the series of given number
console.log(Math.min(1, 2, 3, 4, 5));

// max(num1, num2, num3, ....): Returns maximum number between the series of given number
console.log(Math.max(1, 2, 3, 4, 5));

// random(): Returns a number b/w 0.0 and 1
console.log(Math.random());

// Returns random number between 1 to 10
console.log(Math.floor(Math.random()*10 ) + 1);

// Returns random number between given minimun(min) and maximum(max) number
let min = 45;
let max = 69;

// Gets a random number between 1 to 10 => Adds min number to get the starting range => Adds 1 to get the result in the required range
let pre_range = Math.floor(Math.random() * (max - min)); // Get random number between 0 to 10. Eg: 6
let post_range = pre_range + min; // Sets the min required number. Eg: 6 + 45 = 51 
let output = post_range + 1; // Adds 1 to get the result in required range. Eg: 51 + 1 = 52

console.log(output); // Eg: 52