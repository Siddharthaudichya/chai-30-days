/* Something to remember about `Singleton`
    When we declare objects as constructor, `singleton` object is created
    When we declare objects as literals, multiple instances of object are created
*/


let mySym = Symbol("sym1");

// Objects as literals
const empInfo = {
    id: 1,
    userName: "kiku__69",
    name: "Kiku",
    email: "kiku@js.com",
    [mySym]: "sym2", // To use symbol in object this is how the syntax looks like
    "full name": "Kiku 69",
    salutation: () => {
        console.log(`Hello ${empInfo.name}`); // this.name doesn't work here because function is defined as `() => {}`
    },
}; // Non Singleton

// Ways to access data from object
console.log(empInfo.name); // Using dot operator // Kiku

console.log(empInfo["email"]); // Using square brackets (Since keys are string so we have to pass keys as string to access the data). By using this we can access those values whose keys are written in double quotes. // kiku@js.com
console.log(empInfo["full name"]); // We can't use dot operator like: empInfo."full name" to access the data. Syntax error. // Kiku 69
console.log(empInfo[mySym]); // We can't use dot operator to access symbol, instead we use square bracket. // sym2

// 
console.log("--------");


// Making function inside object
empInfo.init = () => {
    console.log("Kiku Production");
};

empInfo.loggedInAs = function() {
    console.log(`You are logged in as ${this.userName}`);
};

// Calling functions inside empInfo Object
console.log(empInfo.init); // [Function (anonymous)]
empInfo.init(); // Kiku Production
empInfo.salutation(); // Hello Kiku
empInfo.loggedInAs(); // You are logged in as kiku__69

// 
console.log("--------");


// Freezing updatation of object: Any changes made after freezing wont update the original object literal
Object.freeze(empInfo);

empInfo.email = "kiku@c++.com";
console.log(empInfo["email"]); // kiku@js.com // No change