// Old method to initialize numbers
const num1 = 500;
console.log(num1);

// object method to intialize numbers
const balance = new Number(1103.49498058);

// output objects
console.log(balance);

// Displaying value of number declared as object
console.log(balance.valueOf());


// Some methods of numbers

// tostring(): convert number to string and output its length
console.log(balance.toString().length);

// tofixed(number of digits): get a specified number of digits after decimal
console.log(balance.toFixed(3));

// toprecision(number of digits): Returns number of significant digits
console.log(balance.toPrecision(4));  // Returns a string //100
// toprecision(5): 100.39
// num = 1103.495
// num.toprecision(3): 1.000e+4
// num = 1106.6765
// num.toprecision(3): //1.11e+3

// tolocalstring(region): converts the number into regional format 
const num2 = 100000000;
console.log(num2.toLocaleString(`en-IN`)); //If no parameter is passed then it converts into
// American format otherwise it converts int specified fromat given in the parameter

console.log("******************* MATHS ********************");

// maths

// some maths function

// abs(number): Returns Absolute value
console.log(Math.abs(-4)); //4

// round(number): Rounds of the nearest integer
console.log((Math.round(4.6))); //5

// ceil(number): returns the ceiling integer (max value of a decimal number)
console.log(Math.ceil(4.9));  //5

// floor(number): Returns the floor integer (min value of a decimal number)
console.log(Math.floor(4.9)); //4

// min(num1, num2, num3, ...): Returns minimum number between the series of given number
console.log(Math.min(1,2,3,4,5));

// max(num1, num2, num3, ...): Returns maximum number between the series of given number
console.log(Math.max(1, 2, 3, 4, 5)); 

// random(): Returns number b/w 0.0 and 1
console.log(Math.random()); 

// returns random number between 1 to 10
console.log(Math.floor(Math.random()*10 ) + 1 );

// Returns random number between given minimum(min) and maximum(max) number
let min = 45;
let max = 69;

// Gets a random number between 1 to 10 => Adds min number to get the starting range => Adds 1 to get the result in the required range
let pre_range = Math.floor(Math.random() * (max - min)); // Get random number between 0 to 10. Eg: 6
let post_range = pre_range + min; // Sets the min required number. Eg: 6 + 45 = 51 
let output = post_range + 1; // Adds 1 to get the result in required range. Eg: 51 + 1 = 52

console.log(output); // Eg: 52