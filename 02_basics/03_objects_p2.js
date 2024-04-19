// const empInfo = new Object(); // Singleton

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

const empAddress = {
    city: "Patna",
    state: "Bihar",
    country: "India",
}; // Non Singleton

const empPersonal = {
    "marital status": "Married",
    sex: "Male",
    pronouns: "He/Him",
    religion: "Hindu",
}; // Non Singleton

// Some functions of Object
// assign(target, ...source): Joins all the objects in the parameter
const empObj1 = Object.assign({}, empInfo, empAddress); /* Here `target` is an empty object and source is empInfo and empAddress.
        Putting {} in target assures that the return value is absoulutely an Object so it is a good practice to put target as empty object {}.
    */

console.log(empObj1);

// 
console.log("--------");


//Joining using spread operator
const empObj2 = {...empInfo, ...empAddress, ...empPersonal};

console.log(empObj2);

// 
console.log("--------");


// Array of objects
const users = [
    {
        name: "Kiku",
        age: 22,
    },
    {
        name: "Ajjay Bhaiya",
        age: 22,
    },
    {
        name: "Shinu",
        age: 21,
    },
];

console.log(users[1].name); // 'Ajjay Bhaiya'

// Returns an array of keys in an object. Here, empInfo keys.
console.log(Object.keys(empInfo)); // ['id', 'userName', 'name', 'email', 'full name', 'salutation']
console.log(Object.values(empInfo)); // [1, 'kiku__69', 'Kiku', 'kiku@js.com', 'Kiku 69', [Function: salutation]]

console.log(Object.entries(empInfo));
/*
[
  [ 'id', 1 ],
  [ 'userName', 'kiku__69' ],
  [ 'name', 'Kiku' ],
  [ 'email', 'kiku@js.com' ],
  [ 'full name', 'Kiku 69' ],
  [ 'salutation', [Function: salutation] ]
]
*/

// hasOwnProperty(toSearch): Returns a boolean result by checking if the specified key is present in the object or not.
console.log(empInfo.hasOwnProperty('email')); // true
console.log(empInfo.hasOwnProperty('city')); // false


// 
console.log("--------");


// Object De-structure
const {userName: user, email} = empInfo;

console.log(`Username: ${user}\nEmail: ${email}`);