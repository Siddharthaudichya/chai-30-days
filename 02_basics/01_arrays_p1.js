// Arrays can containe any type of data
const arr1 = [1, 2, 3, "Kiku", true];

/* In Javascript, array-copy-operation creates `Shallow copies` rather than `Deep copies`
    Shallow Copy: Copy operation stores the reference of the original array
    Deep Copy: Copy operation stores a full copy with completely different address of both original and copied array
*/

// Array as object
const arr2 = new Array(1, 2, 3, "Kiku", true);

// Accesing data from array
console.log(arr2[0]); // 1

// Some array function

// push(items): Appends new data elements to the end of the array
arr2.push(6, "Shinu", 8);
console.log(`push(6, "Shinu", 8): ${arr2}`); // [1, 2, 3, "Kiku", true, 6, "Shinu", 8]

// pop(): Removes an element from the end of the array
arr2.pop();
console.log(`pop(): ${arr2}`); // [1, 2, 3, "Kiku", true, 6, "Shinu"]

// unshift(items): Inserts an element at the beginning of the array
arr2.unshift(0); /* It is not recommended to use this function as it is expensive and resource intensive.
                    It adds the data at the first index while shifting all the data to the next index.
                    However using it in small arrays is okay but in arrays on production level should be avoided.
                */
console.log(`unshift(0): ${arr2}`); // [0, 1, 2, 3, Kiku, true, 6, Shinu]

// shift(): Removes an element from the beginning of the array
arr2.shift();    /* It is not recommended to use this function as it is expensive and resource intensive.
                    It removes the data from the first index while shifting all the data to the previous index.
                    However using it in small arrays is okay but in arrays on production level should be avoided.
                */
console.log(arr2); // [1, 2, 3, 'Kiku', true, 6, 'Shinu']

// includes(data): Checks if value passed in parameter is in the array or not. Returns a bollean value.
console.log(arr2.includes("Kiku")); // true

// indexOf(data): Returns the index of the specified data in the parameter. Returns -1 if data not present
console.log(arr2.indexOf("Kiku")); // 3

// join(separator): Returns concatenated values of the array using the separator. Returns string.
const arr3 = arr2.join("|");
console.log(arr3); // 1|2|3|Kiku|true|6|Shinu

// split(separator): Returns an array of splitted value using separator
console.log(arr3.split("|")); // ['1', '2', '3', 'Kiku', 'true', '6', 'Shinu'] // All the values in the array are now string because value of `arr3` was a string


// 
console.log("------------------------------------------");

// Important difference between slice() and splice()
                    // 0  1  2  3  4  5
const arr4 = new Array(0, 1, 2, 3, 4, 5);
console.log("Original Array: ", arr4); // [0, 1, 2, 3, 4, 5]

// slice(start index, end index): Extracts values from the start index till one less than the end index
console.log("After slice(): ", arr4.slice(1, 3)); // [1, 2]

console.log("Original Array after slice(): ", arr4); // [0, 1, 2, 3, 4, 5]

// splice(start index, end index): Extracts values from the start index till the end index and also deletes those values from the original array
console.log("After splice(): ", arr4.splice(1, 3)); // [1, 2, 3]

console.log("Original Array after splice(): ", arr4); // [0, 4, 5]

/* Difference between slice() and splice()
    In slice values are extracted from the start till one less than the end index and the original array is retained
    In splice values are extracted from the start till the end index and those values are removed from the original array
*/