// Lecture 10
// Types of Memory: Stack and Heap

// Stack
/*
    Primitive data types uses Stack memory
    We get the copy of the variable
*/

// Heap
/*
    Non primitive data types uses Heap memory
    We get the reference of the variable
*/

// Stack
let value1 = 20;

let value2 = 22;

value2 = value1; // Copy of variable is being sent

value2 = 25;

console.log(value2); // 25
console.log(value1); // 20

// 
console.log("---------");

// Heap
let userOne = {
    email: "ajay@google.com",
    sex: "Nhi kiya"
}

let userTwo = userOne; // Address is being exchanged

userTwo.email = "shinu@oriental.com"

console.log(userOne.email); // shinu@oriental.com
console.log(userTwo.email); // shinu@oriental.com