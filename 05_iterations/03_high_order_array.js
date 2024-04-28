// forof function

// In Array
let arr1 = [1, 2, 3, 4, 5];
for (const num of arr1) {
    console.log(num);

};
console.log("----For Of----");

// In String
let str = "Kishlay";
for (const char of str) {
    console.log(char);
};

console.log("----Maps----");

// Maps
let map1 = new Map();
//        Key,  Value
map1.set('IN', 'India');
map1.set('USA', 'United States of America');
map1.set('FR', 'France');
map1.set('CN', 'China');

console.log(map1);

for(const [key, value] of map1) {
    console.log(`${key}: ${value}`);
}

// In Object
let myObj = {
    username: "kiku__69",
    fullName: "Kishlay"
};

// For of in Object
// console.log("--------");
// for (const key of myObj) {
//     console.log();
// }; // Not Iterable

console.log("----For In----");

// forin function: It brings the index in the varibale. In case of objects, keys acts as index and in array, its index acts as the index.
// For In in Object
for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
};

// For In in Array
let arr2 = ['Javascript', 'C++', 'Python', 'Go', 'Ruby and Rails'];
for (const key in arr2) {
    console.log(`${key}: ${arr2[key]}`);
}

console.log("--------");

// For In cannot be used with map
for (const key in map1) {
    console.log(key); // Prints nothing
}