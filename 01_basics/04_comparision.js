// Lecture 8
// Here string is converted into number
console.log("2" > 1); // True
console.log("02" > 1); // True

// Avoid codes written below this line
// 
console.log("---------");

// Null comparision working
console.log(null > 0); // False
console.log(null == 0); // False
console.log(null >= 0); // True
// The reason is that an equaltiy check == and comparisions > < >= and <= works differntly
// Comparisions convert null to a number, treating it as 0.
// Thats why null >= 0 is true {i.e, because of comparision operator null is converted to 0 and then equaliti condition is checked 0 == 0}
// and null > 0 is false {i.e null is being converted into 0 but 0 > 0 is not true}

// 
console.log("---------");

// Undefined comparision working
console.log(undefined > 0); // False
console.log(undefined == 0); // False
console.log(undefined >= 0); // False

// 
console.log("---------");

// Strict checking with ===
// It checks values as well as data types
console.log("2" == 2); // True
console.log("2" === 2); // False