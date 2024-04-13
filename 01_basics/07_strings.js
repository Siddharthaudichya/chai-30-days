const name1 = "Kiku";
const num = 20;

console.log(name1 + num + " value"); // However this method of displaying reseults is obsolete

// String Interpolation: Use backticks instead with proper placeholders
console.log(`${name1}${num} value`);


// Defining string as object
const name2 = new String("mr-kiku-black"); // This method provides more functionalities

// Displaying value of string declared as object
console.log(name2.valueOf());


// Some methods of String
// toUpperCase(): Converts string into capital letters
console.log(name2.toUpperCase());

// length: Returns length of the string
console.log(name2.length);

// charAt(index to be searched): Returns the character at the given index
console.log(name2.charAt(2));

// indexOf(char to be searched): Returns the index of the given char
console.log(name2.indexOf('k'));

// substring(start index, end index): Extracts characters from start index and end index
console.log(name2.substring(0, 2));

// slice(start index, end index): Extracts characters from start index and end index
console.log(name2.slice(-13, 5)); // Main differnce in substring and slice is that we can use negative indexes


const name3 = "    Kishlay Kumar   ";

// trim(): Removes unwanted spaces, tabs and new line from the string
console.log(name3.trim()); // trimEnd(), trimStart()


const url = "https://www.google.com/kishlay%20kumar";

// replace(search string, replace string): Replaces a certain char from a string by any other character
console.log(url.replace("%20", "-"));

// includes(search string): Searches for the availability of a string in the given string
console.log(url.includes("google"));

// split(separator, limit): Creates an array of strings separated by delimiter
console.log(name2.split("-", 2));