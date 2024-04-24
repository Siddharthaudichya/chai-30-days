console.log("----------------This-------------------");
// `This` function
// This function refers to the `current context` during execution
// Usage in object
let empInfo = {
    username: "kiku__69",
    fullName: "Kishlay",
    age: 69,
    greeting: function() {
        console.log(this); // This will display empInfo object
        console.log(`Hello ${this.fullName}`); // Hello Kishlay // Here current context for `this` is empInfo
    }
};
empInfo.greeting(); // { username: 'kiku__69', fullName: 'Kishlay', age: 69, greeting: [Function: greeting] } // Hello Kishlay
empInfo.fullName = "Shinu"; // Here we changed the current context
// Calling it again to check what is in the current context
empInfo.greeting(); // { username: 'kiku__69', fullName: 'Shinu', age: 69, greeting: [Function: greeting] } // Hello Shinu

// In node environment, current context of `this` called in global scope is empty object // It display `window object` in browser environment
console.log(this); // {}

// 
console.log("--------------------");

// Usage in function
function userInfo() {
    // let fullName = "Kishlay";
    // console.log(this.fullName); // undefined // This is not how we use `this` function

    console.log(this); // It will display all the `global functions` in NodeJS environment. // It display `window object` in browser environment
};
userInfo();

// 
console.log("----------------Arrow-------------------");

// `Arrow` function

// Definition of an arrow function () => { ...operations }
let simpleFunc = () => {
    console.log(this); // {}
};
simpleFunc();

// If we open a scope and want to `return` something to the function then we have to write the `return` keyword
let complexCalc = (num1, num2) => { return num1 + num2; }; // Explicit return
console.log(complexCalc(4, 5)); // 9

// If we don't open a scope and it is a one line operation want to `return` something to the function then we don't have to write the `return` keyword
let oneLineCalc1 = (num1, num2) => ( num1 + num2 ); // Implicit return
console.log(oneLineCalc1(1, 2)); // 3

// If we want to return an object, this is how we do
let oneLineCalc2 = () => ( {username: "kiku__69",
                            fullName: "Kishlay"
} );
console.log(oneLineCalc2());

// 
console.log("--------------------");


// Example of arrow function in action
let myArr = [1, 4, 9, 16, 25];
console.log("Array before forEach(): ", myArr);
/* forEach(element, index, array): Iterates through the array and performs operations on each element. Arguments consists of `element` currently
    being passed, index of the current element and full `array` that is in consideration
*/ 
myArr.forEach((value, index) => {
    myArr[index] = Math.sqrt(value); // Replacing each value in `myArr`
});

console.log("Array after forEach(): ", myArr);