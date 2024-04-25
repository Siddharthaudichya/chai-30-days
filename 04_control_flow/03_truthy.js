let someData = "kkk@gamil.com";

if(someData) {
    console.log("Email Exists");
} else {
    console.log("Email Doesn't Exists");
}

// if `someData = ""` then during condition check it will return false
// if `someData = []` then during condition check it will return true

let myArr= [];

if(myArr) {
    console.log("Array Yes");
} else {
    console.log("Array No");
} // Don't check for if array is empty or not like this, instead do the following

if(myArr.length === 0) {
    console.log("Array is Empty");
} else {
    console.log(myArr);
}

// Checking if object is empty or not
let myObj = {};

if(Object.keys(myObj).length === 0) {
    console.log("Object is empty");
} else {
    console.log(myObj);
}

/* Falsy Values:
    false,
    0,
    -0,
    BigInt 0n,
    "",
    null,
    undefined,
    NaN
*/

/* Truthy Values
    true,
    "0",
    'false',
    " ",
    [],
    {},
    function() {},

*/

// 
console.log("--------");

// Nullish Coalescing Operator `??`: To handle null and undefined values
// It is mostly used at production level when data is coming from some database
let val;

// Normal
val = 10 ?? 15;
console.log(val); // 10

// Null
val = null ?? 20;
console.log(val); // 20

// Undefined
val = undefined ?? 25 ?? 30;
console.log(val); // 25

// Multiple values
val = null ?? undefined ?? 35;
console.log(val); // 35