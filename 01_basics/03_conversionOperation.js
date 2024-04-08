let score = "78";

console.log(score + 78);
console.log(typeof(score));

score = Number(score);

console.log(score + 78);
console.log(typeof(score));

// 

console.log("-----------------");

// example 33abc abc not a number then print NAN
// NAN(not a number)
let core ="33Vedant";

console.log(typeof core); // string
console.log(typeof(core)); // string
let valueInNumber = Number(core) // type conversion from string to Number
console.log(valueInNumber); // NAN
console.log(typeof(valueInNumber)); // number

// 

console.log("-----------------");

// Null and undefine works same if value is 'undefine'
let jump = null; 
console.log(typeof jump); // object
let valueInJump = Number(jump); 
console.log(typeof(valueInJump)); // number
console.log(valueInJump); // 0

console.log("-----------------");
// true => false
// for Boolean
// For True and False value it prints 1 for true and 0 for false
// 1/0 => True/False
//"/"Kiku => False/True
// For any interge -(0)= false
let bool = 1;
console.log(bool);
let valueInbool = Boolean(bool);
console.log(valueInbool); // true
console.log(typeof(valueInbool));


 