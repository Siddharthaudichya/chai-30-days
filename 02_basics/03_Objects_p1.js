/*
    whenever we declare object as constructor so 'singleton' object is created.  
    when we declare object as literal, so multiple instances of object are created.
*/
  

let mySym = Symbol("shinu");
// object as literal 
const empInfo = {
    id: 56,
    name: "siddharth",
    email: "shinu@gmail.com",   
    [mySym]: "sym2", // To use symbol in object this is how the syntax looks like
    "full name": "shinu 56",
    salutation: () => {
    console.log(`hello:${empInfo.name}`);
    }
};

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

empInfo.loggedInAs = function(e) {
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