const name1 = "siddharth";
let age = 21;
age = 35;

console.log(name1 + age + " value");  // however this method of displaying results is device.

// use backticks instead
console.log(`naam:${name1}    age:${age}`);

// Defining string as object
const name2 = new String("Mr-shinu-audi");  //This method provide more functionalities

//diplaying value of string declared as object
console.log(name2.valueOf());

// Some methods of strings
// To uppercase():convert string into capital letters
console.log(name2.toUpperCase());

//length: returns length of the string
console.log(name2.length);

//charAt(index): Returns the character at the giver index
console.log(name2.charAt(4));

//indexOf(char)
console.log(name2.indexOf('n'));

//substing(start index, end index)
console.log(name2.substring(0,2));

//slice(start index, end index)
console.log(name2.slice(-13,5));  //main difference in substring and slice is that we can use negative indexes


const name3 ="    siddharth audichya     ";

//trim(): Removes unwanted spaces from the string
console.log(name3.trim());  //trimend(), trimstart()

const url = "https://www.google.com/siddharth%20audichya";

//replace(search string, replace string): Replaces a certain char from a string by any other character 
console.log(url.replace("%20", "-"));

//includes(search string): Searches for the availability of a string in the given integer
console.log(url.includes("google")); 

//split(separator, limit): creates an array of strings separated by delimeter(-)(separator)
console.log(name2.split("-"));