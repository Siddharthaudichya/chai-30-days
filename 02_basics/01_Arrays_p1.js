// Arrays can contain any type of data
const arr = [1,2,3,"shinu",false];

/* in javascript, array-copy-operation creates 'Shallow-copies' rather than 'Deep copies'
 Shallow copy: Copy operation stores the reference(address) of the original array.
 Deep copy: Copy operation stores a full copy with completely different address of both original and copied array.
*/ 

// Array as object
const arr1 = new Array(1,2,3,"dalla",false);

// Accessing data from the memory
console.log(arr1[0]);

// Some array functions ....

// Push(): Append new data elements to the end of the array 
arr1.push(4,5,6,7);
console.log(`push():${arr1}`);   // push():1,2,3,3,dalla,false,4,5,6,7

// Pop(): Removes as element from the end of the array
arr1.pop();
console.log(`Pop: ${arr1}`);     // Pop: 1,2,3,3,dalla,false,4,5,6

// Unshift(): Inserts an element at the beginning of the array
arr1.unshift(0);  /* It is not recommended to use this function as it is expensive and resource intensive.
                     It adds the data at the first index while shifting all the data to the next index.
                     However using it in small arrays is okay but in arrays on production level should be avoided
                  */
console.log(`unshift(): ${arr1}`);  // unshift(): 0,1,2,3,3,dalla,false,4,5,6

// Shift(): Removes an element from the beginning of the array
arr1.shift();    /* It is not recommended to use this function as it is expensive and resource intensive.
                    It Delete the data at the first index while shifting all the data to the next index.
                    However using it in small arrays is okay but in arrays on production level should be avoided
                */
console.log(`shift(): ${arr1}`);  // shift(): 1,2,3,3,dalla,false,4,5,6

// includes(data): checks if value passed in parameter is in the array or not. Returns a bollean value.
console.log(arr1.includes(6));

// indexOf(data): Returns the index of the specified data in the parameter. Returns -1 if the data is not present
console.log(arr1.indexOf("shinu"));  // -1

// Join(Separators): Returns concatanated values of the array using the separator. Returns string.
const arr2 = arr1.join("|");
console.log(arr2);        // 1|2|3|3|dalla|false|4|5|6

// Split(separator): Returns an array of splitted value using separator 
console.log(arr2.split("|"));

// Important differnce between slice(),splice()

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